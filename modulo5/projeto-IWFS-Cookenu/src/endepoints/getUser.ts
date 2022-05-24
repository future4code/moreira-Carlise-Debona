import { Request, Response } from "express";
import { UserDatabase} from "../data/UserDatabase";

export async function getUser(req: Request, res: Response): Promise<void>{
  try{

    const { id }= req.params 
    
    const userDatabase = new UserDatabase();
    const user = await userDatabase.getUsers(id);
    
    res.status(200).send(user)
  }
  catch(error: any){

  }
}