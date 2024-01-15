"use client"
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const AnimatedContent = ({ title, description, imageSrc, delay }) => {
  const controls = useAnimation();

  const [ref, inView] = useInView({
    triggerOnce: true,
    delay: delay || 0,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="column-item relative flex flex-col items-center justify-end h-auto md:h-[480px] w-2/3 md:w-1/2 lg:w-1/3  mb-[100px] md:mb-0"
      variants={fadeIn}
      initial="hidden"
      animate={controls}
      ref={ref}
    >
      <div className="absolute h-full z-2 bg-[#145B5F] rounded-[32px] top-[20px] w-[305px]"></div>
      <div className="absolute h-full z-10 rounded-[32px]  bg-[#1A7A7F] top-[10px] w-[335px] "></div>
      <div className="relative z-20 flex flex-col items-left justify-between w-[358px] h-full rounded-[32px] bg-[#EAFAFB] pt-[50px]">
        <div className="px-[55px] mt-[45px]">
          <h3 className="text-2xl lg:text-[20px] font-semibold mb-2 text-[#121212]">{title}</h3>
          <p className="text-sm lg:text-[16px] lg:leading-[20px] text-left text-[#333] mb-4">{description}</p>
        </div>
        <div className="flex items-center">
          <img src={imageSrc} alt={title} className="h-[250px] w-auto mx-auto" />
        </div>
      </div>
    </motion.div>
  );
};

const MainFeatures = () => {
  return (
    <div className="w-full py-16 md:py-24 bg-[#21989E] h-full lg:mt-[100px]">
      <div className="w-full mb-16 lg:pt-[180px] md:mb-24">
        <motion.h2
          className="text-3xl lg:text-[50px] lg:leading-[50px] font-semibold text-center font-BROmny"
          variants={{ visible: { opacity: 1, y: 0 } }}
          initial="hidden"
          animate={{ opacity: 1, y: 0 }}
        >
          Savewyze key features<br />made just for you!
        </motion.h2>
      </div>

      <div className="w-full lg:w-[80%] mx-auto flex flex-col md:flex-row items-center justify-between md:space-x-[25px]">
        <AnimatedContent
          title="Goal-Oriented savings"
          description="Set your targets and make them a reality"
          imageSrc="/image/savings-dashboard-feature.png"
          delay={800}
        />

        <AnimatedContent
          title="Move money around"
          description="Transfer/receive funds from anywhere"
          imageSrc="/image/move-mone-around-feature.png"
          delay={900}
        />

        <AnimatedContent
          title="Pay Bills"
          description="Pay all utility bills and buy airtime & data."
          imageSrc="/image/pay-bills.png"
          delay={1000}
        />
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        <img 
          src="/image/top-left-features.svg" 
          alt="Top Left Pattern" 
          className="absolute top-0 left-0  object-cover"
        />
        <img 
          src="/image/bottom-right-features.svg" 
          alt="Top Right Image" 
          className="absolute top-0 right-0 object-cover"
        />
        <img 
          src="/image/naira-button-green.svg" 
          alt="Bottom Center Image" 
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-32 md:w-40 md:h-40 object-cover"
        />
        <div className="absolute top-0 left-0 transform  object-cover bg-[#1A7A7F] h-[100px] w-[40%] rounded-[84px] rotate-[1deg]"></div>
        <img 
          src="/image/pounds-circle.svg" 
          alt="Bottom Center Image" 
          className="absolute top-2 left-1/2 transform -translate-x-1/2 w-32 h-32 md:w-40 md:h-40 object-cover"
        />
      </div>
    </div>
  );
};

export default MainFeatures;
