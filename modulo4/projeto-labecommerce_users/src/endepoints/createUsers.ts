
import { Request, Response } from "express";
import  connection  from "../Data/connections";

//Criar usuário
const labecommerce_users = async (
  name: string,
  email: string,
  password: string
): Promise<void> => {
  console.log(name)
    console.log(email)
    console.log(password)
  await connection
    .insert({
      id: Date.now().toString(),
      name: name,
      email: email,
      password: password
    })
    .into("labecommerce_users");
};


//Cadastro de usuário
export const createUsers = async (req: Request, res: Response): Promise<void> => {
  try{
          
    const name: string = req.body.name;
    const email: string = req.body.email;
    const password: string = req.body.password;
    
    console.log(name)
    console.log(email)
    console.log(password)

    if(
      !name || 
      !email || 
      !password
      ){
        res.statusCode = 422
      throw new Error("Fill in all fields!")
    }
    await labecommerce_users(
      name,
      email,
      password
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
