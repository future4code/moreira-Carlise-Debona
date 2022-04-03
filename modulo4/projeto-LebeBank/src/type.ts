//represents the account to the user.
export type Account ={
  name: string,
  CPF: string, 
  dateOfBirth: Date,
  balance: number,
  statement: []
}


//user transactions.
export type Transaction ={
  description: string,
  value: number,  
  date: Date
}