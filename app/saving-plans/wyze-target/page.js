"use client"
import Image from 'next/image'
import Header from '@/components/Header'
import FeatureSection from '@/components/FeatureSection'
import MainFeatures from '@/components/MainFeatures'
import GetStartedSteps from '@/components/GetStartedSteps'
import SavingPlans from '@/components/SavingPlans'
import TestimonialSection from '@/components/TestimonialSection'
import SubFooter from '@/components/SubFooter'
import Footer from '@/components/Footer'

export default function WyzeLock() {
  return (
    <main className="min-h-screen bg-[#FFFFFF]">
      {/* Header */}
    <div>
        <Header mode="light" />
    </div>
      
<section className="relative w-full h-[600px] md:h-auto bg-cover bg-center bg-white">

    {/* Container */}
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col md:flex-row mt-[70px] lg:mt-0 items-center" >
        {/* Content Wrapper */}    
        <div className="w-full md:w-6/10 order-2 md:order-1">
            <img src="/image/handlock-savings.png"/>
            {/* Add your content here */}
            
        </div>
    
        <div className="w-full md:w-6/10 relative flex items-center order-1	md:order-2">
            <div className='md:absolute md:px-0 left-0 flex flex-col space-y-[25px]'>
                {/* Headers and Paragraph */}
               <div className="lg:w-[70%] lg:mr-auto lg:ml-6 flex flex-col space-y-[25px]">
                    <h1 className="text-4xl md:text-5xl font-semibold text-[#121212] mb-0">Wyze Target</h1>
                    <p className="text-lg md:text-xl text-[#121212] mb-6">Meet all of your financial targets sooner. You can save for multiple goals at a time or just one goal.</p>  
                    <div>
                        <button className="bg-[#8005C2] text-white rounded-[36px] py-[20px] px-[40px] hover:bg-[#4D0374] hover:text-white transition duration-300">Get Started</button>
                    </div>
               </div>
            
            </div>

        </div>

    
    </div>







    <div className="w-full h-full flex" >
        {/* Content Wrapper */}    
        <div className="md:w-full md:w-7/10">
            <div className="h-[100px] bg-[#F2E6F9] rounded-tr-[80px]"></div>
        </div>
    
        <div className="w-full md:w-[70%] relative flex items-center">
        <div className="h-[100px] bg-white rounded-r-[80px]"></div>


        </div>

    
    </div>
        

</section>


<section className="relative bg-[#F2E6F9] py-[130px]">
    <div className="w-full lg:max-w-[70%] mx-auto relative">
    <header className="text-center mb-10">
        <h2 className="text-3xl text-[#121212] lg:text-[50px] lg:leading-[50px]">Financial freedom begins <br/>with daily discipline</h2>
    </header>

   <div className="flex gap-[50px] flex-col mx-auto">
    <div className="flex flex-wrap gap-4 space-x-[24px] justify-center">
            {/* First Row */}
            {/* Column Item 1 */}
            <div className="column-item relative flex flex-col items-center justify-end h-auto md:h-[480px] w-2/3 md:w-[40%] lg:w-1/3  mb-[20px] lg:mb-[60px] md:mb-0" >
            
            <div className="absolute"></div>
                {/* Bottom Layer */}
                <div className="absolute h-full z-2 bg-[#ECDAF6] rounded-[32px] top-[20px] w-[305px]"></div>
                
                {/* Middle Layer */}
                <div className="absolute h-full z-10 rounded-[32px]  bg-[#D8B2EC] top-[10px] w-[335px] "></div>
                
                {/* Top Layer */}
                <div className="relative z-20 flex flex-col items-left justify-between w-[358px] h-full rounded-[32px] bg-white py-[30px]">
                    <div className="px-[55px] flex flex-col text-[#121212] gap-[31px]">
                        <img src="/image/cutomize-plan-target.svg" alt="Icon 1" className="h-[156px] w-[156px]" />
                        <h3 className="text-3xl font-bolder font-[800]">Customize your plans</h3>
                        <p>Create your custom plan and start saving and earning toward your goal.</p>
                    </div>
                    
                    
                </div>
            </div>


            {/* Column Item 1 */}
            <div className="column-item relative flex flex-col items-center justify-end h-auto md:h-[480px] w-2/3 md:w-[40%] lg:w-1/3  mb-[20px] lg:mb-[60px] md:mb-0" >
            
            <div className="absolute"></div>
                {/* Bottom Layer */}
                <div className="absolute h-full z-2 bg-[#ECDAF6] rounded-[32px] top-[20px] w-[305px]"></div>
                
                {/* Middle Layer */}
                <div className="absolute h-full z-10 rounded-[32px]  bg-[#D8B2EC] top-[10px] w-[335px] "></div>
                
                {/* Top Layer */}
                <div className="relative z-20 flex flex-col items-left justify-between w-[358px] h-full rounded-[32px] bg-white py-[30px]">
                    <div className="px-[55px] flex flex-col text-[#121212] gap-[31px]">
                        <img src="/image/tenure-save-target.svg" alt="Savings Choose your tenure" className="h-[156px] w-[156px]" />
                        <h3 className="text-3xl font-bolder font-[800]">Choose your tenure</h3>
                        <p>Choose your tenure and also choose the frequency of adding funds to your plan - daily, weekly or monthly.</p>
                    </div>
                    
                    
                </div>
            </div>

               {/* Column Item 1 */}
            <div className="column-item relative flex flex-col items-center justify-end h-auto md:h-[480px] w-2/3 md:w-[40%] lg:w-1/3  mb-[20px] lg:mb-[60px] md:mb-0" >
            
            <div className="absolute"></div>
                {/* Bottom Layer */}
                <div className="absolute h-full z-2 bg-[#ECDAF6] rounded-[32px] top-[20px] w-[305px]"></div>
                
                {/* Middle Layer */}
                <div className="absolute h-full z-10 rounded-[32px]  bg-[#D8B2EC] top-[10px] w-[335px] "></div>
                
                {/* Top Layer */}
                <div className="relative z-20 flex flex-col items-left justify-between w-[358px] h-full rounded-[32px] bg-white py-[30px]">
                    <div className="px-[55px] flex flex-col text-[#121212] gap-[31px]">
                        <img src="/image/mutiple-plans-target.svg" alt="Saving Target" className="h-[156px] w-[156px]" />
                        <h3 className="text-3xl font-bolder font-[800]">Multiple Plans</h3>
                        <p>You can create and track multiple plans for your different savings goals.</p>
                    </div>
                    
                    
                </div>
            </div>


            {/* Column Item 1 */}
            <div className="column-item relative flex flex-col items-center justify-end h-auto md:h-[480px] w-2/3 md:w-[40%] lg:w-1/3  mb-[20px] lg:mb-[60px] md:mb-0" >
            
            <div className="absolute"></div>
                {/* Bottom Layer */}
                <div className="absolute h-full z-2 bg-[#ECDAF6] rounded-[32px] top-[20px] w-[305px]"></div>
                
                {/* Middle Layer */}
                <div className="absolute h-full z-10 rounded-[32px]  bg-[#D8B2EC] top-[10px] w-[335px] "></div>
                
                {/* Top Layer */}
                <div className="relative z-20 flex flex-col items-left justify-between w-[358px] h-full rounded-[32px] bg-white py-[30px]">
                    <div className="px-[55px] flex flex-col text-[#121212] gap-[31px]">
                        <img src="/image/savings-interest.svg" alt="Savings Earnings" className="h-[156px] w-[156px]" />
                        <h3 className="text-3xl font-bolder font-[800]">Earn up to 10% interest p.a.</h3>
                        <p>You earn interest daily and you can earn up to 10% interest per annum with WyzeTarget.</p>
                    </div>
                    
                    
                </div>
            </div>


        </div>

       
   </div>

    {/* Absolute images floating */}
    <div className="absolute top-0 bottom-0 w-[400px] bg-cover left-[-25%]" style={{  backgroundImage: "url('/image/savings-left-pattern.svg')" }}></div>
    <div className="absolute top-[20%] bottom-0 w-[400px] bg-cover right-[-25%]" style={{ backgroundImage: "url('/image/pattern-savings-right.svg')" }}></div>

    </div>
</section>



    <div className="w-full h-full flex bg-white">
        {/* Content Wrapper */}  

         <div className="w-full md:w-[70%] relative flex items-center">
            <div className="h-[100px] bg-white rounded-r-[80px]"></div>

        </div>

      
        <div className="md:w-full md:w-7/10">
            <div className="h-[100px] bg-[#F2E6F9] rounded-bl-[80px]"></div>
        </div>
    
    
    
    </div>


<section className="bg-white">
    <div className="container mx-auto py-16 px-4 lg:px-0 lg:w-[70%] bg-[#FFFFFF]">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center text-[#121212]">

{/* First Column */}
<div className="text-center lg:text-left flex justify-left flex-col">
    <h2 className="text-3xl lg:text-[50px] lg:leading-[50px] font-bold mb-4">How to start your <br/>savings journey.</h2>
    <img src="/image/savings-pro.png" alt="Savings Pro" className="mx-auto lg:mx-0 max-w-full h-auto" />
</div>

{/* Second Column - Placeholder for Content */}
{/* Second Column - Steps */}
<div className="flex flex-col gap-[18px]">
    {/* Step 1 */}
    <div className="py-[12px] px-[16px] bg-[#FBF4FF] rounded-[13px]">
        <div className="flex items-center">
            {/* Left Section */}
            <div className="w-1/3 flex items-center">
                <div className="w-[74px] bg-[#4D0374] mr-2 flex items-center justify-center py-[30px] text-[#F2E6F9] text-3xl font-extrabold">01</div> {/* 80px width */}
                <div className="w-[18px] bg-[#4D0374] mr-2 flex items-center justify-center py-[30px] text-[#F2E6F9] text-3xl font-extrabold"><p style={{visibility: 'hidden'}}>1</p></div> {/* 18px width */}
            </div>
            {/* Right Section */}
            <div className="w-2/3 h-full">
                <h3 className="text-lg font-extrabold text-[#555555]">Download the app</h3>
            </div>
        </div>
    </div>

    <div className="py-[12px] px-[16px] bg-[#FBF4FF] rounded-[13px]">
        <div className="flex items-center">
            {/* Left Section */}
            <div className="w-1/3 flex items-center">
                <div className="w-[74px] bg-[#145B5F] mr-2 flex items-center justify-center py-[30px] text-[#F2E6F9] text-3xl font-extrabold">02</div> {/* 80px width */}
                <div className="w-[18px] bg-[#2CCBD3] mr-2 flex items-center justify-center py-[30px] text-[#F2E6F9] text-3xl font-extrabold"><p style={{visibility: 'hidden'}}>2</p></div> {/* 18px width */}
            </div>
            {/* Right Section */}
            <div className="w-2/3 h-full">
                <h3 className="text-lg font-extrabold text-[#555555]">Create your preferred <br/>Savings Plan</h3>
            </div>
        </div>
    </div>

    <div className="py-[12px] px-[16px] bg-[#FBF4FF] rounded-[13px]">
        <div className="flex items-center">
            {/* Left Section */}
            <div className="w-1/3 flex items-center">
                <div className="w-[74px] bg-[#121212] mr-2 flex items-center justify-center py-[30px] text-[#F2E6F9] text-3xl font-extrabold">03</div> {/* 80px width */}
                <div className="w-[18px] bg-[#333333] mr-2 flex items-center justify-center py-[30px] text-[#F2E6F9] text-3xl font-extrabold"><p style={{visibility: 'hidden'}}>3</p></div> {/* 18px width */}
            </div>
            {/* Right Section */}
            <div className="w-2/3 h-full">
                <h3 className="text-lg font-extrabold text-[#555555]">Add payment method</h3>
            </div>
        </div>
    </div>

    <div className="py-[12px] px-[16px] bg-[#FBF4FF] rounded-[13px]">
        <div className="flex items-center">
            {/* Left Section */}
            <div className="w-1/3 flex items-center">
                <div className="w-[74px] bg-[#093E69] mr-2 flex items-center justify-center py-[30px] text-[#F2E6F9] text-3xl font-extrabold">04</div> {/* 80px width */}
                <div className="w-[18px] bg-[#148AEA] mr-2 flex items-center justify-center py-[30px] text-[#F2E6F9] text-3xl font-extrabold"><p style={{visibility: 'hidden'}}>4</p></div> {/* 18px width */}
            </div>
            {/* Right Section */}
            <div className="w-2/3 h-full">
                <h3 className="text-lg font-extrabold text-[#555555]">Top-up your savings</h3>
            </div>
        </div>
    </div>


    {/* Repeat for other steps... */}
   
</div>


</div>
    </div>
    
</section>




<section className="relative bg-cover bg-center bg-no-repeat lg:h-[500px] mt-[120px]" style={{ backgroundImage: 'url(/image/savewyze-super-bg.png)' }}>
    {/* Push outwards div */}
    <div className="relative lg:absolute z-10 p-[48px] bg-[#500378] mx-4 rounded-[54px]  lg:mx-auto lg:max-w-screen-lg lg:px-12 lg:mt-[-52px] lg:left-[16%]">
        {/* Two Columns */}
        <div className="flex flex-col lg:flex-row items-center justify-center space-x-[40px]">
            {/* Column 1 */}
            <div className="w-full lg:w-3/6 pr-0 lg:pr-4 mb-4 lg:mb-0 bg-[#600492] p-4 lg:p-[48px] rounded-[24px]">
                <h2 className="text-2xl font-semibold mb-2 lg:text-[40px] lg:leading-[50px]">Amazing earnings & returns you will not get anywhere else.</h2>
                <p className="text-white text-[20px]">You’re in control. Choose from as little as 90 days to 1000 days to lock away your savings.</p>
            </div>
            {/* Column 2 */}
            <div className="w-full lg:w-2/6 hidden lg:flex items-center justify-center">
                <img src="/image/savings-icon.svg" alt="Savings Icon" className="w-full h-auto" />
            </div>
        </div>
    </div>
</section>










        <section className="bg-[#4D0374] mt-[-20px]">
          <SubFooter/>
        </section>
      <Footer/>
    </main>
  )
}
