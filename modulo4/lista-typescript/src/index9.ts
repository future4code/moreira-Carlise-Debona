//9.

const quantidadeDeLetras = (letra: string) =>{
  let quantidade: number = letra.length
  for(let i = letra.length; i > 1; i--)
  quantidade = quantidade * (i -1)
  return(quantidade)
}
console.log(quantidadeDeLetras("Carlise"))
