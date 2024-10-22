'use client';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { ToastAction } from '@/components/ui/toast';
import { useToast } from '@/hooks/use-toast';
import { useCartStore } from '@/stores/cart-store';
import type { GeneralProduct } from '@/types/product';
import { GiftIcon } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

interface ProductItem {
	product: GeneralProduct;
}

const IcecreamProduct = ({ product }: ProductItem) => {
	const { upSertCartItem } = useCartStore(state => state);
	const { toast } = useToast();
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

	//adicionar ao carrinho
	const addProductToCart = () => {
		// Todo: adicionar item ao carrinho
		// verificar sabores, massa, recheio, casca, cobertura, adicionais,
		if (
			selectedSabores.length > 0 &&
			selectedCoberturas.length > 0 &&
			selectedPlus.length > 0
		) {
			const newProduct = {
				...product,
				id: Date.now(),
				sabores: selectedSabores,
				cobertura: selectedCoberturas,
				plus: selectedPlus,
				recheio: [],
				massa: [],
				casca: []
			};

			upSertCartItem(newProduct, 1);

			setSelectedSabores([]);
			setSelectedCoberturas([]);
			setSelectedPlus([]);
		} else {
			alert('Selecione pelo menos um sabor, uma cobertura e um adicional.');
		}

		// upSertCartItem(product, 1);

		//toast message
		toast({
			title: 'Adicionado ao Carrinho',
			description: product.name,
			action: <ToastAction altText='fechar'>Fechar</ToastAction>
		});
	};

	return (
		<div className='flex flex-col gap-4'>
			<div className='mx-auto flex w-full flex-col gap-4'>
				<div className='flex w-full flex-col items-center gap-4 rounded-md bg-secondary p-4 md:flex-row'>
					<div className='relative h-64 w-full rounded-md md:w-1/4'>
						<Image
							src={product.imageUrl}
							alt={product.name}
							fill
							sizes='(max-width: 100%) 100%, (max-width: 16rem) 16rem, 16rem'
							objectFit='cover'
							className='rounded-md'
						/>
					</div>
					<div className='flex w-full flex-col gap-4 md:w-1/2'>
						<p className='font-semibold'>{product.name}</p>
						<p className='text-sm font-medium text-primary'>
							{product.description}
						</p>
						<div className='flex flex-col gap-1'>
							<h3 className='text-start text-xs font-bold'>Tags</h3>
							<div className='flex items-center gap-2 md:flex-wrap'>
								<Badge>#gourmet</Badge>
								<Badge>#maisVendido</Badge>
								<Badge>#novidade</Badge>
							</div>
						</div>
						<div className='mt-4 flex items-center justify-center gap-8'>
							<p className='text-sm font-bold text-muted-foreground line-through'>
								R$ {product.price.toFixed(2)}
							</p>
							<div className='flex items-center justify-center'>
								<GiftIcon className='text-primary' />
								<p className='text-2xl font-bold'>
									R$ {(product.price * 0.95).toFixed(2)}
								</p>
							</div>
						</div>
					</div>
					<div className='relative h-64 w-full rounded-md md:w-1/4 hidden md:block'>
						<Image
							src={product.imageUrl}
							alt={product.name}
							fill
							sizes='(max-width: 100%) 100%, (max-width: 16rem) 16rem, 16rem'
							objectFit='cover'
							className='rounded-md'
						/>
					</div>
				</div>

				<div className='flex w-full gap-4 flex-col md:flex-row rounded-md bg-secondary p-4'>
					{sabores.length > 0 && (
						<div className='flex flex-1 flex-col gap-2'>
							<h3 className='font-bold text-primary'>
								Escolha até {product.qdeSabores} Sabores:
							</h3>
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
						<div className='flex flex-1 flex-col gap-2'>
							<h3 className='font-bold text-primary'>
								Escolha até {product.qdeCobertura} Coberturas:
							</h3>
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
						<div className='flex flex-1 flex-col gap-2'>
							<h3 className='font-bold text-primary'>
								Escolha até {product.qdePlus} Adicionais:
							</h3>
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
								{product.qdePlus - selectedPlus.length} Adicionais.
							</p>
						</div>
					)}
				</div>
			</div>

			<div className='flex justify-end w-full mx-auto'>
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

export default IcecreamProduct;
