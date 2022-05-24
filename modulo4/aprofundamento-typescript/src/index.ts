//1. 
//a) 
//const minhaString : string = 9
// o erro fala que tem que ser numbar em não string.

//b)
let meuNumeor : number | string = 2022

//c) 

type dadosPessoa = {
  nome: string, 
  idade: number,
  corFavorita: string
}

type dadosPessoas = {
  nome: string, 
  idade: number,
  corFavorita: cores
}

//d)
enum cores {
  VIOLETA ='Violeta',
  LARANJA ='Laranja',
  AMARELO ='Amarelo',
  VERDE ='Verde',
  ANIL ='Azul',
  VERMELHO ='Vermelho',
  AZUL = 'azul'
}

//c
const carlise: dadosPessoas = {
  nome: "Caca",
  idade: 32,
  corFavorita: cores.AZUL
}

const gustavo: dadosPessoas = {
  nome: "Gu",
  idade: 34,
  corFavorita: cores.VERMELHO
}

const nicole: dadosPessoas = {
  nome: "Nike",
  idade: 24,
  corFavorita: cores.VERDE
}

console.log(nicole)
console.log(gustavo)
console.log(carlise)

