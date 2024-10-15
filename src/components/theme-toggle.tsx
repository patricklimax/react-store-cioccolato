'use client';
import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';

const ThemeToggle = () => {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	const toggleTheme = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	return (
		<Button
			size={'icon'}
			variant={'outline'}
			type='button'
			onClick={toggleTheme}
			className='flex items-center space-x-2 p-2 border rounded'>
			{theme === 'dark' ? (
				<SunIcon
					className='w-6 h-6 text-yellow-500'
					strokeWidth={1.5}
				/>
			) : (
				<MoonIcon
					className='w-6 h-6 text-blue-500'
					strokeWidth={1.5}
				/>
			)}
		</Button>
	);
};

export default ThemeToggle;
