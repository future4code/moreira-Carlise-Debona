type Clientes = {
  cliente: string;
  saldoTotal:number;
  debitos: number[];
}[];

const dadosDeClientes: Clientes = [
  { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
];

const contaNegativa = (pessoa: Clientes) => {
  const contas = pessoa.filter((negativa) => {

    const resultadoDaConta = negativa.debitos.reduce((cc, soma) => {

    return cc + soma;
  },0);

  const contasNegativas = negativa.saldoTotal - resultadoDaConta
  return contasNegativas < 0});

  const listaClientes = contas.map((numero)=> {
    const resultadoDaLista = numero.debitos.reduce((valor, total)=>{
    return valor + total;},0);

    numero.saldoTotal = numero.saldoTotal - resultadoDaLista
    numero.debitos = []
  return numero})
  return listaClientes
 }
 console.log(contaNegativa(dadosDeClientes))