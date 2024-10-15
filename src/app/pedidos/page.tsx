import { products } from '../data/products';

const PedidosPage = () => {
	return (
		<div>
			Página de Pedidos
			{products.map(item => (
				<p key={item.id}>{item.name}</p>
			))}
		</div>
	);
};

export default PedidosPage;
