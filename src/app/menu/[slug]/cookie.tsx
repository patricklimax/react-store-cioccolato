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

const CookieProduct = ({ product }: ProductItem) => {
	const [selectedMassa, setSelectedMassa] = useState<string[]>([]);
	const [selectedRecheio, setSelectedRecheio] = useState<string[]>([]);

	const massas = product.massa;
	const handleCheckboxChangeMassa = (
		sabor: string,
		product: GeneralProduct
	) => {
		if (selectedMassa.includes(sabor)) {
			setSelectedMassa(selectedMassa.filter(item => item !== sabor));
		} else if (selectedMassa.length < product.qdeMassa) {
			setSelectedMassa([...selectedMassa, sabor]);
		}
	};

	const isCheckedMassa = (sabor: string) => selectedMassa.includes(sabor);
	const isDisabledMassa = (sabor: string, product: GeneralProduct) =>
		!isCheckedMassa(sabor) && selectedMassa.length >= product.qdeMassa;

	const recheios = product.recheio;
	const handleCheckboxChangeRecheio = (
		sabor: string,
		product: GeneralProduct
	) => {
		if (selectedRecheio.includes(sabor)) {
			setSelectedRecheio(selectedRecheio.filter(item => item !== sabor));
		} else if (selectedRecheio.length < product.qdeRecheio) {
			setSelectedRecheio([...selectedRecheio, sabor]);
		}
	};

	const isCheckedRecheio = (sabor: string) => selectedRecheio.includes(sabor);
	const isDisabledRecheio = (sabor: string, product: GeneralProduct) =>
		!isCheckedRecheio(sabor) && selectedRecheio.length >= product.qdeRecheio;
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
					{massas.length > 0 && (
						<div className='flex-1 flex flex-col gap-2'>
							<h3>Escolha sua {product.qdeMassa} Massa:</h3>
							{massas.map(massa => (
								<div
									key={massa}
									className='flex items-center'>
									<Checkbox
										id={massa}
										checked={isCheckedMassa(massa)}
										onCheckedChange={() =>
											handleCheckboxChangeMassa(massa, product)
										}
										disabled={isDisabledMassa(massa, product)}
										className='mr-2'
									/>
									<Label
										htmlFor={massa}
										className='cursor-pointer'>
										{massa}
									</Label>
								</div>
							))}
							<p className='font-bold'>
								Você ainda pode selecionar:{' '}
								{product.qdeMassa - selectedMassa.length} Massa.
							</p>
						</div>
					)}

					{recheios.length > 0 && (
						<div className='flex-1 flex flex-col gap-2'>
							<h3>Escolha até {product.qdeRecheio} Recheio:</h3>
							{recheios.map(recheio => (
								<div
									key={recheio}
									className='flex items-center'>
									<Checkbox
										id={recheio}
										checked={isCheckedRecheio(recheio)}
										onCheckedChange={() =>
											handleCheckboxChangeRecheio(recheio, product)
										}
										disabled={isDisabledRecheio(recheio, product)}
										className='mr-2'
									/>
									<Label
										htmlFor={recheio}
										className='cursor-pointer'>
										{recheio}
									</Label>
								</div>
							))}
							<p className='font-bold'>
								Você ainda pode selecionar:{' '}
								{product.qdeRecheio - selectedRecheio.length} recheio.
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

export default CookieProduct;
