import React from 'react'

function Why() {

    const whyData = [{
        title: "AI-Powered Complaint Detection",
        desc: "Automatically identify and categorize complaints with high precision",
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvu8MVbAMtCpx-4Ib0osgtHaTjgGJm3s8NFA&s'
    },
    {
        title: "Real-Time Insights and Analytics",
        desc: "Monitor complaint trends and spot opportunities for improvement with live analytics",
        img: 'https://img.freepik.com/free-photo/modern-minimalist-office-black-white_23-2151777601.jpg'
    }, {
        title: "Automated Workflows",
        desc: "Set up automatic resolution workflows for faster complaint management",
        img: 'https://img.freepik.com/premium-photo/modern-office-with-industrial-touches-city-view-exposed-pipes-textured-wall-spacious-workspace-v_896558-77615.jpg',
        space: true
    }, {
        title: "Seamless Integration",
        desc: "Easily integrate with your existing tools and CRM systems for seamless functionality.",
        img: 'https://www.shutterstock.com/image-photo/successful-team-coworking-space-vertical-600nw-2029586405.jpg',
        space: true
    },
    {
        title: "User-Friendly Interface",
        desc: "Manage complaints with an intuitive, easy-to-navigate dashboard",
        img: 'https://img.freepik.com/premium-photo/vertical-image-empty-dark-it-office-with-computers_249974-16138.jpg',

    },
    ]


    return (
        <div>
            <section class="py-12 relative  bg-[#F2F2F2] ">
                <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                    <div class="w-full flex-col justify-start items-center lg:gap-12 gap-10 inline-flex">
                        <div class="w-full flex-col justify-start items-center gap-3 flex">
                            <p class="max-w-2xl text-center text-[#308BC8] text-[16px] font-light font-lmk leading-[21px]">Key Features and Benefits</p>

                            <h2 class="w-full text-center text-black text-[48px] font-bold font-serif mt-4 leading-[56px] tracking-wider">Why Choose MIPORIS?</h2>
                        </div>
                        <div class="w-full justify-center items-start gap-3 md:gap-0 flex flex-wrap px-2">
                            {whyData.map((item, index) => (
                                <div className="w-full  relative pb-[350px] rounded-lg overflow-hidden mx-auto max-w-[200px]  border-t-2 pt-8">
                                    <img src={item.img} alt={item.title} className="absolute inset-0 w-full  h-[400px] object-cover rounded-lg" />
                                    <div className="absolute inset-0 bg-black opacity-60 rounded-lg"></div>
                                    <div className="absolute inset-0 flex flex-col justify-start items-start pl-4 py-4">
                                        <div className="w-full flex justify-between relative mt-4">
                                            <h4 className="text-white text-[24px] text-xl font-serif leading-8 pr-2">
                                                {item.title}
                                            </h4>
                                        </div>
                                        {item.space && <br />}
                                        <p className="text-white text-[15px] font-normal  uppercase mt-4 pr-12">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='py-16 flex justify-center'>
                    <div className='font-lmk font-light text-[16px] rounded-xl flex items-center border-2 border-[#0071BC] px-6 py-2.5 gap-2 text-[#0071BC] cursor-pointer'>
                        Explore Our Features
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Why