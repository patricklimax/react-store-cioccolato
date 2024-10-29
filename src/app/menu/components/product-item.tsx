'use client';
import { Button } from '@/components/ui/button';
import type { GeneralProduct } from '@/types/product';
import { GiftIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
	product: GeneralProduct;
};

const ProductItem = ({ product }: Props) => {
	return (
		<div className='flex flex-col gap-2 bg-secondary rounded-md p-2'>
			<div className='rounded-md relative h-[250px] w-full '>
				<Image
					src={product.imageUrl}
					alt={product.name}
					fill
					quality={100}
					sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
					className='rounded-md'
				/>
			</div>

			<div className='flex flex-col gap-2 p-1 justify-between'>
				<div className='w-full text-center rounded-md bg-background py-2 font-semibold'>
					{product.name}
				</div>
				<div className='w-full rounded-md text-xs p-1'>
					<p className='mb-2'>{product.description}</p>
					<div className='text-muted-foreground'>
						{product.sabores.length > 0 && (
							<div>
								<span className='font-bold'>Sabores:</span>{' '}
								{product.sabores.join(', ')}
							</div>
						)}
						{product.massa.length > 0 && (
							<div>
								<span className='font-bold'>Massa:</span>{' '}
								{product.massa.join(', ')}
							</div>
						)}
						{product.recheio.length > 0 && (
							<div>
								<span className='font-bold'>Recheio:</span>{' '}
								{product.recheio.join(', ')}
							</div>
						)}
						{product.casca.length > 0 && (
							<div>
								<span className='font-bold'>Casca:</span>{' '}
								{product.casca.join(', ')}
							</div>
						)}
						{product.cobertura.length > 0 && (
							<div>
								<span className='font-bold'>Cobertura:</span>{' '}
								{product.cobertura.join(', ')}
							</div>
						)}
						{product.plus.length > 0 && (
							<div>
								<span className='font-bold'>Adicionais:</span>{' '}
								{product.plus.join(', ')}
							</div>
						)}
					</div>
				</div>

				<div className='flex items-center justify-center gap-2 font-semibold opacity-50 text-xl'>
					<div className='opacity-50 line-through text-lg'>
						R$ {product.price.toFixed(2)}
					</div>
					<div className='flex items-center justify-center'>
						<GiftIcon className='text-primary' />
						<p>R$ {(product.price * 0.95).toFixed(2)}</p>
					</div>
				</div>

				<div className='w-full h-[48px] rounded-md flex items-center justify-center'>
					<Link href={`/menu/${product.slug}`}>
						<Button>Montar meu pedido</Button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ProductItem;
