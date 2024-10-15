import {
	EllipsisVerticalIcon,
	HomeIcon,
	PaletteIcon,
	ShoppingBasketIcon,
	ShoppingCartIcon
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import ThemeToggle from './theme-toggle';
import { Button } from './ui/button';
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger
} from './ui/sheet';

const Header = () => {
	return (
		<header className='max-w-[88rem] mx-auto rounded-lg border shadow-sm p-2 flex items-center justify-between'>
			<Sheet>
				<SheetTrigger asChild>
					<Button
						variant='outline'
						size='icon'>
						<EllipsisVerticalIcon />
					</Button>
				</SheetTrigger>

				<SheetContent side='left'>
					<SheetHeader>
						<SheetTitle>
							<SheetClose asChild>
								<Link href='/'>
									<Image
										src='/images/logo/logo.png'
										alt='Logo da Empresa'
										className='w-[180px] h-auto'
										width={180}
										height={50}
									/>
								</Link>
							</SheetClose>
						</SheetTitle>

						<SheetClose asChild>
							<Link href='/'>
								<Button
									variant='outline'
									className='w-full justify-start rounded gap-2 items-center'>
									<HomeIcon size={16} />
									Home
								</Button>
							</Link>
						</SheetClose>
						<SheetClose asChild>
							<Link href='/pedidos'>
								<Button
									variant='outline'
									className='w-full justify-start rounded gap-2 items-center'>
									<ShoppingBasketIcon size={16} />
									Comprar
								</Button>
							</Link>
						</SheetClose>
					</SheetHeader>
				</SheetContent>
			</Sheet>

			<Link href='/'>
				<Image
					src='/images/logo/logo.png'
					alt='Logo da Empresa'
					className='w-[180px] h-auto'
					width={180}
					height={50}
				/>
			</Link>

			<div className='flex gap-4'>
				<ThemeToggle />
				<Button size='icon'>
					<ShoppingCartIcon />
				</Button>
			</div>
		</header>
	);
};

export default Header;
