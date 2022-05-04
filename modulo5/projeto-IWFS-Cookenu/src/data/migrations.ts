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

      CREATE TABLE IF NOT EXISTS Recipe (
        id VARCHAR(255) PRIMARY KEY,
        titulo VARCHAR(255) NOT NULL,
        descricao VARCHAR(500) NOT NULL,
        modo_de_preparo VARCHAR(1000) NOT NULL,
        date timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE UserFollow (
        followed_id varchar(255) NOT NULL,
        follower_id varchar(255) NOT NULL,
        FOREIGN KEY (followed_id) REFERENCES UserCookenu (id),
        FOREIGN KEY (follower_id) REFERENCES UserCookenu (id)
      )

      
`)
.then(() => { console.log("Tabelas criadas") })
.catch(printError)


const closeConnection = () => { BaseDatabase.connection.destroy() }

createTables()
  .finally(closeConnection)