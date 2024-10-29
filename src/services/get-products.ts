import { products } from "@/data/products";
import type { GeneralProduct } from "@/types/product";

export const getProducts = async (): Promise<GeneralProduct[]> => {
  return new Promise((resolve, reject) => {
    return setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};
