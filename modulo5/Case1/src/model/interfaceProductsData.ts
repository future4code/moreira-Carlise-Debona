import Products from "./Products"

export interface IProductsData{
    insertProducts(prod: Products): Promise<Products>
}