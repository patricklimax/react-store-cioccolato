import type { GeneralProduct } from "./product";

export type Cart = {
  product: GeneralProduct;
  quantity: number;
};
