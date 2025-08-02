import React from 'react'

function StayContact() {
    return (
        <div>
            <section class="py-24">
                <div class="flex flex-col md:flex-row items-center justify-around mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div class=''>
                        <h1 className="  mb-4 font-serif font-medium tracking-tight leading-none text-[28px] md:text-[38px] lg:text-[48px] leading-[35px] uppercase text-center md:text-start">
                            Subscribe to my <br /><span className='text-[#005ABC]'>Newsletters</span>
                        </h1>
                    </div>
                    <div class="flex items-center justify-center flex-col ">
                        <div class='bg-white flex flex-row rounded-full mt-4 border-2 border-gray-300 px-2'>
                            <input type="text" name="email" class="py-3 px-6 h-12 my-2 w-[180px] md:w-[220px]  rounded-xl md:max-w-md  bg-white shadow-sm  text-black font-light focus:outline-none placeholder:text-grey-400 text-[14px]" placeholder="Enter your Email" />
                            <button class="h-12 py-3 my-2 min-w-36 px-6 bg-[#0071BC] shadow-sm rounded-full text-white text-lg font-sans font-medium">Subscribe</button>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default StayContact