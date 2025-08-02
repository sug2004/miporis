import React from 'react';
import Img from '../assets/unlock.png'

function Unlock() {
    return (
        <div>
            <section className="bg-white py-2">
                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className=" flex flex-col justify-between mr-auto  lg:col-span-7 ">
                        <div>
                            <h1 className=" mb-4 font-serif font-medium tracking-tight text-center lg:text-start leading-none text-[39px] leading-[35px] uppercase">
                                Unlock the Power of Predictive Analytics

                            </h1>

                            <p className="max-w-2xl flex gap-2 mb-6 mt-8 text-center lg:text-start font-normal leading-[30px] text-black lg:mb-8 text-[20px]">
                                MIPORIS doesn’t just react to governance challenges; it predicts them. With Machine Learning models and Predictive Analytics, your organization can anticipate risks, optimize decision-making, and maintain seamless control with confidence.
                            </p>
                        </div>
                        {/* <div className='flex justify-center lg:justify-start'>
                            <button
                                type="button"
                                className="text-white bg-[#0070BC] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-4"
                            >
                                Get a Personalized Demo
                            </button>

                        </div> */}
                    </div>
                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex mx-auto">
                        <img src={Img} alt="mockup" />
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Unlock;
