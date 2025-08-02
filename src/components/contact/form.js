import React, { useState } from 'react';
import axios from 'axios';
import Contact from '../../assets/contactform.png';

function FormCtn() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const message = await axios.post(`${process.env.REACT_APP_MIPORIS_SERVER}/sendmail`, formData);
            alert('Message sent successfully', message);
            setFormData({
                name: '',
                email: '',
                service: '',
                message: ''
            })
        } catch (error) {
            alert('Failed to send message');
        }
    };

    return (
        <div className="pt-32 pb-20 max-w-7xl mx-auto">
            <div className="flex justify-center flex-col items-center px-6">
                <h1 className="mb-4 font-serif font-medium tracking-tight  text-[30px] md:text-[40px] lg:text-[50px] leading-[35px] uppercase text-center">
                    We're Here to <span className='text-[#005ABC]'>Help</span>
                </h1>
                <p className="mb-6 mt-4 max-w-3xl font-normal leading-[24px] text-gray-600 text-[20px] text-center">
                    Have questions, feedback, or need assistance? Get in touch with our team and we’ll respond promptly
                </p>
            </div>

            <div className=" py-8 px-16 mx-4 lg:px-24 md:border md:rounded-[100px]">
                <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-0 md:gap-0 mx-auto">


                    <div className="relative p-12 rounded-lg flex flex-col justify-between w-[320px] md:w-[400px]  ">
                        {/* Image tag */}
                        <img src={Contact} alt="Contact" className="absolute inset-0 w-full h-full lg:h-auto object-cover rounded-lg" />

                        {/* Overlay content */}
                        <div className="relative z-10">
                            <h1 className="text-white text-[24px] font-bold font-serif tracking-wider">Need immediate Help</h1>
                            <div className="mt-10">
                                <a href="#" className="flex items-center mb-6">
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="15" cy="15" r="15" fill="white" />
                                        <g clip-path="url(#clip0_551_3099)">
                                            <path d="M19 17.7425L17 19L15 19.5L13 19L11 17.7425C10.1609 16.9034 9.34675 15.8343 9.11527 14.6704C8.88378 13.5066 9.00262 12.3002 9.45676 11.2038C9.91089 10.1075 10.6799 9.17044 11.6666 8.51116C12.6533 7.85189 13.8133 7.5 15 7.5C16.1867 7.5 17.3467 7.85189 18.3334 8.51116C19.3201 9.17044 20.0891 10.1075 20.5433 11.2038C20.9974 12.3002 21.1162 13.5066 20.8847 14.6704C20.6533 15.8343 19.8391 16.9034 19 17.7425ZM9.75 22.4998L15 17.7425L20.25 22.4998V23.9998H9.75V22.4998Z" fill="#005ABC" />
                                            <circle cx="15" cy="14" r="2" fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_551_3099">
                                                <rect width="18" height="18" fill="white" transform="translate(6 6)" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                    <h5 className="text-white text-base font-normal ml-5">Start Live Chat</h5>
                                </a>
                                {/* <a href="#" className="flex items-center mb-6">
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="15" cy="15" r="15" fill="white" />
                                        <g clip-path="url(#clip0_551_3100)">
                                            <path d="M10.5 7.5H19.5C19.6989 7.5 19.8897 7.57902 20.0303 7.71967C20.171 7.86032 20.25 8.05109 20.25 8.25V21.75C20.25 21.9489 20.171 22.1397 20.0303 22.2803C19.8897 22.421 19.6989 22.5 19.5 22.5H10.5C10.3011 22.5 10.1103 22.421 9.96967 22.2803C9.82902 22.1397 9.75 21.9489 9.75 21.75V8.25C9.75 8.05109 9.82902 7.86032 9.96967 7.71967C10.1103 7.57902 10.3011 7.5 10.5 7.5ZM15 18.75C14.8011 18.75 14.6103 18.829 14.4697 18.9697C14.329 19.1103 14.25 19.3011 14.25 19.5C14.25 19.6989 14.329 19.8897 14.4697 20.0303C14.6103 20.171 14.8011 20.25 15 20.25C15.1989 20.25 15.3897 20.171 15.5303 20.0303C15.671 19.8897 15.75 19.6989 15.75 19.5C15.75 19.3011 15.671 19.1103 15.5303 18.9697C15.3897 18.829 15.1989 18.75 15 18.75Z" fill="#005ABC" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_551_3100">
                                                <rect width="18" height="18" fill="white" transform="translate(6 6)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <h5 className="text-white text-base font-normal ml-5">(123) 456-7890</h5>
                                </a> */}
                                <a href="#" className="flex items-center mb-6">
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="15" cy="15" r="15" fill="white" />
                                        <g clip-path="url(#clip0_551_3101)">
                                            <path d="M7.68225 11.1409L14.6175 6.98286C14.7341 6.91292 14.8674 6.87598 15.0034 6.87598C15.1393 6.87598 15.2727 6.91292 15.3892 6.98286L22.3177 11.1416C22.3733 11.1749 22.4194 11.2221 22.4513 11.2785C22.4832 11.3348 22.5 11.3986 22.5 11.4634V21.0004C22.5 21.1993 22.421 21.39 22.2803 21.5307C22.1397 21.6713 21.9489 21.7504 21.75 21.7504H8.25C8.05109 21.7504 7.86032 21.6713 7.71967 21.5307C7.57902 21.39 7.5 21.1993 7.5 21.0004V11.4626C7.49999 11.3978 7.51677 11.3341 7.54871 11.2777C7.58065 11.2213 7.62666 11.1742 7.68225 11.1409ZM19.7595 12.1834L15.0457 16.2626L10.2352 12.1789L9.26475 13.3219L15.0547 18.2381L20.7405 13.3181L19.7595 12.1834Z" fill="#005ABC" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_551_3101">
                                                <rect width="18" height="18" fill="white" transform="translate(6 6)" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                    <h5 className="text-white text-base font-normal ml-5">contact@miporis.com</h5>
                                </a>
                                <a href="#" className="flex items-center">
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="15" cy="15" r="15" fill="white" />
                                        <path d="M23.4329 18.1154C24.1896 16.1074 24.1896 13.8926 23.4329 11.8846C23.4221 11.8439 23.4075 11.8042 23.3893 11.7662C22.7356 10.0711 21.5846 8.6133 20.0874 7.58422C18.5902 6.55514 16.8167 6.00289 15 6H14.9958C13.1777 6.00385 11.4034 6.55776 9.90606 7.58891C8.4087 8.62005 7.25842 10.0802 6.60644 11.7773C6.59321 11.8065 6.5821 11.8365 6.57321 11.8673C5.80893 13.8858 5.80893 16.1141 6.57321 18.1327C6.5821 18.1634 6.59321 18.1935 6.60644 18.2227C7.25569 19.9214 8.40512 21.3831 9.90281 22.4147C11.4005 23.4463 13.176 23.9991 14.9945 24.0002C16.8131 24.0012 18.5892 23.4504 20.0881 22.4206C21.587 21.3908 22.7381 19.9303 23.3893 18.2324C23.4075 18.1948 23.4221 18.1556 23.4329 18.1154ZM12.6703 17.2292C12.3546 15.7598 12.3546 14.2401 12.6703 12.7708H17.3296C17.6453 14.2401 17.6453 15.7598 17.3296 17.2292H12.6703ZM16.9502 18.6138C16.5015 19.9205 15.8428 21.1454 15 22.2401C14.1583 21.145 13.5006 19.9202 13.0525 18.6138H16.9502ZM7.38459 15C7.38522 14.2442 7.49886 13.4929 7.72174 12.7708H11.2601C10.9823 14.2439 10.9823 15.756 11.2601 17.2292H7.72174C7.49886 16.5071 7.38522 15.7557 7.38459 15ZM13.0525 11.3861C13.5016 10.0795 14.1606 8.85468 15.0034 7.75984C15.845 8.85481 16.5026 10.0796 16.9502 11.3861H13.0525ZM18.7453 12.7708H22.2837C22.7305 14.2233 22.7305 15.7766 22.2837 17.2292H18.7419C19.0206 15.7561 19.0206 14.2438 18.7419 12.7708H18.7453ZM21.7042 11.3861H18.4158C18.003 10.0185 17.3791 8.72374 16.5666 7.54869C17.6493 7.77831 18.6691 8.24039 19.5556 8.90298C20.4421 9.56556 21.174 10.4128 21.7008 11.3861H21.7042ZM13.4333 7.54869C12.6206 8.72369 11.9964 10.0185 11.5834 11.3861H8.29843C8.82524 10.4127 9.55728 9.56538 10.4439 8.90279C11.3305 8.2402 12.3505 7.77817 13.4333 7.54869ZM8.29843 18.6138H11.5834C11.9964 19.9815 12.6206 21.2763 13.4333 22.4513C12.3505 22.2218 11.3305 21.7598 10.4439 21.0972C9.55728 20.4346 8.82524 19.5872 8.29843 18.6138ZM16.5666 22.4513C17.3791 21.2762 18.003 19.9814 18.4158 18.6138H21.7008C21.174 19.5871 20.4421 20.4344 19.5556 21.097C18.6691 21.7596 17.6493 22.2216 16.5666 22.4513Z" fill="#005ABC" />
                                    </svg>
                                    <h5 className="text-white text-base font-normal ml-5">Knowledge Base</h5>
                                </a>
                            </div>
                        </div>
                    </div>


                    {/* Right Section */}
                    <div className="bg-white max-w-[400px] md:max-w-[500px] lg:rounded-r-2xl rounded-2xl px-12">
                        <form onSubmit={handleSubmit}>
                            <div className="w-full max-w-[300px]">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="bg-white py-3 w-full border-b-2 border-gray-300 text-black outline-none "
                                    placeholder="Name"
                                />

                            </div>
                            <div className="w-full mt-5 max-w-[300px]">
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="bg-white py-3 w-full border-b-2 border-gray-300 text-gray-900 outline-none "
                                    placeholder="Mail"
                                />
                                <style jsx>{`
            .placeholder-bold::placeholder {
              font-weight: 600;
            }
          `}</style>
                            </div>
                            <div className="w-full mt-5">
                                <p className="text-gray-900 mb-3 font-medium">What service do you need?</p>
                                <div className="flex flex-row items-center space-x-3">
                                    <label className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            name="service"
                                            value="general-inquiry"
                                            onChange={handleChange}
                                            className="form-radio text-indigo-600"
                                        />
                                        <span className="ml-2">General Inquiry</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            name="service"
                                            value="support"
                                            onChange={handleChange}
                                            className="form-radio text-indigo-600"
                                        />
                                        <span className="ml-2">Support</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            name="service"
                                            value="sales"
                                            onChange={handleChange}
                                            className="form-radio text-indigo-600"
                                        />
                                        <span className="ml-2">Sales</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            name="service"
                                            value="other"
                                            onChange={handleChange}
                                            className="form-radio text-indigo-600"
                                        />
                                        <span className="ml-2">Other</span>
                                    </label>
                                </div>
                            </div>
                            <div className="w-full mt-8">
                                <label className="font-medium">Message</label>
                                <input
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="bg-white mt-2 py-3 w-full border-b-2 border-gray-300 text-gray-900 outline-none"
                                    placeholder="Write Your Message Here"
                                    style={{ color: 'rgba(0, 0, 0, 0.4)' }}
                                />
                            </div>
                            <p className="mt-8 text-center text-gray-600 text-[16px]">
                                We typically respond within 24 hours. For urgent inquiries, see our support options below.
                            </p>
                            <div className="mt-10 text-center lg:text-start">
                                <button
                                    type="submit"
                                    className="bg-[#005ABC] hover:bg-indigo-600 transition duration-200 text-white text-base py-3 px-6 rounded-full"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormCtn;
