'use client';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { ToastAction } from '@/components/ui/toast';
import { useToast } from '@/hooks/use-toast';
import type { GeneralProduct } from '@/types/product';
import Image from 'next/image';
import { useState } from 'react';

interface ProductItem {
	product: GeneralProduct;
}

const EasterProduct = ({ product }: ProductItem) => {
	const { toast } = useToast();
	const [selectedCasca, setSelectedCasca] = useState<string[]>([]);
	const cascas = product.casca;

	const handleCheckboxChangeCasca = (
		sabor: string,
		product: GeneralProduct
	) => {
		if (selectedCasca.includes(sabor)) {
			setSelectedCasca(selectedCasca.filter(item => item !== sabor));
		} else if (selectedCasca.length < product.qdeCasca) {
			setSelectedCasca([...selectedCasca, sabor]);
		}
	};

	const isCheckedCasca = (sabor: string) => selectedCasca.includes(sabor);
	const isDisabledCasca = (sabor: string, product: GeneralProduct) =>
		!isCheckedCasca(sabor) && selectedCasca.length >= product.qdeCasca;

	//adicionar ao carrinho
	const addProductToCart = () => {
		// Todo: adicionar item ao carrinho

		//toast message
		toast({
			title: 'Adicionado ao Carrinho',
			description: product.name,
			action: <ToastAction altText='fechar'>Fechar</ToastAction>
		});
	};

	return (
		<div className='flex flex-col gap-4'>
			<div className='flex flex-col gap-4 md:flex-row'>
				<div className='flex flex-col items-center gap-4 md:flex-row w-full md:w-1/2 p-4 bg-secondary rounded-md'>
					<div className='rounded-md relative h-64 w-full md:w-1/2'>
						<Image
							src={product.imageUrl}
							alt={product.name}
							fill
							sizes='(max-width: 100%) 100%, (max-width: 16rem) 16rem, 16rem'
							objectFit='cover'
							className='rounded-md'
						/>
					</div>
					<div className='w-full md:w-1/2 flex flex-col gap-4'>
						<p className='font-semibold'>{product.name}</p>
						<p className='text-sm text-primary font-medium'>
							{product.description}
						</p>
						<div className='flex flex-col gap-1'>
							<h3 className='text-xs font-bold text-start'>Tags</h3>
							<div className='flex items-center md:flex-wrap gap-2'>
								<Badge>#gourmet</Badge>
								<Badge>#maisVendido</Badge>
								<Badge>#novidade</Badge>
							</div>
						</div>
					</div>
				</div>

				<div className='w-full md:w-1/2 bg-secondary flex flex-col p-4 gap-4 rounded-md'>
					{cascas.length > 0 && (
						<div className='flex-1 flex flex-col gap-2'>
							<h3>Escolha {product.qdeCasca} Casca:</h3>
							{cascas.map(casca => (
								<div
									key={casca}
									className='flex items-center'>
									<Checkbox
										id={casca}
										checked={isCheckedCasca(casca)}
										onCheckedChange={() =>
											handleCheckboxChangeCasca(casca, product)
										}
										disabled={isDisabledCasca(casca, product)}
										className='mr-2'
									/>
									<Label
										htmlFor={casca}
										className='cursor-pointer'>
										{casca}
									</Label>
								</div>
							))}
							<p className='font-bold'>
								Você ainda pode selecionar:{' '}
								{product.qdeCasca - selectedCasca.length} Massa.
							</p>
						</div>
					)}
				</div>
			</div>

			<div className='flex justify-end'>
				<Button
					onClick={addProductToCart}
					type='button'
					className='w-full md:w-1/4'>
					Adicionar ao Carrinho
				</Button>
			</div>
		</div>
	);
};

export default EasterProduct;
