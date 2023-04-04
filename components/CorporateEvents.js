import { useRouter } from 'next/router';

function CorporateEvents() {
	const router = useRouter();
	return (
		<div className='flex flex-col md:flex-row md:space-x-5 py-28 md:pl-12 lg:pl-20 bg-gradient-to-r from-[#EBEEFF] via-[#FFECFC] to-[#EBEEFF]'>
			<div className='mx-5 md:mx-0 lg:ml-10 md:pt-8 w-5/6'>
				<h1 className='uppercase font-bold text-xl md:text-2xl text-[#0072CE] 2xl:text-[50px]'>
					Corporate events and sponsorship
				</h1>
				<p className='pt-3 text-xs font-semibold text-justify 2xl:text-2xl'>
					Are your team members dozing off during meetings? Skipping out on awkward happy hours?{' '}
				</p>
				<p className='text-xs font-semibold text-justify py-4 2xl:text-2xl'>
					It’s time to try something more engaging as a team-building strategy. Pickleball is fun,
					high-energy and competitive while still appropriate for all ages, fitness and skill
					levels. Contact our team to learn more about customizable corporate event packages that
					will inspire team bonding and provide an experience.
				</p>
				<p className='text-xs font-semibold text-justify 2xl:text-2xl'>
					Contact our team to learn more about customizable corporate event packages that will
					inspire team bonding and provide an experience.
				</p>
				<button
					onClick={() => router.push('/contact')}
					className='mt-5 2xl:text-2xl text-white shadow-[0px_4px_14px_0px_#FE5000] bg-[#FE5000] py-2 px-8 uppercase text-xs rounded-lg'
				>
					Contact Us
				</button>
			</div>
			<div className='w-screen pl-5 md:pl-0 pt-10 md:pt-0 md:pr-0 '>
				<img className='md:block w-full h-full' src='/corporate.png' alt='corporate-events' />
			</div>
		</div>
	);
}

export default CorporateEvents;
