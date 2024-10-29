'use client';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { usePaymentMethodStore } from '@/stores/payment-method';
import { useRouter } from 'next/navigation';
import PixGenerate from './components/pix-generate';

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/components/ui/form';
import { usePixStore } from '@/stores/pix-store';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export const formSchema = z.object({
	paymentMethod: z.string().min(1, 'Você deve selecionar uma opção')
});

const PaymentPage = () => {
	const router = useRouter();
	const { paymentMethod, setPaymentMethod, saveLocalStoragePaymentMethod } =
		usePaymentMethodStore(state => state);

	const { pixCode } = usePixStore(state => state);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			paymentMethod
		}
	});

	const onSubmit = (data: z.infer<typeof formSchema>) => {
		setPaymentMethod(data.paymentMethod);
		saveLocalStoragePaymentMethod();
		router.push('/cart-checkout/send-order');
	};

	const backAddress = () => {
		router.push('/cart-checkout/address');
	};
	return (
		<section className='py-4'>
			<h3 className='font-extrabold text-xl mb-2 text-center bg-muted rounded-md py-1'>
				Pagamento
			</h3>
			<div>
				<PixGenerate />
				<div className='bg-secondary rounded-md mt-4 p-4'>
					<h3 className='text-center font-bold text-xl'>
						Restante do Pagamento
					</h3>
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className='flex flex-col gap-2'>
							<FormField
								control={form.control}
								name='paymentMethod'
								render={() => (
									<FormItem>
										<FormLabel>Escolha uma opção:</FormLabel>
										<FormControl>
											<RadioGroup
												defaultValue={paymentMethod}
												onValueChange={value =>
													form.setValue('paymentMethod', value)
												}
												className='flex flex-col  py-4'>
												<div className='flex items-center space-x-2'>
													<RadioGroupItem
														value='credit-card'
														id='credit-card'
													/>
													<Label htmlFor='credit-card'>Cartão de Crédito</Label>
												</div>
												<div className='flex items-center space-x-2'>
													<RadioGroupItem
														value='debit-card'
														id='debit-card'
													/>
													<Label htmlFor='debit-card'>Cartão de Débito</Label>
												</div>
												<div className='flex items-center space-x-2'>
													<RadioGroupItem
														value='cash'
														id='cash'
													/>
													<Label htmlFor='cash'>Dinheiro</Label>
												</div>
												<div className='flex items-center space-x-2'>
													<RadioGroupItem
														value='pix'
														id='pix'
													/>
													<Label htmlFor='pix'>PIX</Label>
												</div>
											</RadioGroup>
										</FormControl>
										{form.formState.errors.paymentMethod && (
											<FormMessage>
												{form.formState.errors.paymentMethod.message}
											</FormMessage>
										)}
									</FormItem>
								)}
							/>

							{!pixCode && (
								<p className='text-center font-semibold text-destructive'>
									Para avançar, gere o QR Code de pagamento.
								</p>
							)}
							<div className='mt-8 w-full flex items-center justify-center mx-auto gap-4'>
								<Button
									onClick={backAddress}
									variant={'outline'}
									type='button'
									className='w-fit md:w-1/2'>
									Voltar para Endereço
								</Button>
								<Button
									disabled={!pixCode}
									type='submit'
									className='w-fit md:w-1/2'>
									Ir para Enviar Pedido
								</Button>
							</div>
						</form>
					</Form>
				</div>
			</div>
		</section>
	);
};

export default PaymentPage;
