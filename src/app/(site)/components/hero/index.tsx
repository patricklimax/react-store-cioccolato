import { Button } from '@/components/ui/button';

const HeroPage = () => {
	return (
		<section className='flex flex-col items-center justify-center gap-10 p-16'>
			<p className='text-4xl md:text-6xl md:w-1/2 font-semibold text-center'>
				Compartilhando momentos <span className='text-primary'> doces</span> e{' '}
				<span className='text-primary'> especiais</span> com você.
			</p>
			<Button>Já quero comprar</Button>
		</section>
	);
};

export default HeroPage;
