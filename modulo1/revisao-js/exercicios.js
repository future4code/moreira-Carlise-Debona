// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
return array.reverse()

}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort((a,b) => a -b)

}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  let pares = []
 
  for (let i = 0; i < array.length; i++) {
           if(array[i] % 2 === 0)
           {
            pares.push(array[i])
    	    }
    }
    return pares
}


// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
let pares = []
 
for (let i = 0; i < array.length; i++) {
           if(array[i] % 2 === 0) {
          pares.push((array[i]**2))
    	    }
    }
return pares
}


// EXERCÍCIO 06
function retornaMaiorNumero(array) {
let maiorNumero = array[0]

    for(let i = 1; i < array.length; i++ ) {
         if(array[i] > maiorNumero){
           maiorNumero = array[i]
          }
    }

  return maiorNumero
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
let numeroMaior
let numeroMenor
let diferenca 
let maiorDivisivel 

      if (num1 > num2){
        numeroMaior = num1
        numeroMenor = num2
      }
      else{
        numeroMenor = num1
        numeroMaior = num2
      }
      maiorDivisivel = numeroMaior % numeroMenor === 0
      diferenca = numeroMaior - numeroMenor

      return {maiorNumero: numeroMaior, maiorDivisivelPorMenor:  maiorDivisivel, diferenca: diferenca }
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  let numerosPares = []
 
      for (let i = 0; numerosPares.length < n; i++) {
        if(i % 2 === 0) {
          numerosPares.push(i)
      }
  }
  return numerosPares
}
  
// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

  if(ladoA === ladoB && ladoA === ladoC && ladoB === ladoC){
    return  "Equilátero"
  }
  else if (ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC)
  {
    return "Escaleno"
  }
  else{
    return "Isósceles"
  }

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  let novoArray =  array.sort((a,b) => a -b)
  let ultimoElemento = novoArray[novoArray.length-2]
  let segundoMaior = novoArray[1]
  let segundoMaiorEMenor =[ultimoElemento, segundoMaior]

return segundoMaiorEMenor
}
// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {


return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`

  }

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {

novosDadosDePessoas = {... pessoa, nome:"ANÔNIMO"}
  
return novosDadosDePessoas
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {

  const permissaoParaEntrar = pessoas.filter((item, index, array) => {
  return item.nome, item.altura > 1.5 && item.idade > 14 && item.idade < 60 
})
return permissaoParaEntrar
}
// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {

  const naoTemPermissaoParaEntrar = pessoas.filter((item, index, array) => {
  return item.nome, item.altura <= 1.5 || item.idade <= 14 || item.idade >= 60 
})
return naoTemPermissaoParaEntrar
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
contas.forEach((contaDoCliente) => {
  let totalDeCompras = 0
  contaDoCliente.compras.forEach((gasto) => {
    totalDeCompras = totalDeCompras + gasto
  })
  contaDoCliente.saldoTotal = contaDoCliente.saldoTotal - totalDeCompras
  contaDoCliente.compras =[]
})

return contas
}


// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
  consultas.sort(function (a, b) {
    if (a.nome > b.nome) {
      return 1;
    }
    if (a.nome < b.nome) {
      return -1;
    }
  
    return 0;
  });
return consultas
}
// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
  consultas.sort(function (a, b) {
    return a.dataDaConsulta > b.dataDaConsulta
})

return consultas
}