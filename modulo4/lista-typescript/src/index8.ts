//8.

const renovacaoRG = (anoNascido: number, anoEmissaoRG: number, anoAtual: number) :boolean => {
  let anoNascimento: number = anoNascido;
  let dataEmissao: number = anoEmissaoRG;
  let ano:  number = anoAtual
  let idade: number = anoNascimento - ano;
  let renovacao: number = anoAtual - dataEmissao;


  if( idade <= 20){
  return renovacao >= 5 ? true : false
  }
  else if( idade <= 50){
    return renovacao >= 10 ? true : false 
  }
  else if(idade > 50){
    return renovacao >=15 ? true : false 
  }
  else{
    return  false
  }
}

console.log(renovacaoRG(1989, 2007,2022))