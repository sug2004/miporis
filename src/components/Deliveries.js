import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { FaArrowRight } from "react-icons/fa";
import LP from '../assets/icon/lp.png';
import DOC from '../assets/icon/doc.png';
import OB from '../assets/icon/ob.png';
import PPL from '../assets/icon/ppl.png';

function Deliveries() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div className='  py-12 '>

            <div className='max-w-screen-xl mx-auto px-8 pb-8'>
                <p class="text-center text-[#308BC8] text-[16px] font-light font-lmk leading-[21px] mb-16">Key metrics</p>
                <h1 className="text-center  mb-4 font-serif font-medium tracking-tight leading-none text-[48px] leading-[35px] uppercase">
                    MIPORIS Delivers Proven Results
                </h1>

                <p className="text-center mb-6 mt-4 font-light font-lmk leading-[24px] text-gray-600 lg:mb-8 text-[14px]">
                    See the impact of AI complaint resolution
                </p>
            </div>
            <section className="py- bg-[#EBF7FF] flex justify-center ">
                <div className='max-w-screen-xl py-8'>
                    <div className="flex flex-col flex-1 gap-10 lg:gap-4 lg:flex-row lg:justify-between">
                        <div ref={ref} className="bg-[#EBF7FF] px-6 py-2 rounded-xl flex flex-col items-center">
                            <img src={OB} alt='icon' />
                            <div className="font-bold font-serif text-[39px] text-gray-900 mb-2 tracking-wider ">
                                {inView ? (
                                    <CountUp start={0} end={200} duration={2.5} separator="," />
                                ) : (
                                    "200"
                                )}
                                +
                            </div>
                            <span className=" text-center text-md font-light font-lmk text-gray-600">companies onboarded</span>
                        </div>
                        <div ref={ref} className="bg-[#EBF7FF] px-6 py-2 rounded-xl flex flex-col items-center">
                            <img src={DOC} alt='icon' />
                            <div className="font-bold font-serif text-[39px] text-gray-900 mb-2 tracking-wider min-w-[224px]  mx-auto">
                                {inView ? (
                                    <CountUp start={0} end={500000} duration={2.5} separator="," />
                                ) : (
                                    "500,000"
                                )}
                                +
                            </div>
                            <span className="text-center text-md font-light font-lmk text-gray-600 ">complaints managed</span>
                        </div>
                        <div ref={ref} className="bg-[#EBF7FF] px-6 py-2 rounded-xl flex flex-col items-center max-w-[300px]">
                            <img src={PPL} alt='icon' />
                            <div className="font-bold font-serif text-[39px] text-gray-900 mb-2  tracking-wider">
                                {inView ? (
                                    <CountUp start={0} end={45} duration={2.5} separator="," />
                                ) : (
                                    "45"
                                )}
                                %
                            </div>
                            <span className="text-center text-md font-light font-lmk text-gray-600">increase in operational efficiency for clients</span>
                        </div>
                        <div ref={ref} className="bg-[#EBF7FF] px-6 py-2 rounded-xl flex flex-col items-center max-w-[300px]">
                            <img src={LP} alt='icon' />
                            <div className="font-bold font-serif text-[39px] text-gray-900 mb-2 tracking-wider">
                                {inView ? (
                                    <CountUp start={0} end={60} duration={2.5} separator="," />
                                ) : (
                                    "60"
                                )}
                                %
                            </div>
                            <span className="text-center text-md font-light font-lmk text-gray-600">reduction in complaint handling time</span>
                        </div>
                    </div>
                </div>
            </section>
            <div className='py-16 flex justify-center'>
                <div className='font-lmk font-light text-[16px] rounded-xl flex items-center border-2 border-[#0071BC] px-6 py-2.5 gap-2 text-[#0071BC] cursor-pointer'>
                    Start Free Trial Today
                </div>
            </div>
        </div>
    );
}

export default Deliveries;
