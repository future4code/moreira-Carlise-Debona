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

const nomeCliente = prompt("Digite seu nome completo:")
const tipoDeJogo = prompt("Digite o tipo de jogo(IN indica Internacional e DO indica Doméstico):")
const etapaDoJogo = prompt("Digite etapaga do jogo (SF indica Semi-final, DT indica Decisão do 3º lugar, e FI indica Final:)")
const categoriaDoJogo = Number(prompt("Digite a opção de categoria 1, 2, 3 ou 4:"))
const quantidadeDeIngressos = Number(prompt("Digite a quantidade de ingressos:"))
let valorDolar = 4.10
 
const ingressosDomesticosSemifinais = {
  categoria1: 1, valorCategoria1: 1320,
  categoria2: 2, valorCategoria2: 880,  
  categoria3: 3, valorCategoria3: 550, 
  categoria4: 4, valorCategoria4: 220,
  publico: "Doméstico",
  jogo: "SF - Semifinais",
  publicoInternacional: "Internacional"
}

const ingressosDomesticosDecisaoTerceiroLugar = {
  categoria1: 1, valorCategoria1: 660, 
  categoria2: 2, valorCategoria2: 440, 
  categoria3: 3, valorCategoria3: 330, 
  categoria4: 4, valorCategoria4: 170,
  publico: "Doméstico",
  jogo: "DT - Decisão do 3º lugar",
  publicoInternacional: "Internacional" 
}

