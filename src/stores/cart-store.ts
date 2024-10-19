import type { Cart } from "@/types/cart-item";
import type { GeneralProduct } from "@/types/product";
import { create } from "zustand";

type States = {
  cart: Cart[];
};

type Actions = {
  upSertCartItem: (product: GeneralProduct, quantity: number) => void;
  removeProduct: (id: number) => void;
};

// const initialState: States = {
//   cart: [],
// };
export const useCartStore = create<States & Actions>()((set) => ({
  cart: [],

  upSertCartItem: (product, quantity) =>
    set((state) => {
      let newCart = state.cart;

      let productIndex = newCart.findIndex(
        (item) => item.product.id === product.id,
      );

      if (productIndex < 0) {
        newCart.push({ product, quantity: 0 });
        productIndex = newCart.findIndex(
          (item) => item.product.id === product.id,
        );
      }

      newCart[productIndex].quantity += quantity;

      if (newCart[productIndex].quantity <= 0) {
        newCart = newCart.filter((item) => item.product.id !== product.id);
      }

      return { ...state, cart: newCart };
    }),

  removeProduct: (id) =>
    set((state) => ({
      cart: state.cart.filter((product) => product.product.id !== id),
    })),
}));
