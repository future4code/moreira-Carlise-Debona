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

const createUser = async (
  id: string,
  name: string,
  nickname: number,
  email: string
): Promise<void> => {
  await connection
    .insert({
      id: id,
      name: name,
      nickname: nickname,
      email: email,
    })
    .into("Users");
};

//Criar usuário
app.post("/users", async (req: Request, res: Response) => {
  try {
    await createUser(
      req.body.id,
      req.body.name,
      req.body.nickname,
      req.body.email
    );

    res.status(201).send();
  } catch (err: any) {
    res.status(400).send({
      message: err.message,
    });
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