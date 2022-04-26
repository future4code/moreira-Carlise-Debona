
import { Request, Response } from "express";
import  connection  from "../Data/connections";



export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
  try{
    const result = await connection.raw(`
    SELECT * FROM labecommerce_users
  `)

    if( result.length === 0 )
      {
        res.statusCode = 422
        throw new Error("No registered user!")
      }
    res.status(200).send(result[0])
      }catch(error:any){
            res.status(500).send(error.message)
    }
  }