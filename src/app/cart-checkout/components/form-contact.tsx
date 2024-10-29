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
	name: z
		.string()
		.min(2, { message: 'O nome deve ter pelo menos 2 caracteres' }),
	lastName: z
		.string()
		.min(2, { message: 'O sobrenome deve ter pelo menos 2 caracteres' }),
	phone: z
		.string()
		.min(10, { message: 'O telefone deve ter no mínimo 10 dígitos' })
		.max(11, { message: 'O telefone deve ter no máximo 11 dígitos' })
		.regex(/^[0-9]+$/, 'O telefone deve conter apenas números')
});

const FormContact = () => {
	const router = useRouter();
	const {
		name,
		setName,
		lastName,
		setLastName,
		phone,
		setPhone,
		saveLocalStorageFormContact
	} = useCheckoutStore(state => state);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: { name, lastName, phone }
	});

	// envio do formulário
	const onSubmit = (data: z.infer<typeof formSchema>) => {
		setName(data.name);
		setLastName(data.lastName);
		setPhone(data.phone);
		saveLocalStorageFormContact();

		router.push('/cart-checkout/address');
		form.reset();
	};

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='flex flex-col gap-2'>
				<FormField
					control={form.control}
					name='name'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Nome</FormLabel>
							<FormControl>
								<Input
									placeholder='Digite seu nome'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name='lastName'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Sobrenome</FormLabel>
							<FormControl>
								<Input
									placeholder='Digite seu sobrenome'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name='phone'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Telefone</FormLabel>
							<FormControl>
								<Input
									placeholder='Digite seu telefone (XX) 9XXXX-XXXX'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<div className='mt-8 w-full flex gap-4 justify-end'>
					<Button
						type='submit'
						className='w-1/2'>
						Inserir Endereço
					</Button>
				</div>
			</form>
		</Form>
	);
};

export default FormContact;
