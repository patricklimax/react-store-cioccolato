import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import Footer from '@/components/footer';
import Header from '@/components/header';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/providers/theme-provider';

const inter = Inter({
	subsets: ['latin'],
	display: 'swap'
});

const outfit = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Cioccolato Store',
	description: 'Seu melhor sabor de chocolate. Experimente!'
};

type LayoutProps = {
	children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<LayoutProps>) {
	return (
		<html
			lang='pt-BR'
			suppressHydrationWarning>
			<body className={`${inter} antialiased`}>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange>
					<div className='max-w-[88rem] mx-auto min-h-screen'>
						<Header />
						<main className='max-w-7xl mx-auto'>{children}</main>
						<Footer />
					</div>

					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	);
}
