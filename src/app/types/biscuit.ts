export type Biscuit = {
  id: number;
  name: string;
  category: string;
  tipo: string;
  description: string;
  imageUrl: string;
  price: number;

  mostRequest: boolean;
  newProduct: boolean;

  weight: number;
  qFlavors: number;
  flavors: string[];
};
