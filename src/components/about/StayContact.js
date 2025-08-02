import React from 'react';
import BgImg from '../../assets/aboutft.png';

function StayContactCtn() {
    return (
        <div className='my-24'>
            <section
                className="py-16  bg-center bg-cover relative"
                style={{ backgroundImage: `url(${BgImg})` }}
            >
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                    <div>
                        <h1 className="mb-4 font-serif font-medium tracking-tight leading-none text-[39px] leading-[35px] uppercase text-center text-white">
                            Ready to Learn More About MIPORIS?
                        </h1>
                    </div>
                    <div className="flex items-center justify-center flex-col">
                        <div className="flex flex-row rounded-xl mt-10">
                            <a href='/signup'>
                                <button className="h-12 py-3 min-w-36 px-6 bg-white shadow-sm rounded-full text-[#0071BC] font-sans font-semibold tracking-widest uppercase">
                                    Start Your Free Trial
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="absolute inset-0 bg-black opacity-40 z-0"></div> {/* Overlay for better text visibility */}
            </section>
        </div>
    );
}

export default StayContactCtn;