const ingressosDomesticoFinal = {
  categoria1: 1, valorCategoria1: 1980,
  categoria2: 2, valorCategoria2: 1320,
  categoria3: 3, valorCategoria3: 880,
  categoria4: 4, valorCategoria4: 330, 
  publico: "Doméstico",
  jogo: "FI - Final",
  publicoInternacional: "Internacional"
}


      if (tipoDeJogo === "DO" && etapaDoJogo === "SF" && categoriaDoJogo === 1) {
            console.log("---> Dados da compra <---")
            console.log(`Nome do cliente: ${nomeCliente}`)
            console.log("Tipo de Jogo:", ingressosDomesticosSemifinais.publico)
            console.log("Etapa do Jogo:", ingressosDomesticosSemifinais.jogo)
            console.log("Categoria:", ingressosDomesticosSemifinais.categoria1)
            console.log("Quantidade de Ingressos:", quantidadeDeIngressos)

            console.log("---> Valores <---")

            console.log("Valor do ingresso: R$",ingressosDomesticosSemifinais.valorCategoria1)
            console.log("Valor Total: R$", quantidadeDeIngressos * ingressosDomesticosSemifinais.valorCategoria1)
      }
      else if (tipoDeJogo === "DO" && etapaDoJogo === "SF" && categoriaDoJogo === 2){
            console.log("---> Dados da compra <---")
            console.log(`Nome do cliente: ${nomeCliente}`)
            console.log("Tipo de Jogo:", ingressosDomesticosSemifinais.publico)
            console.log("Etapa do Jogo:", ingressosDomesticosSemifinais.jogo)
            console.log("Categoria:", ingressosDomesticosSemifinais.categoria2)
            console.log("Quantidade de Ingressos:", quantidadeDeIngressos)

            console.log("---> Valores <---")

            console.log("Valor do ingresso: R$", ingressosDomesticosSemifinais.valorCategoria2)
            console.log("Valor Total: R$", quantidadeDeIngressos * ingressosDomesticosSemifinais.valorCategoria2)
      }
      else if (tipoDeJogo === "DO" && etapaDoJogo === "SF" && categoriaDoJogo === 3){
            console.log("---> Dados da compra <---")
            console.log(`Nome do cliente: ${nomeCliente}`)
            console.log("Tipo de Jogo:", ingressosDomesticosSemifinais.publico)
            console.log("Etapa do Jogo:", ingressosDomesticosSemifinais.jogo)
            console.log("Categoria:", ingressosDomesticosSemifinais.categoria3 )
            console.log("Quantidade de Ingressos:", quantidadeDeIngressos)

            console.log("---> Valores <---")

            console.log("Valor do ingresso: R$",ingressosDomesticosSemifinais.valorCategoria3)
            console.log("Valor Total: R$", quantidadeDeIngressos * ingressosDomesticosSemifinais.valorCategoria3)
      }
      else if(tipoDeJogo === "DO" && etapaDoJogo === "SF" && categoriaDoJogo === 4) {
            console.log("---> Dados da compra <---")
            console.log(`Nome do cliente: ${nomeCliente}`)
            console.log("Tipo de Jogo:", ingressosDomesticosSemifinais.publico)
            console.log("Etapa do Jogo:", ingressosDomesticosSemifinais.jogo)
            console.log("Categoria:", ingressosDomesticosSemifinais.categoria4)
            console.log("Quantidade de Ingressos:", quantidadeDeIngressos)
      
            console.log("---> Valores <---")
      
            console.log("Valor do ingresso: R$",ingressosDomesticosSemifinais.valorCategoria4)
            console.log("Valor Total: R$", quantidadeDeIngressos * ingressosDomesticosSemifinais.valorCategoria4)
      }
      else if (tipoDeJogo === "DO" && etapaDoJogo === "DT" && categoriaDoJogo === 1) {
            console.log("---> Dados da compra <---")
            console.log(`Nome do cliente: ${nomeCliente}`)
            console.log("Tipo de Jogo:", ingressosDomesticosDecisaoTerceiroLugar.publico)
            console.log("Etapa do Jogo:", ingressosDomesticosDecisaoTerceiroLugar.jogo)
            console.log("Categoria:", ingressosDomesticosDecisaoTerceiroLugar.categoria1)
            console.log("Quantidade de Ingressos:", quantidadeDeIngressos)

            console.log("---> Valores <---")

            console.log("Valor do ingresso: R$",ingressosDomesticosDecisaoTerceiroLugar)
            console.log("Valor Total: R$", quantidadeDeIngressos * ingressosDomesticosDecisaoTerceiroLugar.valorCategoria1)
      }
      else if (tipoDeJogo === "DO" && etapaDoJogo === "DT" && categoriaDoJogo === 2){
            console.log("---> Dados da compra <---")
            console.log(`Nome do cliente: ${nomeCliente}`)
            console.log("Tipo de Jogo:", ingressosDomesticosDecisaoTerceiroLugar.publico)
            console.log("Etapa do Jogo:", ingressosDomesticosDecisaoTerceiroLugar.jogo)
            console.log("Categoria:", ingressosDomesticosDecisaoTerceiroLugar.categoria2)
            console.log("Quantidade de Ingressos:", quantidadeDeIngressos)

            console.log("---> Valores <---")

            console.log("Valor do ingresso: R$",ingressosDomesticosDecisaoTerceiroLugar.valorCategoria2)
            console.log("Valor Total: R$", quantidadeDeIngressos * ingressosDomesticosDecisaoTerceiroLugar.valorCategoria2)
      }
      else if (tipoDeJogo === "DO" && etapaDoJogo === "DT" && categoriaDoJogo === 3)
      {
            console.log("---> Dados da compra <---")
            console.log(`Nome do cliente: ${nomeCliente}`)
            console.log("Tipo de Jogo:", ingressosDomesticosDecisaoTerceiroLugar.publico)
            console.log("Etapa do Jogo:", ingressosDomesticosDecisaoTerceiroLugar.jogo)
            console.log("Categoria:", ingressosDomesticosDecisaoTerceiroLugar.categoria3)
            console.log("Quantidade de Ingressos:", quantidadeDeIngressos)

            console.log("---> Valores <---")

            console.log("Valor do ingresso: R$", ingressosDomesticosDecisaoTerceiroLugar.valorCategoria3)
            console.log("Valor Total: R$", quantidadeDeIngressos * ingressosDomesticosDecisaoTerceiroLugar.valorCategoria3)
      }
      else if (tipoDeJogo === "DO" && etapaDoJogo === "DT" && categoriaDoJogo === 4) {
            console.log("---> Dados da compra <---")
            console.log(`Nome do cliente: ${nomeCliente}`)
            console.log("Tipo de Jogo:", ingressosDomesticosDecisaoTerceiroLugar.publico)
            console.log("Etapa do Jogo:", ingresosDomesticosDecisaoTerceiroLugar.jogo)
            console.log("Categoria:", ingressosDomesticosDecisaoTerceiroLugar.categoria4)
            console.log("Quantidade de Ingressos:", quantidadeDeIngressos)
      
            console.log("---> Valores <---")
      
            console.log("Valor do ingresso: R$", ingressosDomesticosDecisaoTerceiroLugar.valorCategoria4)
            console.log("Valor Total: R$", quantidadeDeIngressos * ingressosDomesticosDecisaoTerceiroLugar.valorCategoria4)
      }
      else if (tipoDeJogo === "DO" && etapaDoJogo === "FI" && categoriaDoJogo === 1) {
            console.log("---> Dados da compra <---")
            console.log(`Nome do cliente: ${nomeCliente}`)
            console.log("Tipo de Jogo:", ingressosDomesticoFinal.publico)
            console.log("Etapa do Jogo:", ingressosDomesticoFinal.jogo)
            console.log("Categoria:", ingressosDomesticoFinal.categoria1)
            console.log("Quantidade de Ingressos:", quantidadeDeIngressos)
    
            console.log("---> Valores <---")
    
            console.log("Valor do ingresso: R$", ingressosDomesticoFinal.valorCategoria1)
            console.log("Valor Total: R$", quantidadeDeIngressos * ingressosDomesticoFinal.valorCategoria1)
      }
      else if (tipoDeJogo === "DO" && etapaDoJogo === "FI" && categoriaDoJogo === 2){
            console.log("---> Dados da compra <---")
            console.log(`Nome do cliente: ${nomeCliente}`)
            console.log("Tipo de Jogo:", ingressosDomesticoFinal.publico)
            console.log("Etapa do Jogo:", ingressosDomesticoFinal.jogo)
            console.log("Categoria:", ingressosDomesticoFinal.categoria2)
            console.log("Quantidade de Ingressos:", quantidadeDeIngressos)
    
            console.log("---> Valores <---")
    
            console.log("Valor do ingresso: R$", ingressosDomesticoFinal.valorCategoria2)
            console.log("Valor Total: R$", quantidadeDeIngressos * ingressosDomesticoFinal.valorCategoria2)
      }
      else if (tipoDeJogo === "DO" && etapaDoJogo === "FI" && categoriaDoJogo === 3){
            console.log("---> Dados da compra <---")
            console.log(`Nome do cliente: ${nomeCliente}`)
            console.log("Tipo de Jogo:", ingressosDomesticoFinal.publico)
            console.log("Etapa do Jogo:", ingressosDomesticoFinal.jogo)
            console.log("Categoria:", ingressosDomesticoFinal.categoria3)
            console.log("Quantidade de Ingressos:", quantidadeDeIngressos)
    
            console.log("---> Valores <---")
    
            console.log("Valor do ingresso: R$", ingressosDomesticoFinal.valorCategoria3)
            console.log("Valor Total: R$", quantidadeDeIngressos * ingressosDomesticoFinal.valorCategoria3)
      }
      else if (tipoDeJogo === "DO" && etapaDoJogo === "FI" && categoriaDoJogo === 4) {
            console.log("---> Dados da compra <---")
            console.log(`Nome do cliente: ${nomeCliente}`)
            console.log("Tipo de Jogo:", ingressosDomesticoFinal.publico)
            console.log("Etapa do Jogo:", ingressosDomesticoFinal.jogo)
            console.log("Categoria:", ingressosDomesticoFinal.categoria4)
            console.log("Quantidade de Ingressos:", quantidadeDeIngressos)
      
            console.log("---> Valores <---")
      
            console.log("Valor do ingresso: R$", ingressosDomesticoFinal.valorCategoria4)
            console.log("Valor Total: R$", quantidadeDeIngressos * ingressosDomesticoFinal.valorCategoria4)
      }

      else if (tipoDeJogo === "IN" && etapaDoJogo === "SF" && categoriaDoJogo === 1) {
            console.log("---> Dados da compra <---")
            console.log(`Nome do cliente: ${nomeCliente}`)
            console.log("Tipo de Jogo:", ingressosDomesticosSemifinais.publicoInternacional)
            console.log("Etapa do Jogo:", ingressosDomesticosSemifinais.jogo)
            console.log("Categoria:", ingressosDomesticosSemifinais.categoria1)
            console.log("Quantidade de Ingressos:", quantidadeDeIngressos)
  
            console.log("---> Valores <---")
  
            console.log("Valor do ingresso: U$",ingressosDomesticosSemifinais.valorCategoria1)
            console.log("Valor Total: U$", (quantidadeDeIngressos * ingressosDomesticosSemifinais.valorCategoria1) * valorDolar)
        }
        else if (tipoDeJogo === "IN" && etapaDoJogo === "SF" && categoriaDoJogo === 2){
            console.log("---> Dados da compra <---")
            console.log(`Nome do cliente: ${nomeCliente}`)
            console.log("Tipo de Jogo:", ingressosDomesticosSemifinais.publicoInternacional)
            console.log("Etapa do Jogo:", ingressosDomesticosSemifinais.jogo)
            console.log("Categoria:", ingressosDomesticosSemifinais.categoria2)
            console.log("Quantidade de Ingressos:", quantidadeDeIngressos)
  
            console.log("---> Valores <---")
  
            console.log("Valor do ingresso: U$", ingressosDomesticosSemifinais.valorCategoria2)
            console.log("Valor Total: U$", (quantidadeDeIngressos * ingressosDomesticosSemifinais.valorCategoria2) * valorDolar)
        }
        else if (tipoDeJogo === "IN" && etapaDoJogo === "SF" && categoriaDoJogo === 3){
            console.log("---> Dados da compra <---")
            console.log(`Nome do cliente: ${nomeCliente}`)
            console.log("Tipo de Jogo:", ingressosDomesticosSemifinais.publicoInternacional)
            console.log("Etapa do Jogo:", ingressosDomesticosSemifinais.jogo)
            console.log("Categoria:", ingressosDomesticosSemifinais.categoria3 )
            console.log("Quantidade de Ingressos:", quantidadeDeIngressos)
  
            console.log("---> Valores <---")
  
            console.log("Valor do ingresso: U$",ingressosDomesticosSemifinais.valorCategoria3)
            console.log("Valor Total: U$", (quantidadeDeIngressos * ingressosDomesticosSemifinais.valorCategoria3) * valorDolar)
        }
        else if(tipoDeJogo === "IN" && etapaDoJogo === "SF" && categoriaDoJogo === 4) {
            console.log("---> Dados da compra <---")
            console.log(`Nome do cliente: ${nomeCliente}`)
            console.log("Tipo de Jogo:", ingressosDomesticosSemifinais.publicoInternacional)
            console.log("Etapa do Jogo:", ingressosDomesticosSemifinais.jogo)
            console.log("Categoria:", ingressosDomesticosSemifinais.categoria4)
            console.log("Quantidade de Ingressos:", quantidadeDeIngressos)
      
            console.log("---> Valores <---")
      
            console.log("Valor do ingresso: U$",ingressosDomesticosSemifinais.valorCategoria4,)
            console.log("Valor Total: U$", (quantidadeDeIngressos * ingressosDomesticosSemifinais.valorCategoria4) * valorDolar)
        }
        else if (tipoDeJogo === "IN" && etapaDoJogo === "DT" && categoriaDoJogo === 1) {
            console.log("---> Dados da compra <---")
            console.log(`Nome do cliente: ${nomeCliente}`)
            console.log("Tipo de Jogo:", ingressosDomesticosDecisaoTerceiroLugar.publicoInternacional)
            console.log("Etapa do Jogo:", ingressosDomesticosDecisaoTerceiroLugar.jogo)
            console.log("Categoria:", ingressosDomesticosDecisaoTerceiroLugar.categoria1)
            console.log("Quantidade de Ingressos:", quantidadeDeIngressos)
    
            console.log("---> Valores <---")
    
            console.log("Valor do ingresso: U$",ingressosDomesticosDecisaoTerceiroLugar)
            console.log("Valor Total: U$", (quantidadeDeIngressos * ingressosDomesticosDecisaoTerceiroLugar.valorCategoria1) * valorDolar)
        }
        else if (tipoDeJogo === "IN" && etapaDoJogo === "DT" && categoriaDoJogo === 2){
            console.log("---> Dados da compra <---")
            console.log(`Nome do cliente: ${nomeCliente}`)
            console.log("Tipo de Jogo:", ingressosDomesticosDecisaoTerceiroLugar.publicoInternacional)
            console.log("Etapa do Jogo:", ingressosDomesticosDecisaoTerceiroLugar.jogo)
            console.log("Categoria:", ingressosDomesticosDecisaoTerceiroLugar.categoria2)
            console.log("Quantidade de Ingressos:", quantidadeDeIngressos)
    
            console.log("---> Valores <---")
    
            console.log("Valor do ingresso: U$",ingressosDomesticosDecisaoTerceiroLugar.valorCategoria2)
            console.log("Valor Total: U$", (quantidadeDeIngressos * ingressosDomesticosDecisaoTerceiroLugar.valorCategoria2) * valorDolar)
        }
        else if (tipoDeJogo === "IN" && etapaDoJogo === "DT" && categoriaDoJogo === 3)
        {
            console.log("---> Dados da compra <---")
            console.log(`Nome do cliente: ${nomeCliente}`)
            console.log("Tipo de Jogo:", ingressosDomesticosDecisaoTerceiroLugar.publicoInternacional)
            console.log("Etapa do Jogo:", ingressosDomesticosDecisaoTerceiroLugar.jogo)
            console.log("Categoria:", ingressosDomesticosDecisaoTerceiroLugar.categoria3)
            console.log("Quantidade de Ingressos:", quantidadeDeIngressos)
    
            console.log("---> Valores <---")
    
            console.log("Valor do ingresso: U$", ingressosDomesticosDecisaoTerceiroLugar.valorCategoria3)
            console.log("Valor Total: U$", (quantidadeDeIngressos * ingressosDomesticosDecisaoTerceiroLugar.valorCategoria3) * valorDolar)
        }
        else if (tipoDeJogo === "IN" && etapaDoJogo === "DT" && categoriaDoJogo === 4) {
            console.log("---> Dados da compra <---")
            console.log(`Nome do cliente: ${nomeCliente}`)
            console.log("Tipo de Jogo:", ingressosDomesticosDecisaoTerceiroLugar.publicoInternacional)
            console.log("Etapa do Jogo:", ingressosDomesticosDecisaoTerceiroLugar.jogo)
            console.log("Categoria:", ingressosDomesticosDecisaoTerceiroLugar.categoria4)
            console.log("Quantidade de Ingressos:", quantidadeDeIngressos)
      
            console.log("---> Valores <---")
      
            console.log("Valor do ingresso: U$", ingressosDomesticosDecisaoTerceiroLugar.valorCategoria4)
            console.log("Valor Total: U$", (quantidadeDeIngressos * ingressosDomesticosDecisaoTerceiroLugar.valorCategoria4) * valorDolar)
        }
        else if (tipoDeJogo === "IN" && etapaDoJogo === "FI" && categoriaDoJogo === 1) {
            console.log("---> Dados da compra <---")
            console.log(`Nome do cliente: ${nomeCliente}`)
            console.log("Tipo de Jogo:", ingressosDomesticoFinal.publicoInternacional)
            console.log("Etapa do Jogo:", ingressosDomesticoFinal.jogo)
            console.log("Categoria:", ingressosDomesticoFinal.categoria1)
            console.log("Quantidade de Ingressos:", quantidadeDeIngressos)
    
            console.log("---> Valores <---")
    
            console.log("Valor do ingresso: U$", ingressosDomesticoFinal.valorCategoria1)
            console.log("Valor Total: U$", (quantidadeDeIngressos * ingressosDomesticoFinal.valorCategoria1) * valorDolar)
        }
        else if (tipoDeJogo === "IN" && etapaDoJogo === "FI" && categoriaDoJogo === 2){
            console.log("---> Dados da compra <---")
            console.log(`Nome do cliente: ${nomeCliente}`)
            console.log("Tipo de Jogo:", ingressosDomesticoFinal.publicoInternacional)
            console.log("Etapa do Jogo:", ingressosDomesticoFinal.jogo)
            console.log("Categoria:", ingressosDomesticoFinal.categoria2)
            console.log("Quantidade de Ingressos:", quantidadeDeIngressos)
    
            console.log("---> Valores <---")
    
            console.log("Valor do ingresso: U$", ingressosDomesticoFinal.valorCategoria2)
            console.log("Valor Total: U$", (quantidadeDeIngressos * ingressosDomesticoFinal.valorCategoria2) * valorDolar)
        }
        else if (tipoDeJogo === "IN" && etapaDoJogo === "FI" && categoriaDoJogo === 3){
            console.log("---> Dados da compra <---")
            console.log(`Nome do cliente: ${nomeCliente}`)
            console.log("Tipo de Jogo:", ingressosDomesticoFinal.publicoInternacional)
            console.log("Etapa do Jogo:", ingressosDomesticoFinal.jogo)
            console.log("Categoria:", ingressosDomesticoFinal.categoria3)
            console.log("Quantidade de Ingressos:", quantidadeDeIngressos)
    
            console.log("---> Valores <---")
    
            console.log("Valor do ingresso: U$", ingressosDomesticoFinal.valorCategoria3)
            console.log("Valor Total: U$", (quantidadeDeIngressos * ingressosDomesticoFinal.valorCategoria3) * valorDolar)
       }
       else{ 
            console.log("Opções invalidas, tente novamente!")
       }

