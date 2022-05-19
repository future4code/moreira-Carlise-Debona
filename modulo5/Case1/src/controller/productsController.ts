import { Request, Response } from "express";
import { ProductsBusiness } from "../business/productsBusiness";
import { productInputDTO } from "../types/productsType";

export class ProductsController{
  constructor(
    private productsBusiness: ProductsBusiness
    ) {}

    createProducts = async (req:Request, res:Response): Promise<void>=>{

        try {

            const {products} = req.body

            // const input: productInputDTO[]={
            //    products
            // }
            
            const productsInput  = await this.productsBusiness.createProducts(products) 

            res.status(201).send({message:"Products create success!", productsInput })
      
        } catch(error: any){ 

          switch(error.message){
            case "conta não encontrada!":
              res.status(404).send(error.message)
            break 
            case "usuário já existente!":
              res.status(409).send(error.message)
            break
            case "Todos os dados precisam ser preenchidos!":
              res.status(422).send(error.message)
            break
            case "Erro no servidor!":
              res.status(500).send(error.message)
            default:
              res.status(400).send({message: error.message  || error.sqlMessage });
          }
          
        }
    }
  }