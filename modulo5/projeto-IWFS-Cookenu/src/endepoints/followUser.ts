import { Request, Response } from "express";
import { UserDatabase } from '../data/UserDatabase';
import { Authenticator} from '../services/Authenticator';


export const followUser = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization as string;


    const userFollowed = req.body.followed_id as string;


    if (!userFollowed|| !token ) {
      res
      .status(422)
      .send("Fill in all data!")
    }

    const authenticator = new Authenticator()
    const authenticationData = authenticator.getTokenData(token);


    const userDatabase = new UserDatabase();

    const newFollower = await userDatabase.checkId(authenticationData.id, userFollowed);
    
    if (newFollower.length > 0) {
      res.statusCode = 200;
      throw new Error("You are already following this user.");
    }

    await userDatabase.follower(authenticationData.id, userFollowed);

    res.status(200).send({message:'Followed successfuly'})
  }
  catch (err: any) {
    res.status(400).send({message: err.message  || err.sqlMessage });
  }
}