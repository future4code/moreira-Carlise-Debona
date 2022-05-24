import { Request, Response } from "express";
import  connection  from "../Data/connections";



export const getAllProducts = async (req: Request, res: Response): Promise<void> => {
  try{
    const result = await connection.raw(`
    SELECT * FROM labecommerce_products
  `)

    if( result.length === 0 )
      {
        res.statusCode = 422
        throw new Error("No registered products!")
      }
    res.status(200).send(result[0])
      }catch(error:any){
            res.status(500).send(error.message)
    }
  }