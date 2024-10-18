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

const IcecreamProduct = ({ product }: ProductItem) => {
	const [selectedSabores, setSelectedSabores] = useState<string[]>([]);
	const [selectedCoberturas, setSelectedCoberturas] = useState<string[]>([]);
	const [selectedPlus, setSelectedPlus] = useState<string[]>([]);
	const sabores = product.sabores;

	const handleCheckboxChangeSabores = (
		sabor: string,
		product: GeneralProduct
	) => {
		if (selectedSabores.includes(sabor)) {
			setSelectedSabores(selectedSabores.filter(item => item !== sabor));
		} else if (selectedSabores.length < product.qdeSabores) {
			setSelectedSabores([...selectedSabores, sabor]);
		}
	};
	const isCheckedSabores = (sabor: string) => selectedSabores.includes(sabor);
	const isDisabledSabores = (sabor: string, product: GeneralProduct) =>
		!isCheckedSabores(sabor) && selectedSabores.length >= product.qdeSabores;

	const coberturas = product.cobertura;
	const handleCheckboxChangeCoberturas = (
		sabor: string,
		product: GeneralProduct
	) => {
		if (selectedCoberturas.includes(sabor)) {
			setSelectedCoberturas(selectedCoberturas.filter(item => item !== sabor));
		} else if (selectedCoberturas.length < product.qdeCobertura) {
			setSelectedCoberturas([...selectedCoberturas, sabor]);
		}
	};
	const isCheckedCoberturas = (sabor: string) =>
		selectedCoberturas.includes(sabor);
	const isDisabledCoberturas = (sabor: string, product: GeneralProduct) =>
		!isCheckedCoberturas(sabor) &&
		selectedCoberturas.length >= product.qdeCobertura;

	const plus = product.plus;
	const handleCheckboxChangePlus = (sabor: string, product: GeneralProduct) => {
		if (selectedPlus.includes(sabor)) {
			setSelectedPlus(selectedPlus.filter(item => item !== sabor));
		} else if (selectedPlus.length < product.qdePlus) {
			setSelectedPlus([...selectedPlus, sabor]);
		}
	};
	const isCheckedPlus = (sabor: string) => selectedPlus.includes(sabor);
	const isDisabledPlus = (sabor: string, product: GeneralProduct) =>
		!isCheckedPlus(sabor) && selectedPlus.length >= product.qdePlus;

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
					{sabores.length > 0 && (
						<div className='flex-1 flex flex-col gap-2'>
							<h3>Escolha {product.qdeSabores} Sabores:</h3>
							{sabores.map(sabor => (
								<div
									key={sabor}
									className='flex items-center'>
									<Checkbox
										id={sabor}
										checked={isCheckedSabores(sabor)}
										onCheckedChange={() =>
											handleCheckboxChangeSabores(sabor, product)
										}
										disabled={isDisabledSabores(sabor, product)}
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
								{product.qdeSabores - selectedSabores.length} Sabores.
							</p>
						</div>
					)}

					{coberturas.length > 0 && (
						<div className='flex-1 flex flex-col gap-2'>
							<h3>Escolha {product.qdeCobertura} Coberturas:</h3>
							{coberturas.map(cobertura => (
								<div
									key={cobertura}
									className='flex items-center'>
									<Checkbox
										id={cobertura}
										checked={isCheckedCoberturas(cobertura)}
										onCheckedChange={() =>
											handleCheckboxChangeCoberturas(cobertura, product)
										}
										disabled={isDisabledCoberturas(cobertura, product)}
										className='mr-2'
									/>
									<Label
										htmlFor={cobertura}
										className='cursor-pointer'>
										{cobertura}
									</Label>
								</div>
							))}
							<p className='font-bold'>
								Você ainda pode selecionar:{' '}
								{product.qdeCobertura - selectedCoberturas.length} Coberturas.
							</p>
						</div>
					)}

					{plus.length > 0 && (
						<div className='flex-1 flex flex-col gap-2'>
							<h3>Escolha {product.qdeCobertura} Adicionais:</h3>
							{plus.map(item => (
								<div
									key={item}
									className='flex items-center'>
									<Checkbox
										id={item}
										checked={isCheckedPlus(item)}
										onCheckedChange={() =>
											handleCheckboxChangePlus(item, product)
										}
										disabled={isDisabledPlus(item, product)}
										className='mr-2'
									/>
									<Label
										htmlFor={item}
										className='cursor-pointer'>
										{item}
									</Label>
								</div>
							))}
							<p className='font-bold'>
								Você ainda pode selecionar:{' '}
								{product.qdeCobertura - selectedCoberturas.length} Adicionais.
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

export default IcecreamProduct;
