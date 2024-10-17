export type Icecream = {
  id: number;
  name: string;
  category: string;
  tipo: string;
  description: string;
  imageUrl: string;
  price: number;

  mostRequest: boolean;
  newProduct: boolean;

  qdeSabores: number;
  sabores: string[];

  cobertura: string;
  plus: string[];
};
