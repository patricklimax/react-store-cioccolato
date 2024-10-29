import { Button } from '@/components/ui/button';
import { ToastAction } from '@/components/ui/toast';
import { useToast } from '@/hooks/use-toast';
import { useCartStore } from '@/stores/cart-store';
import { usePixStore } from '@/stores/pix-store';
import { createStaticPix, hasError } from 'pix-utils';
import { QRCodeSVG } from 'qrcode.react';
import { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

const PixGenerate = () => {
	const { toast } = useToast();
	const [brCode, setBrCode] = useState<string>('');
	const [qrcode, setQrcode] = useState(false);
	const { cart } = useCartStore(state => state);
	const { setPixCode, saveLocalStoragePixCode } = usePixStore(state => state);
	const [copied, setCopied] = useState(false);

	let subtotal = 0;
	for (const item of cart) {
		subtotal += item.quantity * item.product.price;
	}
	const fretePrice = 10.0;
	const totalPrice = subtotal * 0.95 + fretePrice;
	const halfOrderValue = Number((totalPrice / 2).toFixed(2));

	// Gerar um código de pagamento via PIX
	const generatePixCode = () => {
		const pix = createStaticPix({
			merchantName: 'PATRICK DE ASSIS LIMA',
			merchantCity: 'Sao Paulo',
			pixKey: '07d522a0-ebfb-44a5-a66d-9ed0a50e756a',
			transactionAmount: halfOrderValue,
			isTransactionUnique: true
		});

		if (!hasError(pix)) {
			setBrCode(pix.toBRCode());
			setPixCode(pix.toBRCode());
		}
		setQrcode(true);
		saveLocalStoragePixCode();
	};

	const handleCopy = () => {
		setCopied(true);
		if (copied) {
			toast({
				title: 'Link Pix',
				description: 'Copiado com sucesso para Área de Transferência.',
				action: <ToastAction altText='fechar'>Fechar</ToastAction>
			});
		}
	};
	return (
		<div>
			<p className='font-semibold text-center mt-6'>
				Para confirmar o pedido é necessário o pagemento de 50% do valor do
				pedido.
			</p>
			<div className='my-8 flex items-center justify-center'>
				<Button onClick={generatePixCode}>Gerar QR Code</Button>
			</div>
			{qrcode && (
				<div>
					<div className='h-52 w-52 relative mx-auto'>
						<QRCodeSVG
							value={brCode}
							size={208}
						/>
					</div>
					<div className='flex flex-col gap-2 mt-4'>
						<h3 className='text-center font-bold text-xl'>Link PIX</h3>
						<p className='text-xs flex-1 break-words'>{brCode}</p>
						<div className='mx-auto mt-2'>
							<CopyToClipboard
								text={brCode}
								onCopy={handleCopy}>
								<Button variant={'outline'}>Copiar Link PIX</Button>
							</CopyToClipboard>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default PixGenerate;
