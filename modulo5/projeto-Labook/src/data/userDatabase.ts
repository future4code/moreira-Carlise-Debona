import User from '../model/User'
import { FindByEmailResponse } from '../types/types';
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  protected TABLE_NAME = "UserLabook"

  createUser =  async (user: User) => {
    try{
      await BaseDatabase.connection(this.TABLE_NAME).insert(user)
    } catch(error: any){
      throw new Error(error.sqlMessage || error.message)
    }
  }

  findUserByEmail = async (email: string)=>{
    try {
        const user : FindByEmailResponse= await BaseDatabase.connection(this.TABLE_NAME)
        .select()
        .where({ email })
    return user[0];
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

}