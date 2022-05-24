import { Request, Response } from "express";
import  connection  from "../Data/connections";

//Criar endereço
 const AdressUsers = async (
  Cep: number,
  Logradouro: string,
  Numero: number,
  Complemento: string,
  Bairro: string,
  Cidade: string,
  Estado: string
): Promise<void> => {

  await connection
    .insert({
    id: Date.now().toString(),
    cep: Cep,
    logradouro: Logradouro,
    numero: Numero,
    complemento: Complemento,
    bairro: Bairro,
    cidade: Cidade,
    estado: Estado
    })
    .into("AdressUsers");
};

//Cadastro de endereço
export const createAdress = async (req: Request, res: Response): Promise<void> => {
  try {
      const cep: number = req.body.cep
      const logradouro: string = req.body.logradouro
      const numero: number = req.body.numero
      const complemento: string = req.body.complemento
      const bairro: string= req.body. bairro
      const cidade: string = req.body.cidade
      const estado: string = req.body.estado
      

      if (!cep ||
        !logradouro ||
        !numero ||
        !complemento ||
        !bairro ||
        !cidade ||
        !estado
        ) {
          res.statusCode = 422
          throw new Error("Todos os dados precisam ser preenchidos!")
        }

      await AdressUsers(
      cep,
      logradouro,
      numero,
      complemento,
      bairro,
      cidade,
      estado
      );
    
      
      res.status(201).send("Criado")

    } catch (error: any) {
      switch(error.message){
        case "Endereço não encontrada!":
          res.status(404).send(error.message)
        break
        case "Todos os dados precisam ser preenchidos!":
          res.status(422).send(error.message)      
        default:
          res.status(500).send(error.message)
      }
    }
}
