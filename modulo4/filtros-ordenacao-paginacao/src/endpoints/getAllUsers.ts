import { Request, Response } from "express"
import { user } from "../types"
import selectAllUsers from "../data/selectUsers"

export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
  try {
     const users = await selectAllUsers()

     if(!users.length){
        res.statusCode = 404
        throw new Error("No recipes found")
     }

     res.status(200).send(users)
     
  } catch (error) {
    res.status(500).send("Internal server error")
 
  }
}

