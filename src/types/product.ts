// import type { Biscuit } from "@/types/biscuit";
// import type { Brigadier } from "@/types/brigadier";
// import type { Cookie } from "@/types/cookies";
// import type { Donut } from "@/types/donut";
// import type { Easter } from "@/types/easter";
// import type { Icecream } from "@/types/icecream";

// export type Product = Biscuit | Brigadier | Cookie | Donut | Easter | Icecream;

export type GeneralProduct = {
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
  casca: string[];
  massa: string[];
  recheio: string[];
  cobertura: string[];
  plus: string[];
};
