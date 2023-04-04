import Image from 'next/image';
import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/router';

function MembershipCard({ img, title }) {
	const router = useRouter();

	const titleFirstPart = title.split(' ')[0] + ' ' + title.split(' ')[1];
	const titleSecondPart = title.split(' ')[2];

	return (
		<div className='flex-col bg-white p-2 rounded-lg w-full'>
			<Image
				className='object-contain w-full'
				src={img}
				alt='membership'
				width={100}
				height={100}
			/>
			<div className='p-2 flex items-center justify-between'>
				<div className='flex items-center md:space-x-2'>
					<ChevronRightIcon className='w-4 h-4 text-[#FE5000]' />{' '}
					<h4 className='text-[#0072CE] text-sm tracking-wide 2xl:text-2xl'>
						{titleFirstPart} <br /> {titleSecondPart}
					</h4>
				</div>
				<button
					className='shadow-[0px_4px_14px_0px_#FE5000] ml-5 py-1 px-4 bg-[#FE5000] text-white uppercase text-xs rounded-lg 2xl:text-xl'
					onClick={() => router.push('/contact')}
				>
					Join Now
				</button>
			</div>
		</div>
	);
}

export default MembershipCard;
