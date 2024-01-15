"use client"
import React from 'react';
import TestimonyInside from './TestimonyInside';
import { motion } from 'framer-motion';
import AsMentioned from './AsMentioned';

const TestimonialSection = () => {
  return (
    <motion.section
      className="testimonialSection lg:py-16 relative lg:py-[150px] lg:pb-0 mt-[220px]"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-3xl font-semibold mb-8 lg:text-[50px] lg:leading-[50px]">
          What other Savewyzers<br /> are saying about us!
        </h2>

        <div>
          <TestimonyInside />
        </div>

        <AsMentioned/>
        
      </div>
      <div className="py-0 w-11/12 md:w-4/5 lg:w-3/5 mx-auto mt-16 absolute top-[-20%] left-[15%] -z-1">
        <div>
          <img src="/image/savewyze-word.svg" alt="Savewyze Word" />
        </div>
      </div>
    </motion.section>
  );
};

export default TestimonialSection;
