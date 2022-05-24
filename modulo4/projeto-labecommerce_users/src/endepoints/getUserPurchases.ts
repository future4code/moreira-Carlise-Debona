import { Request, Response } from "express";
import  connection  from "../Data/connections";



export const getUserPurchases = async (req: Request, res: Response): Promise<void> => {
  try{
 
  const user_id = req.params.user_id;
  
    if(!user_id)
      {
        res.statusCode = 422
        throw new Error("Enter the user_id!")
      }

      const result = await connection.raw (`
        SELECT * FROM labecommerce_products JOIN labecommerce_purchases
          ON labecommerce_products.id = labecommerce_purchases.product_id WHERE user_id = '${user_id}';
  `   )
        res.status(200).send(result[0])
      }
      catch(error:any){
        res.status(500).send(error.message)
    }
  }