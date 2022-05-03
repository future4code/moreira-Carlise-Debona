import { BaseDatabase } from "./BaseDatabase";
import dotenv from "dotenv";


dotenv.config();

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }
console.log(BaseDatabase.connection.client.config);

const createTables = () => BaseDatabase.connection.raw(`
    CREATE TABLE IF NOT EXISTS User (
      id VARCHAR(255) PRIMARY KEY,
      name_usuario VARCHAR(255) NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      role VARCHAR(255) NOT NULL
    );
`)
.then(() => { console.log("Tabelas criadas") })
.catch(printError)


const closeConnection = () => { BaseDatabase.connection.destroy() }

createTables()
  .finally(closeConnection)