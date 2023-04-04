import { Bars3Icon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const navItems = [
	{ name: 'Home', url: '/' },
	{ name: 'About', url: '/about' },
	{ name: 'Memberships', url: '/memberships' },
	{ name: 'Corporate Events & Sponsorship', url: '/corporate-events-and-sponsorships' },
	{ name: 'Tournaments & Events', url: '/tournaments-and-events' }
];

function Navbar() {
	const router = useRouter();
	return (
		<>
			<Bars3Icon className='z-50 w-8 absolute right-2 top-2 text-white md:hidden' />
			<div className='hidden md:flex py-2 bg-white items-center sticky top-0 z-50'>
				<div className=' flex-1 ml-5 lg:ml-20'>
					<Image src='/logo.png' alt='logo' width={100} height={100} />
				</div>
				<div>
					<ul className='flex'>
						{navItems.map((navItem) => (
							<li key={navItem.name} className='mr-4 lg:mr-6 font-semibold text-xs lg:text-base'>
								<Link href={navItem.url}>{navItem.name}</Link>
							</li>
						))}
						<button
							className='mr-5 shadow-[0px_4px_14px_0px_#FE5000] bg-[#FE5000] px-4 lg:py-2 lg:px-8 text-white uppercase text-xs rounded-lg'
							onClick={() => router.push('/contact')}
						>
							Book now
						</button>
					</ul>
				</div>
			</div>
		</>
	);
}

export default Navbar;
