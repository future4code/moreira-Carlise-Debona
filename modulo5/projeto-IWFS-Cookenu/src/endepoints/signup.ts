
import { Request, Response } from "express";
import {HashManager} from '../services/hashManager';
import { IdGenerator } from '../services/IdGenerator';
import { User } from '../entities/User';
import { UserDatabase } from '../data/UserDatabase';
import { Authenticator} from '../services/Authenticator';

export async function signup(req: Request, res: Response): Promise<void>{
  try{
    const {name, email, password, role} = req.body;

    if(!name || !email || !password || !role){
      res
      .status(422)
      .send("Fill in all data 'name', 'email', 'password', 'role'");
    }

    if (!req.body.email || req.body.email.indexOf("@") === -1 || !req.body.role) {
      throw new Error("Invalid email!");
    }
    if (!req.body.password || req.body.password.length < 6) {
      throw new Error("Invalid password!");
    }

    const userDatabase = new UserDatabase();
    const user = await userDatabase.findUserByEmail(email);
      if(user){
        res.status(409).send("Email already exists")
      }

    const idGenerator = new IdGenerator();
    const id = idGenerator.generate()
    

    const hashManager = new HashManager();
    const hashPassword = await hashManager.hash(password)

    const newUser = new User(id, name, email, hashPassword, role)
    await userDatabase.createUser(newUser)

    const authenticator =new Authenticator() 
    const token = authenticator.generate({id, role})

    console.log(token);

  res.status(200).send({message:'User create',token})
  }catch(err: any){ 
    res.status(400).send({message: err.message  || err.sqlMessage });
  }
}