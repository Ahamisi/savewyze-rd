import React from 'react'

const SubFooter = () => {
  return (
    <div className="sub-footer bg-[#4D0374] text-white py-[100px] w-11/12 md:w-4/5 lg:w-[70%] mx-auto mt-5">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
            {/* Left Column */}
            <div className="w-full md:w-3/4 pr-8 mb-4 md:mb-0">
                <h3 className="text-[#F2E6F9] text-3xl lg:text-[35px] lg:leading-[40px]">
                Download Savewyze now for free and <br/>enjoy security, ease and convenience.
                </h3>
            </div>

            {/* Right Column */}
            <div className="w-full md:w-1/4 flex items-center justify-end space-x-4">
                <img src="/image/playstore-badge-footer.png" alt="Play Store" className="lg:w-[140px]" />
                <img src="/image/appstore-badge-footer.png" alt="App Store" className="lg:w-[140px]" />
            </div>

        </div>
    </div>

  )
}

export default SubFooter
