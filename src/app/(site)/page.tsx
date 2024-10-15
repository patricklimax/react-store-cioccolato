import AboutEnterprise from './components/about';
import HeroPage from './components/hero';
import ProductList from './components/product-list';

export default function Home() {
	return (
		<main>
			<HeroPage />
			<ProductList />
			<AboutEnterprise />
		</main>
	);
}
