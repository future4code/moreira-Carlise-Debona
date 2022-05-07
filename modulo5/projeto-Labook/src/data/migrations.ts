import { BaseDatabase } from "./BaseDatabase";
import dotenv from "dotenv";


dotenv.config();

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }
console.log(BaseDatabase.connection.client.config);

const createTables = () => BaseDatabase.connection.raw(`
    CREATE TABLE IF NOT EXISTS UserLabook (
      id VARCHAR(255) PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL
    );

    CREATE TABLE IF NOT EXISTS PostLabook (
      id VARCHAR(255) PRIMARY KEY,
      id_user VARCHAR(255) NOT NULL,
      foto VARCHAR(1000) NOT NULL,
      descricao VARCHAR(500) NOT NULL,
      role VARCHAR(255) NOT NULL,
      date timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (id_user) REFERENCES UserLabook(id)
    );
`)
.then(() => { console.log("Tabelas criadas") })
.catch(printError)


const closeConnection = () => { BaseDatabase.connection.destroy() }

createTables()
  .finally(closeConnection)