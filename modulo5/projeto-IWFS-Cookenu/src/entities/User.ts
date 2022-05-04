export enum USER_ROLES{
  ADMIN = "ADMIN",
  NORMAL = "NORMAL"
}

export type authenticationData = {
  id: string;
  role: string;
};

export class User{
  constructor(
    private id: string,
    private name: string,
    private email: string,
    private password: string,
    private role: USER_ROLES
  ){}
  public getId = (): string => { 
    return this.id;
  }
  public getName = (): string => { 
    return this.name;
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
      data.name, 
      data.email, 
      data.password, 
      data.role
      );
  }
}

export class Follow{
  constructor(
    public followed_id: string,
    public follower_id: string
  
  ){}
  public getFollowedId = (): string => { 
    return this.followed_id;
  }
  public getFollowerId= (): string => { 
    return this.follower_id;
  }
 

  static toUserModel(data: any):Follow {
    return new Follow(
      data.followed_id, 
      data.follower_id
      );
  }
}