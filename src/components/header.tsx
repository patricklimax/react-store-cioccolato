import {
	EllipsisVerticalIcon,
	HomeIcon,
	ShoppingBasketIcon
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import CartSideBar from './cart/cart';
import { Logotipo } from './logo';
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
								<Logotipo />
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
							<Link href='/menu'>
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

			<Logotipo />

			<div className='flex gap-4'>
				<ThemeToggle />
				<CartSideBar />
			</div>
		</header>
	);
};

export default Header;
