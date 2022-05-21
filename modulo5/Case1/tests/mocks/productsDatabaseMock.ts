import Product from "../../src/model/Products";
import { productMock } from "./productsMock";


export class ProductsDatabaseMock{
  public async insertProducts(prod: any): Promise<void> { }

  public async searchById(id: number): Promise<any>{
    if (id === 8367) {
      return productMock
    }
  }

}