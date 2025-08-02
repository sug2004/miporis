import React from 'react'

function Why2() {

    const data = [
        {
            "title": "AI-Powered Governance",
            "description": "Gain real-time insights into your organization’s performance with AI-driven analytics. MIPORIS enables you to monitor key metrics, spot trends, and predict potential risks before they escalate."
        },
        {
            "title": "Seamless control",
            "description": "Stay on top of ever-evolving regulations. MIPORIS automatically monitors control standards, flags potential issues, and generates comprehensive reports, ensuring your organization remains compliant without the manual burden."
        },
        {
            "title": "Optimized Operations",
            "description": "Streamline and automate repetitive governance tasks, allowing your team to focus on strategic initiatives that drive long-term value."
        }
    ]



    return (
        <div className=' bg-[#F2F2F2]'>
            <div className='max-w-screen-xl flex flex-col justify-center items-center mx-auto py-24 px-8 '>
                <div>
                    <h1 className="max-w-7xl mb-4 font-serif text-center font-medium tracking-tight leading-none text-[36px] leading-[35px] uppercase tracking-wide">
                        Why Choose MIPORIS?
                    </h1>
                    <p className=" mb-6 mt-12 font-light text-center leading-[24px] text-gray-600 lg:mb-8 text-[20px]">
                        MIPORIS uses AI to transform governance from a reactive task into a proactive strategy. By integrating AI-driven analytics and automation, MIPORIS empowers businesses to manage risk, enhance control, and make data-driven decisions with confidence.
                    </p>
                </div>
                <section className="py-12">
                    <div>
                        <div className="flex flex-col flex-1 gap-10 lg:gap-6 lg:flex-row lg:justify-between">
                            {data.map((stat, index) => (
                                <div className="px-6 max-w-[370px] pt-20 pb-12 rounded-xl shadow-lg text-center border bg-white">
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

export default Why2;