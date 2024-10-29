import type { ProductCategoryCard } from '@/types/product-category-card';
import Image from 'next/image';

type ProductProps = {
	product: ProductCategoryCard;
};

const ProductCardItem = ({ product }: ProductProps) => {
	return (
		<div className='flex flex-col gap-4 rounded-md p-4 bg-primary'>
			<div className='rounded-md '>
				<div className='grid grid-cols-1 items-center justify-center w-full h-full'>
					<Image
						src={product.imageUrl}
						alt={product.name}
						height={208}
						width={208}
						quality={100}
						sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
						className='w-full h-full'
						priority
					/>
				</div>
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
