"use client"
// components/TestimonialSection.js
import React from 'react';
import TestimonyInside from './TestimonyInside';

const TestimonialSection = () => {
    return (
        <section className="testimonialSection py-16 relative lg:py-[150px]" style={{ backgroundImage: "url('/image/testimonial-bg.svg')" }}>
                
            <div className="overlay absolute inset-0 bg-[#4D0374]" style={{opacity: .92}}></div>
            <div className="container mx-auto text-center relative z-10">
                <h2 className="text-3xl font-semibold mb-8 lg:text-[50px] lg:leading-[50px]">What other Savewyzers<br/> are saying about us!</h2>

                <div>
                    <TestimonyInside/>
                </div>
                
                <div className="our-mentions relative w-full h-auto md:h-[600px] lg:h-[267px] mt-[58px]">
                    {/* Bottom Layer */}
                    <div className="absolute inset-0 flex items-center justify-center bg-[#E3E3E3] rounded-[54px] h-full mt-[37px] mx-auto w-[96%]"></div>

                    {/* Middle Layer */}
                    <div className="absolute inset-0 flex items-center justify-center bg-[#F4F4F4] rounded-[54px] h-full mt-[18px] mx-auto w-[98%]"></div>

                    {/* Top Layer */}
                    <div className="absolute inset-0 flex items-center justify-center bg-[#FFF] rounded-[54px]">
                        {/* Logos go here */}
                        <img src="/image/press-mentions/techpoint.png" alt="Tech Point" className="w-1/4 md:w-1/5 lg:w-1/6 mx-2 md:mx-4" />
                        <img src="/image/press-mentions/the-guardian.png" alt="The Guardian" className="w-1/4 md:w-1/5 lg:w-1/6 mx-2 md:mx-4" />
                        <img src="/image/press-mentions/techcrunch.png" alt="Tech Crunch" className="w-1/4 md:w-1/5 lg:w-1/6 mx-2 md:mx-4" />
                        <img src="/image/press-mentions/slack.png" alt="Slack" className="w-1/4 md:w-1/5 lg:w-1/6 mx-2 md:mx-4" />
                    </div>
                </div>

                {/* Testimonial Row Goes Here */}
            </div>
         </section>
    
    );
}

export default TestimonialSection;
