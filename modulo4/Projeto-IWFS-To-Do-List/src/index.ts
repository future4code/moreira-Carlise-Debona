import express, { Express, Request, Response } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";

const app: Express = express();
app.use(express.json());
app.use(cors());

dotenv.config();

export const connection = knex({
	client: "mysql",
	connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  }
});


//Criar usuário
const createUser = async (
  name: string,
  nickname: string,
  email: string
): Promise<void> => {
  await connection
    .insert({
      id: Date.now().toString(),
      name: name,
      nickname: nickname,
      email: email,
    })
    .into("Users");
};

//Adiciona Usuário
app.post("/users", async (req: Request, res: Response) : Promise<void> => {
  
  try {
    const name: string = req.body.name;
    const nickname: string = req.body.nickname;
    const email: string = req.body.email;

    if(!name || !nickname || !email){
      throw new Error("Todos os dados precisam ser preenchidos!")
    }

    await createUser(
      name,
      nickname,
      email
      );

    res.status(201).send("Conta criada com sucesso!");
  } catch (error: any) {
    switch(error.message){
      case "conta não encontrada":
      res.status(404).send(error.message)
      break 
      case "usuário já existente":
      res.status(409).send(error.message)
      break
      case "Todos os dados precisam ser preenchidos!":
          res.status(422).send(error.message)      
      default:
      res.status(500).send("algo deu errado")
    }
  }
});

//Busca usuário

const getUserById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT id, nickname FROM Users WHERE id = '${id}'
  `)
	return result[0][0]
};

app.get("/users/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    
    console.log(await getUserById(id));
    const userId = (await getUserById(id))

    res.status(200).send(userId)
  } catch (error: any) {
      res.status(500).send(error.message)
    }
}); 

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});