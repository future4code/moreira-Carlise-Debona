import { Request, Response } from "express";
import { UserBusiness } from "../userBusiness/userBusiness";
import { LoginInputDTO, SignupInputDTO } from "../types/types";



export class UserController {
  constructor(private userBusiness: UserBusiness){}

    signup = async (req: Request, res: Response) => {
      
        const { name, email, password } = req.body;

        const input: SignupInputDTO = {
          name, 
          email, 
          password
        }
        try {
          
        const token = await this.userBusiness.signup(input)
        console.log(token)

        res.status(200).send({ message:'Usuário criado com sucesso',token });

      } catch (error: any) {
        res.status(400).send({ error: error.message });
      }
  }

  login = async (req: Request, res: Response) => {

    const {email, password } = req.body;

        const input: LoginInputDTO = {
          email, 
          password
        }
  try{

        const token = await this.userBusiness.login(input)
        console.log(token)

    res.status(200).send({message:'User logado com sucesso',token})
    } catch(err: any){ 
      res.status(400).send({message: err.message  || err.sqlMessage });
    }
  }
}