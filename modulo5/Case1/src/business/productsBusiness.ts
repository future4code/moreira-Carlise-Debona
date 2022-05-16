
import { IdGenerator } from "../services/IdGenerator";
import { productsInputDTO } from "../types/productsType";
import { Authenticator } from "../services/Authenticator"
import { IProductsData } from "../model/interfaceProductsData";
import Products from "../model/Products";

export class ProductsBusiness{
  private productsData: IProductsData;
  private idGenerator:IdGenerator;
  
constructor(productsDatabase: IProductsData){
  this.productsData = productsDatabase
  this.idGenerator = new IdGenerator
  
}

    create = async (input:productsInputDTO)=>{


      const {name,tags} = input

        if(!name || !tags){
            throw new Error("Fill in all data")
        }

        const id = this.idGenerator.generateId()
        
        const prod = new Products(
          id,
          name,
          tags                        
      )
      await this.productsData.insertProducts(prod)
    }
}