import { Request, Response } from "express";
import app from "./app";

//EXERCÍCIO 1
//a) O constructor serve para inicializer variáveis e instanciar objetos da classe onde foi definido declarado por função. 
// Ele é chamado por intancinado a classe.

//b) Foi chamando somente uma vez.


  class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }

    getCpf(){
      return this.cpf
    }
  
    getName(){
      return this.name
    }
  
    getAge(){
      return this.age
    }

    getBalance(){
      return this.balance
    }

    getTransactions(){
      return this.transactions
    }

    setTransaction(value: Transaction){
      return this.transactions.push(value)
    }
  
  }


const User = new UserAccount("123-123-123-12", "Carlise Debona", 32);

console.log(User)


//c) Variáveis privadas só podem ser acessadas de dentro da própria classe (usando a keyword this).

//EXERCÍCIO 2

class Transaction {
  private description: string;
  private value: number;
  private date: string;

  constructor(description: string, value: number, date: string) {
    this.description = description;
    this.value = value;
    this.date = date;
  }

  getDescription(){
    return this.description
  }

  getValue(){
    return this.value
  }

  getDate(){
    return this.date
  }

 
}

const transactions = new Transaction("CC", 364000 , "18/04/2022");
User.setTransaction(transactions)
console.log(transactions)
console.log(User)

//EXERCÍCIO 3

class Bank {
  private accounts: UserAccount[];

  constructor(accounts: UserAccount[]) {
    this.accounts = accounts;
  }

  getAccount(): UserAccount[] {
    return this.accounts;
  }

  setAccounts(account: UserAccount): void {
    this.accounts.push(account);
  }

}

const banck: UserAccount[] = [];
banck.push(User)

const bank = new Bank(banck)

console.log(bank)