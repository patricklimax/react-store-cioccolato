import { useCartStore } from "@/stores/cart-store";

export const pricesCart = () => {
  const { cart } = useCartStore((state) => state);
  let subtotal = 0;
  for (const item of cart) {
    subtotal += item.quantity * item.product.price;
  }
  const shippingCost = 10.0;
  const subtotalCart = subtotal * 0.95;
  const totalCart = shippingCost + subtotalCart;
  const halfCart = totalCart / 2;

  return { shippingCost, subtotalCart, totalCart, halfCart };
};
