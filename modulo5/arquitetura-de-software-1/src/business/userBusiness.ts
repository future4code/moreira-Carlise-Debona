import { Request, Response } from "express";
import {HashManager} from '../services/HashManager';
import { IdGenerator } from '../services/idGenerator';
import { User, usuario } from '../types/types';
import { UserDatabase } from '../data/UserDatabase';
import { Authenticator} from '../services/Authenticator';


export class UserBusiness {
  public createUser = async (user: usuario): Promise<string> => {
    console.log(user)

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
      const newUser = new User(id, user.name_usuario, user.email, hashPassword, user.role)
      await userDatabase.createUser(newUser)

      const token = new Authenticator().generate({ id, role});

    return token;
    }catch(error: any){ 
    throw new Error( error.message || "Error creating user. Please check your system administrator.");
    }
  }

  getAllUsers = async (token: string) => {
    try {
      if (!token) {
        throw new Error("Please enter a token.");
      }
      
      const authenticator = new Authenticator();
      const tokenUser = authenticator.getTokenData(token);

        if (!tokenUser) {
          throw new Error("Insira um  token válido.");
        }
      const userDatabase = new UserDatabase();
      const user = await userDatabase.getAllUsers();

        if (!user) {
          throw new Error("Nenhum usuário encontrado.");
        }

        return user;
    } catch (error: any) {
      return { message: error.sqlMessage || error.message };
    }
  };


  public getUserByEmail = async (user: any): Promise<string> => {

    const role = user.role;
    const id = user.id

    if( !user.email || !user.password){
    throw new Error("Preencha todos os dados");
    }

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

    const token = new Authenticator().generate({ id, role});

        return token;
    }

    async deleteUser(id:string, token:string) {
			
      const verifiedToken = new Authenticator().getTokenData(token);
      console.log("oi to aquiiiiiiiiii",verifiedToken)
      
      if(verifiedToken.role !== "ADMIN"){
        throw new Error("Apenas administradores podem deletar usuários!")
      }
      
      const userDatabase = new UserDatabase(); 

      return await userDatabase.deleteUsers(id);
  }

}
