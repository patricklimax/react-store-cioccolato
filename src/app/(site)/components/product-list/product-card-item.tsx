import type { ProductCategoryCard } from '@/types/product-category-card';
import Image from 'next/image';

type ProductProps = {
	product: ProductCategoryCard;
};

const ProductCardItem = ({ product }: ProductProps) => {
	return (
		<div className='flex flex-col gap-4 rounded-md p-4 bg-primary'>
			<div className='rounded-md relative h-52'>
				<Image
					src={product.imageUrl}
					alt={product.name}
					fill
					objectFit='cover'
					className='rounded-md'
				/>
			</div>
			<div className='flex flex-col gap-4 flex-1'>
				<div className='w-full text-center rounded-md bg-muted py-2 font-semibold'>
					{product.name}
				</div>
				<div className='w-full text-center text-sm text-background'>
					{product.description}
				</div>
			</div>
		</div>
	);
};

export default ProductCardItem;
