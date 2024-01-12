import Image from 'next/image'
import Header from '@/components/Header'
import FeatureSection from '@/components/FeatureSection'
import MainFeatures from '@/components/MainFeatures'
import GetStartedSteps from '@/components/GetStartedSteps'
import SavingPlans from '@/components/SavingPlans'
import TestimonialSection from '@/components/TestimonialSection'
import SubFooter from '@/components/SubFooter'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#4D0374]">
      {/* Header */}
     
      
      <section className="relative w-full h-[600px] md:h-[800px] bg-cover bg-center" style={{ backgroundImage: "url('/image/frame-pattern.svg')" }}>
    <div>
        <Header />
    </div>
    {/* Container */}
    <div className="container mx-auto px-4 sm:px-6 lg:px-8  h-auto md:h-[780px] flex pt-8 flex-col md:flex-row">
        {/* Content Wrapper */}
        <div className=" md:w-[40%] lg:w-[40%] xl:w-[53%] h-full order-2	lg:order-1">
          <img src="/image/savewyze-user.png" alt="Savewyze User" className="md:mt-[40px]"/>
        </div>
        <div className=" md:w-full lg:w-[60%] xl:w-[47%] relative flex justify-start md:items-center order-1	lg:order-2">
            <div className='md:absolute lg:px-10 lg:left-[5%] flex flex-col space-y-[25px] md:mt-[-160px]'>
                {/* Headers and Paragraph */}
                <h1 className="text-4xl md:text-5xl font-semibold text-[#F2E6F9] mb-4">Achieve Financial Freedom with <span className='text-[#D8B2EC]'>Savewyze!</span></h1>
                <p className="text-lg md:text-xl text-[#F2E6F9] mb-6">Save. Earn. Grow.</p>
                
                {/* Download Buttons */}
                <div className="space-x-[19px]">
                    <button className="text-white px-0 py-3 rounded-ful transition duration-300">
                        <img src='/image/appstore-badge.png' alt="App Store Badge" className="h-[52px]" />
                    </button>
                    <button className="text-white px-0 py-3 rounded-ful transition duration-300">
                        <img src='/image/playstore-badge.png' alt="Play Store Badge" className="h-[52px]" />
                    </button>
                </div>
            </div>
            <div className="hidden lg:flex absolute right-0 bottom-0 ml-auto w-[70%] transform skew-y-[16.5deg] rounded-l-[84px] bg-[#D8B2EC] h-[160px]"></div>
        </div>
    </div>
        {/* Background Overlay with Skew */}
        <div className="relative left-0 w-full transform skew-y-6 rounded-tl-[84px] h-[600px] lg:h-[256%] z-20 mt-[-90px] lg:mt-[-170px]  bg-[#F9F9F9]"></div>

</section>

<section className="w-full overflow-x-hidden bg-[#F9F9F9] skewed-wrapper relative overflow-hidden z-30">

    {/* Content */}
    <div className="relative">
        <FeatureSection/>
    </div>
</section>


<section className="w-full overflow-x-hidden relative bg-[#21989E] h-full overflow-hidden">
    <MainFeatures/>
</section>

<section className="w-full overflow-x-hidden bg-[#fff] relative">
    <div className="h-[10%] bg-[#21989E] absolute top-0 w-full"></div>
    <GetStartedSteps/>
</section>


      <section className="w-full overflow-x-hidden bg-[#fff]">
        <SavingPlans/>
      </section>

      <section className="w-full overflow-x-hidden bg-[#4D0374] bg-contain bg-no-repeat bg-top relative h-[100%] overflow-hidden" style={{ backgroundImage: "url('/image/savewyze-super-bg.jpg')",}}>
        {/* <div className="bg-[#fff] h-[100px]"></div> */}
        <TestimonialSection/>

            {/* Background color to fill the remaining area */}
        {/* <div className="absolute inset-0 bg-[#F9F9F9] bottom-0 pointer-events-none"></div> */}

      </section>

        <section className="bg-[#4D0374]">
          <SubFooter/>
        </section>
      <Footer/>
    </main>
  )
}
