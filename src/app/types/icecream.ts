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

  qFlavors: number;
  flavors: string[];

  cobertura: string;
  plus: string[];
};
