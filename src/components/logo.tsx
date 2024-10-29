import Image from 'next/image';
import Link from 'next/link';

export const Logotipo = () => {
	return (
		<Link href='/'>
			<Image
				src='/images/logo/logo.png'
				alt='Logo da Empresa'
				height={100}
				width={140}
				quality={100}
				className='w-[140px] h-[100px]'
				sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
			/>
		</Link>
	);
};
