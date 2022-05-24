import { Request, Response } from "express";
import { UserDatabase} from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";

export async function getUserProfile(req: Request, res: Response): Promise<void>{
  try{
    const token = req.headers.authorization as string;

    if (!token) {
      res.statusCode = 422;
      throw new Error("Please enter a token.");
    }

    const authenticator =new Authenticator()
    const authenticationData =  authenticator.getTokenData(token);

    if (!authenticationData) {
      res.statusCode = 422;
      throw new Error("Please enter a valid token!")
    }

    const userDatabase = new UserDatabase();
    const userProfile = await userDatabase.getUsersProfile(authenticationData.id);

    if (!userProfile) {
      res.statusCode = 422;
      throw new Error("No user found!");
    }
    
    res.status(200).send({menssage: "Your Data", userProfile})
  }
  catch(error: any){

  }
}