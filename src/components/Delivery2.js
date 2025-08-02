import React from 'react';

function Deliveries2() {
    const data = [
        {
            "title": "Risk Identification",
            "description": "Detect and analyze potential risks using advanced AI algorithms."
        },
        {
            "title": "Scenario Simulation",
            "description": "Simulate different risk scenarios and measure the effectiveness of your response strategies."
        },
        {
            "title": "Continuous Monitoring",
            "description": "Maintain a dynamic risk management strategy with real-time monitoring and adaptation to changing conditions."
        }
    ]

    return (
        <div className='bg-[#EBF7FF]  py-12 px-4'>


            <section className="py-  flex justify-center ">
                <div className='max-w-screen-xl py-8'>
                    <p className="text-center mb-6 mt-4 font-bold leading-[24px] text-gray-600 lg:mb-8 text-[20px]">
                        Proactively managing risk is critical for business success. MIPORIS helps you identify, analyze, and mitigate risks across all levels of your organization with cutting-edge AI technology.

                    </p>

                    <div className="flex flex-col flex-1  lg:flex-row justify-center items-center py-12 gap-12 lg:gap-0">
                        {data.map((stat, index) => (
                            <div
                                key={index}
                                className={`px-8 max-w-[280px] text-center   ${index % 2 === 1 ? 'lg:border-x-2 lg:border-black' : ''}`}
                            >
                                <div className="font-bold font-serif text-[18px] text-gray-900 mb-2 tracking-wider px-4">
                                    {stat.title}
                                </div>
                                <span className="text-lg  text-black text-[15px]">
                                    {stat.description}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section >
        </div >
    );
}

export default Deliveries2;
