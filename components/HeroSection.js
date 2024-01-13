const HeroSection = () => {


  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8  h-auto md:h-[780px] flex pt-8 flex-col md:flex-row">
    {/* Content Wrapper */}
    <div className=" md:w-[40%] lg:w-[40%] xl:w-[53%] h-full order-2	lg:order-1">
      <img src="/image/savewyze-user.png" alt="Savewyze User" className="md:mt-[40px]"/>
    </div>
    <div className=" md:w-full lg:w-[60%] xl:w-[47%] relative flex justify-start md:items-center order-1	lg:order-2">
        <div className='md:absolute lg:px-10 lg:left-[5%] flex flex-col space-y-[25px] md:mt-[-160px]'>
            {/* Headers and Paragraph */}
            <h1 className="text-4xl md:text-5xl font-semibold text-[#F2E6F9] mb-4">Achieve Financial Freedom with <span className='text-[#D8B2EC]'>Savewyze!</span></h1>
            <p className="text-lg md:text-[26px] text-[#F2E6F9] mb-6">Save. Earn. Grow.</p>
            
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
  );
};

export default HeroSection;