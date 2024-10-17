import { products } from "@/data/products";
import type { Product } from "@/types/product";

export const getProducts = async (): Promise<Product[]> => {
  return new Promise((resolve, reject) => {
    return setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};
