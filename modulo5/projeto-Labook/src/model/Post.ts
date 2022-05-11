import { USER_TYPES } from "../types/types";

export default class Post {
  constructor(
    private id: string,
    private id_user: string,
    private foto: string,
    private descricao: string,
    private tipo: USER_TYPES,
  ) {}
}