import { Request, Response } from "express";
import { ProductsBusiness } from "../business/productsBusiness";
import { productInputDTO, searchInputDTO } from "../types/productsType";

export class ProductsController{
  constructor(
    private productsBusiness: ProductsBusiness
    ) {}

    createProducts = async (req:Request, res:Response): Promise<void>=>{

        try {

            const {products} = req.body
            
            const productsInput  = await this.productsBusiness.createProducts(products) 
            
            res.status(201).send({message:"Products create success!", productsInput })
      
        } catch(error: any){ 

          switch(error.message){
            case "Product not found!":
              res.status(404).send(error.message)
            break 
            case "Existing product!":
              res.status(409).send(error.message)
            break
            case "ll data must be filled!":
              res.status(422).send(error.message)
            break
            case "Server error!":
              res.status(500).send(error.message)
            default:
              res.status(400).send({message: error.message});
          }
          
        }
    }

    searchById =  async (req: Request, res: Response) => {

      try {
        const input: searchInputDTO  = {id: Number(req.params.id)}
  
        const products = await this.productsBusiness.searchById(input)
  
        res.status(200).send({products});
      }catch(error: any){
        switch(error.message){
          case "Product not found!":
            res.status(404).send(error.message)
          break 
          case "Existing product!":
            res.status(409).send(error.message)
          break
          case "ll data must be filled!":
            res.status(422).send(error.message)
          break
          case "Server error!":
            res.status(500).send(error.message)
          default:
            res.status(400).send({message: error.message});
        }
      }
    }
  }