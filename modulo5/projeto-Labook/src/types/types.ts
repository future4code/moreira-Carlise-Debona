export enum USER_TYPES{
  EVENTO = "EVENTO",
  NORMAL = "NORMAL"
}

export type authenticationData = {
  id: string;
};

export type getPostInputDTO = {
  id: string;
}

export type SignupInputDTO = {
  name: string
  email: string
  password: string
}

export type PostInputDTO = {
  id_user: string;
  foto: string;
  descricao: string;
  tipo?: USER_TYPES;
}

export type LoginInputDTO = {
  email: string
  password: string
}

export type FindByEmailResponse = {
  id: string;
  name: string;
  email: string;
  password: string;
}[];

export type GetPost = {
  id: string;
  id_user: string;
  foto: string;
  descricao: string;
  tipo: USER_TYPES;
  data: string;
};





