import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import type { GeneralProduct } from '@/types/product';
import Image from 'next/image';
import { useState } from 'react';

interface ProductItem {
	product: GeneralProduct;
}

const BiscuitProduct = ({ product }: ProductItem) => {
	const [selectedFlavors, setSelectedFlavors] = useState<string[]>([]);
	const sabores = product.sabores;

	const handleCheckboxChangeSabores = (
		sabor: string,
		product: GeneralProduct
	) => {
		if (selectedFlavors.includes(sabor)) {
			setSelectedFlavors(selectedFlavors.filter(item => item !== sabor));
		} else if (selectedFlavors.length < product.qdeSabores) {
			setSelectedFlavors([...selectedFlavors, sabor]);
		}
	};

	const isChecked = (sabor: string) => selectedFlavors.includes(sabor);
	const isDisabled = (sabor: string, product: GeneralProduct) =>
		!isChecked(sabor) && selectedFlavors.length >= product.qdeSabores;

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

				<div className='w-full md:w-1/2 bg-secondary flex p-4 gap-4 rounded-md'>
					{sabores.length > 0 && (
						<div className='flex-1 flex flex-col gap-2'>
							<h3>Escolha até {product.qdeSabores} sabores:</h3>
							{sabores.map(sabor => (
								<div
									key={sabor}
									className='flex items-center'>
									<Checkbox
										id={sabor}
										checked={isChecked(sabor)}
										onCheckedChange={() =>
											handleCheckboxChangeSabores(sabor, product)
										}
										disabled={isDisabled(sabor, product)}
										className='mr-2'
									/>
									<Label
										htmlFor={sabor}
										className='cursor-pointer'>
										{sabor}
									</Label>
								</div>
							))}
							<p className='font-bold'>
								Você ainda pode selecionar:{' '}
								{product.qdeSabores - selectedFlavors.length} sabores.
							</p>
						</div>
					)}
				</div>
			</div>

			<div className='flex justify-end'>
				<Button
					type='button'
					className='w-full md:w-1/4'>
					Adicionar ao Carrinho
				</Button>
			</div>
		</div>
	);
};

export default BiscuitProduct;
