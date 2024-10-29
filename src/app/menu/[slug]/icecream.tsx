'use client';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { ToastAction } from '@/components/ui/toast';
import { useToast } from '@/hooks/use-toast';
import { useCartStore } from '@/stores/cart-store';
import type { GeneralProduct } from '@/types/product';
import { useState } from 'react';
import ButtonAddItemCart from './button-add-item-cart';
import InfoProduct from './info-product';

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
		cobertura: string,
		product: GeneralProduct
	) => {
		if (selectedCoberturas.includes(cobertura)) {
			setSelectedCoberturas(
				selectedCoberturas.filter(item => item !== cobertura)
			);
		} else if (selectedCoberturas.length < product.qdeCobertura) {
			setSelectedCoberturas([...selectedCoberturas, cobertura]);
		}
	};
	const isCheckedCoberturas = (cobertura: string) =>
		selectedCoberturas.includes(cobertura);
	const isDisabledCoberturas = (cobertura: string, product: GeneralProduct) =>
		!isCheckedCoberturas(cobertura) &&
		selectedCoberturas.length >= product.qdeCobertura;

	const plus = product.plus;
	const handleCheckboxChangePlus = (plus: string, product: GeneralProduct) => {
		if (selectedPlus.includes(plus)) {
			setSelectedPlus(selectedPlus.filter(item => item !== plus));
		} else if (selectedPlus.length < product.qdePlus) {
			setSelectedPlus([...selectedPlus, plus]);
		}
	};
	const isCheckedPlus = (plus: string) => selectedPlus.includes(plus);
	const isDisabledPlus = (plus: string, product: GeneralProduct) =>
		!isCheckedPlus(plus) && selectedPlus.length >= product.qdePlus;

	//adicionar ao carrinho
	const addProductToCart = () => {
		// Todo: adicionar item ao carrinho
		// verificar sabores, massa, recheio, casca, cobertura, adicionais,
		if (
			selectedSabores.length > 0 &&
			(selectedCoberturas.length >= 0 || selectedPlus.length >= 0)
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
			toast({
				title: 'Adicionado ao Carrinho',
				description: product.name,
				action: <ToastAction altText='fechar'>Fechar</ToastAction>
			});
			setSelectedSabores([]);
			setSelectedCoberturas([]);
			setSelectedPlus([]);
		} else {
			toast({
				variant: 'destructive',
				title: 'Selecione pelo menos um sabor, cobertura ou adicionais.',
				description: product.name,
				action: <ToastAction altText='fechar'>Fechar</ToastAction>
			});
		}
	};

	return (
		<div className='flex flex-col gap-4'>
			<div className='mx-auto flex w-full flex-col gap-4'>
				<InfoProduct product={product} />

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
				<ButtonAddItemCart onClick={addProductToCart} />
			</div>
		</div>
	);
};

export default IcecreamProduct;
