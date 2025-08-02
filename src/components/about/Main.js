import React from 'react';
import Logo from '../../assets/miporis.jpg';
import t1 from '../../assets/team/t1.png';
import t2 from '../../assets/team/t2.png';
import t3 from '../../assets/team/t3.png';
import t4 from '../../assets/team/t4.png';
import t5 from '../../assets/team/t5.png';
import clients from '../../assets/clients.png';

const images = [
    { src: t1, alt: 'team miporis' },
    { src: t2, alt: 'team miporis' },
    { src: t3, alt: 'team miporis' },
    { src: t4, alt: 'team miporis' },
    { src: t5, alt: 'team miporis' },
];

function AboutMain() {
    return (
        <div className="px-4 pt-28 max-w-7xl mx-auto">
            <div className="text-center max-w-5xl mx-auto flex flex-col items-center mb-24">
                <p className='text-[14px] text-[#005ABC] font-bold mb-4'>ABOUT US</p>
                <h1 className="mb-4 font-serif font-medium tracking-wide text-[30px] md:text-[40px] lg:text-[45px] leading-[45px] uppercase text-center">
                    Innovating corporate governance with <span className='text-[#005ABC]'>AI</span>
                </h1>
                <p className="text-[20px] font-normal text-black max-w-3xl text-center">
                    Empowering businesses to streamline their operations and enhance customer experience through cutting-edge AI technology
                </p>
            </div>
            <div className='flex flex-wrap space-y-12 lg:space-y-0'>
                <div className="text-center max-w-5xl mx-auto flex flex-col items-center max-w-[530px]">
                    <h1 className="mb-4 font-serif font-medium tracking-wide text-[25px] leading-[45px] border-b-2 border-[#0071BC]/40 uppercase text-center">
                        OUR MISSION
                    </h1>
                    <p className="text-[20px] font-normal text-black text-center lg:text-start">
                        To empower organizations with innovative AI-driven tools for corporate governance, enabling proactive control, risk management, and operational efficiency. Through predictive analytics, real-time monitoring, and advanced reporting, MIPORIS provides actionable insights that support leaders in navigating complex regulatory environments and making informed, strategic decisions.
                    </p>
                </div>
                <div className="text-center max-w-5xl mx-auto flex flex-col items-center max-w-[530px]">
                    <h1 className="mb-4 font-serif font-medium tracking-wide text-[25px] leading-[45px] border-b-2 border-[#0071BC]/40 uppercase text-center">
                        OUR VISION
                    </h1>
                    <p className="text-[20px] font-normal text-black text-center lg:text-start">
                        To be the leading platform that redefines corporate governance by harnessing the power of AI, fostering transparency, and safeguarding control. We envision a future where businesses are equipped with intelligent, seamless solutions to manage risks, streamline operations, and maintain robust governance across all facets of their organization.
                    </p>
                </div>
            </div>
            <div className="text-center  mx-auto flex flex-col items-center py-12 px-8">
                <h1 className="mb-4 font-serif font-medium tracking-wide text-[25px] leading-[45px] border-b-2 border-[#0071BC]/40 uppercase text-center">
                    OUR STORY
                </h1>
                <p className="text-[20px] font-normal text-black">
                    MIPORIS was born out of over two decades of experience in multinational corporate settings, where tracking and assessing an organization’s controls and control was often a manual, time-consuming process. Through years of firsthand experience, our founders recognized that traditional governance practices were not only tedious but increasingly inadequate to keep pace with today’s regulatory demands and global operations.
                </p>
                <p className="text-[20px] font-normal text-black mt-6">
                    Our journey began with a vision: to revolutionize corporate governance by harnessing the power of Artificial Intelligence. We envisioned a solution that could automate control, provide real-time insights, and enable companies to proactively manage risk—all while freeing leaders to focus on strategic decision-making.
                </p>
                <p className="text-[20px] font-normal text-black mt-6">
                    With MIPORIS, we have created a platform that empowers organizations to navigate the complexities of modern governance, transforming what was once a challenging process into a streamlined, intelligent, and proactive approach. Today, MIPORIS stands as a trusted partner for companies looking to stay ahead of control, protect their reputation, and operate with unparalleled transparency and accountability.
                </p>
                <p className="text-[20px] font-normal text-black mt-6">
                    Our story is one of innovation, resilience, and a deep commitment to helping businesses thrive in a complex, fast-evolving world.
                </p>

            </div>
            <div className='py-24 flex justify-center'>
                <img src={clients} alt='miporis client' />
            </div>
            <div className="text-center max-w-5xl mx-auto flex flex-col items-center py-12">
                <h1 className="mb-4 font-serif font-medium tracking-wide text-[25px] leading-[45px] border-b-2 border-[#0071BC]/40 uppercase text-center">
                    Join Us on Our Journey
                </h1>
                <p className="text-[20px] font-normal text-black">
                    We’re always looking for talented individuals who share our passion for innovation and customer success. If you’re interested in joining our team, explore careers at MIPORIS or reach out to us for partnership opportunities.
                </p>
            </div>
            <div className="text-center max-w-7xl mx-auto flex flex-col items-center py-12 ">
                <p className='text-[14px] text-[#005ABC] font-bold mb-12 uppercase'>Our Commitment to Innovation</p>
                <div className='shadow-xl rounded-xl py-12 px-12'>
                    <h1 className="mb-8 font-serif font-medium tracking-wide text-[30px] leading-[45px] uppercase text-center">
                        Committed to Continuous Innovation
                    </h1>
                    <p className="text-[20px] font-normal text-black">
                        We are constantly evolving to meet the changing needs of businesses in today’s fast-paced environment. By staying at the forefront of AI technology, we are committed to providing innovative solutions that drive efficiency, improve customer experiences, and keep our clients ahead of the competition.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutMain;