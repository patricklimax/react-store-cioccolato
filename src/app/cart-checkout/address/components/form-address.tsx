'use client';
import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useCheckoutStore } from '@/stores/checkout-store';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

// Definindo o esquema de validação com Zod
const formSchema = z.object({
	street: z
		.string()
		.min(2, { message: 'O logradouro deve ter pelo menos 2 caracteres' }),
	complement: z.string().optional(),
	district: z
		.string()
		.min(2, { message: 'O bairro deve ter pelo menos 2 caracteres' }),
	zipCode: z
		.string()
		.length(8, { message: 'O CEP deve ter 8 dígitos' })
		.regex(/^[0-9]+$/, 'O CEP deve conter apenas números'),
	city: z
		.string()
		.min(2, { message: 'A cidade deve ter pelo menos 2 caracteres' }),
	stateUF: z
		.string()
		.min(2, { message: 'O estado deve ter pelo menos 2 caracteres' })
});

const FormAddress = () => {
	const router = useRouter();
	const { address, setAddress, saveLocalStorageFormAddress } = useCheckoutStore(
		state => state
	);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: { ...address }
	});

	const onSubmit = (data: z.infer<typeof formSchema>) => {
		setAddress(data);
		saveLocalStorageFormAddress();
		router.push('/cart-checkout/payment');
		form.reset();
	};

	const backContact = () => {
		router.push('/cart-checkout');
	};

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='flex flex-col gap-2'>
				{/* Campo Logradouro */}
				<FormField
					control={form.control}
					name='street'
					render={({ field }) => (
						<FormItem>
							<FormLabel>
								Logradouro<span className='text-destructive'>*</span>
							</FormLabel>
							<FormControl>
								<Input
									className={
										form.formState.errors.street
											? 'border border-destructive'
											: 'border'
									}
									placeholder='Rua Zero, nº 1000'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* Campo Complemento (Opcional) */}
				<FormField
					control={form.control}
					name='complement'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Complemento</FormLabel>
							<FormControl>
								<Input
									placeholder='Ed. Alto, Sala 400'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name='district'
					render={({ field }) => (
						<FormItem>
							<FormLabel>
								Bairro<span className='text-destructive'>*</span>
							</FormLabel>
							<FormControl>
								<Input
									className={
										form.formState.errors.district
											? 'border border-destructive'
											: 'border'
									}
									placeholder='Bairro'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name='zipCode'
					render={({ field }) => (
						<FormItem>
							<FormLabel>
								CEP<span className='text-destructive'>*</span>
							</FormLabel>
							<FormControl>
								<Input
									className={
										form.formState.errors.zipCode
											? 'border border-destructive'
											: 'border'
									}
									placeholder='99999-111'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name='city'
					render={({ field }) => (
						<FormItem>
							<FormLabel>
								Cidade<span className='text-destructive'>*</span>
							</FormLabel>
							<FormControl>
								<Input
									className={
										form.formState.errors.city
											? 'border border-destructive'
											: 'border'
									}
									placeholder='Qual sua cidade?'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name='stateUF'
					render={({ field }) => (
						<FormItem>
							<FormLabel>
								Estado<span className='text-destructive'>*</span>
							</FormLabel>
							<FormControl>
								<Input
									className={
										form.formState.errors.stateUF
											? 'border border-destructive'
											: 'border'
									}
									placeholder='Qual seu Estado'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* Botão de Enviar */}

				<div className='mt-8 w-full flex gap-4 justify-end'>
					<Button
						onClick={backContact}
						variant={'outline'}
						type='button'
						className='w-1/2'>
						Voltar para Dados
					</Button>
					<Button
						type='submit'
						className='w-1/2'>
						Ir para Pagamento
					</Button>
				</div>
			</form>
		</Form>
	);
};

export default FormAddress;
