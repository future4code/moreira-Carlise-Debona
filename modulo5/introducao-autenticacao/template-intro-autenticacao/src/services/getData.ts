import * as jwt from "jsonwebtoken";
import { authenticationData } from "../types";

const expiresIn = "1min";

  export const generateToken = (input: authenticationData): string => {
    const token = jwt.sign(
      {
        id: input.id,
        role: input.role,
      },
      process.env.JWT_KEY as string,
      {
        expiresIn
      }
    );
    return token;
  }

 export const getData = (token: string): authenticationData => {
    const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
    const result = {
      id: payload.id,
      role: payload.role,
    };
    return result;
  }