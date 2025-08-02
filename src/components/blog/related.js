import React from 'react';
import rl1 from '../../assets/blog/rl1.png';
import rl2 from '../../assets/blog/rl2.png';
import rl3 from '../../assets/blog/rl3.png';

import user from '../../assets/team/t1.png';

const articles = [
    {
        title: "Streamlining Operations with AI",
        description: "In the quest for operational excellence, businesses are increasingly turning to artificial intelligence to streamline their processes.",
        author: "Alec Whitten",
        date: "17 Oct 2024",
        imgSrc: rl1
    },
    {
        title: "Enhanced Customer Insights",
        description: "AI analytics provide valuable insights, driving informed decision-making and strategic growth.",
        author: "Jane Doe",
        date: "21 Sep 2024",
        imgSrc: rl2
    },
    {
        title: "AI and Data Security",
        description: "As businesses become more reliant on AI and automation, data security has never been more critical.",
        author: "Alec Whitten",
        date: "17 Oct 2024",
        imgSrc: rl3
    },
    {
        title: "Customer Experience Transformation",
        description: "Leveraging AI for better customer experience drives loyalty and satisfaction.",
        author: "John Smith",
        date: "12 Aug 2024",
        imgSrc: rl1
    },
    {
        title: "AI in Decision Support",
        description: "AI-powered tools enhance decision-making efficiency across industries.",
        author: "Anna Taylor",
        date: "05 Oct 2024",
        imgSrc: rl2
    },
    {
        title: "Innovations in Automation",
        description: "Automation through AI helps in reducing operational delays and improving productivity.",
        author: "Chris White",
        date: "11 Jul 2024",
        imgSrc: rl3
    },
    {
        title: "Data Security Challenges",
        description: "Maintaining robust security measures is essential in AI-powered operations.",
        author: "Emma Brown",
        date: "01 Oct 2024",
        imgSrc: rl1
    },
    {
        title: "Automating Workflows",
        description: "AI-driven automation optimizes repetitive tasks, freeing up valuable resources.",
        author: "Jane Doe",
        date: "17 Sep 2024",
        imgSrc: rl2
    },
    {
        title: "Risk Assessment with AI",
        description: "Identifying and mitigating risks through AI analytics.",
        author: "Liam Cooper",
        date: "08 Oct 2024",
        imgSrc: rl3
    },
    {
        title: "AI in control Monitoring",
        description: "Ensure adherence to industry standards through AI-powered control checks.",
        author: "Alec Whitten",
        date: "17 Oct 2024",
        imgSrc: rl1
    },
    {
        title: "Operational Efficiency Gains",
        description: "Boosting efficiency by integrating AI into day-to-day operations.",
        author: "Emily Clark",
        date: "22 Sep 2024",
        imgSrc: rl2
    },
    {
        title: "AI in Market Analysis",
        description: "Using AI to forecast market trends and adapt strategies accordingly.",
        author: "Olivia Brown",
        date: "29 Sep 2024",
        imgSrc: rl3
    }
];


function Related() {
    return (
        <div>
            <section className="py-12">
                <div className=" h-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h2 className="h-full font-serif text-[27px] font-bold text-gray-900 text-center mb-16">Related Articles</h2>
                    <div className="h-full flex justify-center gap-y-8 gap-x-2 flex-wrap md:flex-wrap  ">
                        {articles.map((article, index) => (
                            <div key={index} className="group w-[350px] rounded-xl shadow-lg m-1">
                                <div className="flex items-center p-4">
                                    <img src={article.imgSrc} alt="blogs tailwind section" className="w-full object-cover" />
                                </div>
                                <div className="h-auto p-4 lg:p-6 transition-all duration-300 group-hover:bg-gray-50 flex flex-col justify-between">
                                    <span className="flex justify-between">
                                        <h4 className="text-[20px] text-gray-900 font-medium leading-8 mb-5 font-serif h-16">{article.title}</h4>
                                        <svg width="40" height="40" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7 17.9775L17 7.97754M17 7.97754H7M17 7.97754V17.9775" stroke="#101828" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                    <p className="text-gray-500 leading-6 mb-10">
                                        {article.description.length > 12
                                            ? article.description.slice(0, 40) + '...'
                                            : article.description}
                                    </p>
                                    <div className="flex items-center space-x-4">
                                        <div>
                                            <img src={user} alt="blog author" className="h-12 w-12 rounded-full object-cover" />
                                        </div>
                                        <div>
                                            <h2 className="text-lg font-semibold">{article.author}</h2>
                                            <p className="text-sm text-gray-500">{article.date}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <div className='flex justify-center'>
                <button
                    type="button"
                    className="text-white bg-[#0070BC] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-4"
                >
                    Load more
                </button>

            </div>
        </div>
    );
}

export default Related;
