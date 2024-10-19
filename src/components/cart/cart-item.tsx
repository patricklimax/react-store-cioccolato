'use client';
import { useCartStore } from '@/stores/cart-store';
import type { Cart } from '@/types/cart-item';
import { MinusIcon, PlusIcon, Trash2Icon, XIcon } from 'lucide-react';
import Image from 'next/image';
import { Button } from '../ui/button';

interface ProductProps {
	product: Cart;
}

const CartItem = ({ product }: ProductProps) => {
	const { upSertCartItem } = useCartStore(state => state);
	const { removeProduct } = useCartStore(state => state);
	const handleIncreaseProductQuantity = () => {
		upSertCartItem(product.product, 1);
	};
	const handleDecreaseProductQuantity = () => {
		upSertCartItem(product.product, -1);
	};

	const removeProd = () => {
		removeProduct(product.product.id);
	};

	return (
		<div className='border rounded-md bg-secondary p-2'>
			<p className='text-xs font-bold text-primary mb-1 uppercase'>
				{product.product.name} - R$ {(product.product.price * 0.95).toFixed(2)}
				/UN
			</p>

			<div className='flex gap-1'>
				<div className='rounded-md w-12 md:h-16 md:w-16'>
					<Image
						src={product.product.imageUrl}
						alt={product.product.name}
						width={100}
						height={100}
						objectFit='cover'
						className='rounded-md w-12 h-12 md:h-16 md:w-16'
					/>
				</div>

				<div className='flex-1'>
					<div className='flex flex-col gap-2 h-12 md:h-16 overflow-y-auto bg-muted rounded-md p-1'>
						{product.product.sabores.length > 0 && (
							<p className='text-xs font-semibold'>
								Sabores: {product.product.sabores.join(', ')}
							</p>
						)}
						{product.product.massa.length > 0 && (
							<p className='text-xs font-semibold'>
								Massa: {product.product.massa.join(', ')}
							</p>
						)}

						{product.product.casca.length > 0 && (
							<p className=' text-xs font-semibold'>
								Casca: {product.product.casca.join(', ')}
							</p>
						)}

						{product.product.recheio.length > 0 && (
							<p className='text-xs font-semibold'>
								Recheio: {product.product.recheio.join(', ')}
							</p>
						)}

						{product.product.cobertura.length > 0 && (
							<p className='text-xs font-semibold'>
								Cobertura: {product.product.cobertura.join(', ')}
							</p>
						)}

						{product.product.plus.length > 0 && (
							<p className='text-xs font-semibold'>
								Adicionais: {product.product.plus.join(', ')}
							</p>
						)}
					</div>
				</div>

				<div className='flex flex-col items-center justify-center gap-1	 w-28'>
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
						<Button
							onClick={removeProd}
							className='size-7'
							variant={'outline'}
							size={'icon'}>
							<Trash2Icon size={14} />
						</Button>
					</div>

					<div className='flex items-center justify-between gap-2'>
						<p className='text-xs'>Subtotal:</p>
						<p className='text-xs font-semibold'>
							R$ {(product.product.price * 0.95 * product.quantity).toFixed(2)}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
