import { useState } from 'react';
import logo from '../../assets/logo-text.png'
import { LuMenu } from 'react-icons/lu';

const Nav = () => {

    const [active, setActive] = useState("Home");
    const navItems = ["Home", "Technologies", "Projects", "About", "Contact"];

    return (
        <nav className="border-b border-gray-100 bg-white/85 backdrop-blur-md sticky top-0 z-50 px-4 sm:px-5 md:px-8 lg:px-10">
            <div className="container mx-auto flex justify-between items-center py-4">
                <LuMenu className='text-2xl md:text-3xl lg:hidden'></LuMenu>
                <img className='w-22 sm:w-32 md:w-36 lg:w-auto' src={logo} alt="" />
                <ul className="hidden lg:flex gap-6 font-semibold">
                    {navItems.map((item) => (
                        <li
                            key={item}
                            onClick={() => setActive(item)}
                            className={`cursor-pointer hover:text-[#334155] ${active === item ? "text-[#D91B7E]" : "text-gray-500"
                                }`}
                        ><a href='#'>{item}</a>
                        </li>
                    ))}
                </ul>
                <div className="flex space-x-4 font-semibold">
                    <button className='hover:text-[#334155] px-3 md:px-6 py-1 md:py-2 text-[12px] md:text-base  text-[#475569] '>Sign In</button>
                    <button className=' px-2 md:px-6 py-1 md:py-2 text-[12px] md:text-base rounded-3xl bg-[#D91B7E] text-white hover:bg-[#C51B69]'>Sign Up</button>
                </div>
            </div>
        </nav>
    );
};

export default Nav;