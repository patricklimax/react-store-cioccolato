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
import ButtonAddItemCart from './button-add-item-cart';
import InfoProduct from './info-product';

interface ProductItem {
	product: GeneralProduct;
}

const EasterProduct = ({ product }: ProductItem) => {
	const { toast } = useToast();
	const [selectedCasca, setSelectedCasca] = useState<string[]>([]);
	const cascas = product.casca;
	const { upSertCartItem } = useCartStore(state => state);

	const handleCheckboxChangeCasca = (
		casca: string,
		product: GeneralProduct
	) => {
		if (selectedCasca.includes(casca)) {
			setSelectedCasca(selectedCasca.filter(item => item !== casca));
		} else if (selectedCasca.length < product.qdeCasca) {
			setSelectedCasca([...selectedCasca, casca]);
		}
	};

	const isCheckedCasca = (casca: string) => selectedCasca.includes(casca);
	const isDisabledCasca = (casca: string, product: GeneralProduct) =>
		!isCheckedCasca(casca) && selectedCasca.length >= product.qdeCasca;

	//adicionar ao carrinho
	const addProductToCart = () => {
		// Todo: adicionar item ao carrinho
		// verificar sabores, massa, recheio, casca, cobertura, adicionais,
		if (selectedCasca.length > 0) {
			const newProduct = {
				...product,
				id: Date.now(),
				sabores: [],
				cobertura: [],
				plus: [],
				recheio: [],
				massa: [],
				casca: selectedCasca
			};
			upSertCartItem(newProduct, 1);
			toast({
				title: 'Adicionado ao Carrinho',
				description: product.name,
				action: <ToastAction altText='fechar'>Fechar</ToastAction>
			});
			setSelectedCasca([]);
		} else {
			toast({
				variant: 'destructive',
				title: 'Selecione sua casca.',
				description: product.name,
				action: <ToastAction altText='fechar'>Fechar</ToastAction>
			});
		}
	};

	return (
		<div className='flex flex-col gap-4'>
			<div className='flex flex-col gap-4 w-full'>
				<InfoProduct product={product} />

				<div className='w-full bg-secondary flex flex-col md:flex-row p-4 gap-4 rounded-md'>
					{cascas.length > 0 && (
						<div className='flex-1 flex flex-col gap-2'>
							<h3 className='font-bold text-primary'>
								Escolha sua {product.qdeCasca} Casca:
							</h3>
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
								{product.qdeCasca - selectedCasca.length} Casca.
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

export default EasterProduct;
