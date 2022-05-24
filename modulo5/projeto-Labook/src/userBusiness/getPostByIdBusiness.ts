import { GetPostByIdDatabase } from '../data/getPostByIdDatabase';
import { GetPost } from '../types/types';

export class GetPostByIdBusiness {

  getPostId = async (id: any) => {

    if(!id){
      throw new Error("Você precisar colocar o Id do Post")
    }

    const getPostByIdDatabase = new GetPostByIdDatabase();

    const post = await getPostByIdDatabase.getIdPost(id)

    return post
  }
}