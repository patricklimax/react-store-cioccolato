'use client';

import { products } from '@/data/products';
import BiscuitProduct from './biscuit';
import BrigadierProduct from './brigadier';
import CookieProduct from './cookie';
import EasterProduct from './easter';
import IcecreamProduct from './icecream';

interface ParamsProduct {
	params: {
		slug?: string;
	};
}

const DetailsProduct = ({ params }: ParamsProduct) => {
	if (!params) {
		//TODO: redirect to homepage
		return null;
	}

	const product = products.find(product => product.slug === params.slug);
	if (!product) return null;

	return (
		<section className='p-4'>
			<h2 className='text-center text-3xl py-2 uppercase font-bold'>
				Montando Pedido
			</h2>

			<div className='py-5'>
				{product.category === 'brigadier' && (
					<BrigadierProduct product={product} />
				)}
				{product.category === 'biscuit' && <BiscuitProduct product={product} />}
				{product.category === 'cookie' && <CookieProduct product={product} />}
				{product.category === 'easter' && <EasterProduct product={product} />}
				{product.category === 'icecream' && (
					<IcecreamProduct product={product} />
				)}
			</div>
		</section>
	);
};

export default DetailsProduct;
