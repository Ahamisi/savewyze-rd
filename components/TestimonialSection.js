"use client"
import React from 'react';
import TestimonyInside from './TestimonyInside';
import { motion, useAnimation } from 'framer-motion';
import AsMentioned from './AsMentioned';
import { useInView } from 'react-intersection-observer';

const TestimonialSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  if (inView) {
    controls.start({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: 'easeInOut',
        delay: 0.5,
      },
    });
  }

  return (
    <motion.section
      ref={ref}
      className="testimonialSection lg:py-16 relative lg:pb-0 mt-[220px]"
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-3xl font-semibold mb-8 lg:text-[50px] lg:leading-[50px]">
          What other Savewyzers<br /> are saying about us!
        </h2>

        <div>
          <TestimonyInside />
        </div>

        {/* <AsMentioned/> */}
      </div>
      <div className="py-0 w-11/12 md:w-4/5 lg:w-3/5 mx-auto mt-16 absolute top-[-30%] left-[15%] -z-1">
        <div>
          <img src="/image/savewyze-word.svg" alt="Savewyze Word" />
        </div>
      </div>
    </motion.section>
  );
};

export default TestimonialSection;
