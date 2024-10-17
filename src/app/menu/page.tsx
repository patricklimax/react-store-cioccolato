import { Suspense } from 'react';
import SkeletonLoading from './components/skeleton-loading';
import TabProducts from './components/tab';

const PedidosPage = () => {
	return (
		<main className='p-4'>
			<h2 className='text-center text-3xl py-4 uppercase font-bold'>
				Página de Pedidos
			</h2>

			<Suspense fallback={<SkeletonLoading />}>
				<TabProducts />
			</Suspense>
		</main>
	);
};

export default PedidosPage;
