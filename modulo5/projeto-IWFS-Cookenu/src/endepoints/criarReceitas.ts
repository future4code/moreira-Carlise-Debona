
import { Request, Response } from "express";
import { IdGenerator } from '../services/IdGenerator';
import { Recipe } from "../entities/Recipe";
import { UserDatabase } from '../data/UserDatabase';
import { Authenticator } from '../services/Authenticator'

export async function createRecipe(req: Request, res: Response): Promise<void>{
  try{

    const token = req.headers.authorization as string;
    const date = new Date();

    const {titulo, descricao, modo_de_preparo} = req.body;

    if(!titulo|| !descricao || !modo_de_preparo){
      res
      .status(422)
      .send("Fill in all data!");
    }

    const userDatabase = new UserDatabase();

    const idGenerator = new IdGenerator();
    const id = idGenerator.generate()

    const newReceita = new Recipe(id, titulo, descricao, modo_de_preparo, date);
    await userDatabase.createRecipe(newReceita)

    const authenticator = new Authenticator()
    const authenticationData = authenticator.getTokenData(token);

  res.status(200).send({message:'Create', authenticationData})
  }catch(err: any){ 
    res.status(400).send({message: err.message  || err.sqlMessage });
  }
}