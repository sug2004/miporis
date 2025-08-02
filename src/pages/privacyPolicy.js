import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8 mx-6  pt-28">
            <div className="border px-6 py-12 md:px-20" >

                <h1 className="text-3xl font-bold mt-8 mb-6 text-center font-serif font-medium">Privacy Policy</h1>

                <h2 className="text-2xl xcxc mt-4 mb-2 font-lmk">1. Introduction</h2>
                <p className="mb-4 font-light leading-[24px] text-gray-600 mb-8 text-[20px]">
                    MIPORIS is committed to protecting your privacy. This Privacy Policy
                    outlines the types of information we collect, how we use it, and how we
                    safeguard it.
                </p>

                <h2 className="text-2xl xcxc mt-4 mb-2 font-lmk">2. Information We Collect</h2>
                <p className="mb-4 font-light leading-[24px] text-gray-600 mb-8 text-[20px]">
                    <ul className="list-disc list-inside ">
                        <div className='flex'>
                            <li>
                                <strong className='text-black'> Personal Information:</strong>When you visit our website, we may collect
                                personally identifiable information such as your name, email address,
                                and contact details, if voluntarily provided.
                            </li>
                        </div>
                        <li>
                            <strong className='text-black'>Usage Data:</strong> We may collect information on how you access and use
                            our website, including your IP address, browser type, and browsing
                            behaviour.
                        </li>
                    </ul>
                </p>

                <h2 className="text-2xl xcxc mt-4 mb-2 font-lmk">3. Use of Information</h2>
                <p className="mb-4 font-light leading-[24px] text-gray-600 mb-8 text-[20px]">
                    We use the information collected to:
                    <ul className="list-disc list-inside">
                        <li>Improve our website and services.</li>
                        <li>Respond to inquiries and provide customer support.</li>
                        <li>Send updates or marketing materials, only with your consent.</li>
                    </ul>
                </p>

                <h2 className="text-2xl xcxc mt-4 mb-2 font-lmk">4. Cookies</h2>
                <p className="mb-4 font-light leading-[24px] text-gray-600 mb-8 text-[20px]">
                    We use cookies to enhance your browsing experience, analyze site
                    traffic, and understand user behavior. You may refuse cookies by
                    adjusting your browser settings, but this may impact your ability to use
                    certain features of our website.
                </p>

                <h2 className="text-2xl xcxc mt-4 mb-2 font-lmk">5. Information Sharing and Disclosure</h2>
                <p className="mb-4 font-light leading-[24px] text-gray-600 mb-8 text-[20px]">
                    MIPORIS does not sell, rent, or lease your personal information to third
                    parties. However, we may share information:
                    <ul className="list-disc list-inside">
                        <li>With trusted partners to help us perform statistical analysis or provide
                            customer support.</li>
                        <li>When required by law or in response to valid requests by public
                            authorities.</li>
                    </ul>
                </p>

                <h2 className="text-2xl xcxc mt-4 mb-2 font-lmk">6. Security of Your Information</h2>
                <p className="mb-4 font-light leading-[24px] text-gray-600 mb-8 text-[20px]">
                    We take reasonable precautions to protect your personal information
                    from unauthorized access, disclosure, alteration, or destruction.
                    However, no method of transmission over the internet is entirely secure,
                    and we cannot guarantee absolute security.
                </p>

                <h2 className="text-2xl xcxc mt-4 mb-2 font-lmk">7. Your Rights</h2>
                <p className="mb-4 font-light leading-[24px] text-gray-600 mb-8 text-[20px]">
                    You have the right to:
                    <ul className="list-disc list-inside">
                        <li>Access and update your personal information.</li>
                        <li>Request the deletion of your personal data, where applicable.</li>
                        <li>Opt out of receiving marketing communications from us.</li>
                    </ul>
                </p>

                <h2 className="text-2xl xcxc mt-4 mb-2 font-lmk">8. Changes to This Privacy Policy</h2>
                <p className="mb-4 font-light leading-[24px] text-gray-600 mb-8 text-[20px]">
                    We may update our Privacy Policy from time to time. Any changes will
                    be posted on this page, and we encourage you to review this policy
                    periodically.
                </p>

                <h2 className="text-2xl xcxc mt-4 mb-2 font-lmk">9. Contact Us</h2>
                <p className="mb-4 font-light leading-[24px] text-gray-600 mb-8 text-[20px]">
                    If you have any questions about our Terms and Conditions or Privacy
                    Policy, please contact us at <a href="mailto:contact@miporis.com" className="text-blue-500 hover:underline">contact@miporis.com</a>.
                </p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
