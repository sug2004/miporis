import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
const plansData = [
    {
        name: "Basic",
        price: { monthly: 29, annually: 199 },
        planName: { monthly: "Basic-monthly", annually: "Basic-Yearly" },
        planId: { monthly: "prod_R5yiSXxG5Fii24", annually: "Basic-Yearly" },
        discretion: "For Startups and Small Business",
        features: ["AI corporate governance Detection (Up to 500 corporate governance/month)",
            "Basic Analytics Dashboard",
            "Automated corporate governance Categorization",
            "Email Support",
            "Integration with 3rd Party CRM"],
        offer: '(Option for yearly pricing: $xxx/year – Save 2 months!)'
    },
    {
        name: "Pro",
        price: { monthly: 79, annually: 499 },
        planName: { monthly: "Pro-monthly", annually: "Pro-Yearly" },
        discretion: "For Growing business",
        features: ["AI corporate governance Detection (Up to 2000 corporate governance/month)",
            "Advanced Analytics & Insights",
            "Automated Workflows & Notifications",
            "Priority Email Support",
            "Integrations with CRM & Helpdesk Tools"],
        offer: '(Option for yearly pricing: $xxx/year – Save 2 months!)'
    },
    {
        name: "Enterprise",
        price: { monthly: 199, annually: 999 },
        planName: { monthly: "Enterprise-monthly", annually: "Enterprise-Yearly" },
        discretion: "For large Enterprises",
        features: ["AI corporate governance Detection (Unlimited corporate governance)",
            "Customizable Dashboards & Reports",
            "Dedicated Account Manager",
            "SLA-based Support & 24/7 Priority Support",
            "Full Integrations with CRM, Helpdesk, and ERP Tools",
            "Onboarding and Training"],
        offer: '(Option for yearly pricing: $xxx/year – Save 2 months!)'
    },
    {
        name: "Custom",
        price: "Custom Pricing",
        discretion: "Tailored to Your Business Needs",
        features: ["AI corporate governance Detection (Up to 2000 corporate governance/month)",
            "Advanced Analytics & Insights",
            "Automated Workflows & Notifications",
            "Priority Email Support",
            "Integrations with CRM & Helpdesk Tools"],
    },
];

const API_URL = process.env.REACT_APP_MIPORIS_SERVER;

const offerPercentage = 35;

