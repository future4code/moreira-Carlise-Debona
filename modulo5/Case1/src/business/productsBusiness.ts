
import { productInputDTO } from "../types/productsType";
import { IProductsData } from "../model/interfaceProductsData";
import Products from "../model/Products";
import { ProductsData } from "../data/productsData"


export class ProductsBusiness{
  private productsData: IProductsData;

constructor(productsDatabase: IProductsData){
  this.productsData = productsDatabase
}

    createProducts = async (products: productInputDTO[]):Promise<void> =>{

      for (let i=0; i<products.length; i++) { 
        if(!products[i].id || !products[i].tags || !products[i].name){
          throw new Error("Dados não foram enviados")
        }
    }

    for (let i = 0; i < products.length; i++) { 
      const product = {
        id: products[i].id,
        name: products[i].name,
        tags: products[i].tags.toString()
      }
      console.log(product)

    await this.productsData.insertProducts(product)}
  }
  }
