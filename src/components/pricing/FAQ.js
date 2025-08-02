import React, { useState } from 'react';

const faqData = [
    {
        question: 'What happens after my free trial?',
        answer: 'To reset your password, click on the "Forgot Password?" link on the login page and follow the instructions to receive a password reset email.',
    },
    {
        question: 'How do I update my billing information?',
        answer: 'To update your billing information, go to your account settings, select "Billing", and update your payment details.',
    },
    {
        question: 'How can I contact customer support?',
        answer: 'You can contact customer support through the "Help" section in your account or by emailing support@example.com.',
    },
    {
        question: 'How do I delete my account?',
        answer: 'To delete your account, go to the account settings and select "Delete Account". Please note that this action is irreversible.',
    }, {
        question: 'Do you offer discounts for annual billing',
        answer: 'To delete your account, go to the account settings and select "Delete Account". Please note that this action is irreversible.',
    },
]

function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div>
            <section className="py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-16">
                        <h2 className="text-[40px] font-serif text-center font-bold text-gray-900 leading-[3.25rem]">
                            Frequently Asked Questions
                        </h2>
                    </div>
                    <div className="accordion-group" data-accordion="default-accordion">
                        {faqData.map((faq, index) => (
                            <div
                                key={index}
                                className={`accordion border bg-[#0071BC]/30 border-solid border-gray-300 p-4 rounded-xl mb-8 lg:p-5 ${activeIndex === index ? 'accordion-active:bg-indigo-50 accordion-active:border-indigo-600' : ''
                                    }`}
                            >
                                <button
                                    className="accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal leading-8 text-gray-900 w-full transition duration-500  accordion-active:font-medium "
                                    onClick={() => toggleAccordion(index)}
                                    aria-controls={`accordion-content-${index}`}
                                >
                                    <div className='text-[20px] font-bold'>{faq.question}</div>
                                    <svg
                                        className={`w-6 h-6 text-gray-900 transition duration-500 ${activeIndex === index ? 'hidden' : 'block'
                                            }`}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M6 12H18M12 18V6"
                                            stroke="currentColor"
                                            strokeWidth="1.6"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                    </svg>
                                    <svg
                                        className={`w-6 h-6 text-gray-900 transition duration-500 ${activeIndex === index ? 'block' : 'hidden'
                                            }`}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M6 12H18"
                                            stroke="currentColor"
                                            strokeWidth="1.6"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                    </svg>
                                </button>
                                <div
                                    id={`accordion-content-${index}`}
                                    className={`accordion-content w-full overflow-hidden pr-4 ${activeIndex === index ? 'max-h-[250px]' : 'max-h-0'
                                        } transition-max-height duration-500`}
                                    aria-labelledby={`accordion-heading-${index}`}
                                >
                                    <p className="text-base text-gray-900 font-normal leading-6">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default FAQ;
