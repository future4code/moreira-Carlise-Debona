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
		password: string,
  
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

   public introduceYourself() : string {
    return `Olá, ${this.name}. Bom dia!`
  }

 
}

const user = new User("123", "carlise@gmail.com", "Carlise Debona", "1234AB5")
console.log(user.getId())
console.log(user.getEmail())
console.log(user.getName())

//Exercício 2

//a) foi impresso somente 1 vez.
// b) foi impresso 2 vezes, pois foi uma vez foi chamado pela classe e a outra vez pela class Custtomer que herdou dados.

class Customer extends User {
  public purchaseTotal: number = 0;
  private creditCard: string;

  constructor(
    id: string,
    email: string,
    name: string,
    password: string,
    creditCard: string,
  ) {
    super(id, email, name, password);
    console.log("Chamando o construtor da classe Customer");
    this.creditCard = creditCard;
  }

  public getCreditCard(): string {
    return this.creditCard;
  }
}

const card = new Customer("02", "caca@gmail.com", "Carlise Debona", "12B5", "5000-1234-3214-5687")

console.log(card)
console.log(
  card.getId(), 
  card.getName(), 
  card.getEmail(), 
  card.getCreditCard(), 
  card.purchaseTotal,
  );

//Exercício 3 
  //a) a senha só poderia ser exibida se no User ussase um:
  // public getPassword() : string {return this.password}

  const person = new Customer("03", "fulano@gmail.com", "Fulando Debona", "78rT9", "9632-7412-5641-2365")

console.log(person)
console.log(
  person.getId(), 
  person.getName(), 
  person.getEmail(), 
  person.getCreditCard(),
  person.purchaseTotal
  );

  //Exercício 4
  console.log(
    person.getId(), 
    person.getName(), 
    person.getEmail(), 
    person.getCreditCard(),
    person.purchaseTotal,
    person.introduceYourself()
    );

     //Exercício 5
     console.log(
      person.getId(), 
      person.getName(), 
      person.getEmail(), 
      person.getCreditCard(),
      person.purchaseTotal,
      person.introduceYourself()
      );