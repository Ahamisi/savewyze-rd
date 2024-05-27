// components/Header.js
"use client"

import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { MenuIcon, XIcon, ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/solid'; // Assuming you are using Heroicons for icons
import Link from 'next/link';

const Header = ({ mode = "dark" }) => {

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
    const [showSavingsDropdown, setShowSavingsDropdown] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleSavingsDropdown = () => {
        setShowSavingsDropdown(!showSavingsDropdown);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        setShowSavingsDropdown(false);
    };

    const closeSavingsDropdown = () => {
        setShowSavingsDropdown(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            const dropdown = document.getElementById("savings-dropdown");

            if (dropdown && !dropdown.contains(event.target)) {
                closeSavingsDropdown();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <header className={`relative w-full ${mode == 'light' ? 'bg-white' : ''}`}>
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-transparent pointer-events-none opacity-50"></div>

            {/* Container */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Content */}
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/">
                            <img src={`${mode == 'light' ? '/image/savewyze-colored.svg' : '/image/savewyze-white.svg'}`} alt="Savewyze Logo" className="h-8 w-auto" />
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
                    <nav className={` md:flex md:space-x-[49px] ${isMenuOpen ? ' h-screen md:h-auto flex flex-col absolute top-full left-0 w-full bg-[#F2E6F9] text-[16px] py-4 px-6 rounded-b-lg z-50 space-y-[12px]' : 'hidden'}`}>
                        <div id="savings-dropdown" className="relative group">



                            <a href="#" onClick={toggleSavingsDropdown} className={`${mode == 'light' ? 'text-[#8005C2] hover:text-black md:hover:text-black' : 'text-[#8005C2] hover:text-black md:text-white md:hover:text-[#D8B2EC]'} transition duration-300 flex items-center`}>
                                Savings
                                {showSavingsDropdown ? <ChevronUpIcon className="h-5 w-5 ml-1" /> : <ChevronDownIcon className="h-5 w-5 ml-1" />}
                            </a>
                            
                            {showSavingsDropdown && (
                                <div className="absolute top-full right-0 md:left-0 w-[300px] text-[16px] rounded-b-lg z-50 md:mt-[20px]">
                                    {/* Dropdown content */}
                                    <div className="w-[300px] p-[20px] bg-[#F2F2F2] space-y-[10px] rounded-[22px] flex flex-col">
                                        <Link href="/saving-plans/wyze-vault" passHref>
                                            <div className="px-[11px] py-[7px] flex flex-row bg-[#FFFFFF] rounded-[7.9px] items-center space-x-[15px] hover:bg-[#F2E6F9]">
                                                <div>
                                                    <img src="/image/wyze-vault-icon.svg" className="h-[29px] w-[29px]" />
                                                </div>
                                                <div className="">
                                                    <h3 className="text-[#8005C2] text-lg">Wyze Vault</h3>
                                                    <p className="text-[#333333] text-[10px]">Automated Savings</p>
                                                </div>
                                            </div>
                                        </Link>

                                        <Link href="/saving-plans/wyze-target" passHref>
                                            <div className="px-[11px] py-[7px] flex flex-row bg-[#FFFFFF] rounded-[7.9px] items-center space-x-[15px] hover:bg-[#F2E6F9]">
                                                <div>
                                                    <img src="/image/wyze-target-icon.svg" className="h-[29px] w-[29px]" />
                                                </div>
                                                <div className="">
                                                    <h3 className="text-[#8005C2] text-lg">Wyze Target</h3>
                                                    <p className="text-[#333333] text-[10px]">Goal Oriented Savings</p>
                                                </div>
                                            </div>
                                        </Link>


                                        <Link href="/saving-plans/wyze-lock" passHref>
                                            <div className="px-[11px] py-[7px] flex flex-row bg-[#FFFFFF] rounded-[7.9px] items-center space-x-[15px] hover:bg-[#F2E6F9]">
                                                <div>
                                                    <img src="/image/wyze-lock-icon.svg" className="h-[29px] w-[29px]" />
                                                </div>
                                                <div className="">
                                                    <h3 className="text-[#8005C2] text-lg">Wyze Lock</h3>
                                                    <p className="text-[#333333] text-[10px]">Investment Savings</p>
                                                </div>
                                            </div>
                                        </Link>

                                        {/* Add more links as needed */}
                                    </div>
                                </div>
                            )}
                        </div>
                        <a href="#" className={`${mode == 'light' ? 'text-[#8005C2] hover:text-black md:hover:text-black' : 'text-[#8005C2] hover:text-black md:text-white md:hover:text-[#D8B2EC]'} transition duration-300`}>Invest</a>
                        <a href="#" className={`${mode == 'light' ? 'text-[#8005C2] hover:text-black md:hover:text-black' : 'text-[#8005C2] hover:text-black md:text-white md:hover:text-[#D8B2EC]'} transition duration-300`}>Testimonials</a>
                        <Link href="/about-us" passHref>
                            <span onClick={closeMenu} className={`${mode == 'light' ? 'text-[#8005C2] hover:text-black md:hover:text-black' : 'text-[#8005C2] hover:text-black md:text-white md:hover:text-[#D8B2EC]'} transition duration-300`}>About</span>
                        </Link>
                        <a href="#" className={`${mode == 'light' ? 'text-[#8005C2] hover:text-black md:hover:text-black' : 'text-[#8005C2] hover:text-black md:text-white md:hover:text-[#D8B2EC]'} transition duration-300`}>FAQs</a>
                    </nav>

                    {/* Buttons */}
                    <div className="hidden lg:flex space-x-4 items-center">
                        <Link className={`${mode == 'light' ? 'text-[#8005C2]' : 'text-white'} px-4 py-2  transition duration-300 cursor-pointer font-extrabold`} href="https://savewyzeapp.netlify.app">SIGN IN</Link>
                        <button className={`${mode == 'light' ? 'bg-[#8005C2] text-white hover:border-[1px] hover:border-[#4D0374] hover:bg-white hover:text-[#4D0374]' : 'bg-white text-[#8005C2] hover:bg-[#4D0374] hover:text-white'} rounded-[36px] py-[20px] px-[40px] transition duration-300`}>Download App</button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
