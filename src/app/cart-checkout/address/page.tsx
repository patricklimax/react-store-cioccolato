'use client';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import FormAddress from './components/form-address';

const AddressPage = () => {
	const [receiptOrder, setReceiptOrder] = useState<string>('delivery');
	const router = useRouter();

	const goPayment = () => {
		router.push('/cart-checkout/payment');
	};

	const backContact = () => {
		router.push('/cart-checkout');
	};

	return (
		<section className='py-4'>
			<RadioGroup
				value={receiptOrder}
				onValueChange={setReceiptOrder}
				defaultValue='delivery'
				className='flex items-center justify-center py-4'>
				<div className='flex items-center space-x-2'>
					<RadioGroupItem
						value='delivery'
						id='delivery'
					/>
					<Label htmlFor='delivery'>Delivery</Label>
				</div>
				<div className='flex items-center space-x-2'>
					<RadioGroupItem
						value='pickup'
						id='pickup'
					/>
					<Label htmlFor='pickup'>Retirada</Label>
				</div>
			</RadioGroup>

			{receiptOrder === 'delivery' && (
				<div>
					<h3 className='font-extrabold text-xl mb-2 text-center bg-muted rounded-md py-1'>
						Endereço para Entrega
					</h3>
					<FormAddress />
				</div>
			)}
			{receiptOrder === 'pickup' && (
				<div className='flex flex-col'>
					<h3 className='font-extrabold text-xl mb-2 text-center bg-muted rounded-md py-1'>
						Endereço para Retirada
					</h3>
					<div className='p-5'>
						<p>Avenida Alameda das Travessas, nº 111.</p>
						<p>Edifício Lá do Alto, apartamento 2222, 22º Andar</p>
						<p>Bairro dos Barris, CEP: 40000-000</p>
						<p>São Luís, Maranhão, Brasil</p>
					</div>
					<div className='mt-8 w-full flex gap-4 justify-end'>
						<Button
							onClick={backContact}
							variant={'outline'}
							type='button'
							className='w-1/2'>
							Voltar para Dados
						</Button>
						<Button
							onClick={goPayment}
							type='button'
							className='w-1/2'>
							Ir para Pagamento
						</Button>
					</div>
				</div>
			)}
		</section>
	);
};

export default AddressPage;
