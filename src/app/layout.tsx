import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import Footer from '../components/footer';
import Header from '../components/header';

const inter = Inter({
	subsets: ['latin'],
	display: 'swap'
});

const outfit = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Cioccolato Store',
	description: 'Seu melhor sabor de chocolate. Experimente!'
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='pt-BR'>
			<body className={`${inter} antialiased`}>
				<div className='max-w-[88rem] mx-auto min-h-screen'>
					<Header />
					<main className='max-w-7xl mx-auto'>{children}</main>
					<Footer />
				</div>
			</body>
		</html>
	);
}
