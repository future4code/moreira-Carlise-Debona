import { IProductsData } from "../model/interfaceProductsData";
import  Products  from "../model/Products";
import { BaseDatabase } from "./BaseDatabase";



export class ProductsData extends BaseDatabase implements IProductsData {
  
  protected TABLE_NAME = "PRODUCTS"

  insertProducts =  async (prod: Products): Promise<Products> => {
    try{
      await this
      .connection(this.TABLE_NAME)
      .insert({
        id: prod.id,
        name: prod.name,
        tags: prod.tags
      })
      return prod
    } catch(error: any){
      throw new Error(error.sqlMessage || error.message)
    }
  }

}
