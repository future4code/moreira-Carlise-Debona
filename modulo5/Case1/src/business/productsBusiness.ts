
import { productInputDTO } from "../types/productsType";
import { IProductsData } from "../model/interfaceProductsData";
import Products from "../model/Products";
import { products } from "./products.json";
import { ProductsData } from "../data/productsData"


export class ProductsBusiness{
  private productsData: IProductsData;

constructor(productsDatabase: IProductsData){
  this.productsData = productsDatabase
}

    createProducts = async (input: productInputDTO):Promise<void> =>{

      const {name,tags, id} = input

        if(!name || !tags || !id){
            throw new Error("Fill in all data")
        }

      for (let i=0; i<products.length; i++) {             
      await this.productsData.insertProducts(products.products[i])}
    }
  }
