'use client';
import { Button } from '@/components/ui/button';
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetTitle,
	SheetTrigger
} from '@/components/ui/sheet';
import { useCartStore } from '@/stores/cart-store';
import { pricesCart } from '@/utils/prices';
import { ShoppingCartIcon } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import CartEmpty from './cart-empty';
import { CartItem } from './cart-item';
import { CartFooterPrice } from './cart-price';

const CartSideBar = () => {
	const [isClient, setIsClient] = useState(false);
	const { cart } = useCartStore(state => state);
	const { loadingCart } = useCartStore(state => state);

	// Carrega o carrinho do localStorage ao inicializar
	useEffect(() => {
		loadingCart();
		setIsClient(true);
	}, [loadingCart]);

	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button
					className='relative'
					size={'icon'}>
					<ShoppingCartIcon />
					{isClient && (
						<div className='absolute -right-1 -top-1'>
							{cart.length > 0 && (
								<div className='size-3 rounded-full bg-emerald-600' />
							)}
						</div>
					)}
				</Button>
			</SheetTrigger>

			<SheetContent className='flex w-[95%] flex-col justify-between gap-4 sm:max-w-lg px-3'>
				<SheetTitle className='h-10 border-b pb-2 uppercase'>
					Carrinho de Compras
				</SheetTitle>

				{cart.length > 0 && (
					<div className='flex flex-1 flex-col justify-between gap-2'>
						<div className='flex max-h-[65vh] flex-col gap-2 overflow-y-auto rounded-md md:max-h-[58vh] [&::-webkit-scrollbar]:hidden'>
							{cart.map(product => (
								<CartItem
									isDetails={false}
									key={product.product.id}
									product={product}
								/>
							))}
						</div>
						<CartFooterPrice />
					</div>
				)}

				{cart.length <= 0 && <CartEmpty />}

				<div className='flex h-10 w-full items-center justify-center'>
					<div className='flex w-full items-center justify-between gap-4'>
						<SheetClose
							asChild
							className='w-1/2'>
							<Link href='/cart-checkout'>
								<Button
									disabled={cart.length === 0}
									className='w-full text-xs'
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
									className='w-full text-xs'>
									Continuar comprando
								</Button>
							</Link>
						</SheetClose>
					</div>
				</div>
			</SheetContent>
		</Sheet>
	);
};

export default CartSideBar;
