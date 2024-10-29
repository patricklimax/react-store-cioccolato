import { Button } from '@/components/ui/button';
import Link from 'next/link';

const CartEmpty = () => {
	return (
		<div className='bg-secondary rounded-md w-full h-full flex items-center justify-center flex-col gap-4 py-16'>
			<p className='text-2xl font-medium'>Olá...</p>
			<p className='text-sm'>Você ainda não adicionou itens ao carrinho.</p>

			<div className='flex flex-col items-center justify-center gap-4'>
				<p>Veja nosso Menu</p>
				<Link href='/menu'>
					<Button
						size={'sm'}
						className='text-xs flex-1'>
						Ir para Menu
					</Button>
				</Link>
			</div>
		</div>
	);
};

export default CartEmpty;