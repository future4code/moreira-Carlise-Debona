import {HashManager} from '../services/HashManager';
import { IdGenerator } from '../services/idGenerator';
import { SignupInputDTO } from '../types/types';
import { UserDatabase } from '../data/userDatabase';
import { Authenticator} from '../services/Authenticator';
import User from "../model/User"

export class UserBusiness {
  constructor(private userDatabase: UserDatabase) {}
  
  signup = async (input: SignupInputDTO) => {
    const { name, email, password } = input;

    if(!name || !email || !password){
    throw new Error("Fill in all data 'name', 'email', 'password'");
    }

    if (!email || email.indexOf("@") === -1) {
      throw new Error("Email inválido!");
    }
    if (!password || password.length < 6) {
      throw new Error("Senha inválida!");
    }

    const checkEmail = await this.userDatabase.findUserByEmail(email);
    
    if (checkEmail) {
      throw new Error("Email já existe.");
    }

    const idGenerator = new IdGenerator();
    const id = idGenerator.generate()
    console.log(id)

    const hashManager = new HashManager();
    const hashPassword = await hashManager.hash(password)
    console.log(hashPassword)

    const userDatabase = new UserDatabase();
    const newUser = new User(id, name, email, hashPassword)
    await userDatabase.createUser(newUser)
    console.log(newUser)

    const token = new Authenticator().generate({id});
    console.log("eu sou", token)

    return token;

  }

}