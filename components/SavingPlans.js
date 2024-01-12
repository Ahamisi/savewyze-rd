"use client"
import React, { useRef, useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const SavingPlans = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const [slidePass, setSlidePass] = useState(0);

    const sliderRef = useRef(null);
    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    const handleNextSlide = () => {
        if (slideIndex < 2) {
            setSlideIndex(slideIndex + 1);
            smoothScroll(sliderRef.current, sliderRef.current.scrollLeft + 620, 1500); // Adjust duration as needed
            setSlidePass(prevSlidePass => Math.min(prevSlidePass + 1, 2));

        }
    };

    const handlePrevSlide = () => {
        if (slideIndex > 0) {
            setSlideIndex(slideIndex - 1);
            smoothScroll(sliderRef.current, sliderRef.current.scrollLeft - 620, 1500); // Adjust duration as needed
            setSlidePass(prevSlidePass => Math.max(prevSlidePass - 1, 0));

        }
    };

    const smoothScroll = (element, to, duration) => {
        const start = element.scrollLeft;
        const change = to - start;
        let currentTime = 0;
        const increment = 60; // Smaller increment for faster scrolling

        const animateScroll = () => {
            currentTime += increment;
            const val = Math.easeInOutQuad(currentTime, start, change, duration);
            element.scrollLeft = val;

            if (currentTime < duration) {
                requestAnimationFrame(animateScroll);
            }
        };

        animateScroll();
    };

    Math.easeInOutQuad = function (t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    // Automatically scroll when inView is true
    useEffect(() => {
        let interval;

        const startAutoScroll = () => {
            interval = setInterval(() => {
                handleNextSlide();

            }, 800); // Adjust the interval based on your preference
        };


        const startbackwardAutoScroll = () => {
            console.log('134')
            interval = setInterval(() => {
                handlePrevSlide();
            }, 800); // Adjust the interval based on your preference
        };

        const stopAutoScroll = () => {
            clearInterval(interval);
        };

        
        if (inView) {
            if(slidePass == 0){
                startAutoScroll();
            }else{
                startbackwardAutoScroll();
            }
            
        } else {
            console.log('in ciee',slidePass)
            stopAutoScroll();
        }

        return () => {
            stopAutoScroll();
            setSlideIndex(0); // Reset the slide index when leaving the view
        };
    }, [inView]);

    return (
        <>
            <div ref={ref} className="savingPlans py-12 w-full md:ml-[19%]">
                <div className="text-left mb-8">
                    <h2 className="text-2xl font-semibold text-[#555] text-[50px] leading-[50px]">
                        Enjoy different savings <br />plans that suit your goal.
                    </h2>
                </div>
            </div>

            {/* Slider Row */}
            <div className="w-auto md:ml-[19%]">
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

            
        </>
    );
};

export default SavingPlans;
