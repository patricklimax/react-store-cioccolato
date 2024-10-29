import Link from 'next/link';
import { Logotipo } from './logo';

type LinkProps = {
	id?: number;
	href: string;
	label: string;
};

const links: LinkProps[] = [
	{
		id: 1,
		href: '/',
		label: 'Home'
	},
	{
		id: 2,
		href: '/pedidos',
		label: 'Fazer Pedido'
	},
	{
		id: 3,
		href: '/termos-e-condicoes',
		label: 'Termos e Condições'
	},
	{
		id: 4,
		href: '/politica-de-envio-e-devolucao',
		label: 'Política de Envio e Devolução'
	},
	{
		id: 5,
		href: '/politica-de-privacidade',
		label: 'Política de Privacidade'
	},
	{
		id: 6,
		href: 'faq',
		label: 'Perguntas frequentes'
	}
];

const LinkFooter = ({ href, label }: LinkProps) => {
	return (
		<li className='hover:text-muted-foreground transition-all duration-200 ease-in-out'>
			<Link href={href}>{label}</Link>
		</li>
	);
};

const Footer = () => {
	return (
		<footer className=' max-w-[88rem] mx-auto px-10 border-t'>
			<div className='flex flex-col md:flex-row gap-4 md:gap-10 py-10'>
				<Logotipo />
				<ul className='flex flex-col text-sm font-semibold gap-2'>
					{links.map(link => (
						<LinkFooter
							key={link.id}
							href={link.href}
							label={link.label}
						/>
					))}
				</ul>
			</div>

			<div className='border-t py-4 flex flex-col md:flex-row items-center justify-between'>
				<p className='text-center text-sm font-semibold'>
					Todos os direitos reservados - 2024
				</p>
				<div className='flex items-center gap-1 text-center text-sm font-semibold'>
					<p>Desenvolvido por</p>
					<p className='text-primary'>Patrick Lima</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
