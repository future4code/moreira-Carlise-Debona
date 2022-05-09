import {HashManager} from '../services/HashManager';
import { IdGenerator } from '../services/idGenerator';
import { LoginInputDTO, SignupInputDTO } from '../types/types';
import { UserDatabase } from '../data/userDatabase';
import { Authenticator} from '../services/Authenticator';
import User from "../model/User"

export class UserBusiness {
  constructor(private userDatabase: UserDatabase) {}
  
  signup = async (input: SignupInputDTO) => {
    const { name, email, password } = input;

    if(!name || !email || !password){
    throw new Error("Preencha todos os dados 'name', 'email', 'password'");
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

    const hashManager = new HashManager();
    const hashPassword = await hashManager.hash(password)
    console.log(hashPassword)

    const userDatabase = new UserDatabase();
    const newUser = new User(id, name, email, hashPassword)
    await userDatabase.createUser(newUser)

    const token = new Authenticator().generate({id});

    return token;

  }

  login = async (input: LoginInputDTO) => {
    const { email, password } = input;

    if(!email || !password ){
      throw new Error("Preencha todos os dados 'email', 'password'");
    }

    const userDatabase = new UserDatabase();
    const user = await userDatabase.findUserByEmail(email);
      if(!user){
        throw new Error("Email não está cadastrado")
      }

    const hashManager = new HashManager();
    const pass = hashManager.compare(password, user.password)

    if(!pass){
      throw new Error("Email ou senha incorreto")
    }

    
    const token = new Authenticator().generate({id: user.id})
    return token
  }
}