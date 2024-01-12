"use client"
// components/TestimonialSection.js
import React from 'react';
import TestimonyInside from './TestimonyInside';

const TestimonialSection = () => {
    return (
        <section className="testimonialSection lg:py-16 relative lg:py-[150px] lg:pb-0 mt-[220px]" >
                
            {/* <div className="overlay absolute inset-0 bg-[#4D0374]" style={{opacity: .92}}></div> */}
            <div className="container mx-auto text-center relative z-10">
                <h2 className="text-3xl font-semibold mb-8 lg:text-[50px] lg:leading-[50px]">What other Savewyzers<br/> are saying about us!</h2>

                <div>
                    <TestimonyInside/>
                </div>
                
            
                <div className="container mx-auto text-center relative z-10 lg:w-[80%] lg:mx-auto lg:py-10">    
                    
                    <div className="our-mentions relative w-full h-auto md:h-[600px] lg:h-[267px] mt-[58px]">
                        {/* Bottom Layer */}
                        <div className="md:absolute inset-0 flex items-center justify-center bg-[#E3E3E3] rounded-[54px] h-full mt-[37px] mx-auto w-[96%]"></div>
    
                        {/* Middle Layer */}
                        <div className="md:absolute inset-0 flex items-center justify-center bg-[#F4F4F4] rounded-[54px] h-full mt-[18px] mx-auto w-[98%]"></div>
    
                        {/* Top Layer */}
                        <div className="md:absolute flex items-center justify-center flex-col space-y-[26px] inset-0 bg-[#FFF] rounded-[54px] p-10 md:p-0">
                            <div className="text-[#8005C2] text-4xl">
                              <h4>As Mentioned On</h4>
                            </div>
                            <div className="flex items-center justify-center">
                                {/* Logos go here */}
                                <img src="/image/press-mentions/techpoint.png" alt="Tech Point" className="w-1/4 md:w-1/5 lg:w-1/6 mx-2 md:mx-4" />
                                <img src="/image/press-mentions/the-guardian.png" alt="The Guardian" className="w-1/4 md:w-1/5 lg:w-1/6 mx-2 md:mx-4" />
                                <img src="/image/press-mentions/techcrunch.png" alt="Tech Crunch" className="w-1/4 md:w-1/5 lg:w-1/6 mx-2 md:mx-4" />
                                <img src="/image/press-mentions/slack.png" alt="Slack" className="w-1/4 md:w-1/5 lg:w-1/6 mx-2 md:mx-4" />

                            </div>
                        </div>
                    </div>
    
                    {/* Testimonial Row Goes Here */}
                </div>
                {/* Testimonial Row Goes Here */}
            </div>
            <div className="py-0 w-11/12 md:w-4/5 lg:w-3/5 mx-auto mt-16 absolute top-[-20%] left-[15%] -z-1">
                <div>
                    <img src="/image/savewyze-word.svg" alt="Savewyze Word" />
                </div>
            </div>
         </section>
    
    );
}

export default TestimonialSection;
