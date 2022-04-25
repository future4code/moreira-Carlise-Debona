//3. 

enum GENERO {
  ACAO="ação",
  DRAMA="drama",
  COMEDIA="comédia",
  ROMANCE="romance",
  TERROR="terror"
} 

type TipoDeFilme = {
  nome: string,
  ano: number,
  genero: string,
  pontos: number
}

const organizaFilme = (nome: string, ano: number, genero: string, pontos: number) => {
    let dadoDoFilme: TipoDeFilme = {
      nome: nome,
      ano: ano,
      genero: genero,
      pontos: pontos
    }
  return dadoDoFilme
}

console.log(organizaFilme("O Segredo", 2020, GENERO.ROMANCE, 10))