const PricingPlans = ({ isAuthenticated, token }) => {
    const [billPlan, setBillPlan] = useState("monthly");

    const navigate = useNavigate();

    const handleCheckout = async (planId) => {
        if (!planId) {
            alert('Please Contact contact@miporis.com');
            return;
        }
        
        if (!isAuthenticated) {
            navigate("/signup");
            return;
        }
        
        try {
            const userId = jwtDecode(token).id;
            const email = jwtDecode(token).email;
            const response = await axios.post(`${API_URL}/payment`, { planId, userId, email }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
    
            const data = await response.data;
            if (data.url) {
                window.location.href = data.url;
            }
        } catch (error) {
            console.error('Error creating payment:', error);
        }
    };
    

    return (
        <main className="mx-4 pt-28 max-w-7xl mx-auto">
            {(isAuthenticated) ?
                <div className="text-center max-w-5xl mx-auto">
                    <h1 className=" font-serif font-medium tracking-wide  text-[30px] md:text-[40px] lg:text-[45px] leading-[45px] uppercase text-center ">
                        Choose a plan to continue
                    </h1>
                </div>
                :
                <div className="text-center max-w-5xl mx-auto">
                    <h1 className="mb-4 font-serif font-medium tracking-wide  text-[30px] md:text-[40px] lg:text-[45px] leading-[45px] uppercase text-center ">
                        Choose the Perfect <span className='text-[#005ABC]'>Plan</span> for Your Business
                    </h1>
                    <p className="text-[20px] font-normal text-black">
                        Flexible pricing to fit businesses of all sizes. Get started today and streamline your operations with AI-driven corporate governance management
                    </p>
                </div>
            }

            {/* Plan switch */}
            <div className="flex items-center justify-center mt-10 space-x-4">
                <span className="text-base font-medium">Monthly</span>
                <button
                    className="relative rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={() => setBillPlan(billPlan === "monthly" ? "annually" : "monthly")}
                >
                    <div className="w-16 h-8 transition bg-white border rounded-full outline-none"></div>
                    <div
                        className={`absolute inline-flex items-center justify-center w-6 h-6 transition-all duration-200 ease-in-out transform bg-[#0071BC] rounded-full shadow-sm top-1 left-1 ${billPlan === "monthly" ? "translate-x-0" : "translate-x-8"
                            }`}
                    ></div>
                </button>
                <span className="text-base font-medium">Yearly</span>
                <span className="text-[12px] text-[#0071BC] border border-[#0071BC] px-2  rounded-full">{offerPercentage}% off</span>
            </div>

            {/* Plans */}
            <div className="flex flex-col items-center mx-8 md:mx-0 justify-center mt-16 space-y-8 lg:flex-row lg:items-stretch lg:space-x-8 lg:space-y-0">
                {plansData.map((plan, i) => (
                    <section key={i} className="relative flex flex-col w-full max-w-sm py-8 space-y-6 bg-white rounded-lg shadow-md border ">
                        {/* Price */}
                        {plan.name === "Enterprise" ?
                            <div className="absolute -top-4 bg-[#0071BC] w-full text-white text-center py-1 rounded-t-lg">Popular Plan</div> :
                            <div className="absolute -top-4 bg-[] opacity-0 w-full h-4 text-white text-center py-1 rounded-t-lg">Popular Plan</div>
                        }

                        <div className="flex-shrink-0 text-center border-b pb-8 mx-12">
                            <h2 className="text-[18px] font-serif font-bold tracking-wider">{plan.name}</h2>
                            {plan.name !== "Custom" ? <>
                                <span
                                    className={`text-[23px] text-[#156CFE] font-bold tracking-tight `}
                                >
                                    {/* ${billPlan === "monthly" ? plan.price.monthly : plan.price.annually} */}
                                </span><br />
                                <span className="text-[#7C7C7C] text-[14px]">
                                    {billPlan === "monthly" ? "/month" : "/year"}
                                </span>
                            </> :
                                <>
                                    <span
                                        className={`text-[23px] text-[#156CFE] font-bold tracking-tight `}
                                    >
                                        {/* {plan.price} */}

                                    </span>
                                    <br />
                                    <br />
                                </>
                            }
                        </div>

                        {/* Plan Name and Description */}
                        <div className="flex-shrink-0 pb-6 space-y-2 border-b text-center mx-12">
                            <p className="text-[14px] text-black">{plan.discretion}</p>
                        </div>

                        {plan.name !== "Custom" ?
                            <div className="flex-shrink-0 mx-12">
                                <button
                                    onClick={() => (isAuthenticated) ? handleCheckout(billPlan === "monthly" ? plan.planName.monthly : plan.planName.annually) : navigate("/signup")}
                                    className={`inline-flex bg-[#0071BC] items-center justify-center w-full max-w-xs px-4 py-2 transition-colors border rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-white`}
                                >
                                    Start Free Trial
                                </button>
                            </div> :
                            <div className="flex-shrink-0 mx-12">
                                <button
                                    className={`inline-flex bg-[#0071BC] items-center justify-center w-full max-w-xs px-4 py-2 transition-colors border rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-white`}
                                >
                                    Contact Sales
                                </button>
                            </div>
                        }
                        {plan.name !== "Custom" ?
                            <div className="flex-shrink-0  space-y-2  text-center mx-12">
                                <p className="text-[14px] text-black">{plan.offer}</p>
                            </div> :
                            <><br /><br /><br /></>
                        }

                        <div className="bg-[#E8E8E8] w-full  text-center ">
                            <p className="text-[12px] text-black font-medium py-2">All features options</p>
                        </div>
                        {/* Features */}
                        <ul className="flex-1 space-y-4 pt-4 mx-6">
                            {plan.features.map((feature, index) => (
                                <li key={index} className="flex items-start">
                                    <svg
                                        className="min-w-6 min-h-6 max-w-6 max-h-6 text-[#4E00B2]"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="ml-3 text-base font-medium">{feature}</span>
                                </li>
                            ))}
                        </ul>

                    </section>
                ))}
            </div>
        </main>
    );
};

export default PricingPlans;
