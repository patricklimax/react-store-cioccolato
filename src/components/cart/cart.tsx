'use client';
import { useCartStore } from '@/stores/cart-store';
import { ShoppingCartIcon } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetTitle,
	SheetTrigger
} from '../ui/sheet';
import CartEmpty from './cart-empty';
import CartItem from './cart-item';

const CartSideBar = () => {
	const { cart } = useCartStore(state => state);

	let subtotal = 0;
	for (const item of cart) {
		subtotal += item.quantity * item.product.price * 0.95;
	}
	const impostos = 0;
	const descontos = 0;
	const fretePrice = 10;

	const totalPrice = subtotal + fretePrice + impostos - descontos;

	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button
					className='relative'
					size={'icon'}>
					<ShoppingCartIcon />
					{cart.length > 0 && (
						<div className='absolute bg-emerald-600 size-3 rounded-full -top-1 -right-1' />
					)}
				</Button>
			</SheetTrigger>

			{/* <div className='w-[70vw]'> */}
			<SheetContent className='flex flex-col justify-between gap-4 w-[90%] sm:max-w-lg'>
				<SheetTitle className='h-10 border-b pb-2 uppercase'>
					Carrinho de Compras
				</SheetTitle>

				{cart.length > 0 && (
					<div className='flex flex-col gap-2 justify-between flex-1'>
						<div className='max-h-[65vh] md:max-h-[54vh] overflow-y-auto [&::-webkit-scrollbar]:hidden flex flex-col gap-2 rounded-md'>
							{cart.map(product => (
								<CartItem
									key={product.product.id}
									product={product}
								/>
							))}
						</div>
						<div className='rounded-md p-2 bg-secondary h-28'>
							<div className='flex items-center justify-between text-xs font-bold px-2'>
								<p>Subtotal</p>
								<p>R$ {subtotal.toFixed(2)}</p>
							</div>
							<div className='flex items-center justify-between text-xs font-bold px-2'>
								<p>Impostos/Taxas</p>
								<p>R$ 0.00</p>
							</div>
							<div className='flex items-center justify-between text-xs font-bold px-2'>
								<p>Descontos</p>
								<p>(R$ 0.00)</p>
							</div>
							<div className='flex items-center justify-between text-xs font-bold px-2'>
								<p>Frete</p>
								<p>R$ {fretePrice.toFixed(2)}</p>
							</div>
							<div className='flex items-center justify-between text-xs font-bold bg-primary text-primary-foreground px-2 py-1 rounded-md mt-1'>
								<p>Valor Total</p>
								<p>R$ {totalPrice.toFixed(2)} </p>
							</div>
						</div>
					</div>
				)}

				{cart.length <= 0 && <CartEmpty />}

				<div className='h-10 w-full flex items-center justify-center'>
					<div className='w-full flex items-center justify-between gap-4'>
						<SheetClose
							asChild
							className='w-1/2'>
							<Link href='/checkout'>
								<Button
									disabled={cart.length === 0}
									className='text-xs w-full'
									size={'sm'}>
									Finalizar Compra
								</Button>
							</Link>
						</SheetClose>
						<SheetClose
							asChild
							className='w-1/2'>
							<Link href='/menu'>
								<Button
									variant={'outline'}
									size={'sm'}
									className='text-xs w-full'>
									Continuar comprando
								</Button>
							</Link>
						</SheetClose>
					</div>
					{/* <Separator className='my-2' /> */}
					{/* <p className='text-[10px] leading-3 antialiased text-justify'>
							Ao finalizar a compra, você preencherá as informações para entrega
							e forma de pagamento. Além disso, você concorda em compartilhar
							seu carrinho, endereço, nome e número de telefone com a empresa
							para que ela possa confirmar seu pedido e o preço total, incluindo
							impostos, taxas, descontos e frete.
						</p> */}
				</div>
			</SheetContent>
			{/* </div> */}
		</Sheet>
	);
};

export default CartSideBar;
