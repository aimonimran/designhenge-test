import { useRouter } from 'next/router';

function Sponsorships() {
	const router = useRouter();

	return (
		<div className='text-white md:h-[26.1rem] bg-[#0072CE]'>
			<img
				className='hidden md:block z-20 w-4/6 md:h-[26.1rem] opacity-90 right-0 absolute'
				src='/sponsorships.png'
				alt='header'
			/>
			<div className='pl-5 px-5 md:px-0 py-16 md:pl-10 lg:pl-28 md:pt-16'>
				<h1 className='font-bold py-2 text-3xl md:text-[40px] 2xl:text-[50px]'>Sponsorships</h1>
				<p className='w-full md:w-3/6 py-2 2xl:text-2xl'>
					Pickleball appeals to people from all walks of life, so sponsoring space or tournaments at
					True Pickleball Club is the perfect way to get your business’ message in front of a
					diverse audience. We offer a range of options, from one-time events to high-visibility
					court sponsorships.
				</p>
				<button
					onClick={() => router.push('/contact')}
					className='mt-5 2xl:text-2xl shadow-[0px_4px_14px_0px_#FE5000] bg-[#FE5000] py-2 px-8 uppercase text-xs rounded-lg'
				>
					Join Now
				</button>
			</div>
		</div>
	);
}

export default Sponsorships;
