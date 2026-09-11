import { FaRegCopyright } from 'react-icons/fa';
import logo from '../../assets/logo-text.png'

const Footer = () => {
    return (
        <footer className='bg-[] mt-20'>
            <div className="divider" />
            <div className='container mx-auto pt-20 pb-5'>
                <div className='grid grid-cols-12 pb-10'>
                    <div className='space-y-4 col-span-6'>
                        <img src={logo} alt="" />
                        <p>Curated tools, technologies, and resources for developers building
                            modern software.</p>
                        <ul className='flex gap-4'>
                            <li><a>GitHub</a></li>
                            <li><a>Twitter</a></li>
                            <li><a>LinkedIn</a></li>
                        </ul>
                    </div>
                    <div className="col-span-2 space-y-3">
                        <h3 className='font-semibold'>PRODUCT</h3>
                        <ul className='space-y-3'>
                            <li><a>Home</a></li>
                            <li><a>Technologies</a></li>
                            <li><a>Projects</a></li>
                        </ul>
                    </div>
                    <div className="col-span-2 space-y-3">
                        <h3 className='font-semibold'>COMPANY</h3>
                        <ul className='space-y-3'>
                            <li><a>About</a></li>
                            <li><a>Contact</a></li>
                            <li><a>Careers</a></li>
                        </ul>
                    </div>
                    <div className="col-span-2 space-y-3">
                        <h3 className='font-semibold'>LEGAL</h3>
                        <ul className=' space-y-3'>
                            <li><a>Privacy Policy</a></li>
                            <li><a>Terms of Service</a></li>
                        </ul>
                    </div>
                </div>
                <div className="divider" />
                <div className='flex justify-between'>
                    <p className='flex gap-2 items-center'><FaRegCopyright/> 2026 Dev Stack. All rights reserved.</p>
                    <ul className='flex gap-4'>
                        <li>Privacy</li>
                        <li>term</li> 
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;