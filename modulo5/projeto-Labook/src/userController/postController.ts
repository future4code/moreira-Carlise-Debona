import { Request, Response } from "express";
import {  PostInputDTO } from "../types/types";
import { PostDatabase } from "../data/postDatabase";
import { PostBusiness } from "../userBusiness/postBusiness";
import { Authenticator } from "../services/Authenticator";


export class PostController {
  constructor(private postDatabase: PostBusiness){}

    post = async (req: Request, res: Response) => {
      const authenticator = new Authenticator
      const token = authenticator.getTokenData(req.headers.authorization!)

      if(!token){
        throw new Error("Precisa de um token")
    }

        const { foto, descricao, tipo } = req.body;

        const input: PostInputDTO = {
          foto, 
          descricao, 
          tipo,
          id_user: token.id
        }
        try {
          
        await this.postDatabase.post(input)

        res.status(201).send({ message:'Post criado com sucesso'});

      } catch (error: any) {
        res.status(400).send({ error: error.message });
      }
  }
}