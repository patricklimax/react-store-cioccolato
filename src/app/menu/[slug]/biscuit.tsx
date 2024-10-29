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

type ProductItem = {
	product: GeneralProduct;
};

const BiscuitProduct = ({ product }: ProductItem) => {
	const { toast } = useToast();
	const [selectedSabores, setSelectedSabores] = useState<string[]>([]);
	const sabores = product.sabores;

	const { upSertCartItem } = useCartStore(state => state);

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

	const isChecked = (sabor: string) => selectedSabores.includes(sabor);
	const isDisabled = (sabor: string, product: GeneralProduct) =>
		!isChecked(sabor) && selectedSabores.length >= product.qdeSabores;

	//adicionar ao carrinho
	const addProductToCart = () => {
		// verificar sabores, massa, recheio, casca, cobertura, adicionais,
		if (selectedSabores.length > 0) {
			const newProduct = {
				...product,
				id: Date.now(),
				sabores: selectedSabores,
				cobertura: [],
				plus: [],
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
		} else {
			toast({
				variant: 'destructive',
				title: 'Selecione pelo menos um sabor.',
				description: product.name,
				action: <ToastAction altText='fechar'>Fechar</ToastAction>
			});
		}
	};

	return (
		<div className='flex flex-col gap-4'>
			<div className='flex flex-col gap-4 w-full mx-auto'>
				<InfoProduct product={product} />

				<div className='w-full bg-secondary flex flex-col md:flex-row p-4 gap-4 rounded-md'>
					{sabores.length > 0 && (
						<div className='flex-1 flex flex-col gap-2'>
							<h3 className='font-bold text-primary'>
								Escolha até {product.qdeSabores} sabores:
							</h3>
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
								{product.qdeSabores - selectedSabores.length} sabores.
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

export default BiscuitProduct;
