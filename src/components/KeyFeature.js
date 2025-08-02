import React from 'react';

function KeyFeature() {
    const data = [
        {
            "title": "Unified Data Integration",
            "description": "Consolidate data from multiple sources to get a holistic view of your organization’s control and performance."
        },
        {
            "title": "Automated control Reporting",
            "description": "Generate AI-powered, actionable reports that simplify complex control requirements."
        },
        {
            "title": "Robust Security",
            "description": "Protect sensitive data with best-in-class security protocols and encryption."
        },
        {
            "title": "Real-Time Dashboards",
            "description": "Use interactive dashboards to monitor governance metrics and make informed decisions at any moment."
        }
    ]

    return (
        <div className=''>
            <div className='max-w-screen-xl flex flex-col justify-center items-center mx-auto py-24 px-8 '>
                <div>
                    <h1 className="max-w-7xl mb-4 font-serif text-center font-medium tracking-tight leading-none text-[36px] leading-[35px] uppercase tracking-wide">
                        Key Features of MIPORIS
                    </h1>
                </div>
                <section className="py-12">
                    <div>
                        <div className="flex flex-col md:flex-row md:flex-wrap flex-1 gap-10 lg:gap-0 justify-center ">
                            {data.map((stat, index) => (
                                <div className="px-3 mx-2 max-w-[280px] pt-20 pb-12 rounded-xl shadow-lg text-center border">
                                    <div className="font-bold font-serif text-[15px] text-gray-900 mb-2 tracking-wider">
                                        {stat.title}
                                    </div>
                                    <br />
                                    <span className="text-lg font-light  text-black text-[15px] ">{stat.description}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default KeyFeature;

