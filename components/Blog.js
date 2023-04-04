import BlogCard from './BlogCard';

function Blog() {
	return (
		<div className=' pt-10 bg-gradient-to-r from-[#EBEEFF] via-[#FFECFC] to-[#EBEEFF] flex flex-col space-y-8 items-center px-5 md:px-10 lg:px-28'>
			<h1 className='uppercase font-bold text-3xl md:text-[40px] text-[#0072CE] 2xl:text-[50px]'>
				Blogs
			</h1>
			<div className='flex flex-col space-y-8 md:space-y-0 md:flex-row md:space-x-8'>
				<BlogCard
					img='/blog-1.png'
					title='Purpose-built pickleball club is coming to Latham'
					desc='With the rise of a new yet fifty-year-old backyard sport, 
there are plans to build a Pickleball Club inside the former 
Kmart building.'
				/>
				<BlogCard
					img='/blog-2.png'
					title='Pickleball is The Latest Sports Craze'
					desc='With the rise of a new yet fifty-year-old backyard sport, 
					there are plans to build a Pickleball Club inside the former 
					Kmart building.'
				/>
				<BlogCard
					img='/blog-3.png'
					title='Local Country Clubs Listening to 
					Members'
					desc='With the rise of a new yet fifty-year-old backyard sport, 
					there are plans to build a Pickleball Club inside the former 
					Kmart building.'
				/>
			</div>
		</div>
	);
}

export default Blog;
