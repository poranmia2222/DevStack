import { useState } from 'react';
import logo from '../../assets/logo-text.png'

const Nav = () => {

    const [active, setActive] = useState("Home");
    const navItems = ["Home", "About", "Services", "Contact"];

    return (
        <nav className="border-b border-gray-100 bg-white/85 backdrop-blur-md sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center py-4 px-6 ">
                <img src={logo} alt="" />
                <ul className="flex gap-6 font-semibold">
                    {navItems.map((item) => (
                        <li
                            key={item}
                            onClick={() => setActive(item)}
                            className={`cursor-pointer hover:text-[#334155] ${active === item ? "text-[#D91B7E]" : "text-gray-500"
                                }`}
                        >{item}
                        </li>
                    ))}
                </ul>
                <div className="flex space-x-4 font-semibold">
                    <button className='hover:text-[#334155] text-[#475569] '>Sign In</button>
                    <button className=' px-6 py-2 rounded-3xl  bg-[#D91B7E] text-white hover:bg-[#C51B69]'>Sign Up</button>
                </div>
            </div>
        </nav>
    );
};

export default Nav;