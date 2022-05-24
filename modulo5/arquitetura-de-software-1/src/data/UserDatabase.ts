import {User} from '../types/types'
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {

  public async createUser(user: User){
    try{
      await BaseDatabase.connection("User").insert({
        id: user.getId(),
        name_usuario: user.getName(),
        email: user.getEmail(),
        password: user.getPassword(),
        role: user.getRole()
      })
    } catch(error: any){
      throw new Error(error.sqlMessage || error.message)
    }
  }

  public async getAllUsers() {
    const users = await BaseDatabase.connection("User")
    .select("*");

    return users;
  }

  public async findUserByEmail(email: string){
    try {
        const user = await BaseDatabase.connection('User')
        .select('*')
        .where({ email })
    return user[0] && User.toUserModel(user[0]);
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async deleteUsers(id: string){
    try {
      await BaseDatabase.connection('User')
      .del('id')
      .where({ id })		
        
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getUserById(id: string) {
    const user = await BaseDatabase.connection("Architecture_Users")
      .select("id", "name", "email")
      .where({ id });

    return user[0] && User.toUserModel(user[0]);
  }
}
