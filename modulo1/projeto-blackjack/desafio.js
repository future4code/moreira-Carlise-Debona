/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

let jogador = []
let computador = []
let primeirasCartas = false
let comprandoCarta = true

if(confirm('Bem-vinde ao jogo de Blackjack!" + "\n" + "Quer iniciar uma nova rodada?')){

  while (!primeirasCartas){
        jogador.push(comprarCarta())
        jogador.push(comprarCarta())
        computador.push(comprarCarta())
        computador.push(comprarCarta())

            if((jogador[0].valor === 'A' && jogador[1].valor === 'A') || (computador[0].valor === 'A' && computador[1].valor === 'A')) { 
                      jogador = [] , computador = []
            } else {
                      primeirasCartas = false
            }
  }  }
