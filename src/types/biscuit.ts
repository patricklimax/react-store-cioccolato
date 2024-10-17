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

  peso: number;
  qdeSabores: number;
  sabores: string[];
};
