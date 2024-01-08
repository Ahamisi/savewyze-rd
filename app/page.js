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
     
      
      <section className="relative w-full h-[600px] md:h-[800px] bg-cover bg-center" style={{ backgroundImage: "url('/image/landpage-image.jpg')" }}>
    <div>
        <Header />
    </div>
    {/* Container */}
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex ">
        {/* Content Wrapper */}
        <div className="md:w-full md:w-7/10">
            {/* Add your content here */}
        </div>
        <div className="w-full md:w-3/10 relative flex items-center">
            <div className='md:absolute md:px-10 left-[20%] flex flex-col space-y-[25px] lg:mt-[-160px]'>
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
            <div className="absolute right-0 bottom-0 ml-auto w-[70%] transform skew-y-[16.5deg] rounded-l-[84px] bg-[#D8B2EC] h-[170px]"></div>
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


<section className="w-full overflow-x-hidden relative py-[120px] bg-[#21989E]">

    <MainFeatures/>
</section>

<section className="w-full overflow-x-hidden bg-[#F9F9F9] relative">
<div className="h-[10%] bg-[#21989E] absolute top-0 w-full"></div>

    <GetStartedSteps/>
</section>


      <section className="w-full overflow-x-hidden bg-[#F9F9F9]">
        <SavingPlans/>
      </section>

      <section className="w-full overflow-x-hidden bg-[#F9F9F9]" style={{ backgroundImage: "url('/image/group-skey.svg')" }}>
        <TestimonialSection/>
      </section>

        <section className="bg-[#4D0374]">
          <SubFooter/>
        </section>
      <Footer/>
    </main>
  )
}
