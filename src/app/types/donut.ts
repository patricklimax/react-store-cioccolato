export type Donut = {
  id: number;
  name: string;
  category: string;
  tipo: string;
  description: string;
  imageUrl: string;
  price: number;

  mostRequest: boolean;
  newProduct: boolean;

  batter: string;

  qFlavors: number;
  flavors: string[];
  plus: string[];
};
