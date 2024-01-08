import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TestimonyInside = () => {
    const testimonies = [
        {
            id: 1,
            name: 'John Doe',
            delegation: 'Delegation 1',
            testimony: 'Testimony content for John Doe...'
        },
        {
            id: 2,
            name: 'Jane Doe',
            delegation: 'Delegation 2',
            testimony: 'Testimony content for Jane Doe...'
        }
        // Add more testimonies as needed
    ];

    const [selectedTestimony, setSelectedTestimony] = useState(testimonies[0]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: (index) => setSelectedTestimony(testimonies[index])
    };

    return (
        <section className="testimonialSection py-16 bg-[#3A0257] text-white rounded-[54px]">

<div className="container mx-auto flex flex-col md:flex-row px-[48px] spaxe-y-[48px]">
        
        {/* Testifier Cards Column */}
        <div className="w-full md:w-1/3 flex flex-col items-center space-y-4 md:space-y-8 py-8 md:py-16">
            {/* Testifier Card (Active State) */}
            <div className="testifier-card active bg-white border-left border-left-[#D8B2EC] rounded-[18px] py-[18px] px-[27px] flex items-center space-x-[36px] border-l-[4px] border-l-[#D8B2EC] w-full">
                <img src="/image/mosunmola.png" alt="Testifier Avatar" className="w-16 h-16 rounded-full" />
                <div className="text-left">
                    <h4 className="text-black text-lg font-semibold">Mosunmola Elegbede</h4>
                    <p className="text-black text-sm">Delegation XYZ</p>
                </div>
            </div>

            <div className="testifier-card active bg-[#600492] border-left border-left-[#D8B2EC] rounded-[18px] py-[18px] px-[27px] flex items-center space-x-[36px] w-full">
                <img src="/image/haolat.png" alt="Testifier Avatar" className="w-16 h-16 rounded-full" />
                <div className="text-left">
                    <h4 className="text-white text-lg font-semibold">Haolat Ogbomo</h4>
                    <p className="text-white text-sm">HR, All Talentz LLC</p>
                </div>
            </div>


            <div className="testifier-card active bg-[#600492] border-left border-left-[#D8B2EC] rounded-[18px] py-[18px] px-[27px] flex items-center space-x-[36px] w-full ">
                <img src="/image/shina.png" alt="Testifier Avatar" className="w-16 h-16 rounded-full" />
                <div className="text-left">
                    <h4 className="text-white text-lg font-semibold">Shina Peters</h4>
                    <p className="text-white text-sm">HR, All Talentz LLC</p>
                </div>
            </div>


            
        
            
            {/* ... Add more testifier cards as needed */}
        </div>
        
        {/* Testimony Display Column */}
        <div className="w-full md:w-2/3 px-4 md:px-8 py-8 md:py-16 text-white bg-[#600492] rounded-[24px] text-left flex flex-col space-y-[30px] ml-[24px]" id="testimony-">
            <h2 className="text-3xl font-semibold mb-8">Testimonial Title Here</h2>
            <div>
                <svg width="115" height="18" viewBox="0 0 115 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.34729 0.923828L12.4066 6.13975L18.3473 7.41725L14.2973 11.9184L14.9096 17.9238L9.34729 15.4898L3.78498 17.9238L4.39729 11.9184L0.34729 7.41725L6.28802 6.13975L9.34729 0.923828Z" fill="#F99621"/>
                    <path d="M33.3473 0.923828L36.4066 6.13975L42.3473 7.41725L38.2973 11.9184L38.9096 17.9238L33.3473 15.4898L27.785 17.9238L28.3973 11.9184L24.3473 7.41725L30.288 6.13975L33.3473 0.923828Z" fill="#F99621"/>
                    <path d="M57.3473 0.923828L60.4066 6.13975L66.3473 7.41725L62.2973 11.9184L62.9096 17.9238L57.3473 15.4898L51.785 17.9238L52.3973 11.9184L48.3473 7.41725L54.288 6.13975L57.3473 0.923828Z" fill="#F99621"/>
                    <path d="M81.3473 0.923828L84.4066 6.13975L90.3473 7.41725L86.2973 11.9184L86.9096 17.9238L81.3473 15.4898L75.785 17.9238L76.3973 11.9184L72.3473 7.41725L78.288 6.13975L81.3473 0.923828Z" fill="white"/>
                    <path d="M75.785 17.9238L81.3473 15.4897V0.923828L78.288 6.13975L72.3473 7.41725L76.3973 11.9184L75.785 17.9238Z" fill="#F99621"/>
                    <path d="M105.347 0.923828L108.407 6.13975L114.347 7.41725L110.297 11.9184L110.91 17.9238L105.347 15.4897L99.785 17.9238L100.397 11.9184L96.3473 7.41725L102.288 6.13975L105.347 0.923828Z" fill="white"/>
                </svg>
            </div>
            <p className="text-lg mb-4">Testimonial description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            
            {/* Additional testimonies can be added as needed */}
        </div>
        
    </div>

        </section>
    );
}

export default TestimonyInside;
