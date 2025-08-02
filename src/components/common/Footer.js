import React from 'react';
import Logo from '../../assets/miporis.jpg';

function Footer() {
    return (
        <div>
            <footer className="w-full ">
                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap md:flex-nowrap justify-start py-4 md:py-10">
                        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 w-full mx-4 gap-y-2 justify-center md:justify-start">
                            <div className="col-span-full mb-3 md:mb-10 lg:col-span-2 lg:mb-0 flex justify-center md:justify-start">
                                <a className="flex items-center cursor-pointer">
                                    <img src={Logo} className="h-8" alt="Logo" />
                                </a>
                            </div>
                            <div className="lg:mx-auto text-left flex items-end">
                                <ul className="text-[16px] font-bold flex gap-4 transition-all duration-500">
                                    <li><a href="/contact" className="text-gray-600 hover:text-gray-900 whitespace-nowrap">Contact</a></li>
                                    <li><a href="/pricing" className="text-gray-600 hover:text-gray-900">Pricing</a></li>
                                    <li><a href="/about-us" className="text-gray-600 hover:text-gray-900 whitespace-nowrap">About Us</a></li>
                                    <li><a href="/blog" className="text-gray-600 hover:text-gray-900">Blog</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="mx-4 flex items-end w-full md:w-auto">
                            <div className="text-gray-600 text-center md:text-left">
                                <p className="flex justify-center md:justify-start whitespace-nowrap gap-2 text-[16px]">
                                    General inquiries: <a href="mailto:contact@miporis.com" className="text-[#0070BC] hover:underline">contact@miporis.com</a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="pt-7 flex flex-col space-y-2 lg:flex-row items-center justify-between border-t border-gray-200">
                        <div className="flex items-center justify-center flex-col lg:justify-center lg:flex-row">
                            <span className="text-[16px] text-[#838B7F] text-center md:text-left my-auto flex flex-wrap justify-center gap-1 mb-4 md:mb-0">
                                ©2024 <a href="" className="hover:underline">miporis</a> · All rights reserved.
                            </span>
                        </div>
                        <div>
                            <ul className="text-[16px] text-[#656B61] flex gap-4 transition-all duration-500 justify-center lg:justify-end">
                                <li><a href="/terms-and-conditions" className="hover:underline">Terms of Use</a></li>
                                <li><a href="/privacy-policy" className="hover:underline">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="pt-2 py-8 flex flex-col space-y-2 lg:flex-row items-center justify-between">
                        <div className="flex items-center justify-center flex-col lg:justify-center lg:flex-row">
                            <span className="text-[16px] text-[#838B7F] text-center md:text-start my-auto">
                                Site Maintained by <a href="https://www.adrig.co.in/" target="_blank" rel="noopener noreferrer" className="underline">ADRIG AI Technologies</a>
                                <br className="block md:hidden" />
                                <span className="hidden md:inline"> - </span> Last updated on 04/11/2024
                            </span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
