import { FaRegCopyright } from 'react-icons/fa';
import logo from '../../assets/logo-text.png'

const Footer = () => {
    return (
        <footer className='md:mt-20 px-4 md:px-10 lg:px-0'>
            <div className="divider" />
            <div className='container mx-auto md:pt-20 pb-5'>

                <div className='grid gap-6 lg:grid-cols-12 md:pb-10'>
                    <div className='space-y-4 col-span-6 text-[12px] md:text-base'>
                        <img src={logo} alt="" />
                        <p>Curated tools, technologies, and resources for developers building
                            modern software.</p>
                        <ul className='flex gap-4'>
                            <li><a>GitHub</a></li>
                            <li><a>Twitter</a></li>
                            <li><a>LinkedIn</a></li>
                        </ul>
                    </div>
                    <div className="col-span-2 space-y-3 text-[12px] md:text-base">
                        <h3 className='font-semibold'>PRODUCT</h3>
                        <ul className='space-y-3'>
                            <li><a href='#'>Home</a></li>
                            <li><a href='#'>Technologies</a></li>
                            <li><a href='#'>Projects</a></li>
                        </ul>
                    </div>
                    <div className="col-span-2 space-y-3 text-[12px] md:text-base">
                        <h3 className='font-semibold'>COMPANY</h3>
                        <ul className='space-y-3'>
                            <li><a href='#'>About</a></li>
                            <li><a href='#'>Contact</a></li>
                            <li><a href='#'>Careers</a></li>
                        </ul>
                    </div>
                    <div className="col-span-2 space-y-3 text-[12px] md:text-base">
                        <h3 className='font-semibold'>LEGAL</h3>
                        <ul className=' space-y-3'>
                            <li><a href='#'>Privacy Policy</a></li>
                            <li><a href='#'>Terms of Service</a></li>
                        </ul>
                    </div>
                </div>

                <div className="divider" />

                <div className='flex justify-between text-[8px] md:text-base'>
                    <p className='flex gap-2 items-center'><FaRegCopyright /> 2026 Dev Stack. All rights reserved.</p>
                    <ul className='flex gap-4'>
                        <li><a href='#'>Privacy</a></li>
                        <li><a href='#'>terms</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;