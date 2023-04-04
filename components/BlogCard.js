import { ChevronRightIcon } from '@heroicons/react/24/solid';

function BlogCard({ img, title, desc }) {
	return (
		<div className='shadow-[0px_9px_5px_0px_#00000024] flex-col bg-white p-2 rounded-lg'>
			<img className='object-contain w-full' src={img} alt='blog' />
			<div className='p-3  text-sm space-y-2 flex flex-col'>
				<h4 className='2xl:text-2xl'>{title}</h4>
				<p className='2xl:text-2xl'>{desc}</p>
				<div className='flex items-center pt-4 space-x-2'>
					<ChevronRightIcon className='w-4 h-4 text-[#FE5000] 2xl:w-8 2xl:h-8' />
					<button className='font-bold 2xl:text-2xl text-[#0072CE]'>Read More</button>
				</div>
			</div>
		</div>
	);
}

export default BlogCard;
