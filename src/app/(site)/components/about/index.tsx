import { Logotipo } from '@/components/logo';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { productCategoryCard } from '@/data/product-category-card';
import Image from 'next/image';
import type { ReactNode } from 'react';

type paragraphProps = {
	children: ReactNode;
};

const Paragraph = ({ children }: paragraphProps) => {
	return <p className='mb-2'>{children}</p>;
};

const AboutEnterprise = () => {
	return (
		<section className='flex flex-col gap-4 px-4'>
			<h1 className='py-4 text-center text-2xl font-semibold md:text-4xl'>
				Quem somos? Saiba mais da nossa
				<span className='text-primary'> história</span>
			</h1>

			<div className='flex flex-col gap-4 md:flex-row'>
				<div className='grid grid-cols-2 items-stretch justify-stretch md:grid-cols-3 gap-4 w-full md:w-1/2'>
					{productCategoryCard
						.filter(item => item.isCard === true)
						.map(item => (
							<div key={item.id}>
								<Image
									src={item.imageUrl}
									alt={item.name}
									height={140}
									width={140}
									quality={100}
									sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
									className='w-full rounded-md'
								/>
							</div>
						))}
				</div>
				<div className='flex flex-col gap-4 bg-secondary w-full md:w-1/2 p-2 rounded-md'>
					<div className='flex items-center justify-center'>
						<Logotipo />
					</div>

					<Tabs defaultValue='about'>
						<TabsList className='w-full flex h-10'>
							<TabsTrigger
								className='flex-1 transition-all ease-in duration-500'
								value='about'>
								Quem somos
							</TabsTrigger>
							<TabsTrigger
								className='flex-1 transition-all ease-in duration-500'
								value='history'>
								História
							</TabsTrigger>
							<TabsTrigger
								className='flex-1 transition-all ease-in duration-500'
								value='culture'>
								Cultura
							</TabsTrigger>
						</TabsList>

						<TabsContent
							className='rounded-md p-4 text-sm'
							value='about'>
							<Paragraph>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								Tempore quas debitis rem nisi voluptate voluptas, iusto mollitia
								similique optio laboriosam quia repudiandae porro recusandae
								est, harum accusamus culpa sunt libero, alias ex quasi explicabo
								fugit.
							</Paragraph>
							<Paragraph>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								Tempore quas debitis rem nisi voluptate voluptas, iusto mollitia
								similique optio laboriosam quia repudiandae porro recusandae
								est, harum accusamus culpa sunt libero, alias ex quasi explicabo
								fugit.
							</Paragraph>
							<Paragraph>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								Tempore quas debitis rem nisi voluptate voluptas, iusto mollitia
								similique optio laboriosam quia repudiandae porro recusandae
								est, harum accusamus culpa sunt libero, alias ex quasi explicabo
								fugit.
							</Paragraph>
						</TabsContent>

						<TabsContent
							className='rounded-md p-4 text-sm'
							value='history'>
							<Paragraph>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								Tempore quas debitis rem nisi voluptate voluptas, iusto mollitia
								similique optio laboriosam quia repudiandae porro recusandae
								est, harum accusamus culpa sunt libero, alias ex quasi explicabo
								fugit.
							</Paragraph>
							<Paragraph>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								Tempore quas debitis rem nisi voluptate voluptas, iusto mollitia
								similique optio laboriosam quia repudiandae porro recusandae
								est, harum accusamus culpa sunt libero, alias ex quasi explicabo
								fugit.
							</Paragraph>
							<Paragraph>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								Tempore quas debitis rem nisi voluptate voluptas, iusto mollitia
								similique optio laboriosam quia repudiandae porro recusandae
								est, harum accusamus culpa sunt libero, alias ex quasi explicabo
								fugit.
							</Paragraph>
						</TabsContent>

						<TabsContent
							className='rounded-md p-4 text-sm'
							value='culture'>
							<h1 className='font-semibold text-xl text-primary'>Propósito</h1>
							<Paragraph>
								“Vivemos para, juntos, tocar a vida das pessoas, compartilhando
								momentos especiais.”
							</Paragraph>

							<h1 className='font-semibold text-xl text-primary text-center'>
								Missão
							</h1>
							<Paragraph>
								“Ser inspiração no universo do cacau, honrando todas as
								potencialidades desse fruto sagrado.”
							</Paragraph>

							<h1 className='font-semibold text-xl text-primary text-end'>
								Visão
							</h1>
							<Paragraph>
								“Transformar o ordinário em extraordinário, oferecendo ao nosso
								ecossistema uma relação duradoura com foco no crescimento,
								rentabilidade, oportunidades e sustentabilidade.”
							</Paragraph>
						</TabsContent>
					</Tabs>
				</div>
			</div>
		</section>
	);
};

export default AboutEnterprise;
