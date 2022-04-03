import express, {Request, Response} from "express";
import cors from "cors";
import { AddressInfo } from "net";
import {accounts} from "./accounts";

const app = express();

app.use(express.json());
app.use(cors());

//Busca todas as contas do banco.
app.get("/contas",(req: Request, res: Response)=>{
  let errorCode: number = 400;
  try{
    if(accounts.length === 0){
      errorCode = 404;
      throw new Error("Não existe contas!")
    }
    else{
      res.status(200).send(accounts);
    }
    
  } catch(error: any){
    res.status(errorCode).send({message: error.message})
  }
})

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;