import  app  from "./controller/app"
import { ProductsBusiness }from "./business/productsBusiness";
import { ProductsController  }from "./controller/productsController";
import { ProductsData } from "./data/productsData";

const productsBusiness = new ProductsBusiness(new ProductsData)

const productsController = new ProductsController(productsBusiness)


app.post("/products/signup", productsController.createProducts)
app.get("/products/:id", productsController.searchById)