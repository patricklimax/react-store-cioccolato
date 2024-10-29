import { useCartStore } from "@/stores/cart-store";
import { useCheckoutStore } from "@/stores/checkout-store";
import { usePaymentMethodStore } from "@/stores/payment-method";
import { usePixStore } from "@/stores/pix-store";

export const orderMessageGenerator = () => {
  const { name, lastName, phone, address } = useCheckoutStore((state) => state);
  const { cart } = useCartStore((state) => state);
  const { pixCode } = usePixStore((state) => state);
  const { paymentMethod } = usePaymentMethodStore((state) => state);

  const remainingPayment =
    (paymentMethod === "credit-card" && "Cartão de Crédito") ||
    (paymentMethod === "debit-card" && "Cartão de Débito") ||
    (paymentMethod === "cash" && "Dinheiro") ||
    (paymentMethod === "pix" && "PIX");

  const orderProductsCart = cart.map((item, index) => {
    const detailsSabores =
      item.product.sabores.length > 0
        ? `*Sabores:* ${item.product.sabores.join(", ")}`
        : "~Sabores~";
    const detailsMassa =
      item.product.massa.length > 0
        ? `*Massa:* ${item.product.massa.join(", ")}`
        : "~Massa~";
    const detailsRecheio =
      item.product.recheio.length > 0
        ? `*Recheio:* ${item.product.recheio.join(", ")}`
        : "~Recheio~";
    const detailsCasca =
      item.product.casca.length > 0
        ? `*Casca:* ${item.product.casca.join(", ")}`
        : "~Casca~";
    const detailsCobertura =
      item.product.cobertura.length > 0
        ? `*Cobertura:* ${item.product.cobertura.join(", ")}`
        : "~Cobertura~";
    const detailsAdicionais =
      item.product.plus.length > 0
        ? `*Adicionais:* ${item.product.plus.join(", ")}`
        : "~Adicionais~";
    return `*Item ${index + 1}:* ${item.quantity}x ${item.product.name}
${detailsSabores}
${detailsMassa}
${detailsRecheio}
${detailsCasca}
${detailsCobertura}
${detailsAdicionais}
_____________________________
`;
  });

  let subtotal = 0;
  for (const item of cart) {
    subtotal += item.quantity * item.product.price;
  }
  const fretePrice = 10.0;
  const totalPrice = subtotal * 0.95 + fretePrice;
  const halfOrderValue = Number(totalPrice) / 2;

  return `***** _*Dados do Cliente*_
Nome: ${name} ${lastName} - ${phone}
Endereço: ${address.street}, ${address.complement}, ${address.district}, ${address.zipCode}, ${address.city}/${address.stateUF}
---------------------------------------------------------------------
***** _*Pedido*_
${orderProductsCart.join("\n")}
---------------------------------------------------------------------
***** _*Valor Total:*_ R$ ${totalPrice.toFixed(2)}
---------------------------------------------------------------------
***** _*Link para pagamento de 50% do valor do pedido:*_
${pixCode}
---------------------------------------------------------------------
***** _*Restante do valor será pago via:*_
${remainingPayment}: R$ ${halfOrderValue.toFixed(2)}`;
};
