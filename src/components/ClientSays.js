import React from 'react';
import Img1 from '../assets/clients/c1.png';
import Img2 from '../assets/clients/c2.png';
import Img3 from '../assets/clients/c3.png';

import Img11 from '../assets/clients/per1.webp';
import Img22 from '../assets/clients/per2.webp';
import Img33 from '../assets/clients/per3.webp';

import { FaArrowRight } from "react-icons/fa";

function ClientSays() {
    return (
        <div>
            <MobileView />
            <NormalView />
        </div>
    )
}

export default ClientSays;

const NormalView = () => {
    return (
        <section className="py-12 relative hidden md:block">
            <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                <div className="w-full flex-col justify-start items-center lg:gap-12 gap-10 inline-flex">
                    <div className="w-full flex-col justify-start items-center gap-3 flex">
                        <p className="max-w-2xl text-center text-[#308BC8] text-[16px] font-light font-lmk leading-[21px]">Testimonials Section</p>
                        <h2 className="w-full text-center text-black text-[48px] font-bold font-serif mt-4 leading-[56px] tracking-wider">Here’s What Our Clients Are Saying</h2>
                    </div>
                </div>

                <div className="w-full flex flex-col md:flex-wrap md:flex-row justify-center items-center lg:gap-12 gap-10 inline-flex mt-4 md:mt-24">
                    {[
                        { img: Img2, overlayImg: Img11, title: "John Doe, CEO of RetailMaster", desc: "MIPORIS has drastically reduced our complaint resolution time. Our customers are happier, and our support team is more efficient!" },
                        { img: Img1, overlayImg: Img22, title: "Jane Smith, Operations Manager at TechSolutions", desc: "The AI capabilities of MIPORIS have allowed us to identify root causes faster than we ever could manually. A game-changer!" },
                        { img: Img3, overlayImg: Img33, title: "Jane Smith, Operations Manager at TechSolutions", desc: "With MIPORIS, we’ve seen a significant drop in unresolved complaints and overall smoother operations. Highly recommend it!" }
                    ].map(({ img, overlayImg, title, desc }, index) => (
                        <div className='relative' key={index}>
                            <div className="group">
                                <img
                                    src={overlayImg}
                                    alt='client'
                                    className="transition duration-300 ease-in-out w-[250px] h-[400px] rounded-xl object-cover filter grayscale group-hover:grayscale-0 group-hover:w-auto group-hover:h-auto"
                                />

                                <div className="absolute inset-0 flex scale-100 flex-col py-6 px-2 justify-end rounded-xl items-center text-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-30 transition duration-300 ease-in-out">
                                    <h3 className="text-white text-lg font-semibold mb-2 font-serif">{title}</h3>
                                    <p className="text-white text-sm font-lmk">{desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


                <div className='py-12 flex justify-end'>
                    <div className='font-lmk font-light text-[16px] flex items-center underline gap-2 text-[#0071BC] cursor-pointer'>
                        Join the Success <FaArrowRight color='#0071BC' />
                    </div>
                </div>
            </div>
        </section>
    )
}

const MobileView = () => {
    return (
        <section className="py-12 relative md:hidden">
            <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                <div className="w-full flex-col justify-start items-center lg:gap-12 gap-10 inline-flex">
                    <div className="w-full flex-col justify-start items-center gap-3 flex">
                        <p className="max-w-2xl text-center text-[#308BC8] text-[16px] font-light font-lmk leading-[21px]">Testimonials Section</p>
                        <h2 className="w-full text-center text-black text-[48px] font-bold font-serif mt-4 leading-[56px] tracking-wider">Here’s What Our Clients Are Saying</h2>
                    </div>
                </div>

                <div className="w-full flex flex-col md:flex-wrap md:flex-row justify-center items-center lg:gap-12 gap-10 inline-flex mt-4 md:mt-24">
                    {[
                        { img: Img2, overlayImg: Img11, title: "John Doe, CEO of RetailMaster", desc: "MIPLORIS has drastically reduced our complaint resolution time. Our customers are happier, and our support team is more efficient!" },
                        { img: Img1, overlayImg: Img22, title: "Jane Smith, Operations Manager at TechSolutions", desc: "The AI capabilities of MIPORIS have allowed us to identify root causes faster than we ever could manually. A game-changer!" },
                        { img: Img3, overlayImg: Img33, title: "Jane Smith, Operations Manager at TechSolutions", desc: "With MIPORIS, we’ve seen a significant drop in unresolved complaints and overall smoother operations. Highly recommend it!" }
                    ].map(({ img, overlayImg, title, desc }, index) => (
                        <div key={index} className="relative group">
                            <img src={img} alt='client' className="transition duration-300 ease-in-out w-full" />
                            <img src={overlayImg} alt='client overlay' className=" absolute rounded-xl inset-0 w-full h-full object-cover transition duration-300 ease-in-out opacity-0 group-hover:opacity-100" />
                            <div className="absolute inset-0 flex scale-100 flex-col py-6 px-2 justify-end rounded-xl items-center text-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-60 transition duration-300 ease-in-out">
                                <h3 className="text-white text-lg font-semibold mb-2 font-serif">{title}</h3>
                                <p className="text-white text-sm font-lmk">{desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='py-12 flex justify-center'>
                    <div className='font-lmk font-light text-[16px] flex items-center underline gap-2 text-[#0071BC] cursor-pointer'>
                        Join the Success <FaArrowRight color='#0071BC' />
                    </div>
                </div>
            </div>
        </section>
    )
}
