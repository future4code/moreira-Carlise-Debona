import { Request, Response } from "express";
import  connection  from "../Data/connections";
import getIdProduct from "../Data/selectIdProducts";
import getIdUser from "../Data/selectIdUsers";

//Purchases Price
const getPrices = async (id: number): Promise<number> => {
  const result = await connection.raw(`
    SELECT price FROM labecommerce_products WHERE id = '${id}'`);
  return result[0]
};

//Criar purchases
const labecommerce_purchases = async (
  user_id: string,
  product_id: string,
  quantity: number,
  total_price: number 
): Promise<void> => {
  await connection
    .insert({
      id: Date.now().toString(),
      user_id: user_id,
      product_id: product_id,
      quantity: quantity,
      total_price: total_price
    })
    .into("labecommerce_purchases");
};

//Cadastro de purchases
export const createPurchasesUser = async (req: Request, res: Response): Promise<void> => {
  try{
    
    const user_id: string = (req.body.user_id);
    const product_id: string = (req.body.product_id);
    let quantity: number = req.body.quantity;
    const total_price: number = await (req.body.total_price) * req.body.quantity;     
      
    if(
      !user_id ||
      !product_id ||
      !quantity 
      
      ){
        res.statusCode = 422
      throw new Error("Fill in all fields!")
    }

    await labecommerce_purchases(
      user_id,
      product_id,
      quantity,
      total_price
    );
    
    res.status(201).send("User purchases !")
  }catch(error:any){
    switch(error.message){
      case "Fill in all fields!":
        res.status(422).send(error.message)      
      default:
        res.status(500).send(error.message)
    }
  }
}