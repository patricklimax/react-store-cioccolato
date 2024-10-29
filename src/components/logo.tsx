import Image from 'next/image';
import Link from 'next/link';

export const Logotipo = () => {
	return (
		<Link href='/'>
			<Image
				src='/images/logo/logo.png'
				alt='Logo da Empresa'
				height={60}
				width={204}
				quality={100}
				className='w-[204px] h-[60px]'
				priority
				sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
			/>
		</Link>
	);
};
