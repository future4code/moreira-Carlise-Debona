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

  public async getAllUsers(){
    try {
      const users =  await BaseDatabase
      .connection('User')
      .select()
      return users.map((user) => User.toUserModel(user));
      } catch(error: any){
        throw new Error(error.sqlMessage || error.message);
    }
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

  public async deleteUser(
    id: string
  ): Promise<void> {
    try {
      await BaseDatabase.connection('User')
        .where({ id })
				.from(User)
				.del()
        
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}
