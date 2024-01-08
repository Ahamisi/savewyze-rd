
"use client"
import React, { useRef, useState } from 'react';

const SavingPlans = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const sliderRef = useRef(null);

    const handleNextSlide = () => {
        if (slideIndex < 2) {
            setSlideIndex(slideIndex + 1);
            sliderRef.current.scrollLeft += 420; // Adjust based on your slide width + margin
        }
    };

    const handlePrevSlide = () => {
        if (slideIndex > 0) {
            setSlideIndex(slideIndex - 1);
            sliderRef.current.scrollLeft -= 420; // Adjust based on your slide width + margin
        }
    };

    return (
        <>
            <section className="savingPlans py-12 w-full md:ml-[19%]">
                <div className="text-left mb-8">
                    <h2 className="text-2xl font-semibold text-[#555] text-[50px] leading-[50px]">
                        Enjoy different savings <br/>plans that suit your goal.
                    </h2>
                </div>
            </section>
            
            

            {/* Slider Row */}
        <div className="w-auto md:ml-[19%]">

                {/* Arrow Buttons */}
                <div className="flex justify-between items-center mb-4">
                        <button 
                            className={`text-2xl h-[60px] w-[60px] rounded-full bg-[#D8B2EC] text-purple-600 ${slideIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`} 
                            onClick={handlePrevSlide}
                            disabled={slideIndex === 0}
                        >
                            &#8592;
                        </button>
                        <button 
                            className={`text-2xl h-[60px] w-[60px] rounded-full bg-[#D8B2EC] text-purple-600 ${slideIndex === 2 ? 'opacity-50 cursor-not-allowed ' : 'cursor-pointer'}`} 
                            onClick={handleNextSlide}
                            disabled={slideIndex === 2}
                        >
                            &#8594;
                        </button>
                </div>








                <div className="overflow-hidden">
                    <div ref={sliderRef} className="flex space-x-4 overflow-x-auto scrollbar-hide">
                        {/* Slider Item 1 */}
                        <div className="flex w-full rounded-lg shadow-md ">
                            <div className="w-[320px]">
                                <img src="/image/wyze-vault.png" alt="Plan 1" className="w-[380px] h-[400px] object-cover rounded-[16px]" />
                            </div>
                            <div className="p-4 bg-[#DD962B] w-[400px] rounded-[16px] flex flex-col justify-center text-left px-[40px]">
                                <h3 className="text-lg font-semibold mb-2">Wyze Vault</h3>
                                <p className="text-sm text-white mb-4">Create a specialized savings plan on your terms, in which funds will be added either automatically or manually.</p>
                                <div>
                                    <button className="text-white border-[1px] py-[20px] px-[40px] border-white hover:bg-white hover:text-[#DD962B] rounded-[36px] transition">Get Started</button>
                                </div>
                            </div>
                        </div>




                    {/* Slider Item 2 */}
                     <div className="flex w-full rounded-lg shadow-md ">
                         <div className="w-[320px]">
                            <img src="/image/wyze-target.png" alt="Plan 1" className="w-[380px] h-[400px] object-cover rounded-[16px]" />
                        </div>
                        <div className="p-4 bg-[#7626D5] w-[400px] rounded-[16px] flex flex-col justify-center text-left px-[40px]">
                            <h3 className="text-lg font-semibold mb-2">Wyze Target</h3>
                            <p className="text-sm text-white mb-4">Meet all of your financial targets sooner. You can save for multiple goals at a time or just one goal.</p>
                            <div>
                                <button className="text-white border-[1px] py-[20px] px-[40px] border-white hover:bg-white hover:text-[#7626D5] rounded-[36px] transition">Get Started</button>
                            </div>
                        </div>
                    </div>
                    





                     {/* Slider Item 3 */}
                     <div className="flex w-full rounded-lg shadow-md ">
                        <div className="w-[320px]">
                            <img src="/image/wyze-lock.png" alt="Plan 1" className="w-[380px] h-[400px] object-cover rounded-[16px]" />
                        </div>
                        <div className="p-4 bg-[#E34A3C] w-[400px] rounded-[16px] flex flex-col justify-center text-left px-[40px]">
                            <h3 className="text-lg font-semibold mb-2">Wyze Lock</h3>
                            <p className="text-sm text-white mb-4">Meet all of your financial targets sooner. You can save for multiple goals at a time or just one goal.</p>
                            <div>
                                <button className="text-white border-[1px] py-[20px] px-[40px] border-white hover:bg-white hover:text-[#E34A3C] rounded-[36px] transition">Get Started</button>
                            </div>
                        </div>
                    </div>
                    

                    

        
                    </div>
                </div>
            </div>

            <div className="py-0 w-11/12 md:w-4/5 lg:w-3/5 mx-auto mt-16">
                <div>
                    <img src="/image/savewyze-word.svg" alt="Savewyze Word" />
                </div>
            </div>
        </>
    );
}

export default SavingPlans;
