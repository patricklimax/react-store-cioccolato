'use client';
import { useCartStore } from '@/stores/cart-store';
import type { Cart } from '@/types/cart-item';
import { MinusIcon, PlusIcon } from 'lucide-react';
import Image from 'next/image';
import type React from 'react';
import { Button } from '../ui/button';

type ProductProps = {
	isDetails: boolean;
	product: Cart;
};

type ParagraphProps = React.HTMLAttributes<HTMLParagraphElement>;

const Paragraph = (props: ParagraphProps) => {
	return (
		<p
			className='text-xs font-semibold'
			{...props}>
			{props.children}
		</p>
	);
};

export const CartItem = ({ product, isDetails }: ProductProps) => {
	const { upSertCartItem } = useCartStore(state => state);
	const handleIncreaseProductQuantity = () => {
		upSertCartItem(product.product, 1);
	};
	const handleDecreaseProductQuantity = () => {
		upSertCartItem(product.product, -1);
	};

	return (
		<div className='border rounded-md bg-secondary p-2'>
			<p className='text-xs font-bold text-primary mb-1 uppercase'>
				{product.product.name} - R$ {(product.product.price * 0.95).toFixed(2)}
				/UN
			</p>

			<div className='flex gap-2 items-center'>
				<div className='rounded-md relative h-16 w-16'>
					<Image
						src={product.product.imageUrl}
						alt={product.product.name}
						fill
						className='rounded-md'
						quality={100}
						sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
					/>
				</div>

				<div className='flex-1'>
					{!isDetails && (
						<div className='flex flex-col gap-1 bg-muted rounded-md p-1'>
							{/* <div className='text-xs font-bold text-primary mb-1 uppercase'>
								<p>{product.product.name}</p>
								<p>
									R$ {(product.product.price * 0.95).toFixed(2)}
									/UN
								</p>
							</div> */}
							<Paragraph>Detalhes do produto na página de checkout</Paragraph>
						</div>
					)}

					{isDetails && (
						<div className='flex flex-col gap-2 h-16 overflow-y-auto bg-muted rounded-md p-1'>
							{product.product.sabores.length > 0 && (
								<Paragraph>
									Sabores: {product.product.sabores.join(', ')}
								</Paragraph>
							)}

							{product.product.massa.length > 0 && (
								<Paragraph>Massa: {product.product.massa.join(', ')}</Paragraph>
							)}

							{product.product.casca.length > 0 && (
								<Paragraph>Casca: {product.product.casca.join(', ')}</Paragraph>
							)}

							{product.product.recheio.length > 0 && (
								<Paragraph>
									Recheio: {product.product.recheio.join(', ')}
								</Paragraph>
							)}

							{product.product.cobertura.length > 0 && (
								<Paragraph>
									Cobertura: {product.product.cobertura.join(', ')}
								</Paragraph>
							)}

							{product.product.plus.length > 0 && (
								<Paragraph>
									Adicionais: {product.product.plus.join(', ')}
								</Paragraph>
							)}
						</div>
					)}
				</div>

				<div className='flex flex-col items-center justify-center gap-1	w-28'>
					<div className='flex items-center gap-0.5'>
						<Button
							onClick={handleIncreaseProductQuantity}
							className='size-7'
							variant={'outline'}
							size={'icon'}>
							<PlusIcon size={14} />
						</Button>
						<div className='size-7 border flex items-center justify-center bg-primary text-popover rounded-md text-sm font-semibold'>
							{product.quantity}
						</div>

						<Button
							onClick={handleDecreaseProductQuantity}
							className='size-7'
							variant={'outline'}
							size={'icon'}>
							<MinusIcon size={14} />
						</Button>
					</div>

					<div className='flex items-center justify-between gap-2'>
						<p className='text-xs'>Subtotal:</p>
						<p className='text-xs font-semibold'>
							R$ {(product.product.price * product.quantity * 0.95).toFixed(2)}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
