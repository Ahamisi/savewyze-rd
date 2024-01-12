// components/Header.js
"use client"

import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { MenuIcon, XIcon } from '@heroicons/react/solid'; // Assuming you are using Heroicons for icons
import Link from 'next/link';

const Header = ({mode = "dark"}) => {

    useEffect(() => {
        // Fade in animation
        gsap.from('.fade-in', {
          opacity: 0,
          duration: 1,
          delay: 0.5,
          stagger: 0.3,
        });
      }, []);

      
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    return (
        <header className={`relative w-full ${mode == 'light' ? 'bg-white': ''}`}>
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-transparent pointer-events-none opacity-50"></div>
            
            {/* Container */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Content */}
                <div className="flex justify-between items-center py-4">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <Link href="/">
                        <img src={`${mode == 'light' ? '/image/savewyze-colored.svg' : '/image/savewyze-white.svg' } `} alt="Savewyze Logo" className="h-8 w-auto" />
                    </Link>
                </div>
                
                {/* Menu Toggle Button (Mobile) */}
                <button
                    className={`md:hidden ${mode == 'light' ? 'text-[#8005C2]' : 'text-white'} focus:outline-none`}
                    onClick={toggleMenu}
                >
                    {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
                </button>
                
                {/* Links (Desktop) */}
                <nav className={`${!isMenuOpen ? 'hidden' : ''} md:flex md:space-x-[49px] ${isMenuOpen ? 'flex flex-col absolute top-full left-0 w-full bg-[#F2E6F9] text-[16px] py-4 px-6 rounded-b-lg  z-50' : ''}`}>
                    <a href="/saving-plans/wyze-lock" className={`${mode == 'light' ? 'text-[#8005C2] hover:text-black md:hover:text-black': 'text-[#8005C2] hover:text-black md:text-white md:hover:text-[#D8B2EC]'} transition duration-300`}>Savings</a>
                    <a href="#" className={`${mode == 'light' ? 'text-[#8005C2] hover:text-black md:hover:text-black': 'text-[#8005C2] hover:text-black md:text-white md:hover:text-[#D8B2EC]'} transition duration-300`}>Invest</a>
                    <a href="#" className={`${mode == 'light' ? 'text-[#8005C2] hover:text-black md:hover:text-black': 'text-[#8005C2] hover:text-black md:text-white md:hover:text-[#D8B2EC]'} transition duration-300`}>Testimonials</a>
                    <a href="/about-us" className={`${mode == 'light' ? 'text-[#8005C2] hover:text-black md:hover:text-black': 'text-[#8005C2] hover:text-black md:text-white md:hover:text-[#D8B2EC]'} transition duration-300`}>About</a>
                    <a href="#" className={`${mode == 'light' ? 'text-[#8005C2] hover:text-black md:hover:text-black': 'text-[#8005C2] hover:text-black md:text-white md:hover:text-[#D8B2EC]'} transition duration-300`}>FAQs</a>
                </nav>
                
                {/* Buttons */}
                <div className="hidden lg:flex space-x-4 items-center">
                    <Link className={`${ mode == 'light' ? 'text-[#8005C2]' : 'text-white'} px-4 py-2  transition duration-300 cursor-pointer font-extrabold`} href="#">SIGN UP</Link>
                    <button className={`${mode == 'light' ? 'bg-[#8005C2] text-white hover:border-[1px] hover:border-[#4D0374] hover:bg-white hover:text-[#4D0374]' : 'bg-white text-[#8005C2] hover:bg-[#4D0374] hover:text-white' } rounded-[36px] py-[20px] px-[40px] transition duration-300`}>Download App</button>
                </div>
                </div>
            </div>
        </header>
    );
  };
  
  export default Header;
  