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

const EasterProduct = ({ product }: ProductItem) => {
	const { toast } = useToast();
	const [selectedCasca, setSelectedCasca] = useState<string[]>([]);
	const cascas = product.casca;
	const { upSertCartItem } = useCartStore(state => state);

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

			setSelectedCasca([]);
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
			<div className='flex flex-col gap-4 w-full'>
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
