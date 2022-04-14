export type Products = {
  id: string, 
  name: string,
  price: number
}

export const listaProduct: Products[] = [
  { id: "a",
      name: "arroz",
      price: 3.44
  },
  { id: "b",
    name: "polenta",
    price: 4.12
  },
  { id: "c",
    name: "tapioca",
    price: 4.99
  },
  { id: "d",
    name: "peito de frango",
    price: 11.20
  }
];