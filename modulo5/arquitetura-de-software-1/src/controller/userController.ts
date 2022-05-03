import { Request, Response } from "express";
import { UserBusiness } from "../business/userBusiness";
import { User } from "../types/types";



export class UserController {
  public signup = async (req: Request, res: Response): Promise<void> => {
      try {
        const { id, name_usuario, email, password,role} = req.body;

        const token = await new UserBusiness().createUser(
          new User( id, name_usuario, email, password, role)
        );

        res.status(200).send({ message:'User create',token });

      } catch (error: any) {
        res.status(400).send({ error: error.message });
      }

  }

  public login = async (req: Request, res: Response): Promise<void> => {

    try {
      const loginData = {
        email: req.body.email,
        password: req.body.password
    };

      const token = await new UserBusiness().getUserByEmail(loginData)

      res.status(200).send({ message:'User logado com sucesso',token });

    } catch (error: any) {
      res.status(400).send({ error: error.message });
    }

  }

public getAll = async (req: Request, res: Response): Promise<void> => {

    try {

      const token = req.headers.authorization!;
      const userBusiness = new UserBusiness();
      await userBusiness.get(token);

      res.status(200).send(userBusiness);

    } catch (error: any) {
      res.send({ message: error.message }).status(error.status);
    }

  }

  public deleteUser = async (req: Request, res: Response): Promise<void> => {
      
    try {
        const input = {
            id: req.params.id,
            token: req.headers.authorization!
        }

        const deletar = await new UserBusiness().deleteUser(input)

        res.status(200).send({ message: "Usuário apagado com sucesso", deletar });

    } catch (error: any) {
        res.status(400).send({ error: error.message });
    }
  }
}