import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="main-footer bg-[#F2E6F9] text-[#121212] py-[70px] pb-[140px] px-8">
    <div className="container mx-auto">
        
        {/* First Row */}
        <div className="flex flex-wrap mb-8 pb-[60px]">

            {/* First Column (Spanning 2 columns) */}
            <div className="w-full md:w-full lg:w-2/6 mb-4 md:mb-0 space-y-[16px] pb-[30px] lg:pb-0">
                <div>
                    <img src="/image/savewyze-colored.svg"/>
                </div>
                <ul>
                    <p>© 2024 Savewyse |  All Rights Reserved.</p>

                </ul>
            </div>

            {/* Columns 2-5 */}
            <div className="w-1/2 md:w-1/4 lg:w-1/6 mb-8 md:mb-0 pr-8">
                <h5 className="text-lg font-semibold mb-[23px]">Features</h5>
                <ul className="space-y-[24px]">
                    <li><Link href="/saving-plans/wyze-vault" className="text-[#121212] hover:text-[#8005C2]">Wyze Vault</Link></li>
                    <li><Link href="/saving-plans/wyze-target" className="text-[#121212] hover:text-[#8005C2]">Wyze Target</Link></li>
                    <li><Link href="/saving-plans/wyze-lock" className="text-[#121212] hover:text-[#8005C2]">Wyze Lock</Link></li>

                    {/* Add more sublinks as needed */}
                </ul>
            </div>

            <div className="w-1/2 md:w-1/4 lg:w-1/6 mb-8 md:mb-0 pr-8">
                <h5 className="text-lg font-semibold mb-[23px]">Company</h5>
                <ul className="space-y-[24px]">
                    <li><Link href="/about-us" className="text-[#121212] hover:text-[#8005C2]">About Us</Link></li>
                    <li><Link href="#" className="text-[#121212] hover:text-[#8005C2]">FAQs</Link></li>
                    <li><Link href="#" className="text-[#121212] hover:text-[#8005C2]">Careers</Link></li>

                    {/* Add more sublinks as needed */}
                </ul>
            </div>

            <div className="w-1/2 md:w-1/4 lg:w-1/6 mb-4 md:mb-0 pr-8 ">
                 <h5 className="text-lg font-semibold mb-[23px]">Legal</h5>
                <ul className="space-y-[24px]">
                    <li><Link href="#" className="text-[#121212] hover:text-[#8005C2]">Terms of Use</Link></li>
                    <li><Link href="#" className="text-[#121212] hover:text-[#8005C2]">Privacy Policy</Link></li>
                    <li><Link href="#" className="text-[#121212] hover:text-[#8005C2]">Safety</Link></li>

                    {/* Add more sublinks as needed */}
                </ul>
            </div>

            <div className="w-1/2 md:w-1/4 lg:w-1/6 mb-4 md:mb-0 pr-8">
                <h5 className="text-lg font-semibold mb-[23px]">Get in Touch</h5>
                <ul className="space-y-[24px]">
                    <li><Link href="#" className="text-[#121212] hover:text-[#8005C2] lg:leading-[30px]">enquiries@savewyze.com</Link></li>
                    <li><Link href="#" className="text-[#121212] hover:text-[#8005C2]  lg:leading-[30px]">09169856898</Link></li>
                    <li className="flex items-center space-x-4">
                        <Link href="#" className="text-[#121212] hover:text-[#8005C2]">
                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="11.25" cy="11.75" r="11.25" transform="rotate(90 11.25 11.75)" fill="url(#paint0_linear_1219_4884)"/>
                                <g clip-path="url(#clip0_1219_4884)">
                                <path d="M11.25 5.5625C14.6673 5.5625 17.4375 8.33274 17.4375 11.75C17.4375 14.9135 15.0633 17.5221 11.9996 17.8922V13.6408L13.6735 13.6408L14.0207 11.75H11.9996V11.0813C11.9996 10.5817 12.0976 10.2358 12.3224 10.0148C12.5473 9.79386 12.8989 9.69778 13.4062 9.69778C13.5346 9.69778 13.6528 9.69905 13.7576 9.70161C13.9101 9.70532 14.0345 9.71174 14.121 9.72084V8.00681C14.0864 7.9972 14.0456 7.98759 13.9999 7.97813C13.8962 7.9567 13.7674 7.93605 13.6289 7.91791C13.3395 7.87999 13.0079 7.85306 12.7759 7.85306C11.839 7.85306 11.131 8.0535 10.6368 8.46866C10.0403 8.9697 9.75524 9.78352 9.75524 10.9353V11.75H8.47933V13.6408H9.75524V17.7553C7.06019 17.0866 5.0625 14.6518 5.0625 11.75C5.0625 8.33274 7.83274 5.5625 11.25 5.5625Z" fill="#8005C2"/>
                                </g>
                                <defs>
                                <linearGradient id="paint0_linear_1219_4884" x1="11.25" y1="0.499999" x2="11.25" y2="23" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#F2E6F9"/>
                                <stop offset="1" stop-color="#C086DE"/>
                                </linearGradient>
                                <clipPath id="clip0_1219_4884">
                                <rect width="12.375" height="12.375" fill="white" transform="translate(5.0625 5.5625)"/>
                                </clipPath>
                                </defs>
                            </svg>
                        </Link>
                        <Link href="#" className="text-[#121212] hover:text-[#8005C2]">
                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="11.75" cy="11.75" r="11.25" transform="rotate(90 11.75 11.75)" fill="url(#paint0_linear_1219_4890)"/>
                                <g clip-path="url(#clip0_1219_4890)">
                                <path d="M15.0121 6.54419H16.7515L12.9513 10.8876L17.4219 16.7979H13.9215L11.1798 13.2133L8.04269 16.7979H6.30219L10.3669 12.1522L6.07819 6.54419H9.66751L12.1457 9.82064L15.0121 6.54419ZM14.4016 15.7567H15.3654L9.14378 7.53065H8.10947L14.4016 15.7567Z" fill="#8005C2"/>
                                </g>
                                <defs>
                                <linearGradient id="paint0_linear_1219_4890" x1="11.75" y1="0.499999" x2="11.75" y2="23" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#F2E6F9"/>
                                <stop offset="1" stop-color="#C086DE"/>
                                </linearGradient>
                                <clipPath id="clip0_1219_4890">
                                <rect width="12.375" height="12.375" fill="white" transform="translate(5.5625 5.5625)"/>
                                </clipPath>
                                </defs>
                            </svg>
                        </Link>
                        <Link href="#" className="text-[#121212] hover:text-[#8005C2]">
                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="11.25" cy="11.75" r="11.25" transform="rotate(90 11.25 11.75)" fill="url(#paint0_linear_1219_4896)"/>
                                <path d="M14.5475 9.18328C14.1377 9.18408 13.8046 8.85229 13.8038 8.44251C13.803 8.03274 14.1348 7.69954 14.5447 7.69874C14.9547 7.69794 15.2879 8.02993 15.2887 8.43971C15.2893 8.84948 14.9575 9.18248 14.5475 9.18328Z" fill="#8005C2"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2559 14.9268C9.50156 14.9302 8.07638 13.5108 8.07298 11.756C8.06956 10.0016 9.48932 8.57623 11.2437 8.57282C12.9985 8.56941 14.4238 9.9896 14.4272 11.7438C14.4306 13.4986 13.0105 14.9234 11.2559 14.9268ZM11.2459 9.68768C10.1072 9.68969 9.18541 10.6149 9.18741 11.7538C9.18962 12.8929 10.115 13.8145 11.2537 13.8123C12.3928 13.8101 13.3146 12.8851 13.3124 11.746C13.3102 10.6069 12.3848 9.68548 11.2459 9.68768Z" fill="#8005C2"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.18646 5.89584C7.5794 5.74187 8.02906 5.63642 8.68742 5.60535C9.3474 5.57367 9.55809 5.56646 11.2381 5.56325C12.9185 5.56004 13.1292 5.56645 13.7891 5.59572C14.4477 5.62419 14.8976 5.72804 15.2913 5.88041C15.6987 6.03738 16.0443 6.24868 16.3887 6.5917C16.7331 6.93512 16.9452 7.27954 17.1042 7.68631C17.258 8.07965 17.3634 8.52892 17.3947 9.18769C17.426 9.84746 17.4336 10.058 17.4368 11.7382C17.44 13.4182 17.4332 13.6291 17.4043 14.2895C17.3756 14.9476 17.272 15.3977 17.1196 15.7912C16.9622 16.1986 16.7513 16.5442 16.4083 16.8887C16.0653 17.2333 15.7205 17.4452 15.3137 17.6044C14.9204 17.7579 14.4711 17.8634 13.8128 17.8948C13.1528 17.9261 12.9421 17.9335 11.2615 17.9368C9.58174 17.94 9.37105 17.9335 8.71109 17.9045C8.05252 17.8756 7.60245 17.772 7.20892 17.6198C6.80156 17.4622 6.45594 17.2515 6.11152 16.9083C5.7669 16.5651 5.55461 16.2205 5.39583 15.8137C5.24186 15.4206 5.13681 14.9711 5.10533 14.3129C5.07386 13.6527 5.06645 13.4418 5.06324 11.7618C5.06002 10.0816 5.06664 9.87112 5.09551 9.21114C5.12458 8.55238 5.22783 8.1025 5.38019 7.70856C5.53756 7.30139 5.74846 6.95597 6.09188 6.61135C6.43489 6.26693 6.7797 6.05442 7.18646 5.89584ZM7.61048 16.5803C7.8288 16.6643 8.15637 16.7646 8.7596 16.7908C9.41235 16.8191 9.60781 16.8253 11.2595 16.8221C12.9118 16.8191 13.1073 16.8121 13.7599 16.7814C14.3625 16.7527 14.6901 16.6513 14.9078 16.5663C15.1967 16.4534 15.4024 16.3185 15.6185 16.1022C15.8346 15.8851 15.9683 15.6788 16.0802 15.3899C16.1644 15.1714 16.2644 14.8436 16.2907 14.2403C16.3193 13.588 16.3253 13.3923 16.3221 11.7402C16.3191 10.0884 16.3121 9.89277 16.281 9.24022C16.2526 8.63737 16.1513 8.30979 16.0661 8.09228C15.9533 7.80299 15.8187 7.5977 15.6018 7.38138C15.3849 7.16507 15.1786 7.03175 14.8893 6.91988C14.6714 6.83548 14.3434 6.73564 13.7406 6.70938C13.0879 6.68071 12.8922 6.67489 11.2401 6.67811C9.58836 6.68131 9.3929 6.68793 8.74036 6.7188C8.13733 6.74747 7.81015 6.84871 7.59203 6.93392C7.30334 7.04678 7.09765 7.1809 6.88134 7.39802C6.66543 7.61514 6.53171 7.82103 6.41985 8.11052C6.33606 8.32864 6.23521 8.65662 6.20935 9.25946C6.18088 9.91221 6.17487 10.1079 6.17808 11.7596C6.18109 13.4118 6.1881 13.6074 6.21878 14.2596C6.24704 14.8628 6.34908 15.19 6.43389 15.4083C6.54675 15.6968 6.68127 15.9025 6.89799 16.1188C7.1151 16.3343 7.32139 16.4684 7.61048 16.5803Z" fill="#8005C2"/>
                                <defs>
                                <linearGradient id="paint0_linear_1219_4896" x1="11.25" y1="0.499999" x2="11.25" y2="23" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#F2E6F9"/>
                                <stop offset="1" stop-color="#C086DE"/>
                                </linearGradient>
                                </defs>
                            </svg>

                        </Link>

                        <Link href="#" className="text-[#121212] hover:text-[#8005C2]">
                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="11.75" cy="11.75" r="11.25" transform="rotate(90 11.75 11.75)" fill="url(#paint0_linear_1219_4902)"/>
                                <g clip-path="url(#clip0_1219_4902)">
                                <path d="M14.3655 5.5625H12.2799V13.9918C12.2799 14.9962 11.4778 15.8212 10.4796 15.8212C9.48136 15.8212 8.67923 14.9962 8.67923 13.9918C8.67923 13.0054 9.46354 12.1984 10.4261 12.1625V10.0462C8.3049 10.0821 6.59369 11.8217 6.59369 13.9918C6.59369 16.1799 8.34055 17.9375 10.4974 17.9375C12.6542 17.9375 14.4011 16.162 14.4011 13.9918V9.66956C15.1854 10.2435 16.148 10.5842 17.164 10.6022V8.48587C15.5954 8.43207 14.3655 7.14076 14.3655 5.5625Z" fill="#8005C2"/>
                                </g>
                                <defs>
                                <linearGradient id="paint0_linear_1219_4902" x1="11.75" y1="0.499999" x2="11.75" y2="23" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#F2E6F9"/>
                                <stop offset="1" stop-color="#C086DE"/>
                                </linearGradient>
                                <clipPath id="clip0_1219_4902">
                                <rect width="12.375" height="12.375" fill="white" transform="translate(5.5625 5.5625)"/>
                                </clipPath>
                                </defs>
                            </svg>

                        </Link>
                        {/* Add more social icons as needed */}
                    </li>

                    {/* Add more sublinks as needed */}
                </ul>
            </div>

        </div>


        {/* Second Row */}
        <div className="flex flex-wrap border-t-2 border-t-[#D8B2EC] lg:pt-[60px] pt-[30px]">

            {/* First Column in the Second Row (Spanning 1 column width) */}
            <div className="w-full md:w-1/2 md:pr-8 mb-8 md:mb-0 flex">
                
                {/* Link Column 1 */}
                <div className="mb-4 w-1/2">
                    <h5 className="text-lg font-semibold mb-[10px]">United States</h5>
                    <ul className="space-y-[24px]">
                        <li><p href="#" className="text-[#121212]">2020 Brice Road, Reynoldsburg, <br/> OH 43068</p></li>

                        {/* Add more sublinks as needed */}
                    </ul>
                </div>
                
                {/* Link Column 2 */}
                <div className="w-1/2">
                    <h5 className="text-lg font-semibold mb-[10px]">Nigeria</h5>
                    <ul className="space-y-[24px]">
                        <li><p className="text-[#121212]">151 Herbert Macaulay Way, <br/> Yaba, Lagos.</p></li>

                        {/* Add more sublinks as needed */}
                    </ul>
                </div>

            </div>

            {/* Second Column in the Second Row (Spanning 1 column width) */}
            <div className="w-full md:w-1/2 flex justify-between">

                {/* First Sub-column */}
                <div className="hidden md:flex w-0 md:w-1/4"></div> {/* Empty Column */}
                
               {/* Second Sub-column */}
                <div className="w-full md:w-3/4">
                    {/* Newsletter Subscribe Form */}
                    <div className="flex items-center border-b border-[#121212] mb-4 pb-2">
                        <input 
                            type="email" 
                            placeholder="Enter your email" 
                            className="border-none focus:outline-none bg-transparent flex-grow px-2 text-[#121212] placeholder:text-[#121212]"
                        />
                        <button className="bg-transparent border-none focus:outline-none">
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2978 8.38954L21.4694 3.21795L21.4668 3.21535C20.2796 2.02808 18.0304 2.77781 13.532 4.27727L8.38266 5.99372C4.75203 7.20393 2.93671 7.80903 2.42085 8.69638C1.93011 9.54052 1.93011 10.5831 2.42085 11.4272C2.93671 12.3146 4.75203 12.9197 8.38266 14.1299C8.83261 14.2799 9.3388 14.1728 9.67573 13.839L15.1814 8.38435C15.4911 8.07748 15.991 8.0798 16.2978 8.38954Z" fill="#8005C2"/>
                                <path opacity="0.5" d="M18.6884 16.2989L20.4049 11.1495C21.9032 6.65443 22.653 4.40524 21.4694 3.21729L16.2978 8.38888C16.6047 8.69862 16.6023 9.19848 16.2926 9.50536L10.8759 14.8719C10.5045 15.2398 10.387 15.8029 10.5523 16.2989C11.7625 19.9295 12.3676 21.7448 13.2549 22.2607C14.0991 22.7514 15.1416 22.7514 15.9858 22.2607C16.8731 21.7448 17.4782 19.9295 18.6884 16.2989Z" fill="#8005C2"/>
                            </svg>
                        </button>
                    </div>

                    <p className="mb-4">Subscribe to get the latest news and promo updates from us...</p>

                    {/* Add additional content or styling as needed */}
                </div>


            </div>

        </div>


    </div>
</footer>

  )
}

export default Footer
