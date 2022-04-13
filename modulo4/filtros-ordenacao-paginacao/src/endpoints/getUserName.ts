import { Request, Response } from "express"
import selectAllName from "../data/selectAllName"



export const getUserName = async(req: Request,res: Response): Promise<void> =>{
  
  try {
      const name = req.query.name as string
      const result = (await selectAllName(name))

      if(!name){
        res.statusCode = 404
        throw new Error("No recipes found")
     }
     res.status(200).send(result)
     console.log(result)
  } catch (error) {
    res.status(500).send("Internal server error")
 
  }
}


