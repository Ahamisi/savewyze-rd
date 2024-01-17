"use client"
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FeatureSection = () => {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const stagger = {
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
    hidden: { opacity: 0 },
  };

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      const timeoutId = setTimeout(() => {
        controls.start('visible');
      }, 300); // Adjust the delay duration (in milliseconds) as needed
  
      return () => clearTimeout(timeoutId); // Clear the timeout if the component unmounts or if inView becomes false
    }
  }, [controls, inView]);
  
  return (
    <motion.section
      ref={ref}
      className="w-11/12 md:w-4/5 lg:w-3/5 mx-auto mt-16 mb-16 md:mt-12 md:mb-24 lg:mb-0"
      initial="hidden"
      animate={controls}
      variants={stagger}
    >
      {/* Row 1 */}
      <motion.div
        className="feature-row mb-8 md:mb-0"
        variants={stagger}
      >
        <motion.div
          className="feature-item relative flex flex-col md:flex-row items-center justify-between rounded-[30px] overflow-hidden mb-8 md:mb-12 border-[1px] border-[#D8B2EC] py-[30px] px-[20px] md:px-[50px] md:py-[50px] mx-5"
          variants={fadeIn}
        >
          {/* Background Image with Opacity Overlay */}
          <div className="absolute inset-0 z-0 bg-cover bg-center rounded-[30px]" style={{ backgroundImage: "url('/image/ring-circles.svg')", opacity: 0.1 }}></div>

          {/* Content Wrapper */}
          <motion.div className="relative z-10 w-full md:w-1/2 lg:p-8 text-center md:text-left">
            <motion.h3 className="text-3xl font-semibold mb-4 text-black" variants={fadeIn}>Never miss out on a saving opportunity!</motion.h3>
            <motion.p className="text-lg text-[#121212]" variants={fadeIn}>Set aside funds for special occasions and emergencies. You could even save up for a mortgage deposit or a product you have your eye on.</motion.p>
          </motion.div>

          {/* Image Wrapper */}
          <motion.div className="w-full md:w-1/2 h-auto md:h-auto z-50">
            <motion.img src="/image/never-miss.png" alt="Move Money" className="w-auto h-auto md:w-full md:h-full object-cover" variants={fadeIn} />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Row 2 */}
      <motion.div
        className="feature-row mb-8 md:mb-0"
        variants={stagger}
      >
        <motion.div
          className="feature-item flex flex-col md:flex-row items-center justify-between bg-cover bg-center rounded-[30px] overflow-hidden mb-8 md:mb-0 relative md:mt-[-130px] h-auto md:h-[500px] mx-5 z-[999]"
          variants={fadeIn}
        >
          {/* Right Column: Image */}
          <motion.div className="w-full md:w-1/2 h-32 hidden md:flex md:h-auto" variants={fadeIn}>
            <div className="absolute top-0 left-0">
              <motion.img src="/image/savings-dashboard.png" className="md:h-[500px]" />
            </div>
          </motion.div>

          {/* Left Column: Text Content */}
          <motion.div className="w-full md:w-1/2 lg:p-8 text-center md:text-left">
            <motion.h3 className="text-3xl font-bold  mb-4 text-black" style={{ fontWeight: 800 }} variants={fadeIn}>Enjoy 20% interest on your savings!</motion.h3>
            <motion.p className="text-lg text-[#121212]" variants={fadeIn}>Build your personalized savings plan and we promise to match your savings with up to 20% interest pa.</motion.p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Row 3 */}
      <motion.div
        className="feature-row mb-8 md:mb-12"
        variants={stagger}
      >
        <motion.div
          className="feature-item relative flex flex-col md:flex-row items-center justify-between rounded-[30px] overflow-hidden mb-8 md:mb-12 border-[1px] border-[#D8B2EC] py-[30px] px-[20px] md:px-[50px] md:py-[50px] mx-5 md:mt-[-50px]"
          variants={fadeIn}
        >
          {/* Background Image with Opacity Overlay */}
          <div className="absolute inset-0 z-0 bg-cover bg-center rounded-[30px]" style={{ backgroundImage: "url('/image/ring-circles.svg')", opacity: 0.1 }}></div>

          {/* Content Wrapper */}
          <motion.div className="relative z-10 w-full md:w-1/2 lg:p-8 text-center md:text-left">
            <motion.h3 className="text-3xl font-semibold mb-4 text-black" variants={fadeIn}>Move your money around with ease.</motion.h3>
            <motion.p className="text-lg text-[#121212]" variants={fadeIn}>Send money across borders instantly with ease and no hidden fees.</motion.p>
          </motion.div>

          {/* Image Wrapper */}
          <motion.div className="w-full md:w-1/2 h-auto md:h-auto z-50">
            <motion.img src="/image/move-money.png" alt="Move Money" className="w-auto h-auto md:w-full md:h-full object-cover" variants={fadeIn} />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Row 4 */}
      <motion.div className="feature-row z-50" variants={stagger}>
        <motion.div className="feature-item relative flex flex-col md:flex-row items-center overflow-hidden mt-[-80px]" variants={fadeIn}>
          <motion.img src="/image/savewyze-text.svg" variants={fadeIn} />
        </motion.div>
      </motion.div>

      <motion.div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        {/* Image 1: Top Left */}
        <motion.img
          src="/image/euro-button.svg"
          alt="Flying Image 1"
          className="absolute top-0 right-0 w-32 h-32 md:w-40 md:h-40 object-cover"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />

        {/* Image 2: Bottom Right */}
        <motion.img
          src="/image/yuen-button.svg"
          alt="Flying Image 2"
          className="absolute top-[120px] left-[100px] w-32 h-32 md:w-40 md:h-40 object-cover"
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        />

        {/* Image 3: Top Right */}
        <motion.img
          src="/image/dollar-button.svg"
          alt="Flying Image 3"
          className="absolute bottom-0 right-0 w-32 h-32 md:w-40 md:h-40 object-cover"
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
        />

        {/* Image 3: Top Right */}
        <motion.img
          src="/image/naira-button.svg"
          alt="Flying Image 3"
          className="absolute top-[700px] left-[100px] w-32 h-32 md:w-40 md:h-40 object-cover"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
        />
      </motion.div>
    </motion.section>
  );
};

export default FeatureSection;
