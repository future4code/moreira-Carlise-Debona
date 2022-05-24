import { Request, Response } from "express"
import selecType from "../data/selectType"



export const getUserType = async(req: Request,res: Response): Promise<void> =>{
  
  try {
      const type = req.params.type as string
      const result = (await selecType(type))

      if(!type){
        res.statusCode = 404
        throw new Error("No recipes found")
     }
     res.status(200).send(result)
     console.log(result)
  } catch (error) {
    res.status(500).send("Internal server error")
 
  }
}