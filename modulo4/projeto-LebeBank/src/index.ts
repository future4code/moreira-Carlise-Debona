import express, {Request, Response} from "express";
import cors from "cors";
import { AddressInfo } from "net";
import {accounts} from "./accounts";

const app = express();

app.use(express.json());
app.use(cors());

//Busca todas as contas do banco.
app.get("/users",(req: Request, res: Response)=>{
  let errorCode: number = 400;
  //const token = req.headers.authorization
  try{
    // if(!token){
    //   res.status(401).send("Verifique se você está passando o header 'Authorization'")
    //   } 
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

app.post("/users", (req: Request, res: Response)=>{
  //const usuario = req.headers.authorization
  let errorCode: number = 400;
  try{
    const {name, CPF, dateOfBirth} = req.body;
    const [day, month, year] = dateOfBirth.split("/");
    const birthDate: Date = new Date(`${year}-${month}-${day}`);
    const ageGetMilliseconds: number = Date.now() - birthDate.getTime();
    const age: number = ageGetMilliseconds / 100 / 60 / 60 /24 / 365;

    if(age < 18){
      throw new Error("Usuário é menor de idade!")
    }

    if(!name || !CPF || !dateOfBirth){
      throw new Error("Todos os dados precisam ser preenchidos!")
    }

    if(typeof CPF !== "string" || (CPF as string).length !== 14){
      throw new Error("O CPF precisa ter o formato string 000.000.000-00 com 11 dígitos")
    }
    if(typeof dateOfBirth !== "string"){
      throw new Error("A data está num formato inválido, precisa ser uma string da seguinte forma dd/mm/yy")
    }

    const checkCPF = accounts.filter(item => item.CPF === CPF)
    if(checkCPF.length !== 0){
    throw new Error("CPF já cadastrado")
    }

    accounts.push({
      name,
      CPF,
      dateOfBirth,
      balance: 0,
      statement: []
    })
    res.status(200).send("Conta criada com sucesso!");
    
    
  } catch(error: any){
    switch(error.message){
      case "header authorization não informado":
          res.status(401).send(error.message)
          break
      case "conta não encontrada":
          res.status(404).send(error.message)
          break 
      case "usuário já existente":
          res.status(409).send(error.message)
          break
      case "todos os campos são necessários para criar a conta, preencha":
          res.status(422).send(error.message)      
      default:
      res.status(500).send("algo deu errado")
  }
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