import React from 'react';

const plansData = [
    "Basic",
    "Professional",
    "Enterprise",
    "Custom"
];

const featuresData = [
    "AI corporate governance Detection",
    "Analytics Dashboard",
    "Workflow Automation",
    "Customer Support",
    "CRM/Helpdesk Integration",
    "Custom Solutions",
    ""
];

const dummyData = [
    ["correct", "correct", "wrong", "Basic Support", "wrong", "wrong", "/contact"], // Basic
    ["correct", "correct", "correct", "Priority Support", "correct", "wrong", "/contact"], // Professional
    ["correct", "correct", "correct", "24/7 Support", "correct", "Limited Customization", "/contact"], // Enterprise
    ["correct", "correct", "correct", "Customized Support Options", "correct", "Full Customization", "/contact"] // Custom
];

const correctIcon = (
    <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M26.2381 0.208984C25.5238 0.208984 24.6666 0.302008 23.5714 0.441543C22.4762 0.627589 21.7142 0.813636 21.2857 1.04619C20.8095 1.27875 20.1428 1.8834 19.1904 2.86015C18.2857 3.79038 17.0952 5.32526 15.6666 7.27875C14.2381 9.27875 13 11.1857 11.9523 13.0462C11 14.6741 10.0476 16.4881 9.0952 18.395C8.42854 17.5578 7.71425 16.9067 6.99996 16.395C6.0952 15.7904 5.19044 15.4648 4.38092 15.4648C3.57139 15.4648 2.61901 15.8369 1.66663 16.5346C0.666632 17.2788 0.142822 18.116 0.142822 18.9997C0.142822 19.6974 0.571394 20.4881 1.47616 21.4183C2.76187 22.8136 3.80949 24.116 4.57139 25.2788C5.14282 26.116 5.52377 26.6741 5.76187 26.9532C6.04758 27.2322 6.38092 27.4648 6.76187 27.6043C7.14282 27.7439 7.80949 27.7904 8.71425 27.7904C9.99996 27.7904 10.8571 27.6508 11.3809 27.3718C11.9047 27.0927 12.2857 26.7206 12.5714 26.209C12.8095 25.7439 13.2381 24.8601 13.8095 23.4648C15.2381 19.9764 17.1904 16.302 19.619 12.5811C22.0476 8.86015 24.3809 5.97643 26.619 3.92991C27.1904 3.4648 27.5238 3.09271 27.6666 2.86015C27.9523 2.6741 28.0476 2.34852 28.0476 1.97643C28.0476 1.51131 27.8571 1.09271 27.5238 0.767124C27.2381 0.395031 26.7619 0.208984 26.2381 0.208984Z" fill="#07C618" />
    </svg>
);

const wrongIcon = (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 10L19.1429 4.85714C20.2857 3.71429 20.2857 2 19.1429 0.857143C18 -0.285714 16.2857 -0.285714 15.1429 0.857143L10 6L4.85714 0.857143C3.71429 -0.285714 2 -0.285714 0.857143 0.857143C-0.285714 2 -0.285714 3.71429 0.857143 4.85714L6 10L0.857143 15.1429C-0.285714 16.2857 -0.285714 18 0.857143 19.1429C1.42857 19.7143 2.14286 20 2.85714 20C3.57143 20 4.28571 19.7143 4.85714 19.1429L10 14L15.1429 19.1429C15.7143 19.7143 16.4286 20 17.1429 20C17.8571 20 18.5714 19.7143 19.1429 19.1429C20.2857 18 20.2857 16.2857 19.1429 15.1429L14 10Z" fill="#D91818" />
    </svg>
);

const ComparisonTable = () => {
    return (
        <div className="">
            <div className="py-24 flex justify-center items-center mx-auto max-w-7xl">
                <div className="overflow-x-auto max-w-full mx-4">
                    <table className="min-w-full bg-white border border-gray-300">
                        <thead>
                            <tr>
                                <th className="px-4 py-8 text-left text-[23px] font-bold font-serif text-gray-800 border border-gray-300">
                                    Features
                                </th>
                                {plansData.map((plan, index) => (
                                    <th
                                        key={index}
                                        className="px-4 py-4 text-center text-[23px] font-medium font-serif text-gray-800 border border-gray-300"
                                    >
                                        {plan}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {featuresData.map((feature, i) => (
                                <tr
                                    key={i}
                                    className={`border-b border-gray-300 ${i % 2 === 1 ? 'bg-transparent' : 'bg-[#1f1f1f]/10'
                                        }`}
                                >
                                    <td className="px-4 py-2 text-left text-[15px] font-medium text-gray-600 border border-gray-300">
                                        {feature}
                                    </td>
                                    {dummyData.map((data, j) => (
                                        <td
                                            key={j}
                                            className="px-4 py-4 text-center text-[15px] font-medium border border-gray-300"
                                        >
                                            <div className="flex items-center justify-center">
                                                {feature !== ""
                                                    ? data[i] === "correct"
                                                        ? (
                                                            <>
                                                                {correctIcon}&nbsp;
                                                                {j === 3 && "(customizable)"}
                                                            </>
                                                        )
                                                        : data[i] === "wrong"
                                                            ? (
                                                                <>
                                                                    {wrongIcon}&nbsp;
                                                                    {j === 3 && "(customizable)"}
                                                                </>
                                                            )
                                                            : data[i]
                                                    : (
                                                        <a
                                                            href={data[i]}
                                                            className="bg-[#005ABC] text-[16px] text-center w-36 py-1 transition-colors border-2 border-blue-400 rounded-full text-white"
                                                        >
                                                            Request a Demo
                                                        </a>
                                                    )}
                                            </div>
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ComparisonTable;
