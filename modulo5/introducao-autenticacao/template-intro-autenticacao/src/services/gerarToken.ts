import * as jwt from "jsonwebtoken";
import { authenticationData } from "../types";

const expiresIn = "1m"

export const generateToken = (input: authenticationData): string => {
  const token = jwt.sign(
    {
      id: input.id,
    },
    process.env.JWT_KEY as string,
    {
      expiresIn
    }
  );
  return token;
}