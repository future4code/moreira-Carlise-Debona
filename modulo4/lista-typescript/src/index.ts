//1. 

const frase = ((nome: string, dataAniver: string) :string  => {
  const data:string[] = dataAniver.split("/")
  
  return `Olá me chamo ${nome}, nasci no dia ${data[0]} do mês de ${data[1]} do ano de ${data[2]}`;
})

console.log(frase("Carlise Debona", "14/Novembro/1989"));