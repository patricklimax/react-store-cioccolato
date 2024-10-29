import { pricesCart } from '@/utils/prices';

export const CartFooterPrice = () => {
	const valuesCart = pricesCart();

	return (
		<div className='rounded-md bg-secondary p-2'>
			<div className='flex items-center justify-between px-2 text-xs font-bold'>
				<p>Subtotal</p>
				<p>R$ {valuesCart.subtotalCart.toFixed(2)}</p>
			</div>
			<div className='my-1 flex items-center justify-between px-2 text-xs font-bold'>
				<p>Frete</p>
				<p>R$ {valuesCart.shippingCost.toFixed(2)}</p>
			</div>
			<div className='mt-2 flex items-center justify-between rounded-md bg-primary px-2 py-1 text-xs font-bold text-primary-foreground'>
				<p>Valor Total</p>
				<p>R$ {valuesCart.totalCart.toFixed(2)} </p>
			</div>
		</div>
	);
};
