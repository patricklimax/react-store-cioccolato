import { Button } from '@/components/ui/button';

type ButtonProps = {
	onClick: () => void;
};

const ButtonAddItemCart = ({ onClick }: ButtonProps) => {
	return (
		<Button
			onClick={onClick}
			type='button'
			className='w-full md:w-1/4'>
			Adicionar ao Carrinho
		</Button>
	);
};

export default ButtonAddItemCart;
