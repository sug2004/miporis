import React from 'react'

function StayContact() {
    return (
        <div>
            <section class="py-16 bg-[#F2F2F2]">
                <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div class=''>
                        <h1 className="  mb-4 font-serif font-medium tracking-tight leading-none text-[39px] leading-[35px] uppercase text-center">
                            Ready to Improve Your Operations?
                        </h1>

                        <p className=" mb-6 mt-4 font-normal font-lmk leading-[24px] text-gray-600 lg:mb-8 text-[16px] text-center">
                            Start your free trial now and experience the power of AI-driven complaint resolution
                        </p>
                    </div>
                    <div class="flex items-center justify-center flex-col ">
                        <div class='bg-[#D9D9D9] flex flex-row rounded-xl mt-4'>
                            <input type="text" name="email" class="py-3 px-6 h-12 w-full rounded-xl md:max-w-md border border-gray-300 bg-[#D9D9D9] shadow-sm  text-black font-light focus:outline-none placeholder:text-black placeholder:font-lmk font-lmk text-[14px]" placeholder="What’s your email" />
                            <button class="h-12 py-3 min-w-36 px-6 bg-[#0071BC] shadow-sm rounded-xl text-white font-sans font-normal">Sign Up Free</button>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default StayContact