//1.
// a) O código solicita ao usuário digitar um número para teste. Após ele digitar o número é salvo dentro da variável numero
// que tranforma de string para número. Depois temos umas condicionantes if e else, se o número digitado ter o resto da divisão igual a zero
// ele imprimi no console.log "Passou no teste.", caso não de igual a zero ele imprimi no console.log "Não passou no teste.".

// b) Números pares.

// c) Números impares. 

//2. 
// a) Para saber o preço das frutas que alguém escolheu.

// b) O preço da fruta Maçã é R$ 2.25.

// c) Vai imprimir "O preço da fruta Pêra é R$ 5.5".

// 3.
// a) Solicitando um número e já transformando de String para número e salvando na variável numero.

// b) No caso do código apresentado, tanto com 10 e -10 vai imprimir que a variável mensagem não definida.

// c) Sim, porque a variável mensagem não é global ela é somente do bloco if. Então, chamando ela fora do if 
// vai dizer que a variável mensagem não foi definida.

// Exercícios de escrita de código

//1.
// const idadeUsuario = Number(prompt("Digite sua idade:"))

//  if (idadeUsuario >= 18){
//   console.log("Você pode dirigir")
// }
//  else 
// {
//   console.log("Você não pode dirigir")
// }

// //2.

// const turdoDoDia = (prompt("Você estuda em qual turno? Digite M para (Matutino), V para (Vespertino) e N para (Noturno):"))


//  if (turdoDoDia === "M"){

//     console.log("Bom dia!")

// }  else if (turdoDoDia === "V")
// {

//     console.log("Boa Tarde!")
// }
//  else if (turdoDoDia === "N")
// {
    
//     console.log("Boa Noite!")
// }
//  else
// {
//   console.log("Essa opção não existe!")
// }

// //3. 

// const turdoDoDia = (prompt("Você estuda em qual turno? Digite M para (Matutino), V para (Vespertino) e N para (Noturno):"))
// switch (turdoDoDia){
//   case "M":
//         console.log("Bom dia!")
//         break
//   case "V":
//         console.log("Boa Tarde!")
//         break
//   case "N":
//         console.log("Boa Noite!")
//         break
//   default:
//         console.log("Essa opção não existe!")
//         break
// }

// //4. 

// const generoDoFilme= (prompt("Vamos assistir um filme do gênero fantasia ?"))

// const precoDoFilme= Number(prompt("Qual o valor do ingresso ?"))

//  if (generoDoFilme === "Sim" && precoDoFilme <=15 ){

//       console.log("Bom filme!")
  
//   } 
//  else 
// {
  
//       console.log("Escolha outro filme :(")
//   }

//   Desafio
//   1.

// const generoDoFilme= (prompt("Vamos assistir um filme do gênero fantasia ?"))

// const precoDoFilme= Number(prompt("Qual o valor do ingresso ?"))

//   if (generoDoFilme === "Sim" && precoDoFilme <=15 ){
      
//       console.log("Bom filme!")

//       const lanchinho= (prompt("Qual lanchinho você vai comprar ?"))
//       console.log(`Aproveita o seu ${lanchinho}`)
  
//   } 
//   else 
// {
  
//       console.log("Escolha outro filme :(")
//   }

//2.

const nomeUsuario= (prompt("Digite seu nome completo:"))
const tipoDeJogo = (prompt("Digite IN indica internacional; e DO indica doméstico:"))
const etapaDoJogo = (prompt("Digite SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final:"))
const categoriaDoJogo= (prompt("Digite a opção 1, 2, 3 ou 4:"))
const quantidadeDeIngressos= Number(prompt("Digite a quantidade de ingressos:"))




const ingresosDomesticosSemifinais = {
valorIngressoSemifinaisCategoria1: 1.320,
valorIngressoSemifinaisCatgoria2: 880,
valorIngressoSemifinaisCategoria3: 550,
valorIngressoSemifinaisCategoria4: 220
}

const ingresosDomesticosDecisaoTerceiroLugar = {
valorIngressoDesisaoTerceiroLugarCategoria1: 660,
valorIngressoDesisaoTerceiroLugarCategoria2: 440,
valorIngressoDesisaoTerceiroLugarCategoria3: 330,
valorIngressoDesisaoTerceiroLugarCategoria4: 170
}

const ingresosDomesticoFinal = {
valorIngressoFinalCategoria1: 1.980,
valorIngressoFinalCategoria2: 1.320,
valorIngressoFinalCategoria3: 880,
valorIngressoFinalCategoria4: 330
}



function totalDeIngresosNacionais(){

return valorDoIngressoNacional * quantidadeDeIngressos

}

function totalDeIngresosInternacional(){

return valorDoIngressoInternacional * quantidadeDeIngressos
  
  }