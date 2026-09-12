import bannerImg from '../../assets/banner-stack.png'

const Banner = () => {
    return (
        <div className="">
            <div className="container mx-auto py-30 flex flex-col lg:flex-row gap-4 justify-between items-center">
                <div className='space-y-6'>
                    <h1 className="text-6xl font-black text-[#0F172A]">
                        Build Your Ideal <br />
                        <span className='bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent'>Development Stack</span>
                    </h1>
                    <p className='text-2xl'>Explore frontend, backend, database, and tooling options,
                        compare them <br /> side by side, and put together the stack that fits your
                        next project.</p>
                        <div className='flex gap-4'>
                            <button className='font-semibold text-white bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED]  px-4 py-3 rounded-lg hover:opacity-90'>Explore Technologies</button>
                            <button className='font-semibold text-[#475569] border border-[#475569] hover:bg-[#f6f6f6] px-4 py-3 rounded-lg'>Learn More</button>
                        </div>
                </div>
                <img className='' src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;