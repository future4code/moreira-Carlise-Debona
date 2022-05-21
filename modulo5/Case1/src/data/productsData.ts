import { IProductsData } from "../model/interfaceProductsData";
import  Products  from "../model/Products";
import { productInputDTO } from "../types/productsType";
import { BaseDatabase } from "./BaseDatabase";



export class ProductsData extends BaseDatabase implements IProductsData {
  
  protected TABLE_NAME = "PRODUCTS"

  insertProducts =  async (prod: any): Promise<void> => {
    try{
      await this
      .connection(this.TABLE_NAME)
      .insert({
        id: prod.id,
        name: prod.name,
        tags: prod.tags
      })
  
    } catch(error: any){
      throw new Error(error.sqlMessage || error.message)
    }
  }

  productsById =  async (id: number): Promise<productInputDTO> => {
    try{
      const idProdutos  = await this.connection.raw(`
      SELECT * FROM ${this.TABLE_NAME}
      WHERE id = '${id}'`)
      return idProdutos[0];
      
  
    } catch(error: any){
      throw new Error(error.message || error.sqlMessage)
    }
  }
 }
