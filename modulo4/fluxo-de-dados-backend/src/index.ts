import express, {Request, Response} from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { Products, listaProduct } from "./data";

const app = express();

app.use(express.json());
app.use(cors());

//get de teste
app.get("/test", (req, res) => {          
  res.send("Olá get de teste")
});

//adiconar produtos
app.post("/adiconar-produto", (req, res) => {
  const createProduct = {
    id: Date.now().toString(),
    name: req.body.name,
    price: req.body.price
  }
  const newProduct = [...listaProduct, createProduct]
  return res.status(200).send(newProduct)

});

//mostrar lista de produtos
app.get("/lista-de-produtos", (req: Request, res: Response) => {  
  const newListProduct = listaProduct.map((item) =>{
    return item;
  });
  res.status(200).send(newListProduct)
});

//editar preço
app.put("/editar-produtos/:id", (req: Request, res: Response)=>{
  const id: string = (req.params.id)
  const body: number = req.body.price

    listaProduct.filter((item) =>{
    return item.id === id
  }).map((item)=>{
    item.price = body
    return item
  })
  res.status(200).send(listaProduct)
});

//deleta produtos
app.delete("/deletar-produto/:id", (req: Request, res: Response)=>{
  const id: string = (req.params.id)

  const newProductList = listaProduct.filter((item, del)=>{
    if(item.id === id)listaProduct.splice(del, 1)
  })
  res.status(200).send(listaProduct)
})

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});; 