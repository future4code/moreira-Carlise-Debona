import {HashManager} from '../services/HashManager';
import { IdGenerator } from '../services/idGenerator';
import { User } from '../types/types';
import { UserDatabase } from '../data/UserDatabase';
import { Authenticator} from '../services/Authenticator';


export class UserBusiness {
  public createUser = async (user: any): Promise<string> => {
  try{
    const role = user.role;

    if(!user.name_usuario || !user.email || !user.password || !user.role){
    throw new Error("Fill in all data 'name', 'email', 'password', 'role'");
    }

    if (!user.email || user.email.indexOf("@") === -1) {
      throw new Error("Invalid email!");
    }
    if (!user.password || user.password.length < 6) {
      throw new Error("Invalid password!");
    }

    const idGenerator = new IdGenerator();
    const id = idGenerator.generate()
    
    const hashManager = new HashManager();
    const hashPassword = await hashManager.hash(user.password)

    const userDatabase = new UserDatabase();
    const newUser = new User(id, user.name_usuario, user.email, user.hashPassword, user.role)
    await userDatabase.createUser(newUser)

    const token = new Authenticator().generate({ id, role });

    return token;
    }catch(error: any){ 
    throw new Error( error.message || "Error creating user. Please check your system administrator.");
    }
  }

  public get = async (token: string) => {
    const authenticator = new Authenticator();
    authenticator.getTokenData(token);
    const userDatabase = new UserDatabase();
    return await userDatabase.getAllUsers();
  }


  public getUserByEmail = async (user: any): Promise<string> => {
    const userDatabase = new UserDatabase();
    const users = await userDatabase.findUserByEmail(user.email);
      if(!users){
        throw new Error("Email não está cadastrado")
      }

    const hashManager = new HashManager();
    const pass = hashManager.compare(user.password, users.getPassword())
    
    if(!pass){
      throw new Error("Email ou senha incorreto")
    }

    const authenticator =new Authenticator() 
    const token = authenticator.generate({id: user.getId(), role: user.getRole() })

        return token;
    }

    async deleteUser(input: {id:string, token:string}) {
			
      const verifiedToken = new Authenticator().getTokenData(input.token);
      const userDatabase = new UserDatabase();

      if(verifiedToken.role !== "ADMIN"){
        throw new Error("Apenas administradores podem deletar usuários!")
      }

      return await userDatabase.deleteUser(input.id);
  }

}
