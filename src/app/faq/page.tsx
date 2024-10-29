import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from '@/components/ui/accordion';

type FaqProps = {
	id: number;
	question: string;
	answer: string;
};

const dataQuestion: FaqProps[] = [
	{
		id: 1,
		question: 'Produtos que vendemos',
		answer:
			'A Cioccolato produz bolos, tortas, salgados, docinhos, cupcakes, biscoitos finos, rocambole.'
	},
	{
		id: 2,
		question: 'Região que atendemos',
		answer: 'Atendemos toda a região metropolitana da Ilha de São Luís.'
	},
	{
		id: 3,
		question: 'Prazo de Encomenda',
		answer:
			'O prazo ideal para encomendas é de até 03 dias, dependendo do número de itens e da sua complexidade. Em datas comemorativas como Dias do nasmorados, Dias das mães, Dias dos pais, Páscoa, São João, Natal e Reveillon a procura é ampliada. Portanto, procure fazer logo o seu pedido para garantir sua data.'
	},
	{
		id: 4,
		question: 'Na hora do pedido',
		answer:
			'Conferir seu pedido na hora que está sendo realizado "Entregue".Não será reembolsado o cliente que não vier retirar seu pedido na data prevista.'
	},
	{
		id: 5,
		question: 'Pedidos para o Natal e Ano Novo',
		answer:
			'Pedidos para os dias 24 e 31 de dezembro só poderão ser cancelados no prazo máximo de até 48 horas de antecedência.'
	},
	{
		id: 6,
		question: 'Entrega',
		answer:
			'Por enquanto não entregamos nenhum tipo de encomenda nas casas do cliente. A entrega é feita exclusivamente nas instalações da Alô Doces, não possuimos serviço de Delivery. Pedimos para conferir sua mercadoria no ato da entrega, não aceitaremos reclamações posteriores. Fica a cargo do cliente a responsabilidade pela busca e o transporte dos produtos.'
	},
	{
		id: 7,
		question: 'Pagamento em dinheiro',
		answer:
			'Seu pedido só estará garantido com a confirmação do pagamento de 50% do valor de entrada o SINAL. Ficando a critério do cliente o pagamento total da compra no ato do pedido ou 50% do valor. Para retirada do seu pedido o cliente deverá efetuar o pagamento do restante do valor os outro 50% pendente em dinheiro.'
	},
	{
		id: 8,
		question: 'Aceitamos também os cartões:',
		answer:
			'AMEX, AURA, BRASILCARD, CABAL, CARDBAN, DINERS, ELO, FORTBRASIL, GRANDCARD, HIPERCARD, MAIS, MASTERCARD, PERSONALCARD, PLENOCARD, SOROCRED, VALECARD, VISA.'
	},
	{
		id: 9,
		question: 'Recusa de Encomendas',
		answer:
			'Poderemos recusar e rejeitar seu ou seus pedidos de encomendas nas seguintes situações: Indisponibilidade de agenda da nossa linha de produção. Indisponibilidade de informações a respeito do pedido. Falta de pagamento do sinal de 50% do valor total do pedido e não finalizão do pagamento por cartão de crédito ou débito.'
	},
	{
		id: 10,
		question: 'Orientações para o Transporte',
		answer:
			'Pedimos para ter cautela no transporte de seus produtos. Eles são delicados e caso não sejam transportados corretamente podem ser danificados. No ato da entrega certifique-se que eles estão em perfeitas condições. Durante o transporte do bolo ou torta coloque o(s) produto(s) em superfície plana. Evite colocar outros produtos do lado para evitar que o mesmo possa cair sobre ele. Acomode o produto de forma que evite que o mesmo se movimente ou deslize para os lados. Dependendo da distância e se for possível, transporte o seu produto em um automóvel com ar condicionado. Ao se deparar com ladeiras ingremes ou curvas sinuosas, procure carregar o seu produto no colo.'
	},
	{
		id: 11,
		question: 'Dicas para conservar seu Bolos e Tortas',
		answer:
			'Logo depois da festa é muito comum que tenha sobras, caso haja sobra de bolos e tortas. Guarde-os na geladeira com uma tira de papel alumínio encostada na parte cortada para que o interior não se resseque.'
	},
	{
		id: 12,
		question: 'Orçamentos pelo site',
		answer:
			'O cliente poderá efetuar orçamentos pelo site sendo atendido por e-mail. A efetivação de pedidos/encomendas ainda não encontra-se disponível em nosso site. Você poderá navegar e escolher os produtos para sua encomenda.'
	},
	{
		id: 14,
		question: 'Encomendas para o Natal',
		answer:
			'Atenderemos as solicitaçes de pedidos e encomendas de 10 a 20 de dezembro para o Natal. Para as festas de final de ano e Réveillon aceitaremos pedidos somente até o dia 27/12 do ano vigente.'
	},
	{
		id: 15,
		question: 'Cancelamento de encomendas e reembolso',
		answer:
			'O cliente poderá solicitar o cancelamento da sua encomenda apenas pela loja. O valor pago no sinal será devolvido, levando em consideração o prazo estabelecido para o cancelamento é de 3 dias antes da confecção.'
	}
];

const FaqPage = () => {
	return (
		<section className='py-4'>
			<h3 className='font-extrabold text-xl mb-2 text-center bg-muted rounded-md py-1'>
				Perguntas Frequentes
			</h3>
			<div className='w-full md:w-1/2 mx-auto px-4'>
				<Accordion
					type='single'
					collapsible>
					{dataQuestion.map(question => (
						<AccordionItem
							key={question.id}
							value={question.id.toString()}>
							<AccordionTrigger>{question.question}</AccordionTrigger>
							<AccordionContent>{question.answer}</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</section>
	);
};

export default FaqPage;
