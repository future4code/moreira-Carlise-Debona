export enum USER_ROLES{
  ADMIN = "ADMIN",
  NORMAL = "NORMAL"
}

export type authenticationData = {
  id: string;
  role: string;
};

export type usuario = {
  name_usuario: string,
    email: string,
    password: string,
    role: USER_ROLES;
};



export class User{
  constructor(
    private id: string,
    private name_usuario: string,
    private email: string,
    private password: string,
    private role: USER_ROLES
  ){}
  public getId = (): string => { 
    return this.id;
  }
  public getName = (): string => { 
    return this.name_usuario;
  }
  public getEmail = (): string => { 
    return this.email;
  }
  public getPassword = (): string => { 
    return this.password;
  }
  public getRole = (): USER_ROLES => { 
    return this.role;
  }


  static toUserModel(data: any): User {
    return new User(
      data.id, 
      data.name_usuario,
      data.email, 
      data.password, 
      data.role
      );
  }
} 