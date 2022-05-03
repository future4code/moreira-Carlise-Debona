import { BaseDatabase } from "./BaseDatabase";

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const createTables = () => BaseDatabase.connection.raw(`

      CREATE TABLE IF NOT EXISTS UserCookenu (
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
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