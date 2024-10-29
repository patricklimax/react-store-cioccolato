import { Badge } from '@/components/ui/badge';
import type { GeneralProduct } from '@/types/product';
import { GiftIcon } from 'lucide-react';
import Image from 'next/image';

type ProductItem = {
	product: GeneralProduct;
};

const InfoProduct = ({ product }: ProductItem) => {
	return (
		<div className='flex w-full flex-col items-center justify-center gap-4 rounded-md bg-secondary p-4 md:flex-row'>
			<div className='relative h-64 w-64 rounded-md'>
				<Image
					src={product.imageUrl}
					alt={product.name}
					fill
					quality={100}
					sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
					className='rounded-md'
				/>
			</div>
			<div className='flex w-full flex-col gap-4 md:w-1/2'>
				<p className='font-semibold'>{product.name}</p>
				<p className='text-sm font-medium text-primary'>
					{product.description}
				</p>
				<div className='flex flex-col gap-1'>
					<h3 className='text-start text-xs font-bold'>Tags</h3>
					<div className='flex items-center gap-2 md:flex-wrap'>
						<Badge>#gourmet</Badge>
						<Badge>#maisVendido</Badge>
						<Badge>#novidade</Badge>
					</div>
				</div>
				<div className='mt-4 flex items-center justify-center gap-8'>
					<p className='text-sm font-bold text-muted-foreground line-through'>
						R$ {product.price.toFixed(2)}
					</p>
					<div className='flex items-center justify-center'>
						<GiftIcon className='text-primary' />
						<p className='text-2xl font-bold'>
							R$ {(product.price * 0.95).toFixed(2)}
						</p>
					</div>
				</div>
			</div>
			<div className='relative h-64 w-64 rounded-md hidden md:block'>
				<Image
					src={product.imageUrl}
					alt={product.name}
					fill
					quality={100}
					sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
					className='rounded-md'
				/>
			</div>
		</div>
	);
};

export default InfoProduct;
