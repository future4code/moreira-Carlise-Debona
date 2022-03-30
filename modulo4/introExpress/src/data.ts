type numeroId= number|string;

type Pessoas = {
  id: numeroId,
  nome: string,
  phone: number,
  email: numeroId,
  website: numeroId,
}

export const dadosPessoas: Pessoas[] = [
    {
      id: 123,
      nome: "cacá",
      phone: 51996396284,
      email: "carlisegd@gmail.com",
      website: "www.startps.com"
    },
    {
      id: 1234,
      nome: "Enzo",
      phone: 21987654321,
      email: "enzo@startps.com",
      website: "www.startps.com"
    },
    {
      id: 12345,
      nome: "Ewerton",
      phone: 9812345678,
      email: "ewerton@startps.com",
      website: "www.startps.com"
    }
];

export type Post = {
  id: numeroId,
  nome: string,
  title: string,
  body: string,

};

export const posts: Post[] = [
  {
    id: 123,
    nome: "cacá",
    title: "Churras da turma ",
    body: "Ai vamos ter um churras da turma Moreira Final de semanaaaa!!!",

  },
  {
    id: 1234,
    nome: "Enzo",
    title: "Vale do Silício",
    body: "Lugar incrível conheci a google, neflix, apple no dia hoje e amanhã vamos participar de um pit de startps :) !!!",

  },
  {
    id: 12345,
    nome: "Ewerton",
    title: "Cursos novos",
    body: "Olá pessoal!!! Conheça os cursos novos da Luty é só clical em Saiba mais.",

  },
];

// eu prefiro fazer as coisas separadas, pq fica mais organizado para fazer a lógica e organização dos arquivos.