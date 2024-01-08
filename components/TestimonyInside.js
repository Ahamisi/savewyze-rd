import React, { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TestimonyInside = () => {
    const testimonies = [
        {
            id: 1,
            name: 'Mosunmola Elegbede',
            delegation: 'Founder, Moreen Accessories',
            testimony: 'Testimony content for John Doe...'
        },
        {
            id: 2,
            name: 'Haolat Ogbomo',
            delegation: 'HR, All Talentz LLC',
            testimony: 'Testimony content for Haolat...'
        },
        {
            id: 3,
            name: 'Shina Peters',
            delegation: 'CEO, Shizzypee Records',
            testimony: 'Testimony content for Shina...'
        },
        // Add more testimonies as needed
    ];

    const [selectedTestimony, setSelectedTestimony] = useState(testimonies[0]);
    const sliderRef = useRef(null);


    

    

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: (index) => setSelectedTestimony(testimonies[index])
    };

    const handleTestifierClick = (testimony) => {
        const index = testimonies.findIndex(t => t.id === testimony.id);
        // sliderRef.current.slickGoTo(index);
        setSelectedTestimony(testimony);
    };

    return (
        <section className="testimonialSection py-16 bg-[#3A0257] text-white rounded-[54px]" >
            <div className="container mx-auto flex flex-col md:flex-row px-[48px] space-y-[48px]">
                {/* Testifier Cards Column */}
                <div className="w-full md:w-1/3 flex flex-col items-center space-y-4 md:space-y-8 py-8 md:py-16">
                    {testimonies.map((testimony, index) => (
                        <div
                            key={testimony.id}
                            className={`cursor-pointer ${selectedTestimony.id === testimony.id ? 'testifier-card active bg-white border-left border-left-[#D8B2EC] rounded-[18px] py-[18px] px-[27px] flex items-center space-x-[36px] border-l-[4px] border-l-[#D8B2EC] w-full' : 'testifier-card active bg-[#600492] border-left border-left-[#D8B2EC] rounded-[18px] py-[18px] px-[27px] flex items-center space-x-[36px] w-full'}`}
                            onClick={() => handleTestifierClick(testimony)}
                        >
                            <img src={`/image/${testimony.name.toLowerCase().replace(' ', '-')}.png`} alt="Testifier Avatar" className="w-16 h-16 rounded-full" />
                            <div className={`${selectedTestimony.id === testimony.id ? 'text-[#333333]' : 'text-[#F2E6F9]' } text-left`}>
                                <h4 className="text-lg font-semibold">{testimony.name}</h4>
                                <p className="text-sm">{testimony.delegation}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Dot Navigation */}
                <div className="flex justify-center gap-[10px] mt-8 md:mt-0 flex-col items-center m-0 space-x-[10px] mx-[24px]">
                    {testimonies.map((testimony, index) => (
                        <button
                            key={index}
                            className={`m-0 rounded-full ml-2 ${selectedTestimony.id === testimony.id ? 'bg-[#8005C2] h-[50px] w-[6px]' : 'bg-[#D8B2EC] w-[6px] h-[6px]'}`}
                            onClick={() => setSelectedTestimony(testimony)}
                        />
                    ))}
                </div>

                {/* Testimony Display Column */}
                <div className="w-full md:w-2/3 px-4 md:px-8 py-8 md:py-16 text-white bg-[#600492] rounded-[24px] text-left flex flex-col space-y-[30px] ml-[12px]" id="testimony-body" ref={sliderRef}>
                    <h2 className="text-3xl font-semibold mb-8">{selectedTestimony.name}'s Testimonial</h2>
                    <p className="text-lg mb-4">
                        {selectedTestimony.testimony}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed est elit. Suspendisse porttitor dui diam, a semper erat eleifend at. Mauris fermentum nibh eros, nec interdum libero gravida nec. Pellentesque nec ante consequat, molestie nibh non, feugiat ligula. Sed sodales nisi eu tristique tempor. 

Nam vestibulum tempus lacinia. Praesent nec fringilla dui. Proin rhoncus fermentum enim sit amet sodales. Integer congue, augue eget aliquet consequat, nisl eros posuere diam, in hendrerit nibh magna sit amet ante. Morbi lobortis justo id massa malesuada, ac finibus augue consequat.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default TestimonyInside;
