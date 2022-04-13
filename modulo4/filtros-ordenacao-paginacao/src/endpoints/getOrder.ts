import { Request, Response } from "express"
import selecOrderType from "../data/selectOrderType"
import selectOrderAllUsers from "../data/selectOrderAllUsers";
import selectOrderEmail from "../data/selectOrderEmail";

export const getOrder = async(req: Request,res: Response): Promise<void> =>{
  
  try {
         
      const resultType = await selecOrderType()
      const resultName = await selectOrderAllUsers()
      const resultEmail = await selectOrderEmail()

      

      if(!resultType || !resultName || !resultEmail){
        res.statusCode = 404
        throw new Error("No recipes found")
     }
     res.status(200).send(resultType || resultName || resultEmail)
     console.log(resultType)
  } catch (error) {
    res.status(500).send("Internal server error")
 
  }
}