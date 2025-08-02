import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { FaArrowRight } from "react-icons/fa";

function Stats() {
    const { ref, inView } = useInView({
        triggerOnce: true, // Counts up only once
        threshold: 0.1,    // Trigger when 10% of the component is visible
    });

    return (
        <div className='max-w-screen-xl flex flex-col justify-center items-center mx-auto py-24 px-8'>
            <div>
                <h1 className="max-w-5xl mb-4 font-serif text-center font-medium tracking-tight leading-none text-[32px] leading-[35px] uppercase">
                    Trusted by Leading Businesses to Improve Operations
                </h1>
                <p className=" mb-6 mt-12 font-light font-lmk text-center leading-[24px] text-gray-600 lg:mb-8 text-[14px]">
                    Join the businesses transforming their customer experience with MIPORIS
                </p>
            </div>
            <section className="py-12">
                <div>
                    <div className="flex flex-col flex-1 gap-10 lg:gap-6 lg:flex-row lg:justify-between">
                        <div ref={ref} className="pl-6 pr-12 py-6 rounded-xl shadow-md">
                            <div className="font-bold font-serif text-[35px] text-gray-900 mb-2 tracking-wider">
                                {inView ? (
                                    <CountUp start={0} end={99.5} duration={2.5} separator="," decimals={1} />
                                ) : (
                                    "99.5"
                                )}
                                %
                            </div>
                            <span className="text-lg font-light font-lmk text-gray-600 text-[15px]">AI accuracy rate</span>
                        </div>
                        <div ref={ref} className=" px-6 py-6 rounded-xl shadow-md">
                            <div className="font-bold font-serif text-[35px] text-gray-900 mb-2 tracking-wider">
                                {inView ? (
                                    <CountUp start={0} end={98} duration={2.5} separator="," />
                                ) : (
                                    "98"
                                )}
                                %
                            </div>
                            <span className="text-lg font-light font-lmk text-gray-600 text-[15px]">client satisfaction rate</span>
                        </div>
                        <div ref={ref} className="px-6 py-6 rounded-xl shadow-md">
                            <div className="font-bold font-serif text-[35px] text-gray-900 mb-2 tracking-wider">
                                {inView ? (
                                    <CountUp start={0} end={10000} duration={2.5} separator="," />
                                ) : (
                                    "10,000"
                                )}+
                            </div>
                            <span className="text-lg font-light font-lmk text-gray-600 text-[15px]">complaints resolved monthly</span>
                        </div>
                        <div ref={ref} className=" px-6 py-6 rounded-xl shadow-md">
                            <div className="font-bold font-serif text-[35px] text-gray-900 mb-2 tracking-wider">
                                {inView ? (
                                    <CountUp start={0} end={50} duration={2.5} separator="," />
                                ) : (
                                    "50"
                                )}+
                            </div>
                            <span className="text-lg font-light font-lmk text-gray-600 text-[15px]">Supporting industries</span>
                        </div>
                    </div>
                </div>
            </section>
            <div className='mt-12'>
                <button
                    type="button"
                    className="text-white bg-[#0070BC] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-3"
                >
                    See How It Works
                </button>
            </div>
        </div>
    );
}

export default Stats;
