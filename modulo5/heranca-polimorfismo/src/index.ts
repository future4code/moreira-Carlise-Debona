
//HERANÇA
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

/////////////////////////////////////////////////////////////////////////////////////////////////////

//POLIMORDFISMO

//Exercício 1
//a) Imprimiu todas as informações

export interface Client {
  name: string;
  // Refere-se ao nome do cliente

  registrationNumber: number;
  // Refere-se ao número de cadastro do cliente na concessionária
	// como se fosse um id

  consumedEnergy: number;
  // Refere-se à energia consumida pelo cliente no mês

  calculateBill(): number;
  // Retorna o valor da conta em reais
}


const client: Client = {
  name: "Goli",
  registrationNumber: 1,
  consumedEnergy: 100,

  calculateBill: () => {
    return 2;
  }
}

console.log(client);
console.log(client.name);
console.log(client.registrationNumber);
console.log(client.consumedEnergy);
console.log(client.calculateBill());

//Exercício 2
//a) não pode criar uma instância de uma classe abstrata.
//b) criar uma classe que não seja abstrata e ai sim poderiamos criar uma instância dela

export abstract class Place {
  constructor(protected cep: string) {}

	public getCep(): string {
		return this.cep;
  }
}

//const place = new Place("90680570");

//Exercício 3
//1) criar uma class e usar o  abstract como herança e depois a instância.
//2) O nosso sistema possui 3 tipos de lugares e preferimos criar uma classe para representar cada um deles. 
//Então não há motivos para querermos instanciar um objeto do tipo Place porque, no nosso contexto, 
//todos os casos deles já estão cobertos por outras classes.
//3) Place é abstrata porque não enxergamos uma situação em que seria necessário criar uma instância dessa classe.

export class Residence extends Place {
  constructor(
    private dwellersQuantity: number,

    cep: string
  ) {
    super(cep);
  }
  
  public getDwellersQuantity(): number {
    return this.dwellersQuantity
  }
}

export class Commerce extends Place {
  constructor(
    private floorsQuantity: number,
    // Refere-se à quantidade de andares do lugar

    cep: string
  ) {
    super(cep);
  }

  public getFloorsQuantity(): number {
    return this.floorsQuantity;
  }
}

export class Industry extends Place {
  constructor(
    private machinesQuantity: number,
    // Refere-se à quantidade de máquinas do local

    cep: string
  ) 
  {
    super(cep);
  }

  public getMachinesQuantity(): number {
    return this.machinesQuantity;
  }
}

const industry = new Industry(10, "90680-570")
console.log(industry);
console.log(industry.getCep(), industry.getMachinesQuantity())

const commerce = new Commerce(215, "90735-000")
console.log(commerce)
console.log(commerce.getCep(), commerce.getFloorsQuantity())

const residence = new Residence(1245, "78905-000")
console.log(residence)
console.log(residence.getCep(), residence.getDwellersQuantity())

//Exercício 4
// possuem dois métodos get getCpf e calculateBill/. suas proriedade são name, registrationNumber, consumedEnergy, cpf, residentsQuantity e cep.

class ResidentialClient extends Residence implements Client {
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private cpf: string,
    residentsQuantity: number,
    cep: string
  ) {
    super(residentsQuantity, cep);
  }

  public getCpf(): string {
    return this.cpf;
  }

  public calculateBill(): number {
    return this.consumedEnergy * 0.75;
  }
}

const dados = new ResidentialClient(
  "Caca",
  44, 
  100,
  "023.789.874.55",
  123,
  "90680-570"
)
console.log(dados)

console.log(
dados.getCep(), 
dados.calculateBill())

//Exercício 5
//a) Ambas são filhas de alguma classe e as duas tem o implements da mesma interface igual.
//b) A diferença é da onde ela está herdando as informações são classes difernetes com propriedades diferentes.
class CommercialClient extends Commerce implements Client {
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private cnpj: string,
    floorsQuantity: number,
    cep: string
  ) {
    super(floorsQuantity, cep);
  }

  public calculateBill(): number {
    return this.consumedEnergy * 0.53;
  }

  public getCnpj(): string {
    return this.cnpj;
  }
}


const persondados = new ResidentialClient(
  "St Ltda",
  1523, 
  800,
  "023123456/000189",
  1283,
  "90680-570"
)
console.log(persondados)

console.log(
dados.getCep(), 
dados.calculateBill())

//Exercício 6
//a) deve ser filha da  Class Industry, pois ela tem seus atributos relacionado a industria.
//b) interface Client, pois seus atributos são relacionados a industria máquinas.
//c) pq tem alguns dados privados
class IndustrialClinet extends Industry implements Client {
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private insdustryNumber: string, // tanto faz ser string ou number
    machinesQuantity: number,
    cep: string
  ) {
    super(machinesQuantity, cep);
  }

  public getIndustryNumber(): string {
    return this.insdustryNumber;
  }


  public calculateBill(): number {
    return this.consumedEnergy * 0.45 + this.machinesQuantity * 100;
  }
}
