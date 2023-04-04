import { useRouter } from 'next/router';

function Header() {
	const router = useRouter();

	return (
		<div className='relative text-white'>
			<img
				className='w-full h-screen md:h-full object-fill opacity-90'
				src='/home-header.png'
				alt='header'
			/>
			<div className='absolute top-0 h-full lg:h-full bg-black opacity-40 w-full'></div>
			<div className='absolute left-5 md:left-10 lg:left-24 top-36 md:top-20 lg:top-36 2xl:top-96'>
				<h3 className='text-[#FE5000] text-xs md:text-sm 2xl:text-2xl'>The Area&apos;s First</h3>
				<h1 className='font-bold py-2 text-3xl md:text-[40px] 2xl:text-[50px]'>
					True Indoor <br />
					Pickleball Club
				</h1>
				<h3 className='text-sm 2xl:text-2xl'>is Coming to Latham!</h3>
				<button
					onClick={() => router.push('/contact')}
					className='mt-5 shadow-[0px_4px_14px_0px_#FE5000] 2xl:text-2xl bg-[#FE5000] py-2 px-8 uppercase text-xs rounded-lg'
				>
					Join Now
				</button>
			</div>
		</div>
	);
}

export default Header;
