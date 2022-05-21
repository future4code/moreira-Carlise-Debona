
import { ProductsBusiness } from "../src/business/productsBusiness";
import { ProductsDatabaseMock} from "./mocks/productsDatabaseMock"


const productsBusinessMock = new ProductsBusiness(
  new ProductsDatabaseMock() as any

)

describe("Create products", () => {
  test("Dados não foram enviados", async () => {
    expect.assertions

    try{
      await productsBusinessMock.createProducts(
        {
          "id": 8367,
          "name": "",
          "tags": ["casual", "metal", "metal"]
        } 
      )
    }catch(error: any){
      expect(error.message).toEqual("Data not sent")
    } 
  })


  test("Id not exist!", async () => {
    expect.assertions
    try{
    const result =  await productsBusinessMock.searchById(789)
    console.log(result) 
      
    }catch(error: any){
      expect(error.message).toBe("Id not exist!")
    } 
  })


  test("Id exist!", async () => {
    expect.assertions
    try{
      const result = await productsBusinessMock.searchById(
        8367
      )
      expect(result).toEqual(
        {
          "id": 8367,
          "name": "VESTIDO MOLETOM COM CAPUZ MESCLA",
          "tags": ["casual", "metal", "metal"]
        }
      )
    }catch(error: any){
      console.log(error.message)
    } 
  })
})
