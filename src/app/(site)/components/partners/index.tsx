const Partners = () => {
	return (
		<section className='flex flex-col gap-4 px-4 pt-10 pb-16'>
			<h1 className='py-4 text-center text-2xl font-semibold md:text-4xl'>
				Nossos
				<span className='text-primary'> parceiros</span>
			</h1>

			<div className='w-full grid grid-cols-3 md:grid-cols-6 gap-4 px-2'>
				<div className='flex items-center justify-center h-28 md:h-36 bg-primary'>
					<p className='text-4xl font-bold text-muted'>D</p>
				</div>
				<div className='flex items-center justify-center h-28 md:h-36 bg-secondary'>
					<p className='text-4xl font-bold text-primary'>Z</p>
				</div>
				<div className='flex items-center justify-center h-28 md:h-36 bg-primary'>
					<p className='text-4xl font-bold text-muted'>O</p>
				</div>
				<div className='flex items-center justify-center h-28 md:h-36 bg-secondary'>
					<p className='text-4xl font-bold text-primary'>Y</p>
				</div>
				<div className='flex items-center justify-center h-28 md:h-36 bg-primary'>
					<p className='text-4xl font-bold text-muted'>U</p>
				</div>
				<div className='flex items-center justify-center h-28 md:h-36 bg-secondary'>
					<p className='text-4xl font-bold text-primary'>H</p>
				</div>
			</div>
		</section>
	);
};

export default Partners;
