// components/LargeSection.js


const MainFeatures = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-[#21989E]" >
        {/* <div className="bg-black" id="badoo" style={{ transform: 'rotate(17deg) skew(17deg)' }}></div> */}

        
      {/* First Row: Title */}
      <div className="w-full mb-16 md:mb-24">
      <h2 className="text- lg:text-[50px] lg:leading-[50px]  font-semibold text-center font-BROmny">Savewyze key features<br/>made just for you!</h2>
      </div>

      
      {/* Second Row: Column Items */}
      <div className="w-full lg:w-[80%] mx-auto flex flex-col md:flex-row items-center justify-between md:space-x-[25px]">
        {/* Column Item 1 */}
        <div className="column-item relative flex flex-col items-center justify-end h-auto md:h-[480px] w-2/3 md:w-1/2 lg:w-1/3  mb-[100px] md:mb-0" >
          
          <div className="absolute"></div>
            {/* Bottom Layer */}
            <div className="absolute h-full z-2 bg-[#145B5F] rounded-[32px] top-[20px] w-[305px]"></div>
            
            {/* Middle Layer */}
            <div className="absolute h-full z-10 rounded-[32px]  bg-[#1A7A7F] top-[10px] w-[335px] "></div>
            
            {/* Top Layer */}
            <div className="relative z-20 flex flex-col items-left justify-between w-[358px] h-full rounded-[32px] bg-[#EAFAFB] pt-[50px]">
                <div className="px-[55px] mt-[45px]">
                      {/* Title */}
                      <h3 className="text-2xl lg:text-[20px] font-semibold mb-2 text-[#121212]">Goal-Oriented savings</h3>
                    
                    {/* Description */}
                    <p className="text-sm lg:text-[16px] lg:leading-[20px] text-left text-[#333] mb-4">Set your targets and make them a reality</p>
                  </div>
                
                <div className="flex items-center">
                    {/* Image */}
                    <img src='/image/savings-dashboard-feature.png' alt="Goal Oriented Savings" className="h-[250px] w-auto mx-auto" />
                </div>
            </div>
        </div>


        {/* Column Item 1 */}
        <div className="column-item relative flex flex-col items-center justify-end h-auto md:h-[480px] w-2/3 md:w-1/2 lg:w-1/3  mb-[100px] md:mb-0" >
          
          <div className="absolute"></div>
            {/* Bottom Layer */}
            <div className="absolute h-full z-2 bg-[#145B5F] rounded-[32px] top-[20px] w-[305px]"></div>
            
            {/* Middle Layer */}
            <div className="absolute h-full z-10 rounded-[32px]  bg-[#1A7A7F] top-[10px] w-[335px] "></div>
            
            {/* Top Layer */}
            <div className="relative z-20 flex flex-col items-left justify-between w-[358px] h-full rounded-[32px] bg-[#EAFAFB] pt-[50px]">
                <div className="px-[55px] mt-[45px]">
                      {/* Title */}
                      <h3 className="text-2xl lg:text-[20px] font-semibold mb-2 text-[#121212]">Move money around</h3>
                    
                    {/* Description */}
                    <p className="text-sm lg:text-[16px] lg:leading-[20px] text-left text-[#333] mb-4">Transfer/receive funds from anywhere</p>
                  </div>
                
                <div className="flex items-center">
                    {/* Image */}
                    <img src='/image/move-mone-around-feature.png' alt="Move money around" className="h-[250px] w-auto mx-auto" />
                </div>
            </div>
        </div>




        {/* Column Item 1 */}
        <div className="column-item relative flex flex-col items-center justify-end h-auto md:h-[480px] w-2/3 md:w-1/2 lg:w-1/3  mb-[100px] md:mb-0" >
          
          <div className="absolute"></div>
            {/* Bottom Layer */}
            <div className="absolute h-full z-2 bg-[#145B5F] rounded-[32px] top-[20px] w-[305px]"></div>
            
            {/* Middle Layer */}
            <div className="absolute h-full z-10 rounded-[32px]  bg-[#1A7A7F] top-[10px] w-[335px] "></div>
            
            {/* Top Layer */}
            <div className="relative z-20 flex flex-col items-left justify-between w-[358px] h-full rounded-[32px] bg-[#EAFAFB] pt-[50px]">
                <div className="px-[55px] mt-[45px]">
                      {/* Title */}
                      <h3 className="text-2xl lg:text-[20px] font-semibold mb-2 text-[#121212]">Pay Bills</h3>
                    
                    {/* Description */}
                    <p className="text-sm lg:text-[16px] lg:leading-[20px] text-left text-[#333] mb-4">Pay all utility bills and buy airtime & data.</p>
                  </div>
                
                <div className="flex items-center">
                    {/* Image */}
                    <img src='/image/pay-bills.png' alt="Pay Bills" className="h-[250px] w-auto mx-auto" />
                </div>
            </div>
        </div>

       
  
     
      </div>
    </section>
  );
};

export default MainFeatures;
