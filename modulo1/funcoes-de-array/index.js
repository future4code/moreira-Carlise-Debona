//1. a) O array igual ao original com index de cada um
  //[{ nome: "Amanda Rangel", apelido: "Mandi" }, 0
  //{nome: "Laís Petra", apelido: "Laura" }, 1
  //{ nome: "Letícia Chijo", apelido: "Chijo" } 2
  //]

//2. a) ["Amanda Rangel", "Laís Petra", "Letícia Chijo"]

//3. 0 {nome: "Amanda Rangel", apelido: "Mandi"},
//   1 {nome: "Amanda Rangel", apelido: "Mandi"}

//1. a)
// const pets = [
//   { nome: "Lupin", raca: "Salsicha"},
//   { nome: "Polly", raca: "Lhasa Apso"},
//   { nome: "Madame", raca: "Poodle"},
//   { nome: "Quentinho", raca: "Salsicha"},
//   { nome: "Fluffy", raca: "Poodle"},
//   { nome: "Caramelo", raca: "Vira-lata"},
// ]
// const nomeDosPets = pets.map((pets) => {
//   return pets.nome 
// })
// console.log(nomeDosPets)

//b) 
// const pets = [
//   { nome: "Lupin", raca: "Salsicha"},
//   { nome: "Polly", raca: "Lhasa Apso"},
//   { nome: "Madame", raca: "Poodle"},
//   { nome: "Quentinho", raca: "Salsicha"},
//   { nome: "Fluffy", raca: "Poodle"},
//   { nome: "Caramelo", raca: "Vira-lata"},
// ]
// const novoArrayCachorro = pets.filter((item, index, array) => {
//   return item.raca === "Salsicha"
// })
//  console.log(novoArrayCachorro)

//c) 

// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//   ]

// const novoArrayCachorro = pets.filter((item, index, array) => {
//     return item.raca === "Poodle"
//   })
   
// const mensagemCachorro = novoArrayCachorro.map((item, index, array) => {
    
//   return `Você ganhou um cupom de desconto de 10% para tosar o/a, ${item.nome}`
    
//  })

//2. 

const produtos = [
  { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
  { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
  { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
  { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
  { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
  { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
  { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
  { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
  { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
  { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]


const nomeProdutos = produtos.map((item, index, array) => {
return item.nome 
})

const produtoPrecoDesconto = produtos.map((item, index, array) => {
return {
    nome: item.nome, 
    preço: item.preco * 0.95
  }

})

console.log(produtoPrecoDesconto)

const categoriaBebidas = produtos.filter((item, index, array) => {
  return item.categoria === "Bebidas"
})

const nomesComYpe = produtos.filter((item, index, array) => {

return item.nome.includes("Ypê")

})

const mensagemItensProdutos = nomesComYpe.map((item, index, array) => {
    
return `Compre ${item.nome} por ${item.preco}`

})

console.log(mensagemItensProdutos)