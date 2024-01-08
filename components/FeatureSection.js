// components/FeatureSection.js
"use client"

import { useEffect } from 'react';
import { gsap } from 'gsap';

const FeatureSection = () => {

  return (
    <section className="w-11/12 md:w-4/5 lg:w-3/5 mx-auto mt-16 mb-16 md:mt-24 md:mb-24 lg:mb-0">
      {/* Row 1 */}
      <div className="feature-row mb-8 md:mb-0">
        <div className="feature-item relative flex flex-col md:flex-row items-center justify-between rounded-[30px] overflow-hidden mb-8 md:mb-12 border-[1px] border-[#D8B2EC] p-[50px] mx-5">
          {/* Background Image with Opacity Overlay */}
          <div className="absolute inset-0 z-0 bg-cover bg-center rounded-[30px]" style={{ backgroundImage: "url('/image/ring-circles.svg')", opacity: 0.1 }}></div>

          {/* Content Wrapper */}
          <div className="relative z-10 w-full md:w-1/2 p-8 text-center md:text-left">
            <h3 className="text-2xl font-semibold mb-4 text-black">Never miss out on a saving opportunity!</h3>
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
          <div className="w-full md:w-1/2 p-8 text-center md:text-left">
            <h3 className="text-2xl font-semibold mb-4 text-black">Never miss out on a saving opportunity!</h3>
            <p className="text-lg text-[#121212]">Set aside funds for special occasions and emergencies. You could even save up for a mortgage deposit or a product you have your eye on.</p>
          </div>
        </div>
      </div>

      {/* Row 3 */}
      <div className="feature-row mb-8 md:mb-12 ">
        <div className="feature-item relative flex flex-col md:flex-row items-center justify-between rounded-[30px] overflow-hidden mb-8 md:mb-12 border-[1px] border-[#D8B2EC] p-[50px] mx-5 md:mt-[-50px]">
          {/* Background Image with Opacity Overlay */}
          <div className="absolute inset-0 z-0 bg-cover bg-center rounded-[30px]" style={{ backgroundImage: "url('/image/ring-circles.svg')", opacity: 0.1 }}></div>

          {/* Content Wrapper */}
          <div className="relative z-10 w-full md:w-1/2 p-8 text-center md:text-left">
            <h3 className="text-2xl font-semibold mb-4 text-black">Never miss out on a saving opportunity!</h3>
            <p className="text-lg text-[#121212]">Set aside funds for special occasions and emergencies. You could even save up for a mortgage deposit or a product you have your eye on.</p>
          </div>

          {/* Image Wrapper */}
          <div className="w-full md:w-1/2 h-auto md:h-auto z-50">
            <img src="/image/move-money.png" alt="Move Money" className="w-auto h-auto md:w-full md:h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Row 4 */}
      <div className="feature-row z-50">
        <div className="feature-item relative flex flex-col md:flex-row items-center overflow-hidden  mt-0">
          <img src="/image/savewyze-text.svg" />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
