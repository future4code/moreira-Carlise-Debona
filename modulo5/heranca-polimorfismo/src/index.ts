//Exercício 1
//a) não porque ela é privada e não tem o get
//b)1 vez.

class User {
  private id: string;
  private email: string;
  private name: string;
  private password: string;

  constructor(
		id: string,
		email: string,
		name: string,
		password: string
	){
		console.log("Chamando o construtor da classe User")
		this.id = id
		this.email = email
		this.name = name 
		this.password = password
	}

	public getId(): string {
		return this.id
	}

	public getEmail(): string {
		return this.email
	}

	public getName(): string {
		return this.name
	}

 
}

const user = new User("123", "carlise@gmail.com", "Carlise Debona", "1234AB5")
console.log(user.getId())
console.log(user.getEmail())
console.log(user.getName())

//Exercício 2
