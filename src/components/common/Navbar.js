import React, { useState } from 'react';
import Logo from '../../assets/miporis.jpg';
import { useSelector } from 'react-redux';
import { jwtDecode } from 'jwt-decode';

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { isAuthenticated, token } = useSelector((state) => state.auth);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-white w-full border-b border-gray-200 shadow-md fixed z-50">
            <div className="flex flex-wrap items-center justify-between mx-auto px-6 md:px-12">
                <div className="flex items-center ">
                    <a href='/' className="flex items-center cursor-pointer">
                        <img src={Logo} className="h-6" alt="Logo" />
                    </a>
                    {/* Menu for large screens */}
                    <div className="hidden lg:block ml-12" id="navbar-default">
                        <ul className="font-lmk font-medium text-[#3C403A] text-[14px] flex flex-col p-4 md:p-0 md:flex-row ">

                            <li className='flex'>
                                <a href="/contact" className="block flex justify-center items-center py-2 px-3  rounded ">CONTACT </a>
                            </li>
                            <li>
                                <a href="/pricing" className="block py-2 px-3  rounded ">PRICING</a>
                            </li>
                            <li>
                                <a href="/about-us" className="block py-2 px-3  rounded ">ABOUT US</a>
                            </li>
                            <li>
                                <a href="/blog" className="block py-2 px-3  rounded ">BLOG</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Buttons visible on large screens */}
                {(!isAuthenticated) ?
                    <div className="hidden lg:flex items-center space-x-2 py-2">

                        <a href="/contact" >
                            <button
                                type="button"
                                className="text-[#0070BC] border border-[#0070BC] bg-white hover:bg-blue-800 hover:text-white font-medium rounded-lg text-sm px-6 py-3"
                            >
                                Get a demo
                            </button>
                        </a>
                        <a href="/login" className="">
                            <button
                                type="button"
                                className="text-white bg-[#0070BC] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-3"
                            >
                                Start your free trial
                            </button>
                        </a>
                    </div>
                    :
                    <div className="hidden lg:flex items-center space-x-2 py-2">
                        <button
                            type="button"
                            className="text-[#0070BC]  bg-white font-medium rounded-lg text-sm px-6 py-3"
                        >
                            Hi, {token && jwtDecode(token).name}
                        </button>
                        <a href='https://app.miporis.com'>
                            <button
                                type="button"
                                className="text-white bg-[#0070BC] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-3"
                            >
                                Access Miporis
                            </button>
                        </a>
                    </div>
                }


                {/* Mobile menu toggle button */}
                <button
                    onClick={toggleMobileMenu}
                    type="button"
                    className="inline-flex items-center p-2 w-8 h-8 my-2 justify-center text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    aria-controls="navbar-default"
                    aria-expanded={isMobileMenuOpen}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu for small and medium screens */}
            {isMobileMenuOpen && (
                <div className="md:hidden" id="mobile-menu">
                    <ul className="flex flex-col  text-[#3C403A] space-y-2 px-4 py-2">
                        <li>
                            <a href="about-us" className="block py-2 px-3  rounded hover:bg-gray-100">About Us</a>
                        </li>
                        <li>
                            <a href="/pricing" className="block py-2 px-3  rounded hover:bg-gray-100">Pricing</a>
                        </li>
                        <li>
                            <a href="/contact" className="block py-2 px-3  rounded hover:bg-gray-100">Contact</a>
                        </li>
                        <li>
                            {(!isAuthenticated) ?
                                <div className="hidden lg:flex items-center space-x-2 py-2">

                                    <button
                                        type="button"
                                        className="text-[#0070BC] border border-[#0070BC] bg-white hover:bg-blue-800 hover:text-white font-medium rounded-lg text-sm px-6 py-3"
                                    >
                                        Get a demo
                                    </button>
                                    <a href="/login" className=" ">
                                        <button
                                            type="button"
                                            className="text-white bg-[#0070BC] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-3"
                                        >
                                            Start your free trial
                                        </button>
                                    </a>
                                </div>
                                :
                                <div className="hidden lg:flex items-center space-x-2 py-2">
                                    <button
                                        type="button"
                                        className="text-[#0070BC]  bg-white hover:bg-blue-800 hover:text-white font-medium rounded-lg text-sm px-6 py-3"
                                    >
                                        Hi, {token && jwtDecode(token).name}
                                    </button>
                                    <a href='https://app.miporis.com'>
                                        <button
                                            type="button"
                                            className="text-white bg-[#0070BC] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-3"
                                        >
                                            Access Miporis
                                        </button>
                                    </a>
                                </div>
                            }
                        </li>
                    </ul>
                </div>

            )}
        </nav>
    );
}

export default Navbar;
