"use client"
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Header from '@/components/Header';
import SubFooter from '@/components/SubFooter';
import Footer from '@/components/Footer';

export default function AboutUs() {
  const controls = useAnimation();

  // Header Animation
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (headerInView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: -50 });
    }
  }, [headerInView, controls]);

  // Section 1 Animation
  const [section1Ref, section1InView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (section1InView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [section1InView, controls]);

  // Section 2 Animation
  const [section2Ref, section2InView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (section2InView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [section2InView, controls]);

  // Add more sections using the same pattern

  return (
    <main className="min-h-screen bg-[#4D0374]">
      {/* Header */}
      <motion.div
        ref={headerRef}
        animate={controls}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.8 }}
      >
        <Header mode="light" />
      </motion.div>

      {/* Section 1 */}
      <div ref={section1Ref}>
        <motion.section
          className="relative w-full h-[600px] md:h-[800px] bg-cover bg-center"
          style={{ backgroundImage: "url('/image/pages/about-us.jpg')" }}
          animate={controls}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
        >
          
                {/* Container */}
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex " >
                    {/* Content Wrapper */}
                
                    <div className="w-full md:w-5/10 relative flex items-center">
                        <div className='md:absolute md:px-0 left-0 flex flex-col space-y-[25px] lg:mt-[-160px]'>
                            {/* Headers and Paragraph */}
                            <h1 className="text-4xl md:text-5xl font-semibold text-[#121212] mb-0">Empowering Africans for financial freedom!</h1>
                            <p className="text-lg md:text-xl text-[#121212] mb-6">We are providing financial services to Africa's expanding population to help them fulfill their dreams.</p>              
                        </div>
                    </div>

                    <div className="md:w-full md:w-5/10">
                        <div className="absolute right-0 bottom-0 ml-auto  w-[40%] transform skew-y-[16.5deg] rounded-l-[84px] bg-[#D8B2EC] h-[170px]"></div>

                        {/* Add your content here */}
                    </div>
                </div>
                    {/* Background Overlay with Skew */}
                    <div className="relative left-0 w-full transform skew-y-6 rounded-tl-[84px] h-[600px] lg:h-[100%] z-20 mt-[-90px] lg:mt-[-170px]  bg-[#2D0244]"></div>

        </motion.section>
      </div>

      {/* Section 2 */}
      <div ref={section2Ref}>
        <motion.section
          className="w-full overflow-x-hidden bg-[#2D0244] skewed-wrapper relative overflow-hidden z-30 pb-[80px]"
          animate={controls}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
        >
              {/* Content */}
                <div className="relative">
                {/* Staff Members Section */}
                    <div className="container mx-auto p-4 lg:w-[80%]">
                        {/* Title */}
                        <h2 className="text-center text-3xl mb-8 lg:text-[50px] lg:leading-[50px]">Developed in the heart of Africa, <br/> for endless possibilities.</h2>

                        {/* Staff Members */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-[24px] bg-[#4D0374] rounded-[54px] p-4 md:p-[48px]">
                            {/* Staff Member 1 */}
                            <div className="staff-member flex flex-row items-center bg-white px-[27px] py-[18px] rounded-[18px] space-x-[36px]">
                                <img src="/image/pages/staff/sadiq-isu.png" alt="Sadiq Isu" className="w-24 h-24 rounded-full "/>
                                <div className="details text-[#333]">
                                    <h3 className="text-lg font-semibold mb-2">Sadiq Isu</h3>
                                    <p className="">Founder</p>
                                </div>
                            </div>

                            {/* Staff Member 2 */}
                            <div className="staff-member flex flex-row items-center bg-white px-[27px] py-[18px] rounded-[18px] space-x-[36px]">
                                <img src="/image/pages/staff/abdul-isu.png" alt="Abdul Isu" className="w-24 h-24 rounded-full "/>
                                <div className="details text-[#333]">
                                    <h3 className="text-lg font-semibold mb-2">Abdul Isu</h3>
                                    <p className="">Co-Founder</p>
                                </div>
                            </div>

                            {/* Staff Member 3 */}
                            <div className="staff-member flex flex-row items-center bg-white px-[27px] py-[18px] rounded-[18px] space-x-[36px]">
                                <img src="/image/pages/staff/michael-nwoseh.png" alt="Michael Nwoseh" className="w-24 h-24 rounded-full "/>
                                <div className="details text-[#333]">
                                    <h3 className="text-lg font-semibold mb-2">Michael Nwoseh</h3>
                                    <p className="">Business Director</p>
                                </div>
                            </div>

                            {/* Staff Member 4 */}
                            <div className="staff-member flex flex-row items-center bg-white px-[27px] py-[18px] rounded-[18px] space-x-[36px]">
                                <img src="/image/pages/staff/thompson-opurum.png" alt="Thompson Opurum" className="w-24 h-24 rounded-full "/>
                                <div className="details text-[#333]">
                                    <h3 className="text-lg font-semibold mb-2">Procurement Manager</h3>
                                    <p className="">Co-Founder</p>
                                </div>
                            </div>


                            {/* Staff Member 1 */}
                            <div className="staff-member flex flex-row items-center bg-white px-[27px] py-[18px] rounded-[18px] space-x-[36px]">
                                <img src="/image/pages/staff/gina-isu.png" alt="Gina Isu" className="w-24 h-24 rounded-full "/>
                                <div className="details text-[#333]">
                                    <h3 className="text-lg font-semibold mb-2">Gina Isu</h3>
                                    <p className="">Director of Marketing</p>
                                </div>
                            </div>

                            {/* Staff Member 2 */}
                            <div className="staff-member flex flex-row items-center bg-white px-[27px] py-[18px] rounded-[18px] space-x-[36px]">
                                <img src="/image/pages/staff/samuel-akingbade.png" alt="Samuel Akingbade" className="w-24 h-24 rounded-full "/>
                                <div className="details text-[#333]">
                                    <h3 className="text-lg font-semibold mb-2">Samuel Akingbade</h3>
                                    <p className="">Head of Marketing</p>
                                </div>
                            </div>

                            

                            {/* Staff Member 3 */}
                            <div className="staff-member flex flex-row items-center bg-white px-[27px] py-[18px] rounded-[18px] space-x-[36px]">
                                <img src="/image/pages/staff/haolat-ogbomo.png" alt="Haolat Ogbomo" className="w-24 h-24 rounded-full "/>
                                <div className="details text-[#333]">
                                    <h3 className="text-lg font-semibold mb-2">Haolat Ogbomo</h3>
                                    <p className="">Human Resource</p>
                                </div>
                            </div>

                            {/* Staff Member 4 */}
                            <div className="staff-member flex flex-row items-center bg-white px-[27px] py-[18px] rounded-[18px] space-x-[36px]">
                                <img src="/image/pages/staff/akwaowo-willie.png" alt="Akwaowo Willie" className="w-24 h-24 rounded-full "/>
                                <div className="details text-[#333]">
                                    <h3 className="text-lg font-semibold mb-2">Akwaowo Willie</h3>
                                    <p className="">Logistics</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
        </motion.section>
      </div>

      <section className="w-full  relative pt-0 py-0  bg-[#FFFFFF]">

  <div className="relative">
      {/* Absolute Image on the left */}
      <img src="/image/pages/our-values-absolute.svg" alt="Floating Image" className="absolute left-0 top-1/2 transform -translate-y-1/2"  />

      {/* Our Values Section */}
      <section className="container mx-auto p-4 lg:w-[80%]">
          {/* Main Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12 pt-[60px]">
              {/* Left Column with Header and Descriptive Text */}
              <div className="text-[#121212]">
                  <h2 className="text-3xl font-semibold mb-4 lg:text-[50px] lg:leading-[50px]">Our Values</h2>
                  <p className="lg:text-[26px]">Who we are and what we do every day are defined by our values. They serve as the core of our identity and the guideposts for our interactions with all stakeholders, including consumers, regulators, investors, partners, and our communities.</p>
              </div>

              {/* Right Column with Image */}
              <div className="text-center">
                  <img src="/image/pages/our-values.png" alt="Value Image" className="mx-auto h-[600px]" />
              </div>
          </div>

         
      </section>
  </div>

</section>




<section className="w-full overflow-x-hidden bg-[#fff]" style={{ backgroundImage: "url('/image/group-skey.svg')" }}>
              <div className="skewed-div" ></div>

 {/* Faint Image Below the Main Row */}
            <div className="text-center mt-[-230px]">
              <img src="/image/pages/savewyze-text.svg" alt="Faint Image" className="mx-auto" />
            </div>
              <style jsx>{`
                .skewed-div {
                  transform: skewX(-10deg); /* Adjust the degree to control the tilt */
                  width: 100%; /* Takes the full width of the parent */
                  height: 180px;
                  /* Add any other styles or properties you'd like */
                }
              `}</style>

              <section className="testimonialSection py-16 pt-4 relative lg:py-[150px] lg:mt-[-120px] bg-no-repeat" style={{ backgroundImage: "url('/image/left-part.svg')" }}>
                <div className="overlay absolute inset-0 bg-[#4D0374]" style={{opacity: 0}}></div>
                <div className="container mx-auto text-center relative z-10 lg:w-[80%] lg:mx-auto">    
                    
                    <div className="our-mentions relative w-full h-auto md:h-[600px] lg:h-[267px] mt-[58px]">
                        {/* Bottom Layer */}
                        <div className="md:absolute inset-0 flex items-center justify-center bg-[#E3E3E3] rounded-[54px] h-full mt-[37px] mx-auto w-[96%]"></div>
    
                        {/* Middle Layer */}
                        <div className="md:absolute inset-0 flex items-center justify-center bg-[#F4F4F4] rounded-[54px] h-full mt-[18px] mx-auto w-[98%]"></div>
    
                        {/* Top Layer */}
                        <div className="md:absolute flex items-center justify-center flex-col space-y-[26px] inset-0 bg-[#FFF] rounded-[54px] p-10 md:p-0">
                            <div className="text-[#8005C2] text-4xl">
                              <h4>Our Investors</h4>
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
             </section>
</section>


      {/* Sub Footer Section */}
      <div>
        <motion.section
          className="bg-[#4D0374]"
          animate={controls}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
        >
          <SubFooter />
        </motion.section>
      </div>

      {/* Footer Section */}
      <div>
        <motion.section
          animate={controls}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
        >
          <Footer />
        </motion.section>
      </div>
    </main>
  );
}

