'use client';
import CartEmpty from '@/components/cart/cart-empty';
import { CartItem as CartItemDetalis } from '@/components/cart/cart-item';
import { CartFooterPrice } from '@/components/cart/cart-price';
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbList,
	BreadcrumbSeparator
} from '@/components/ui/breadcrumb';
import { Separator } from '@/components/ui/separator';
import { useCartStore } from '@/stores/cart-store';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

type Props = {
	children: React.ReactNode;
};

const LayoutCheckout = ({ children }: Props) => {
	const [isClient, setIsClient] = useState(false);
	const pathname = usePathname();
	const { cart } = useCartStore(state => state);

	const breadcrumbItems = [
		{ id: 0, label: 'Informações', href: '/cart-checkout' },
		{ id: 1, label: 'Endereço', href: '/cart-checkout/address' },
		{ id: 2, label: 'Pagamento', href: '/cart-checkout/payment' },
		{ id: 3, label: 'Enviar Pedido', href: '/cart-checkout/send-order' }
	];

	useEffect(() => {
		setIsClient(true);
	}, []);

	return (
		<section className='mx-auto my-4 flex w-[95%] flex-col gap-4 rounded-md border p-4 md:w-full md:flex-row'>
			{isClient && (
				<>
					{cart.length > 0 && (
						<div className='flex-1'>
							<h3 className='mb-4 h-10 text-center text-3xl font-bold uppercase'>
								<span>Carrinho</span>
								<span className='align-top text-sm uppercase ml-1'>
									detalhado
								</span>
							</h3>
							<div className='flex flex-col gap-4'>
								<div className='rounded-mdF flex h-80 flex-col gap-2 overflow-y-auto [&::-webkit-scrollbar]:hidden'>
									{cart.map(product => (
										<CartItemDetalis
											isDetails
											key={product.product.id}
											product={product}
										/>
									))}
								</div>
								<CartFooterPrice />
							</div>
						</div>
					)}

					{cart.length <= 0 && (
						<div className='my-auto h-[70vh] flex-1'>
							<CartEmpty />
						</div>
					)}

					<div className='w-1'>
						<Separator orientation='vertical' />
					</div>
					<div className='w-full md:w-1/2'>
						<h3 className='mb-4 text-center text-3xl font-bold uppercase'>
							<span>Checkout</span>
							<span className='align-top text-sm uppercase ml-1'>cart</span>
						</h3>
						<Breadcrumb>
							<BreadcrumbList>
								{breadcrumbItems.map((item, index) => (
									<BreadcrumbItem
										key={item.href}
										className={
											pathname === item.href ? 'font-bold text-primary' : ''
										}>
										{item.label}

										{index < breadcrumbItems.length - 1 && (
											<BreadcrumbSeparator />
										)}
									</BreadcrumbItem>
								))}
							</BreadcrumbList>
						</Breadcrumb>
						<div className='h-[25rem] overflow-y-auto [&::-webkit-scrollbar]:hidden px-1'>
							{children}
						</div>
					</div>
				</>
			)}
		</section>
	);
};

export default LayoutCheckout;
