"use client"
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { InView, useInView } from 'react-intersection-observer';

const GetStartedSteps = () => {
  const controls = useAnimation();


  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  useEffect(() => {
    if (inView) {
      const timeoutId = setTimeout(() => {
        controls.start({
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
              ease: 'easeInOut',
            },
        });
      }, 400); // Adjust the delay duration (in milliseconds) as needed
  
      return () => clearTimeout(timeoutId); // Clear the timeout if the component unmounts or if inView becomes false
    }
  }, [controls, inView]);



  return (
    <div className="w-11/12 md:w-4/5 lg:w-[70%] mx-auto mt-16 mb-16 md:mt-0 md:mb-24 relative" ref={ref}>
      {/* Row 1 */}
      <div className="feature-row mb-8 md:mb-0">
        <div className="feature-item relative flex flex-col md:flex-row justify-between rounded-[50px] overflow-hidden mb-8 md:mb-12 border-[1px] border-[#B0B0B0] bg-white p-[15px] md:p-[50px] md:pt-[120px] mx-5 z-50">
          {/* Background Image with Opacity Overlay */}
          <div className="absolute inset-0 z-0 bg-cover bg-center rounded-[30px]" style={{ backgroundImage: "url('/image/ring-circles.svg')", opacity: 0.1 }}></div>

          {/* Content Wrapper */}
          <div className="z-10 w-full md:w-1/2 p-2 md:p-8  md:text-left">
            <motion.h3
              className="text-3xl font-semibold mb-4 text-black lg:text-[50px] lg:leading-[50px] text-center md:text-left"
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
            >
              Get started on <br /> Savewyze in <br />3 simple steps
            </motion.h3>
            <div className="hidden md:flex absolute left-0 lg:left-[60px] pt-[24px] bottom-0">
              <img src="/image/mobile-mockup.png" className="h-[380px]" />
            </div>
          </div>

          {/* Image Wrapper */}
          <div className="w-full md:w-1/2 h-auto md:h-auto z-50">
            {/* Get Started in 3 Steps */}
            <InView triggerOnce>
              {({ inView, ref }) => (
                <div
                  ref={ref}
                  className={`w-full flex flex-col justify-between space-y-[30px] ${inView ? 'animate' : ''}`}
                >
                  {/* Step 1 */}
                  <motion.div
                    className="step-box flex items-center mb-4"
                    initial={{ opacity: 0, y: 50 }}
                    animate={controls}
                  >
                    <div className="step-number mr-4 text-2xl font-semibold flex flex-col items-center">
                        <div>
                            <svg width="15" height="36" viewBox="0 0 15 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.551611 10.1705V5.47051C0.551611 5.03717 0.751611 4.68717 1.15161 4.42051L8.30161 0.320508C8.63495 0.120506 9.00161 0.0205054 9.40161 0.0205054H13.6516C14.2516 0.0205054 14.5516 0.320506 14.5516 0.920506V34.1205C14.5516 34.7205 14.2516 35.0205 13.6516 35.0205H8.90161C8.30161 35.0205 8.00161 34.7205 8.00161 34.1205V7.12051L1.60161 10.7705C1.43494 10.8705 1.26828 10.9205 1.10161 10.9205C1.00161 10.9205 0.884945 10.8872 0.751611 10.8205C0.618278 10.7205 0.551611 10.5038 0.551611 10.1705Z" fill="#D8B2EC"/>
                            </svg>
                            
                        </div>

                    </div>
                    <div className="step-content bg-[#F2F2F2] p-[32px] rounded-[30px] w-full border-b-black border-b-[3px]">
                      <motion.h3
                        className="text-lg font-semibold mb-2 text-[#121212]"
                        initial={{ opacity: 0, y: 50 }}
                        animate={controls}
                      >
                        Create an account
                      </motion.h3>
                      <motion.p
                        className="text-sm text-[#121212]"
                        initial={{ opacity: 0, y: 50 }}
                        animate={controls}
                      >
                        Sign up for an account with your name, email, and phone number.
                      </motion.p>
                    </div>
                  </motion.div>

                  {/* Step 2 */}
                  <motion.div
                    className="step-box flex items-center mb-4"
                    initial={{ opacity: 0, y: 50 }}
                    animate={controls}
                  >
                    <div className="step-number mr-4 text-2xl font-semibold flex flex-col items-center">
                        <div>
                            <svg width="26" height="37" viewBox="0 0 26 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.85161 25.5441C4.15161 23.4775 6.46828 21.5608 9.80161 19.7941L13.7516 17.7941C17.2183 15.9275 18.9516 13.8108 18.9516 11.4441C18.9516 10.0441 18.4849 8.94414 17.5516 8.14414C16.6516 7.31081 15.3849 6.89414 13.7516 6.89414C12.0516 6.89414 10.6683 7.36081 9.60161 8.29414C8.56828 9.22747 7.95161 10.5275 7.75161 12.1941C7.68495 12.7941 7.40161 13.0941 6.90161 13.0941H1.95161C1.35161 13.0941 1.05161 12.8108 1.05161 12.2441C1.05161 12.2108 1.05161 12.1775 1.05161 12.1441C1.28494 8.64414 2.51828 5.89414 4.75161 3.89414C6.98495 1.89414 9.95161 0.89414 13.6516 0.89414C17.2849 0.89414 20.1683 1.86081 22.3016 3.79414C24.4683 5.69414 25.5516 8.24414 25.5516 11.4441C25.5516 13.7108 24.9016 15.7275 23.6016 17.4941C22.3349 19.2608 20.2683 20.8941 17.4016 22.3941L13.4516 24.3941C11.4849 25.4608 10.0849 26.4441 9.25161 27.3441C8.41828 28.2108 7.90161 29.2608 7.70161 30.4941H24.5016C25.1016 30.4941 25.4016 30.7941 25.4016 31.3941V35.5941C25.4016 36.1941 25.1016 36.4941 24.5016 36.4941H1.80161C1.20161 36.4941 0.901611 36.1941 0.901611 35.5941V33.7441C0.901611 30.3441 1.55161 27.6108 2.85161 25.5441Z" fill="#D8B2EC"/>
                            </svg>
                        </div>

                    </div>
                    <div className="step-content bg-[#F2F2F2] p-[32px] rounded-[30px] w-full border-b-black border-b-[3px]">
                      <motion.h3
                        className="text-lg font-semibold mb-2 text-[#121212]"
                        initial={{ opacity: 0, y: 50 }}
                        animate={controls}
                      >
                        Add funds to your Wallet
                      </motion.h3>
                      <motion.p
                        className="text-sm text-[#121212]"
                        initial={{ opacity: 0, y: 50 }}
                        animate={controls}
                      >
                        Using your debit card or a bank transfer, add funds to as many wallets as you like.
                      </motion.p>
                    </div>
                  </motion.div>

                  {/* Step 3 */}
                  <motion.div
                    className="step-box flex items-center mb-4"
                    initial={{ opacity: 0, y: 50 }}
                    animate={controls}
                  >
                    <div className="step-number mr-4 text-2xl font-semibold flex flex-col items-center">
                        <div>
                            <svg width="26" height="37" viewBox="0 0 26 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.20161 24.9441H6.05161C6.58495 24.9441 6.90161 25.2275 7.00161 25.7941C7.26828 27.3275 7.91828 28.5108 8.95161 29.3441C10.0183 30.1775 11.4183 30.5941 13.1516 30.5941C14.9849 30.5941 16.4516 30.1608 17.5516 29.2941C18.6516 28.3941 19.2016 27.2275 19.2016 25.7941C19.2016 24.3608 18.6349 23.2441 17.5016 22.4441C16.4016 21.6108 14.8349 21.1941 12.8016 21.1941H11.0516C10.4516 21.1941 10.1516 20.8941 10.1516 20.2941V16.1441C10.1516 15.5441 10.4516 15.2441 11.0516 15.2441H12.6516C14.4849 15.2441 15.9349 14.8275 17.0016 13.9941C18.0683 13.1608 18.6016 12.0608 18.6016 10.6941C18.6016 9.39414 18.1016 8.36081 17.1016 7.59414C16.1349 6.79414 14.8183 6.39414 13.1516 6.39414C9.75161 6.39414 7.81828 8.01081 7.35161 11.2441C7.28495 11.8108 6.98495 12.0941 6.45161 12.0941H1.55161C0.984945 12.0941 0.701611 11.8108 0.701611 11.2441C0.701611 11.2108 0.701611 11.1775 0.701611 11.1441C0.934945 7.74414 2.15161 5.11081 4.35161 3.24414C6.55161 1.34414 9.48495 0.39414 13.1516 0.39414C16.8183 0.39414 19.7349 1.29414 21.9016 3.09414C24.1016 4.89414 25.2016 7.22747 25.2016 10.0941C25.2016 12.0275 24.7016 13.6941 23.7016 15.0941C22.7016 16.4608 21.2516 17.4441 19.3516 18.0441V18.1441C21.4183 18.6441 23.0183 19.6275 24.1516 21.0941C25.3183 22.5275 25.9016 24.2775 25.9016 26.3441C25.9016 29.3108 24.7516 31.7608 22.4516 33.6941C20.1516 35.6275 17.0349 36.5941 13.1016 36.5941C9.30161 36.5941 6.28494 35.6608 4.05161 33.7941C1.81828 31.9275 0.568278 29.2775 0.301611 25.8441C0.301611 25.8108 0.301611 25.7775 0.301611 25.7441C0.301611 25.2108 0.601611 24.9441 1.20161 24.9441Z" fill="#D8B2EC"/>
                            </svg>
                        </div>

                    </div>
                    <div className="step-content bg-[#F2F2F2] p-[32px] rounded-[30px] w-full border-b-black border-b-[3px]">
                      <motion.h3
                        className="text-lg font-semibold mb-2 text-[#121212]"
                        initial={{ opacity: 0, y: 50 }}
                        animate={controls}
                      >
                        Start Growing
                      </motion.h3>
                      <motion.p
                        className="text-sm text-[#121212]"
                        initial={{ opacity: 0, y: 50 }}
                        animate={controls}
                      >
                        Save and watch your goals become reality as you get one step closer to financial freedom with Savewyze.
                      </motion.p>
                    </div>
                  </motion.div>
                </div>
              )}
            </InView>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStartedSteps;
