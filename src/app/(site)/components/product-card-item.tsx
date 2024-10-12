import type { ProductCard } from '@/app/types/product-card-item';
import Image from 'next/image';

type ProdutoProps = {
	produto: ProductCard;
};

const ProductCardItem = ({ produto }: ProdutoProps) => {
	return (
		<div className='flex flex-col gap-4 rounded-md p-4 bg-primary'>
			<div className='rounded-md relative h-[200px] '>
				<Image
					src={produto.imageUrl}
					alt={produto.name}
					fill
					objectFit='cover'
					className='rounded-md'
				/>
			</div>
			<div className='flex flex-col gap-4 flex-1'>
				<div className='w-full text-center rounded-md bg-muted py-2 font-semibold'>
					{produto.name}
				</div>
				<div className='w-full text-center text-sm text-background'>
					{produto.description}
				</div>
			</div>
		</div>
	);
};

export default ProductCardItem;
