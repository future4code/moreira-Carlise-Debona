import { Request, Response } from "express"
import selecOrderType from "../data/selectOrderType"
import selectOrderAllUsers from "../data/selectOrderAllUsers";
import selectOrderEmail from "../data/selectOrderEmail";

export const getOrder = async(req: Request,res: Response): Promise<void> =>{
  
  try {

      const name : any = req.params.name;
      const type : any= req.params.type;
      const email : any= req.params.email;
         
      const resultType = await selecOrderType();
      const resultName= await selectOrderAllUsers();
      const resultEmail = await selectOrderEmail();

      if(!resultType.length ){
        res.statusCode = 404
        throw new Error("Não encontrao")
      }
      if( !resultName.length){
        res.statusCode = 404
        throw new Error("Não encontrao")
     }

     if(resultEmail.length === 0){
      res.statusCode = 404
        throw new Error("Não encontrao")
   }

   res.status(200).send(resultEmail || resultType ||  resultName)
    

  } catch (error) {
    res.status(500).send("Erro no servidor")
 
  }
}