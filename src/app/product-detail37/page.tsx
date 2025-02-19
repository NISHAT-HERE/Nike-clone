'use client';

import Image from 'next/legacy/image';

const ProductDetail = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      <div className="w-full max-w-[1440px] min-h-[1173px] mx-auto px-5 sm:px-8 md:px-10 lg:px-12 py-8">
        <div className="flex flex-col lg:flex-row items-start justify-between">
          {/* Product Image */}
          <div className="w-full sm:w-[480px] md:w-[580px] lg:w-[600px] xl:w-[600px]">
            <div className="relative aspect-square bg-[#f5f5f5] overflow-hidden">
              <Image
                src="/product37.svg"
                alt="Nike Air Force 1 PLT.AF.ORM"
                layout="fill"
                objectFit="contain"
                priority
                className="transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="w-full sm:w-[400px] md:w-[500px] lg:w-[374px] xl:w-[600px] mt-8 lg:mt-0">
            <h1 className="text-[24px] sm:text-[28px] md:text-[32px] font-medium mb-4">
            Product 
              <br />
            Overview
            </h1>
            
            <div className="text-[14px] sm:text-[15px] md:text-[16px] text-[#707072] mb-6 sm:mb-8">
              Nike is a world-renowned American multinational corporation
              <br />
              that designs, develops, and sells athletic footwear,
              <br />
              apparel, equipment, and accessories.
              <br />
              Founded in 1964 by University of
              <br />
              Oregon track coach Bill Bowerman and his former University of
              <br />
              Oregon student Phil Knight, Nike has become a global leader
              <br />
              in the sports industry, inspiring athletes
              <br />
              and fitness enthusiasts alike with its innovative
              <br />
              products and empowering brand message: "Just Do It."
            </div>

            <div className="w-[229px] h-[34px] text-[20px] sm:text-[22px] md:text-[24px] font-medium mb-6 sm:mb-8">
              ₹ 2,495.00
            </div>

            <div className="flex items-center gap-4">
              <button className="w-[177.42px] h-[60px] bg-black text-white rounded-full px-6 font-medium hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center gap-2">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.82324 4.42676L6.33658 4.86176L7.5002 18.725C7.5449 19.2705 7.79364 19.7791 8.19679 20.1493C8.59993 20.5196 9.12785 20.7242 9.6752 20.7223H22.8581C23.3822 20.7229 23.8889 20.5343 24.285 20.191C24.681 19.8478 24.9398 19.3731 25.0138 18.8543L26.1617 10.93C26.1923 10.7193 26.1811 10.5046 26.1286 10.2982C26.0762 10.0918 25.9836 9.89772 25.8561 9.72714C25.7286 9.55656 25.5687 9.41279 25.3856 9.30403C25.2025 9.19528 24.9998 9.12369 24.789 9.09334C24.7117 9.08488 6.74016 9.07884 6.74016 9.07884" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M17.5684 13.5439H20.9191" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M9.14478 24.9117C9.23339 24.9079 9.32186 24.9221 9.40485 24.9534C9.48784 24.9847 9.56365 25.0324 9.62769 25.0938C9.69174 25.1552 9.7427 25.2288 9.77752 25.3104C9.81234 25.392 9.83029 25.4798 9.83029 25.5685C9.83029 25.6572 9.81234 25.7449 9.77752 25.8265C9.7427 25.9081 9.69174 25.9818 9.62769 26.0431C9.56365 26.1045 9.48784 26.1523 9.40485 26.1835C9.32186 26.2148 9.23339 26.229 9.14478 26.2252C8.97548 26.2179 8.81552 26.1456 8.6983 26.0232C8.58107 25.9008 8.51563 25.7379 8.51562 25.5685C8.51563 25.399 8.58107 25.2361 8.6983 25.1137C8.81552 24.9914 8.97548 24.919 9.14478 24.9117Z" fill="#272343" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M22.7757 24.9121C22.9504 24.9121 23.1179 24.9815 23.2414 25.105C23.3649 25.2285 23.4343 25.396 23.4343 25.5706C23.4343 25.7453 23.3649 25.9128 23.2414 26.0363C23.1179 26.1598 22.9504 26.2292 22.7757 26.2292C22.6011 26.2292 22.4336 26.1598 22.3101 26.0363C22.1866 25.9128 22.1172 25.7453 22.1172 25.5706C22.1172 25.396 22.1866 25.2285 22.3101 25.105C22.4336 24.9815 22.6011 24.9121 22.7757 24.9121Z" fill="#272343" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>

                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
