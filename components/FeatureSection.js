// components/FeatureSection.js
"use client"

import { useEffect } from 'react';
import { gsap } from 'gsap';

const FeatureSection = () => {

  return (
    <section className="w-11/12 md:w-4/5 lg:w-3/5 mx-auto mt-16 mb-16 md:mt-12 md:mb-24 lg:mb-0">
      {/* Row 1 */}
      <div className="feature-row mb-8 md:mb-0">
        <div className="feature-item relative flex flex-col md:flex-row items-center justify-between rounded-[30px] overflow-hidden mb-8 md:mb-12 border-[1px] border-[#D8B2EC] p-[50px] mx-5">
          {/* Background Image with Opacity Overlay */}
          <div className="absolute inset-0 z-0 bg-cover bg-center rounded-[30px]" style={{ backgroundImage: "url('/image/ring-circles.svg')", opacity: 0.1 }}></div>

          {/* Content Wrapper */}
          <div className="relative z-10 w-full md:w-1/2 lg:p-8 text-center md:text-left">
            <h3 className="text-3xl font-semibold mb-4 text-black">Never miss out on a saving opportunity!</h3>
            <p className="text-lg text-[#121212]">Set aside funds for special occasions and emergencies. You could even save up for a mortgage deposit or a product you have your eye on.</p>
          </div>

          {/* Image Wrapper */}
          <div className="w-full md:w-1/2 h-auto md:h-auto z-50">
            <img src="/image/never-miss.png" alt="Move Money" className="w-auto h-auto md:w-full md:h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="feature-row mb-8 md:mb-0">
        <div className="feature-item flex flex-col md:flex-row items-center justify-between bg-cover bg-center rounded-[30px] overflow-hidden mb-8 md:mb-0 relative md:mt-[-130px] h-auto md:h-[500px] mx-5 z-[999]">
          {/* Right Column: Image */}
          <div className="w-full md:w-1/2 h-32 hidden md:flex md:h-auto">
            <div className="absolute top-0 left-0">
              <img src="/image/savings-dashboard.png" className="md:h-[500px]" />
            </div>
          </div>

          {/* Left Column: Text Content */}
          <div className="w-full md:w-1/2 lg:p-8 text-center md:text-left">
            <h3 className="text-3xl font-bold  mb-4 text-black" style={{fontWeight: 800}}>Enjoy 20% interest on your savings!</h3>
            <p className="text-lg text-[#121212]">Build your personalized savings plan and we promise to match your savings with up to 20% interest pa.</p>
          </div>
        </div>
      </div>

      {/* Row 3 */}
      <div className="feature-row mb-8 md:mb-12 ">
        <div className="feature-item relative flex flex-col md:flex-row items-center justify-between rounded-[30px] overflow-hidden mb-8 md:mb-12 border-[1px] border-[#D8B2EC] p-[50px] mx-5 md:mt-[-50px]">
          {/* Background Image with Opacity Overlay */}
          <div className="absolute inset-0 z-0 bg-cover bg-center rounded-[30px]" style={{ backgroundImage: "url('/image/ring-circles.svg')", opacity: 0.1 }}></div>

          {/* Content Wrapper */}
          <div className="relative z-10 w-full md:w-1/2 lg:p-8 text-center md:text-left">
            <h3 className="text-3xl font-semibold mb-4 text-black">Move your money around with ease.</h3>
            <p className="text-lg text-[#121212]">Send money across borders instantly with ease and no hidden fees.</p>
          </div>

          {/* Image Wrapper */}
          <div className="w-full md:w-1/2 h-auto md:h-auto z-50">
            <img src="/image/move-money.png" alt="Move Money" className="w-auto h-auto md:w-full md:h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Row 4 */}
    <div className="feature-row z-50">
        <div className="feature-item relative flex flex-col md:flex-row items-center overflow-hidden  mt-[-80px]">
          <img src="/image/savewyze-text.svg" />
        </div>
      </div>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          {/* Image 1: Top Left */}
          <img 
              src="/image/euro-button.svg" 
              alt="Flying Image 1" 
              className="absolute top-0 right-0 w-32 h-32 md:w-40 md:h-40 object-cover"
          />
          
          {/* Image 2: Bottom Right */}
          <img 
              src="/image/yuen-button.svg" 
              alt="Flying Image 2" 
              className="absolute top-[120px] left-[100px] w-32 h-32 md:w-40 md:h-40 object-cover"
          />
          
          className="absolute top-0 left-0 w-32 h-32 md:w-40 md:h-40 object-cover"



          {/* Image 3: Top Right */}
          <img 
              src="/image/dollar-button.svg" 
              alt="Flying Image 3" 
              className="absolute bottom-0 right-0 w-32 h-32 md:w-40 md:h-40 object-cover"
          />


          {/* Image 3: Top Right */}
          <img 
              src="/image/naira-button.svg" 
              alt="Flying Image 3" 
              className="absolute top-[700px] left-[100px] w-32 h-32 md:w-40 md:h-40 object-cover"
          />



        </div>
    </section>
  );
};

export default FeatureSection;
