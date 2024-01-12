import React from 'react'

const SubFooter = () => {
  return (
    <div className="sub-footer bg-[#4D0374] text-white py-10 md:py-16 lg:py-20 w-11/12 md:w-10/12 lg:w-4/5 xl:w-[70%] mx-auto lg:mt-5">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Column */}
        <div className="w-full lg:w-3/4 mb-4 md:mb-0 md:pr-8">
            <h3 className="text-[#F2E6F9] text-xl md:text-3xl lg:text-4xl leading-normal md:leading-[40px]">
                Download Savewyze now for free and <br/>enjoy security, ease, and convenience.
            </h3>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-1/4 flex items-center justify-start lg:justify-end space-x-2 md:space-x-4">
            <img src="/image/playstore-badge-footer.png" alt="Play Store" className="w-24 md:w-[140px]" />
            <img src="/image/appstore-badge-footer.png" alt="App Store" className="w-20 md:w-[130px]" />
        </div>

    </div>
</div>


  )
}

export default SubFooter
