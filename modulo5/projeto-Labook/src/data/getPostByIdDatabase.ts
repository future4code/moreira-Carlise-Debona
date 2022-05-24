import { GetPost } from '../types/types';
import { BaseDatabase } from "./BaseDatabase";

export class GetPostByIdDatabase extends BaseDatabase {
  protected TABLE_NAME = "PostLabook"

  getIdPost = async(id: GetPost) => {

  try{
    const post = await BaseDatabase.connection(this.TABLE_NAME).select().where({ id })
    return post[0];

  }catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}
