import Post from '../model/Post'
import { BaseDatabase } from "./BaseDatabase";


export class PostDatabase extends BaseDatabase {
  protected TABLE_NAME = "PostLabook"

  createPost =  async (post: Post) => {
    try{
      await BaseDatabase.connection(this.TABLE_NAME).insert(post)
    } catch(error: any){
      throw new Error(error.sqlMessage || error.message)
    }
  }
}