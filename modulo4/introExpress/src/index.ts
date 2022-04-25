import express from 'express';
import cors from 'cors';
import {dadosPessoas, posts} from './data';
import { AddressInfo } from "net"


const app = express()

app.use(express.json())

app.use(cors())

app.get("/", (req, res) => {          
  res.send("Hello from Express")
  
});


app.get("/cadastro", (req, res) => {          
  res.status(200).send(dadosPessoas)
  
});


app.get("/post", (req, res) => {   
  res.status(200).send(posts)
  
});

//8.
app.get("/usuario/post/:id", (req, res) => {   
  const id: number = Number(req.params.id) 

  const postUsario = posts.filter((item) => {
    return item.id === id
  
  })

  return res.status(200).send([postUsario])
});

// app.listen(3003, () => {
//   console.log("Server is running in http://localhost:3003");
//});

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;