import { pages } from '../data/pages';

interface PageParamsAjuda {
	params: {
		slug?: string;
	};
}

const PageAjuda = ({ params }: PageParamsAjuda) => {
	if (!params) {
		//TODO: redirect to homepage
		return null;
	}

	const pagina = pages.find(page => page.slug === params.slug);

	if (!pagina) return null;

	return (
		<section className='px-10 md:px-0 pb-10'>
			<div className='w-full md:w-1/2 mx-auto flex flex-col gap-10'>
				<h2 className='mt-16 text-5xl font-bold'>{pagina.title}</h2>
				<p className='font-medium text-justify'>{pagina.body}</p>
				<p className='italic font-medium'>{pagina.dateDocument}</p>
			</div>
		</section>
	);
};

export default PageAjuda;
