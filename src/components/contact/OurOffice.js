import React from 'react';
import Img from '../../assets/unlock.png'

function OurOffice() {
    return (
        <div>
            <section className="bg-white py-16">
                <div className="  max-w-7xl  py-8 mx-auto ">
                    <div className=" flex flex-col justify-between items-center mr-auto px-8 ">

                        <h1 className=" mb-4 font-serif font-medium tracking-tight leading-none text-[30px] lg:text-[36px] leading-[35px] uppercase text-center">
                            Looking for Business Solutions
                        </h1>

                        <p className="flex mb-12 mt-8  font-satoshi leading-[24px]  lg:mb-8 text-[20px] text-center ">
                            Interested in how MIPORIS can help your business? Contact our sales team
                        </p>
                        <a href="mailto:sales@miporis.com">
                            <button
                                type="button"
                                className="text-white bg-[#0070BC] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-4"
                            >
                                Contact Sales
                            </button>
                        </a>
                        <p className="gap-2 mb-6 mt-8 font-satoshi leading-[24px] text-black lg:mb-8 text-[20px] text-center">
                            Email us at <a href="mailto:sales@miporis.com" className="text-[#0071BC]">contact@miporis.com</a> or fill out our Sales Inquiry Form to get more information on custom solutions and pricing.
                        </p>
                    </div>

                </div>
            </section>

        </div>
    );
}

export default OurOffice;
