
import { Request, Response } from "express";
import  connection  from "../Data/connections";

//Create Products
const labecommerce_products = async (
  name: string,
  price: number,
  image_url: string
): Promise<void> => {
  
  await connection
    .insert({
      id: Date.now().toString(),
      name: name,
      price: price,
      image_url: image_url
    })
    .into("labecommerce_products");
};


//Register Products
export const createProducts = async (req: Request, res: Response): Promise<void> => {
  try{
          
    const name: string = req.body.name;
    const price: number = req.body.price;
    const image_url: string = req.body.image_url


    if(
      !name || 
      !price || 
      !image_url
      ){
        res.statusCode = 422
      throw new Error("Fill in all fields!")
    }
    await labecommerce_products(
      name,
      price,
      image_url
    );
   
    res.status(201).send("Create Sucess!")
  }catch(error:any){
    switch(error.message){
      case "Fill in all fields!":
        res.status(422).send(error.message)      
      default:
        res.status(500).send(error.message)
    }
  }
}
