const Spinner = () => {
	return (
		<div className='flex justify-center items-center py-10'>
			<div className='flex space-x-2'>
				<div className='w-3 h-3 bg-blue-500 rounded-full animate-bounce' />
				<div className='w-3 h-3 bg-blue-500 rounded-full animate-bounce delay-150' />
				<div className='w-3 h-3 bg-blue-500 rounded-full animate-bounce delay-300' />
			</div>
		</div>
	);
};

export default Spinner;
