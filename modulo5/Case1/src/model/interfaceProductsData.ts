import Products from "./Products"

export interface IProductsData{
    insertProducts(prod: any): Promise<void>
    productsById(id: any): Promise<any>
 
}