function About() {
	return (
		<div className='flex flex-col-reverse md:flex-row md:p-28 md:px-10 lg:p-28'>
			<div className='relative w-screen justify-center items-center px-5 md:px-0'>
				{/* <div className='absolute -z-10 -top-[15px] left-[15px] bg-[#0072CE] h-full w-full'></div> */}
				<img
					className='mt-10 md:mt-0 w-4/6 w-screen h-full lg:w-full z-10 rounded-xl'
					src='/about.png'
					alt='about'
				/>
			</div>
			<div className='md:ml-5 lg:ml-10 pt-10 md:py-5 lg:pt-10 mx-5 md:mx-0 2xl:pt-36'>
				<h1 className='uppercase font-bold text-[#0072CE] 2xl:text-[50px]'>about us</h1>
				<p className='pt-3 pb-4 md:pb-8 text-justify 2xl:text-3xl'>
					True Pickleball Club was built by players, for players to provide an experience solely
					dedicated to pickleball, no matter your skill level.{' '}
				</p>
				<p className='text-sm text-justify 2xl:text-2xl'>
					With the only true pickleball courts built specifically for the sport in the area, there
					are no unnecessary lines or obstructions. Our mission is to create an immersive
					environment for everyone from pros to first-time picklers that inspires fun and friendly
					competition. With the additions of our pro shop, lounge, lessons and tournaments, True is
					poised to be the pickleball capital of the Capital Region.{' '}
				</p>
			</div>
		</div>
	);
}

export default About;
