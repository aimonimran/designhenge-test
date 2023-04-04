function NewsLetter() {
	return (
		<div className='relative text-white'>
			<img
				className='w-full h-screen object-center md:h-1/2 md:object-cover opacity-90'
				src='/newsletter.png'
				alt='header'
			/>
			<div className='px-5 md:px-0  md:mx-0 absolute top-0 text-center flex flex-col justify-center items-center w-full h-full'>
				<h2 className='text-[#FE4F01] uppercase 2xl:text-[50px]'>Get the newsletter</h2>
				<p className='pb-4 w-full lg:w-2/6 2xl:text-2xl'>
					Membership details coming soon! Sign up for our email list to stay in the loop.
				</p>
				<div className='flex md:flex-row space-x-1 md:w-2/6 md:space-x-2'>
					<input className='rounded-full w-full p-3 pl-6' type='text' placeholder='your email' />
					<button className=' 2xl:text-2xl rounded-full whitespace-nowrap p-3 bg-[#FE4F01] w-1/4 text-white text-xs'>
						Sign up
					</button>
				</div>
			</div>
		</div>
	);
}

export default NewsLetter;
