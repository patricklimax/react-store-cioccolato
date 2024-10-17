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
	// const handlerAddButton = () => {
	// 	adicionar o item no store
	// 	toast({
	// 		title: 'Produto adicionado ao carrinho.',
	// 		description: item.name,
	// 		action: <ToastAction altText='fechar'>Fechar</ToastAction>
	// 	});
	// };

	return (
		<div className='flex flex-col gap-2 bg-secondary rounded-md p-2'>
			<div className='w-full h-[250px] rounded-md overflow-hidden p-1'>
				<img
					src={product.imageUrl}
					alt={product.name}
					className='w-full h-[250px] object-cover rounded-md'
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
							<div>Sabores: {product.sabores.join(', ')}</div>
						)}
						{product.massa.length > 0 && (
							<div>Massa: {product.massa.join(', ')}</div>
						)}
						{product.recheio.length > 0 && (
							<div>Recheio: {product.recheio.join(', ')}</div>
						)}
						{product.casca.length > 0 && (
							<div>Casca: {product.casca.join(', ')}</div>
						)}
						{product.cobertura.length > 0 && (
							<div>Cobertura: {product.cobertura.join(', ')}</div>
						)}
						{product.plus.length > 0 && (
							<div>Adicionais: {product.plus.join(', ')}</div>
						)}
					</div>
				</div>

				<div className='flex items-center justify-center gap-2 font-semibold opacity-50 text-xl'>
					<div className='opacity-50 line-through text-lg'>
						R$ {product.price.toFixed(2)}
					</div>
					<div className='flex items-center justify-center'>
						<GiftIcon className='text-primary' />
						<p>R$ {(product.price * 0.98).toFixed(2)}</p>
					</div>
				</div>

				<div className='w-full h-[48px] rounded-md flex items-center justify-center'>
					<Link href='/pedidos/'>
						<Button>Montar meu pedido</Button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ProductItem;
