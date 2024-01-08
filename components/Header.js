// components/Header.js
"use client"

import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { MenuIcon, XIcon } from '@heroicons/react/solid'; // Assuming you are using Heroicons for icons
import Link from 'next/link';

const Header = () => {

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
        <header className="relative w-full">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-transparent pointer-events-none opacity-50"></div>
            
            {/* Container */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Content */}
                <div className="flex justify-between items-center py-4">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <img src="/image/savewyze-white.svg" alt="Logo" className="h-8 w-auto" />
                </div>
                
                {/* Menu Toggle Button (Mobile) */}
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={toggleMenu}
                >
                    {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
                </button>
                
                {/* Links (Desktop) */}
                <nav className={`${!isMenuOpen ? 'hidden' : ''} md:flex md:space-x-[49px] ${isMenuOpen ? 'flex flex-col absolute top-full left-0 w-full bg-[#F2E6F9] text-[16px] py-4 px-6 rounded-b-lg' : ''}`}>
                    <a href="#" className="text-[#8005C2] hover:text-black md:text-white md:hover:text-black transition duration-300">Savings</a>
                    <a href="#" className="text-[#8005C2] hover:text-black md:text-white md:hover:text-black transition duration-300">Invest</a>
                    <a href="#" className="text-[#8005C2] hover:text-black md:text-white md:hover:text-black transition duration-300">Testimonials</a>
                    <a href="#" className="text-[#8005C2] hover:text-black md:text-white md:hover:text-black transition duration-300">About</a>
                    <a href="#" className="text-[#8005C2] hover:text-black md:text-white md:hover:text-black transition duration-300">FAQs</a>
                </nav>
                
                {/* Buttons */}
                <div className="hidden lg:flex space-x-4 items-center">
                    <Link className="text-white px-4 py-2  transition duration-300 cursor-pointer font-bold" href="#">SIGN UP</Link>
                    <button className="bg-white text-[#8005C2]  rounded-[36px] py-[20px] px-[40px] hover:bg-[#4D0374] hover:text-white transition duration-300">Download App</button>
                </div>
                </div>
            </div>
        </header>
    );
  };
  
  export default Header;
  