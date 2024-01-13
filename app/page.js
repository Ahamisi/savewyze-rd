import Image from 'next/image'
import Header from '@/components/Header'
import FeatureSection from '@/components/FeatureSection'
import MainFeatures from '@/components/MainFeatures'
import GetStartedSteps from '@/components/GetStartedSteps'
import SavingPlans from '@/components/SavingPlans'
import TestimonialSection from '@/components/TestimonialSection'
import SubFooter from '@/components/SubFooter'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'


export default function Home() {
  return (
    <main className="min-h-screen bg-[#4D0374]">
      {/* Header */}
     
      
      <section className="relative w-full h-[600px] md:h-[800px] bg-cover bg-center" style={{ backgroundImage: "url('/image/frame-pattern.svg')" }}>
    <div>
        <Header />
    </div>
    <HeroSection/>
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
