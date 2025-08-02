import React from 'react';

function TryMiporis() {
    return (
        <div className='bg-gradient-to-r from-[#ceefff] to-white mx-8 rounded-xl'>
            <section className="bg- py-16">
                <div className="  max-w-7xl   mx-auto ">
                    <div className=" flex flex-col justify-between items-center mr-auto px-8 ">

                        <h1 className=" mb-4 font-serif font-medium tracking-tight leading-none text-[30px] lg:text-[50px] leading-[35px] uppercase text-center">
                            Try <span className='text-[#0071BC]'>MIPORIS</span> Risk-Free
                        </h1>

                        <p className="flex mb-12 mt-8  font-satoshi leading-[24px]  lg:mb-8 text-[20px] text-center ">
                            Get started with a 30-day free trial, no credit card required. Cancel anytime or upgrade as your business grows
                        </p>
                        <p className="gap-2 mb-6  font-satoshi font-medium leading-[30px] text-black lg:mb-8 text-[30px] text-center">
                            If you're not satisfied, we offer a 30-day money-back guarantee for all paid plans
                        </p>
                        <a href='/signup'>
                            <button
                                className={` bg-[#005ABC] text-[16px] text-center px-4 py-2 transition-colors border-2 border-blue-400  rounded-full  text-white`}
                            >
                                Start My Free Trial
                            </button>
                        </a>

                    </div>

                </div>
            </section>

        </div>
    );
}

export default TryMiporis;
