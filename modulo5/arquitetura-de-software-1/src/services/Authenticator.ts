import * as jwt from "jsonwebtoken";
import { authenticationData, USER_ROLES } from "../types/types";


  export interface AuthenticationData{
    id:string;
    role: USER_ROLES;
  };

  export class Authenticator {
    public generate(input: AuthenticationData): string {
      console.log(input)
    const token = jwt.sign(input, process.env.JWT_KEY as string,
    {
      expiresIn: process.env.EXPIRES_IN,
    }
    );
    return token;
  }

  public getTokenData(token: string): AuthenticationData {
    
    const data = jwt.verify(token, process.env.JWT_KEY as string)
    
    console.log(data)
    
    console.log("token aqui", token)
    return data as AuthenticationData;
    
  }
}

