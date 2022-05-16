import { BaseDatabase } from "./BaseDatabase"

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

export class CreateTables extends BaseDatabase{
   createTables = () => this.connection

   .raw(`
   CREATE TABLE IF NOT EXISTS PRODUCTS (
      id VARCHAR(255) PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      tags VARCHAR(255) NOT NULL
    );    
      
   `)
   .then(() => { console.log("Tabelas criadas") })
   .catch(printError)

   closeConnection = () => { this.connection.destroy() }

}
const migrations = new CreateTables()

migrations.createTables()
   .finally(migrations.closeConnection)