"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AsMentioned from './AsMentioned';

const SubFooter = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <div ref={ref}>
      <AsMentioned/>
      <motion.div
        className="sub-footer bg-[#4D0374] text-white py-10 md:py-16 lg:py-20 w-11/12 md:w-10/12 lg:w-4/5 xl:w-[70%] mx-auto lg:mt-5"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Left Column */}
          <motion.div
            className="w-full lg:w-3/4 mb-4 md:mb-0 md:pr-8"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: 'easeInOut', delay: 0.5 }}
          >
            <h3 className="text-[#F2E6F9] text-xl md:text-3xl lg:text-4xl leading-normal md:leading-[40px]">
              Download Savewyze now for free and <br />enjoy security, ease, and convenience.
            </h3>
          </motion.div>

          {/* Right Column */}
          <motion.div
            className="w-full lg:w-1/4 flex items-center justify-start lg:justify-end space-x-2 md:space-x-4"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: 'easeInOut', delay: 0.5 }}
          >
            <img src="/image/playstore-badge-footer.png" alt="Play Store" className="w-24 md:w-[140px]" />
            <img src="/image/appstore-badge-footer.png" alt="App Store" className="w-20 md:w-[130px]" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default SubFooter;
