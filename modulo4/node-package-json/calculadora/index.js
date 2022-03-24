const operacao = (process.argv[2])
const primeiroNumero = Number((process.argv[3]))
const segundoNumero = Number((process.argv[4]))

switch (operacao){
    case 'soma':
        console.log(primeiroNumero + segundoNumero)
    break
    case 'subtracao':
        console.log(primeiroNumero - segundoNumero)
    break
    case 'multiplicacao':
        console.log(primeiroNumero * segundoNumero)
    break
    case 'divisao':
        console.log(primeiroNumero / segundoNumero)
    break
}