import React from 'react';
import img1 from '../assets/clntCmp/vminds-black.png';
import img2 from '../assets/clntCmp/cgc-black.png';

import cl1 from '../assets/carousal/cl1.png';
import cl2 from '../assets/carousal/cl2.png';
import cl3 from '../assets/carousal/cl3.png';
import cl4 from '../assets/carousal/cl4.png';
import cl5 from '../assets/carousal/cl5.png';
import cl6 from '../assets/carousal/cl6.png';

const LOGOS = [
    <img className='w-[150px] h-auto object-contain' src={cl1} alt='logo' />,
    <img className='w-[150px] h-auto object-contain' src={cl2} alt='logo' />,
    <img className='w-[150px] h-auto object-contain' src={cl3} alt='logo' />,
    <img className='w-[100px] h-auto object-contain' src={cl4} alt='logo' />,
    <img className='w-[150px] h-auto object-contain' src={cl5} alt='logo' />,
    <img className='w-[150px] h-auto object-contain' src={cl6} alt='logo' />,
    <img className='w-[150px] h-auto object-contain' src={cl3} alt='logo' />,
];
function ClientSlider() {
    const repeatedLogos = [...LOGOS, ...LOGOS];

    return (
        <div className="relative m-auto py-2 max-w-7xl overflow-hidden bg-[#F2F2F2] before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']">
            <div className="animate-infinite-slider flex w-[calc(250px*10)] py-4">
                {repeatedLogos.map((logo, index) => (
                    <div
                        className="slide flex items-center justify-center mx-6"
                        key={index}
                    >
                        {logo}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ClientSlider;
