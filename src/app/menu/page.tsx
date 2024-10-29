import { Suspense } from 'react';
import TabProducts from './components/tab-product';
import Loading from './loading';

const MenuPage = () => {
	return (
		<section className='p-4'>
			<h2 className='text-center text-3xl py-4 uppercase font-bold'>
				MENU{' '}
				<span className='uppercase align-top text-sm text-primary'>
					onde você faz sua melhor escolha
				</span>
			</h2>

			<Suspense fallback={<Loading />}>
				<TabProducts />
			</Suspense>
		</section>
	);
};

export default MenuPage;
