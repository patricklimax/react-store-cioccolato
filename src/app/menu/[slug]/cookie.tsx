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

const CookieProduct = ({ product }: ProductItem) => {
	const { toast } = useToast();
	const [selectedMassa, setSelectedMassa] = useState<string[]>([]);
	const [selectedRecheio, setSelectedRecheio] = useState<string[]>([]);
	const { upSertCartItem } = useCartStore(state => state);

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

			setSelectedMassa([]);
			setSelectedRecheio([]);
		} else {
			alert('Selecione pelo menos uma massa e um recheio.');
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
			<div className='flex flex-col gap-4 w-full mx-auto'>
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

			<div className='flex justify-end w-full md:w-4/6 mx-auto'>
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

export default CookieProduct;
