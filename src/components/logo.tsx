import Image from 'next/image';
import Link from 'next/link';

export const Logotipo = () => {
	return (
		<Link href='/'>
			<Image
				src='/images/logo/logotipo.svg'
				alt='Logo da Empresa'
				height={60}
				width={204}
				quality={100}
				className='w-[204px] h-[60px] drop-shadow-2xl shadow-red-600'
				priority
				sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
			/>
		</Link>
	);
};
