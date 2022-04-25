// //7. 

type Estoque = {
  nome: string;
  quantidade: number;
  valorUnitario: number | string;
}

const listaEstoque: Estoque[] = [
	{ nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040},
	{ nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0},
	{ nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5},
	{ nome: "O precioso", quantidade: 1, valorUnitario: 9181.923},
	{ nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17},
	{ nome: "Plumbus", quantidade: 13, valorUnitario: 140.44},
	{ nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915}
]

const ajustaPreco = (preco :number): string => {
	const valorAjustado: string = preco.toFixed(2).replace('.', ',')
	return "R$ "+valorAjustado
}

const ordenaQuantidade = (dados: Estoque[]) =>{
  const valorConvertido = dados.map ((valores)=>{
    valores.valorUnitario = ajustaPreco(valores.valorUnitario as number)
    return valores
  }).sort((quantiade1, quantidade2) => {return quantiade1.quantidade - quantidade2.quantidade})
  return valorConvertido
}
console.log(ordenaQuantidade(listaEstoque))