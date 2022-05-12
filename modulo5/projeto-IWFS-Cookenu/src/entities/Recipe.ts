
export class Recipe{
  constructor(
    private id: string,
    private titulo: string,
    private descricao: string,
    private modo_de_preparo: string,
    private date: Date,

  ){}
  public getId = (): string => { 
    return this.id;
  }
  public getTitulo = (): string => { 
    return this.titulo;
  }
  public getDescricao = (): string => { 
    return this.descricao;
  }
  public getModoDePreparo = (): string => { 
    return this.modo_de_preparo;
  }
  public getDate = (): Date => { 
    return this.date;
  }

  static toUserModel(data: any): Recipe {
    return new Recipe(
      data.id, 
      data.titulo, 
      data.descricao, 
      data.modo_de_preparo, 
      data.date
     );
  }
}