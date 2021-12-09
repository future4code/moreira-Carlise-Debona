//1. 
// Ele está fazendo um laço de repetição de soma em que a condição de continuação é atrelado ao incremento até número i < 5 começando por 0.
// Ele vai imprimir no console.log 10

//2. a) os números meior que 18. Resultado: 19, 21, 23, 25, 27, 30

//   b) 
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// let indice= 0
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero, "indice", indice)
// 	}
//   indice ++
// }

//3. Ele vai imprimir 4 linhas
//*
//**
//*** 
//****

//Exercícios de escrita de código

//1. 

// let bichinhos = Number(prompt("Quanto bichinhos de estimação você tem?"))

// if(bichinhos === 0){
//   console.log("Que pena! Você pode adotar um pet!")
// }
// else if (bichinhos > 0){
//   let array =[]

//   for(let i = 0; i < bichinhos; i ++){

//     let nomesBichinhos = prompt("Digite o nome do todos os seus bichinhos?")
//     array.push(nomesBichinhos)

//   }
//   console.log(array)
// }

//2.
//a)
const arrayOriginal = [5, 10, 20, 30, 35, 40, 50, 56, 60, 70, 77, 80, 83, 90, 100]

for (let lista of arrayOriginal) {
  		console.log(lista)
	}

//b) 

for (let lista of arrayOriginal) {
    let resultado = lista / 10
        console.log(resultado)
}

//c) 

function numerosPares(array){
  let arrayPares = []

    for (let lista of arrayOriginal) {
                  
        if (lista %2 === 0) {
          arrayPares.push(lista)
        }
    }
    console.log(arrayPares)
}
numerosPares(arrayOriginal)

//d)

function numeroDoIndice(arrayIndice){
     let arrayNovo = []

           for (let lista  of arrayOriginal) {
             arrayNovo.push(`O elemento do índex ${arrayOriginal.indexOf(lista)} é ${lista}`)
          }    
   console.log(arrayNovo)
  }
  numeroDoIndice(arrayOriginal)

//e)

function maiorNumero(numero){
    let numeroMaior = numero[0]

    for(let i = 1; i < arrayOriginal.length; i++ ) {

            if(numero[i] > numeroMaior){
              numeroMaior = numero[i]

        }
   }
   return numeroMaior
}



function menorNumero(numero) {
  let numeroMenor = numero[0]

    for(let i = 1; i < arrayOriginal.length; i++) {
            if(numero[i] < numeroMenor){
              numeroMenor = numero[i]
        }
    }   
    return numeroMenor
}

let maior = maiorNumero(arrayOriginal)
let menor = menorNumero(arrayOriginal)
console.log(`O maior número é ${maior} e o menor é ${menor}`)






