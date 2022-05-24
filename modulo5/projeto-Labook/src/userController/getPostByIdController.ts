import { Request, Response } from "express";
import { GetPostByIdBusiness } from '../userBusiness/getPostByIdBusiness';
import { Authenticator } from "../services/Authenticator";

export class GetPostByIdController {

  getPostId = async (req: Request, res: Response) => {
      try{
        const idPost = req.params

        const getPostByIdBusiness = new GetPostByIdBusiness();

        const posts = await getPostByIdBusiness.getPostId(idPost.id)

      res.status(200).send({posts});
    }catch (error: any) {
      res.status(400).send({ error: error.message });
    }
  }
}
