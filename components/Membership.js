import MembershipCard from './MembershipCard';

function Membership() {
	return (
		<div className='flex flex-col space-y-3 mt-10 md:mt-0 items-center px-5 md:px-10 lg:px-28'>
			<h1 className='uppercase font-bold text-[#0072CE] 2xl:text-[50px]'>Membership</h1>
			<p className='text-center pb-6 2xl:text-2xl'>
				Membership details coming soon!
				<br /> Sign up for our email list to stay in the loop.
			</p>
			<div className='flex flex-col space-y-8 md:space-y-0 md:flex-row md:space-x-10 md:justify-between md:w-full 2xl:space-x-20'>
				<MembershipCard title='Founders Club Membership' img='/home-member-1.png' />
				<MembershipCard title='Stay True Membership' img='/home-member-2.png' />
			</div>
		</div>
	);
}

export default Membership;
