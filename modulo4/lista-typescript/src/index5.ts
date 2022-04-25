//5.

type usuarios = {
  name: string,
  email:string,
  role: string
}

const dadosDePessoas: usuarios[] = [
  {name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
]

function listaEmail( ) {
  const emails = dadosDePessoas.filter((dados) => {
    return dados.role === "admin"
  }). map((item) => {
    return item.email
  })

  return emails
 }
 console.log(listaEmail())