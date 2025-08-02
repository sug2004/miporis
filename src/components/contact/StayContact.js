import React from 'react';
import BgImg from '../../assets/bgCtn.png';

function StayContactCtn() {
    return (
        <div>
            <section
                className="py-16 lg:py-24 bg-[#0071BC] bg-center relative"
            >
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                    <div>
                        <h1 className="mb-4 font-serif font-medium tracking-tight leading-none text-[39px] leading-[35px] uppercase text-center text-white">
                            Start Optimizing Your Operations Today!"
                        </h1>
                    </div>
                    <div className="flex items-center justify-center flex-col">
                        <div className="flex flex-row rounded-xl mt-10 ">
                            <a href='/signup'>
                                <button className="h-12 py-3 min-w-36 px-6 bg-white shadow-sm rounded-full text-[#0071BC] font-sans font-semibold tracing-widest uppercase">
                                    Get Started for Free
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default StayContactCtn;
