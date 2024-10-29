import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { productCategoryCard } from '@/data/product-category-card';
import { getProducts } from '@/services/get-products';
import type { GeneralProduct } from '@/types/product';
import NoProduct from './no-product';
import ProductItem from './product-item';

type Tab = {
	title: string;
	value: string;
	products: GeneralProduct[];
};

const TabProducts = async () => {
	const products = await getProducts();

	const tabs: Tab[] = [
		{
			title: 'Todos',
			value: 'allProducts',
			products: products.map(item => item)
		},
		{
			title: 'Mais Vendidos',
			value: 'mostRequest',
			products: products.filter(product => product.mostRequest === true)
		},
		{
			title: 'Novidades',
			value: 'newProduct',
			products: products.filter(product => product.newProduct === true)
		},
		{
			title: 'Brigadeiros',
			value: 'brigadiers',
			products: products.filter(product => product.category === 'brigadier')
		},
		{
			title: 'Biscoitinhos',
			value: 'biscuits',
			products: products.filter(product => product.category === 'biscuit')
		},
		{
			title: 'Cookies',
			value: 'cookies',
			products: products.filter(product => product.category === 'cookie')
		},
		{
			title: 'Ovos',
			value: 'easter',
			products: products.filter(product => product.category === 'easter')
		},
		{
			title: 'Donuts',
			value: 'donuts',
			products: products.filter(product => product.category === 'donuts')
		},
		{
			title: 'Sorvetes',
			value: 'icecream',
			products: products.filter(product => product.category === 'icecream')
		}
	];

	return (
		<section className='w-full'>
			<Tabs
				defaultValue='allProducts'
				className='w-full'>
				<TabsList className='w-full gap-2 justify-start overflow-x-auto [&::-webkit-scrollbar]:hidden h-auto p-2'>
					{productCategoryCard.map(item => (
						<TabsTrigger
							key={item.id}
							className='border border-primary flex-1'
							value={item.category}>
							{item.name}
						</TabsTrigger>
					))}
				</TabsList>

				{tabs.map(tabContent => (
					<TabsContent
						key={tabContent.value}
						value={tabContent.value}
						className='border-0'>
						{tabContent.products.length > 0 && (
							<div className='grid gap-8 md:gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
								{tabContent.products.map(product => (
									<ProductItem
										key={product.id}
										product={product}
									/>
								))}
							</div>
						)}
						{tabContent.products.length === 0 && <NoProduct />}
					</TabsContent>
				))}
			</Tabs>
		</section>
	);
};

export default TabProducts;
