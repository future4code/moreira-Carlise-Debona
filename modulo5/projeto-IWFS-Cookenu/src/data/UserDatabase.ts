import { Recipe } from "../entities/Recipe";
import { BaseDatabase } from "./BaseDatabase";
import { User } from "../entities/User";
import { Follow } from "../entities/User";

export class UserDatabase extends BaseDatabase {

  public async createUser(user: User){
    try{
      await BaseDatabase.connection("UserCookenu").insert({
        id: user.getId(),
        name: user.getName(),
        email: user.getEmail(),
        password: user.getPassword(),
        role: user.getRole()
      })
    } catch(error: any){
      throw new Error(error.sqlMessage || error.message)
    }
  }

  public async createRecipe(receita: Recipe){
    try{
      await BaseDatabase.connection("Recipe").insert({
        id: receita.getId(),
        titulo: receita.getTitulo(),
        descricao: receita.getDescricao(),
        modo_de_preparo: receita.getModoDePreparo(),
        date: receita.getDate()
      })
    } catch(error: any){
      throw new Error(error.sqlMessage || error.message)
    }
  }

  public async findUserByEmail(email: string): Promise<User> {
    try {
        const user = await BaseDatabase.connection('UserCookenu')
        .select('*')
        .where({ email })
    return user[0] && User.toUserModel(user[0]);
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getUsers(id: string): Promise<User>{
    try {
      const users: any =  await BaseDatabase
      .connection('UserCookenu')
      .select('id', 'email')
      .where('id', id)

      return users
      
      } catch(error: any){
        throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getRecipe(id: string): Promise<Recipe>{
    try {
      const recipe: any =  await BaseDatabase
      .connection('Recipe')
      .select()
      .where('id', id)

      return recipe
      
      } catch(error: any){
        throw new Error(error.sqlMessage || error.message);
    }
  }

  public async checkId(followerId: string, followedId: string): Promise<any> {
    try {
      const userConnection = await BaseDatabase.connection("UserFollow")
        .select("*")
        .where({ follower_id: followerId })
        .andWhere({ followed_id: followedId });

      return userConnection;
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async follower(followed_id: string, follower_id: string){
    try{
      await BaseDatabase.connection("UserFollow")
      .insert({
        followed_id: follower_id,
        follower_id: followed_id
      })
    } catch(error: any){
      throw new Error(error.sqlMessage || error.message)
    }
}

public async unfollower(followerId: string, followedId: string): Promise<void> {
  try{
    await BaseDatabase.connection("UserFollow")
        .delete()
        .from('UserFollow')
        .where({followed_id: followedId})
        .andWhere({follower_id: followerId})
  } catch(error: any){
    throw new Error(error.sqlMessage || error.message)
  }
}

public async getUsersProfile(id: string): Promise<User>{
  try {
    const users: any =  await BaseDatabase
    .connection('UserCookenu')
    .select('id', 'name', 'email', 'role')
    .where('id', id)

    return users
    
    } catch(error: any){
      throw new Error(error.sqlMessage || error.message);
  }
  }
}