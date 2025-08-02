import React from 'react';
import Blg from '../../assets/blog.png';

function BlogCpm() {
    return (
        <div className='px-4 pt-28 max-w-7xl mx-auto'>
            <div className="  flex flex-col mb-20">
                <h1 className="mb-4 font-serif font-medium tracking-wide  text-[30px] md:text-[40px] leading-[45px] uppercase text-center mt-12">
                    The Future of Work: How AI is Automating Labor-Intensive Tasks
                </h1>
                <p className="text-[20px] font-normal text-[#9CA3AF] max-w-3xl text-start mt-8">
                    By Olivia Rhyeon 20 Oct 2024 - 5 min read
                </p>
            </div>

            <div className='w-full'>
                <img className='mx-auto w-full' src={Blg} alt='miporis blog' />
            </div>

            <div className='py-24 px-2 md:pr-10'>
                <p className="text-[25px] font-light text-black mb-12">
                    As industries evolve, the integration of artificial intelligence (AI) is becoming increasingly prominent in automating labor-intensive tasks. From manufacturing to logistics, AI technologies are not just enhancing productivity; they are redefining how work is performed. In this blog, we explore how AI is automating labor-intensive tasks and what this means for the future of work.
                </p>

                <h2 className="text-[24px] font-semibold text-black mb-10">Key Topics</h2>

                <ul className="list-disc list-inside text-[25px] font-light text-black mb-6">
                    <div className='flex'><li></li>AI in Manufacturing: Automated machinery and robots can perform tasks like assembly, quality control, and packaging, allowing human workers to focus on more complex roles.</div>
                    <div className='flex'><li></li>Logistics and Supply Chain: AI algorithms optimize delivery routes and inventory management, reducing human error and operational delays.</div>
                    <div className='flex'><li></li>Healthcare Innovations: AI systems automate administrative tasks such as scheduling and patient data management, enabling healthcare professionals to concentrate on patient care.</div>
                    <div className='flex'><li></li>Enhanced Productivity: With repetitive tasks automated, employees can dedicate their time to strategic initiatives, leading to overall business growth.</div>
                </ul>

                <h2 className="text-[24px] font-semibold text-black mb-10">Conclusion</h2>

                <p className="text-[25px] font-light text-black">
                    AI is not just a trend; it is shaping the future of work. By automating labor-intensive tasks, companies can increase efficiency and create a more engaged workforce. Embracing AI technologies will be crucial for businesses aiming to thrive in a competitive landscape.
                </p>
            </div>


        </div>
    )
}

export default BlogCpm;