
import { Request, Response } from "express";
import {HashManager} from '../services/HashManager';
import { UserDatabase } from '../data/UserDatabase';
import { Authenticator} from '../services/Authenticator';

export async function login(req: Request, res: Response): Promise<void>{
  try{
    const {email, password} = req.body;

    if(!email || !password ){
      res
      .status(422)
      .send("Fill in all data 'name', 'email', 'password', 'role'");
    }

    const userDatabase = new UserDatabase();
    const user = await userDatabase.findUserByEmail(email);
      if(!user){
        res.status(409).send("Email não está cadastrado")
      }

    const hashManager = new HashManager();
    const pass = hashManager.compare(password, user.getPassword())
    
    if(!pass){
      res.status(401).send("Email ou senha incorreto")
    }

    const authenticator =new Authenticator() 
    const token = authenticator.generate({id: user.getId(), role: user.getRole() })

  res.status(200).send({message:'User logado com sucesso',token})
  }catch(err: any){ 
    res.status(400).send({message: err.message  || err.sqlMessage });
  }
}