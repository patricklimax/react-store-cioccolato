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

const CookieProduct = ({ product }: ProductItem) => {
	const { toast } = useToast();
	const [selectedMassa, setSelectedMassa] = useState<string[]>([]);
	const [selectedRecheio, setSelectedRecheio] = useState<string[]>([]);
	const { upSertCartItem } = useCartStore(state => state);

	const massas = product.massa;
	const handleCheckboxChangeMassa = (
		massa: string,
		product: GeneralProduct
	) => {
		if (selectedMassa.includes(massa)) {
			setSelectedMassa(selectedMassa.filter(item => item !== massa));
		} else if (selectedMassa.length < product.qdeMassa) {
			setSelectedMassa([...selectedMassa, massa]);
		}
	};

	const isCheckedMassa = (massa: string) => selectedMassa.includes(massa);
	const isDisabledMassa = (massa: string, product: GeneralProduct) =>
		!isCheckedMassa(massa) && selectedMassa.length >= product.qdeMassa;

	const recheios = product.recheio;
	const handleCheckboxChangeRecheio = (
		recheio: string,
		product: GeneralProduct
	) => {
		if (selectedRecheio.includes(recheio)) {
			setSelectedRecheio(selectedRecheio.filter(item => item !== recheio));
		} else if (selectedRecheio.length < product.qdeRecheio) {
			setSelectedRecheio([...selectedRecheio, recheio]);
		}
	};

	const isCheckedRecheio = (recheio: string) =>
		selectedRecheio.includes(recheio);
	const isDisabledRecheio = (recheio: string, product: GeneralProduct) =>
		!isCheckedRecheio(recheio) && selectedRecheio.length >= product.qdeRecheio;

	//adicionar ao carrinho
	const addProductToCart = () => {
		// Todo: adicionar item ao carrinho
		// verificar sabores, massa, recheio, casca, cobertura, adicionais,
		if (selectedMassa.length > 0 && selectedRecheio.length > 0) {
			const newProduct = {
				...product,
				id: Date.now(),
				sabores: [],
				cobertura: [],
				plus: [],
				recheio: selectedRecheio,
				massa: selectedMassa,
				casca: []
			};
			upSertCartItem(newProduct, 1);
			toast({
				title: 'Adicionado ao Carrinho',
				description: product.name,
				action: <ToastAction altText='fechar'>Fechar</ToastAction>
			});

			setSelectedMassa([]);
			setSelectedRecheio([]);
		} else {
			toast({
				variant: 'destructive',
				title: 'Selecione pelo menos uma massa e um recheio.',
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
					{massas.length > 0 && (
						<div className='flex-1 flex flex-col gap-2'>
							<h3 className='font-bold text-primary'>
								Escolha apenas {product.qdeMassa} Massa:
							</h3>
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
								Você pode selecionar: {product.qdeMassa - selectedMassa.length}{' '}
								massa.
							</p>
						</div>
					)}

					{recheios.length > 0 && (
						<div className='flex-1 flex flex-col gap-2'>
							<h3 className='font-bold text-primary'>
								Escolha apenas {product.qdeRecheio} Recheio:
							</h3>
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
								Você pode selecionar:{' '}
								{product.qdeRecheio - selectedRecheio.length} recheio.
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

export default CookieProduct;
