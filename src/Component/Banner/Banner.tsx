import bannerImg from '../../assets/banner-stack.png'

const Banner = () => {
    return (
        <div className="px-4 sm:px-5 md:px-8 lg:px-10">
            <div className="container mx-auto py-5 md:py-20 flex flex-col lg:flex-row gap-12 lg:gap-4 justify-between items-center">
                <div className='space-y-6 text-center lg:text-left'>
                    <h1 className="text-2xl md:text-6xl font-black text-[#0F172A]">
                        Build Your Ideal <br/>
                        <span className='bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent'>Development Stack</span>
                    </h1>
                    <p className='text-sm md:text-2xl'>Explore frontend, backend, database, and tooling options,
                        compare them <br  className='hidden lg:flex' /> side by side, and put together the stack that fits your
                        next project.</p>
                        <div className='flex gap-4 justify-center lg:justify-start'>
                            <button className='md:font-semibold text-[12px] md:text-xl text-white bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED]  px-5 md:px-4 md:py-3 rounded-lg hover:opacity-90'>Explore Technologies</button>
                            <button className='md:font-semibold text-[12px] md:text-xl text-[#475569] border border-[#475569] hover:bg-[#f6f6f6] px-5 py-3 rounded-lg'>Learn More</button>
                        </div>
                </div>
                <img src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;