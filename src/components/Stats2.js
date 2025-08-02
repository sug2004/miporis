import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { FaArrowRight } from "react-icons/fa";

function Stats2() {

    const data = [
        {
            "title": "Disconnected Data",
            "description": "Ragmented systems make it difficult to obtain a complete view of control and performance.",
            "space": true
        },
        {
            "title": "Manual Processes",
            "description": "Time-consuming tasks slow down decision-making and prevent proactive governance.",
            "space": true
        },
        {
            "title": "Rising control",
            "description": "Keeping up with changing regulations across different regions and industries is a growing challenge."
        },
        {
            "title": "Weak Oversight",
            "description": "Boards and committees struggle to monitor complex, multi-national operations effectively.",
            "space": true
        }
    ]

    return (
        <div className='max-w-screen-xl flex flex-col justify-center items-center mx-auto py-24 px-8'>
            <div>
                <h1 className="max-w-7xl mb-4 font-serif text-center font-medium tracking-tight leading-none text-[36px] leading-[35px] uppercase tracking-wide">
                    The Future of Corporate Governance is Here
                </h1>
                <p className=" mb-6 mt-12 font-light text-center leading-[24px] text-gray-600 mb-8 text-[20px]">
                    With new mandates like the UK Corporate Governance Code requiring C-suite executives to declare the effectiveness of their controls and control, traditional methods of governance are no longer enough. MIPORIS leverages advanced Artificial Intelligence (AI) and Machine Learning (ML) to provide a 360-degree view of corporate performance, ensuring you stay ahead of control risks and governance challenges.
                </p>
                <h1 className="max-w-7xl mb-4 font-serif text-center font-medium tracking-tight leading-none text-[20px] leading-[35px] uppercase tracking-wide">
                    Common Challenges in Corporate Governance
                </h1>
            </div>
            <section className="py-12">
                <div>
                    <div className="flex flex-col flex-1 gap-10 lg:gap-6 lg:flex-row lg:justify-between">
                        {data.map((stat, index) => (
                            <div className="px-6  py-16 rounded-xl shadow-lg text-center border">
                                <div className="font-bold font-serif text-[15px] text-gray-900 mb-2 tracking-wider">
                                    {stat.title}
                                </div>
                                {/* {stat.space && <br />} */}
                                <span className="text-lg font-light  text-black text-[15px]">{stat.description}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Stats2;
