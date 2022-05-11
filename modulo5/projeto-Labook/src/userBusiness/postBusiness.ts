import { IdGenerator } from '../services/idGenerator';
import {  PostInputDTO } from '../types/types';
import { PostDatabase } from '../data/postDatabase';
import Post from '../model/Post';

export class PostBusiness {
  
  post = async (input: PostInputDTO): Promise<void> => {

    const { id_user, foto, descricao, tipo } = input;

    if(!foto || !descricao || !tipo){
      throw new Error("Preencha todos os dados ");
      }

    const idGenerator = new IdGenerator();
    const id = idGenerator.generate()
    

    const postDatabase = new PostDatabase();

    const newPost = new Post(id, id_user, foto, descricao, tipo)
    
    await postDatabase.createPost(newPost)

  }
}