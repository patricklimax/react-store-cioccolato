import AboutEnterprise from './components/about';
import HeroPage from './components/hero';
import Partners from './components/partners';
import ProductList from './components/product-list';

export default function Home() {
	return (
		<main>
			<HeroPage />
			<ProductList />
			<AboutEnterprise />
			<Partners />
		</main>
	);
}
