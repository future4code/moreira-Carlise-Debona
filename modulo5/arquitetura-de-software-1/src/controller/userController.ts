import { Request, Response } from "express";
import { UserBusiness } from "../business/userBusiness";
import { User } from "../types/types";
import { usuario } from "../types/types"



export class UserController {
  public signup = async (req: Request, res: Response): Promise<void> => {
      try {
        const {name_usuario, email, password,role} = req.body;
        const user : usuario = {
          name_usuario: name_usuario, 
          email: email, 
          password: password,
          role: role}

        const token = await new UserBusiness().createUser(user);

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

  getAllUsers = async (req: Request, res: Response): Promise<void> => {
    try {
      const token = req.headers.authorization as string;
      const userBusiness = new UserBusiness();
      const user = await userBusiness.getAllUsers(token);

      res.status(200).send(user);
    } catch (error: any) {
      if (res.statusCode === 200) {
        res
          .status(500)
          .send({ message: error.sqlMessage || "Internal server error" });
      } else {
        res.send({ message: error.sqlMessage || error.message });
      }
    }
  };

  public delete = async (req: Request, res: Response): Promise<void> => {
      
    try {
      const token: string = req.headers.authorization as string;
      const id: string = req.params.id as string;
      
      const userBusiness = new UserBusiness();
      await userBusiness.deleteUser(id, token);

        res.status(200).send({ message: "Usuário apagado com sucesso"});

    } catch (error: any) {
        res.status(400).send({ error: error.message });
    }
  }
}