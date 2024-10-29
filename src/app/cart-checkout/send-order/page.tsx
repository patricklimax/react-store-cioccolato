'use client';
import { Button } from '@/components/ui/button';
import { useCheckoutStore } from '@/stores/checkout-store';
import { orderMessageGenerator } from '@/utils/generate-message-order';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

type ParagraphProps = React.HTMLAttributes<HTMLParagraphElement>;

const Paragraph = (props: ParagraphProps) => {
	return (
		<p
			className='text-justify text-sm mt-2'
			{...props}>
			{props.children}
		</p>
	);
};

const SendOrderPage = () => {
	const router = useRouter();
	const { name } = useCheckoutStore(state => state);

	const message = orderMessageGenerator();
	const phoneOrder = process.env.NEXT_PUBLIC_PHONE_ORDER;

	const linkOrderWhatsapp = `https://wa.me//${phoneOrder}?text=${encodeURI(message)}`;

	const backPayment = () => {
		router.push('/cart-checkout/payment');
	};

	return (
		<section className='py-4'>
			<div className='flex flex-col gap-2'>
				<h3 className='text-lg font-semibold'>
					Olá, <strong className='text-primary'>{name}</strong>! Informações
					Importantes.
				</h3>
				{/* //todo limpar o localStorage de Contato e Endereço após envio do pedido */}
				<div>
					<h5 className='mt-4'>
						<span>Ao clicar no botão</span>
						<span className='text-primary font-bold ml-1'>
							Enviar Pedido - Whatsapp
						</span>
					</h5>
					<Paragraph>
						Você confirma que leu, entendeu e aceita nossos Termos de Uso,
						Termos de Venda e Política de Devolução e reconhece que leu a
						Política de Privacidade da Cioccolato.
					</Paragraph>

					<Paragraph>
						Além disso, você concorda em compartilhar seu carrinho, endereço,
						nome e número de telefone com a empresa para que ela possa confirmar
						seu pedido e o preço total, incluindo impostos, taxas, descontos e
						frete.
					</Paragraph>

					<Paragraph>
						Seu pedido só estará garantido com a confirmação do pagamento de 50%
						do valor do pedido.
					</Paragraph>

					<Paragraph>
						Para agilizar, após o pagamento, envie o comprovante para nosso
						número.
					</Paragraph>

					<Paragraph>
						Agora envie seu pedido para nosso Whatsapp. Nosso atendente guiará
						você os próximos para efetivação do pedido.
					</Paragraph>

					<div className='flex items-center justify-end'>
						<Link href={'/faq'}>
							<Button
								size={'sm'}
								variant={'outline'}
								className='text-xs'>
								Tire suas dúvidas
							</Button>
						</Link>
					</div>
				</div>

				<div className='mt-8 w-full flex gap-4 justify-end'>
					<Button
						onClick={backPayment}
						variant={'outline'}
						type='button'
						className='w-1/2'>
						Voltar para Pagamento
					</Button>

					<Button
						// onClick={removeItemStorage}
						type='button'
						className='w-1/2'>
						<Link
							href={linkOrderWhatsapp}
							target='_blank'>
							Enviar Pedido - Whatsapp
						</Link>
					</Button>
				</div>
			</div>
		</section>
	);
};

export default SendOrderPage;

// #FF69B4
// #FFF0F5
