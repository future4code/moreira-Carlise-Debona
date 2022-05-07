export enum USER_ROLES{
  EVENTO = "EVENTO",
  NORMAL = "NORMAL"
}

export type authenticationData = {
  id: string;
};

export type SignupInputDTO = {
  name: string
  email: string
  password: string
}

export type FindByEmailResponse = {
  id: string;
  name: string;
  email: string;
  password: string;
}[];

// export class User{
//   constructor(
//     private id: string,
//     private name: string,
//     private email: string,
//     private password: string,
//   ){}
//   public getId = (): string => { 
//     return this.id;
//   }
//   public getName = (): string => { 
//     return this.name;
//   }
//   public getEmail = (): string => { 
//     return this.email;
//   }
//   public getPassword = (): string => { 
//     return this.password;
//   }

//   static toUserModel(data: any): User {
//     return new User(
//       data.id, 
//       data.name, 
//       data.email, 
//       data.password
//       );
//   }
// }