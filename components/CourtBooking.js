import { useRouter } from 'next/router';

function CourtBooking() {
	const router = useRouter();
	
	return (
		<div className='flex flex-col-reverse md:grid md:grid-cols-2 pt-10 md:pt-28'>
			<div className='col-span-1 relative w-screen'>
				<img
					className='px-5 md:px-0 w-full mt-10 md:mt-0 md:w-1/2 object-contain'
					src='/courtbooking.png'
					alt='courtbooking'
				/>
			</div>
			<div className='col-span-1 mx-5 md:ml-10 lg:ml-20 pt-10 md:w-4/6 flex flex-col justify-center'>
				<h1 className='uppercase font-bold text-3xl md:text-[40px] 2xl:text-[50px] text-[#0072CE]'>
					court booking
				</h1>
				<p className='pt-3 pb-4 md:pb-8 text-justify 2xl:text-2xl'>
					Membership details coming soon!
					<br /> Sign up for our email list to stay in the loop.
				</p>
				<button
					className='mr-5 w-1/2 md:w-1/3 2xl:text-2xl whitespace-nowrap shadow-[0px_4px_14px_0px_#FE5000] bg-[#FE5000] py-2 px-4 md:px-0 lg:px-8 text-white uppercase text-xs rounded-lg'
					onClick={() => router.push('/contact')}
				>
					Book now
				</button>
			</div>
		</div>
	);
}

export default CourtBooking;
