import { productsCard } from '@/app/data/products-card';
import { Button } from '@/components/ui/button';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from '@/components/ui/carousel';
import Link from 'next/link';
import ProductCardItem from './product-card-item';

const ProductList = () => {
	return (
		<section className='flex flex-col items-center justify-center gap-4 py-10 bg-secondary w-full mx-auto mb-10'>
			<h1 className='font-semibold text-2xl md:text-4xl py-4 text-center'>
				Um pouco das nossas
				<span className='text-primary'> delicias</span>
			</h1>
			<Carousel className='w-9/12'>
				<CarouselContent className='-ml-1'>
					{productsCard.map(item => (
						<CarouselItem
							key={item.id}
							className='flex pl-2 md:basis-1/2 lg:basis-1/3'>
							<ProductCardItem produto={item} />
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
			<div className='flex flex-col items-center gap-4 mt-4'>
				<p>Para fazer seu pedido, clique no botão abaixo.</p>
				<Button>
					<Link href='/pedidos'>Ir para página de Pedidos</Link>
				</Button>
			</div>
		</section>
	);
};

export default ProductList;
