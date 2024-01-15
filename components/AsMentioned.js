"use client"
import React from 'react';
import TestimonyInside from './TestimonyInside';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AsMentioned = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    delay: 5000
  });

  if (inView) {
    controls.start({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: 'easeInOut',
        delay: 2000, // Adjust the delay duration (in seconds) as needed
      },
    });
  }

  return (
    <motion.section ref={ref} initial="hidden" animate={controls}>
      <div className="container mx-auto text-center relative z-10 lg:w-[80%] lg:mx-auto lg:py-10">
        <motion.div
          className="our-mentions relative w-full h-auto md:h-[600px] lg:h-[267px] mt-[58px]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 4, ease: 'easeInOut' }}
        >
          {/* Bottom Layer */}
          <motion.div
            className="md:absolute inset-0 flex items-center justify-center bg-[#E3E3E3] rounded-[54px] h-full mt-[37px] mx-auto w-[96%]"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          ></motion.div>

          {/* Middle Layer */}
          <motion.div
            className="md:absolute inset-0 flex items-center justify-center bg-[#F4F4F4] rounded-[54px] h-full mt-[18px] mx-auto w-[98%]"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          ></motion.div>

          {/* Top Layer */}
          <motion.div
            className="md:absolute flex items-center justify-center flex-col space-y-[26px] inset-0 bg-[#FFF] rounded-[54px] p-10 md:p-0"
            initial={{ opacity: 0, y: -150 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          >
            <div className="text-[#8005C2] text-4xl">
              <h4>As Mentioned On</h4>
            </div>
            <div className="flex items-center justify-center">
              {/* Logos go here */}
              <img
                src="/image/press-mentions/techpoint.png"
                alt="Tech Point"
                className="w-1/4 md:w-1/5 lg:w-1/6 mx-2 md:mx-4"
              />
              <img
                src="/image/press-mentions/the-guardian.png"
                alt="The Guardian"
                className="w-1/4 md:w-1/5 lg:w-1/6 mx-2 md:mx-4"
              />
              <img
                src="/image/press-mentions/techcrunch.png"
                alt="Tech Crunch"
                className="w-1/4 md:w-1/5 lg:w-1/6 mx-2 md:mx-4"
              />
              <img src="/image/press-mentions/slack.png" alt="Slack" className="w-1/4 md:w-1/5 lg:w-1/6 mx-2 md:mx-4" />
            </div>
          </motion.div>
        </motion.div>

        {/* Testimonial Row Goes Here */}
      </div>
    
    </motion.section>
  );
};

export default AsMentioned;
