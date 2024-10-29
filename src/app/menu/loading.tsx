import { Skeleton } from '@/components/ui/skeleton';

const Loading = () => {
	return (
		<div>
			<Skeleton className='w-full h-10 rounded-md' />
			<Skeleton className='w-full h-10 rounded-md' />
			<div className='grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4'>
				{Array.from({ length: 8 }, (item, index) => (
					<div
						key={index.toExponential(2)}
						className='flex flex-col gap-1 items-center py-3'>
						<Skeleton className='w-full h-[200px] rounded-md' />
						<Skeleton className='w-full h-[16px] rounded-md' />
						<Skeleton className='w-1/2 h-16px] rounded-md' />
						<Skeleton className='w-full h-[48px] rounded-md' />
					</div>
				))}
			</div>
		</div>
	);
};

export default Loading;
