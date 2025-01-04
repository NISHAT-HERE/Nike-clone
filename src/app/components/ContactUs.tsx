'use client';

import { useState } from 'react';

const ContactUs = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen bg-white">
      <div className="w-full max-w-[1428px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12">
        {/* Header */}
        <h1 className="text-[24px] font-medium text-center mb-8">CONTACT US</h1>

        {/* Search Bar */}
        <div className="max-w-[600px] mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="What can we help you with?"
              className="w-full h-[48px] pl-4 pr-12 border border-[#e5e5e5] rounded-full focus:outline-none focus:border-[#757575]"
            />
            <button className="absolute right-4 top-1/2 -translate-y-1/2">
            <svg width="25" height="18" viewBox="0 0 25 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.9388 15.2176L17.1563 12.4576C18.2364 11.1109 18.7594 9.40152 18.6179 7.68103C18.4764 5.96053 17.6811 4.35964 16.3954 3.20753C15.1098 2.05543 13.4317 1.43968 11.706 1.4869C9.98033 1.53412 8.33834 2.24072 7.11766 3.46141C5.89697 4.68209 5.19037 6.32408 5.14315 8.04974C5.09593 9.77541 5.71168 11.4536 6.86378 12.7392C8.01589 14.0248 9.61678 14.8201 11.3373 14.9617C13.0578 15.1032 14.7671 14.5801 16.1138 13.5001L18.8738 16.2601C18.9435 16.3303 19.0265 16.3861 19.1179 16.4242C19.2093 16.4623 19.3073 16.4819 19.4063 16.4819C19.5053 16.4819 19.6033 16.4623 19.6947 16.4242C19.7861 16.3861 19.8691 16.3303 19.9388 16.2601C20.074 16.1202 20.1495 15.9333 20.1495 15.7388C20.1495 15.5443 20.074 15.3574 19.9388 15.2176ZM11.9063 13.5001C10.8679 13.5001 9.85291 13.1921 8.98956 12.6153C8.1262 12.0384 7.45329 11.2185 7.05593 10.2591C6.65857 9.29983 6.55461 8.24423 6.75718 7.22583C6.95975 6.20743 7.45976 5.27197 8.19399 4.53774C8.92822 3.80351 9.86368 3.3035 10.8821 3.10093C11.9005 2.89836 12.9561 3.00232 13.9154 3.39968C14.8747 3.79704 15.6946 4.46995 16.2715 5.33331C16.8484 6.19666 17.1563 7.2117 17.1563 8.25005C17.1563 9.64244 16.6032 10.9778 15.6186 11.9624C14.634 12.9469 13.2987 13.5001 11.9063 13.5001Z" fill="#757575"/>
            </svg>
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 xl:gap-24">
          {/* Main Content */}
          <div className="flex-1">
            <h2 className="text-[20px] font-medium mb-6">WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?</h2>
            
            <div className="space-y-4 text-[16px] text-[#111]">
              <p>We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the following payment options:</p>
              
              <p>Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</p>
              
              <p>If you enter your PAN information at checkout, you'll be able to pay for your order with PayTM or a local credit or debit card.</p>
              
              <p>Apple Pay</p>
              
              <p>
                <span className="font-medium">Nike Members</span> can store multiple debit or credit cards in their profile for faster checkout. If you're not already a Member,{' '}
                <a href="/joinus" className="underline hover:text-[#757575]">join us today</a>.
              </p>

              <div className="flex gap-4 my-8">
                <a href="/joinus" className="px-6 h-[40px] bg-black text-white rounded-full flex items-center justify-center hover:bg-[#1f1f1f] transition-colors duration-200">
                  JOIN US
                </a>
                <a href="/product-list" className="px-6 h-[40px] bg-black text-white rounded-full flex items-center justify-center hover:bg-[#1f1f1f] transition-colors duration-200">
                  SHOP NIKE
                </a>
              </div>

              <div className="space-y-6">
                <h3 className="text-[18px] font-medium">FAQs</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Does my card need international purchases enabled?</h4>
                    <p>Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled.</p>
                    <p className="mt-2">Please note, some banks may charge a <a href="#" className="underline hover:text-[#757575]">small transaction fee</a> for international orders.</p>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Can I pay for my order with multiple methods?</h4>
                    <p>No, payment for Nike orders can't be split between multiple payment methods.</p>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">What payment method is accepted for SNKRS orders?</h4>
                    <p>You can use any accepted credit card to pay for your SNKRS order.</p>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Why don't I see Apple Pay as an option?</h4>
                    <p>To see Apple Pay as an option in the Nike App or on Nike.com, you'll need to use a compatible Apple device running the latest OS, be signed in to your iCloud account and have a supported card in your Wallet. Additionally, you'll need to use Safari to use Apple Pay on Nike.com.</p>
                  </div>
                </div>

                <div className="pt-6">
                  <p className="mb-2">Was this answer helpful?</p>
                  <div className="flex gap-4">
                    <button className="p-2 hover:bg-[#f5f5f5] rounded-full">
                    <svg width="19" height="24" viewBox="0 0 19 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.025 12.375C4.525 11.575 5.025 10.75 5.525 9.9L5.975 9.3C6.925 7.95 7.5125 7.125 7.7375 6.825C7.9625 6.525 8.325 5.875 8.825 4.875L9.125 4.275C9.175 4.225 9.225 4.025 9.275 3.675C9.375 2.825 9.525 2.2 9.725 1.8C9.975 1.1 10.375 0.75 10.925 0.75C11.675 0.75 12.225 1.025 12.575 1.575C12.875 2.075 13.025 2.65 13.025 3.3C13.025 3.85 12.75 4.85 12.2 6.3L11.9 7.125C11.8 7.475 11.725 7.95 11.675 8.55L11.525 9.3H14.15L14.975 9.375C15.575 9.425 16.1 9.525 16.55 9.675C17.2 9.825 17.65 10.05 17.9 10.35C18.2 10.75 18.375 11.175 18.425 11.625C18.475 11.925 18.475 12.325 18.425 12.825L17.525 20.325C17.375 21.575 16.775 22.425 15.725 22.875C15.125 23.125 14.35 23.25 13.4 23.25H0.125V12.375H4.025Z" fill="#111111"/>
                    </svg>

                    </button>
                    <button className="p-2 hover:bg-[#f5f5f5] rounded-full">
                    <svg width="19" height="24" viewBox="0 0 19 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.525 14.025L4.025 11.625H0.125V0.75H13.4L14 0.825C14.45 0.875 14.9 0.975 15.35 1.125C15.9 1.325 16.35 1.6 16.7 1.95C17.15 2.45 17.425 3.025 17.525 3.675L18.425 11.1C18.475 11.6 18.475 12 18.425 12.3C18.375 12.8 18.1875 13.2625 17.8625 13.6875C17.5375 14.1125 16.975 14.375 16.175 14.475C15.775 14.575 15.1 14.625 14.15 14.625H11.525L11.675 15.45C11.725 16.05 11.8 16.5 11.9 16.8L12.2 17.7C12.75 19.15 13.025 20.15 13.025 20.7C13.025 21.35 12.875 21.925 12.575 22.425C12.225 22.975 11.675 23.25 10.925 23.25C10.375 23.25 9.975 22.9 9.725 22.2C9.525 21.8 9.375 21.175 9.275 20.325C9.225 19.925 9.175 19.7 9.125 19.65L8.825 18.975C8.325 18.025 7.95 17.3875 7.7 17.0625C7.45 16.7375 6.825 15.875 5.825 14.475L5.525 14.025Z" fill="#111111"/>
                    </svg>

                    </button>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#e5e5e5]">
                  <h3 className="text-[16px] font-medium mb-4">RELATED</h3>
                  <div className="space-y-3">
                    <a href="#" className="block underline hover:text-[#757575]">WHAT ARE NIKE'S DELIVERY OPTIONS?</a>
                    <a href="#" className="block underline hover:text-[#757575]">HOW DO I GET FREE DELIVERY ON NIKE ORDERS?</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Sidebar */}
          <div className="w-full lg:w-[400px] space-y-12">
            <div>
              <h3 className="text-[20px] font-medium mb-6">CONTACT US</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                <svg width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <rect x="0.875" width="64" height="64" fill="url(#pattern0_1_3857)"/>
                <defs>
                <pattern id="pattern0_1_3857" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlinkHref="#image0_1_3857" transform="scale(0.015625)"/>
                </pattern>
                <image id="image0_1_3857" width="64" height="64" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAA9UlEQVR42u3bMQ6DMAyF4UyMXIAzZgxXzNbeJRMbNZKRGKhUGsEL4rf0FoYk/hSYcAj11VmiJVuKZT45xfeKvre0Bsv7gqa/5eVnkFQnbn6LILkJsYHm10QFQP7joL/W0XWzAqA0BFAUAHNjAQAAADQA6gIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM7ZmL/FATieyZIsvSf5s8cApJ31xrsB1EyJ9jvr9aFumvTyyg0BSMbmYkOvgGRwsmZ0dvKG14/gWPERlI3OLjX4AR45PL29Cbcdn/8ANj8tWTu2jFYAAAAASUVORK5CYII="/>
                </defs>
                </svg>

                  <div>
                    <p className="font-medium">000 800 919 0566</p>
                    <p className="text-[14px] text-[#707072]">Products & Orders: 24 hours a day,</p>
                    <p className="text-[14px] text-[#707072]">7 days a week</p>
                    <p className="text-[14px] text-[#707072] mt-1">Company Info & Enquiries: 07:30 -</p>
                    <p className="text-[14px] text-[#707072]">16:30, Monday - Friday</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                <svg width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <rect x="0.875" width="64" height="64" fill="url(#pattern0_1_3863)"/>
                <defs>
                <pattern id="pattern0_1_3863" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlinkHref="#image0_1_3863" transform="scale(0.015625)"/>
                </pattern>
                <image id="image0_1_3863" width="64" height="64" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAACjElEQVR42u2aTUgUYRzGV6MO+ZVrH5If4SpSYfkFCpYReQiCPjxWXq2rBgUJbeBBzx6UkO0gnjx58xIi4sXDQmJ0EEsLCckw1HBjl4V/PHOIcfedd3RaGvbd54GXZWZ4/v//89vZUd7dQICiKIqilBodjcjJgvMSyCvN2oX5kcMTgGwPb4fg7RYwIPzfRQAEQAAEQAAEQAAEQAAEQAAEkGkAjU2dMj4+ITMz72Rk5I2EaptdPRcvtcnY2FvLg1ccu3lQF/XhQT/09R3Ag+4eSSQSYtfe3i9pa+9y9Nzqui+x2O8DHhzjvJMH9VDXLvRFf98AHD9xVjY3v4tK0eh7pScvPyirq5+VHpzHdZUP9VRCf8zhC4CW1puiU2mwJs1TE2rSenA91YM6OmEOXwBcbbyuHay4pDrNU1XdoPXgeqoHdXTCHL4AyD9WJuvrX5VDzc0tOPqWlj4oPTjv5EE9ldAfc/j2EOy8cSft4YTPpe6pjlt2e/vnAQ+Odbcy6qU+b9AX/X3/M4jb9lV4SCKRSXn+IizBspCr51x5vbwcGLQ8eMWxmwd1UR8e9FN9XPiPEAEQAAEQAAEQAAEQAAEQAAEQwL8CUG1oZOOycnjR1NS0tUVVcupC2ioqrvI8EPb9CgorlHUzvTA/cmT8F2TYifESvrCoUmZn5zM/0P+WFwB4RxYXo9kf3guA02fqZHn5oxnhjwqgovKyrKx8Mif8UQDU1rXI2toXs8IfFkDDlQ7Z2PhmXvjDAMAW99bWDzPDuwHouHZbdnZ2zQ2vA4BvePf3Y2aHdwJw995Dicfj5odXAXj0uNf6vj6QK7IDePK0T5LJZO6EtwPofzaQW8HtAMKvh3MzPEVRFGWI/gC0rm3hUNXjQgAAAABJRU5ErkJggg=="/>
                </defs>
                </svg>

                  <div>
                    <p className="text-[14px] text-[#707072]">24 hours a day</p>
                    <p className="text-[14px] text-[#707072]">7 days a week</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                <svg width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <rect x="0.875" width="64" height="64" fill="url(#pattern0_1_3868)"/>
                <defs>
                <pattern id="pattern0_1_3868" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlinkHref="#image0_1_3868" transform="scale(0.015625)"/>
                </pattern>
                <image id="image0_1_3868" width="64" height="64" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAB+UlEQVR42u1Z0U3DQAztD4IFUBdAsADqBMACqBMAE9AJ6ATABHSDMgHdoGyQDcoGQQ/pIsu6kvPlnETte1J+SlXb7+z3fGEyIQiCIAiCIAiCIAiCEDg5PasP4SEBJOBICDifTn0JQICvzaa+ub0bXfEPj0/1bvcTza0YAev1Z/NjCDiW4l+Wyyavqqr8CLiezWoECH9H4KFb/mO1avLZbr+jY1BUAxAAgcJ3kMBQxcs80J3uGiCDy3GALuwL7vHoTnx9ex/GBVLar/RzP5//iZ1Fi1xt8HmxaAIgMZyOV/E6Vqobue8BOAWZGE6pdPG62yxE97IIISFra+aIXc6o9bYJggSZbJs4WX8v13F6XYVL2STmW3ZUl52j97tA6oKSoiklxmmwy5DcFUDCxeWVSexSlpzREqBPsc0mw0VLEpZD4CgIkKeIojG/YZ5jNonCpG7IzVJedHL3jN4IiJ1iKGSfTerPY6IZrrqBBKsm9LYHyP08VkjspFPFThNlcQV3Aiz7ubZJy/YYs9gUcXQlQM9o6n4edAJdY5lrfRNNsVgXAmJeb1VpkJdrb9gyU8WxOAF6lrv6dAmr/U8cixLQRYy8Xo605VOUgHDyOXbk9eiO1ONQ/J0gWt7zxUfu/QN5uXcA/zNEAkjA8RBAEARBEARBEARBEMRB4hejBknIGsSfUgAAAABJRU5ErkJggg=="/>
                </defs>
                </svg>

                  <div>
                    <p className="text-[14px] text-[#707072]">We'll reply within</p>
                    <p className="text-[14px] text-[#707072]">five business days</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                <svg width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <rect x="0.875" width="64" height="64" fill="url(#pattern0_1_3873)"/>
                <defs>
                <pattern id="pattern0_1_3873" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlinkHref="#image0_1_3873" transform="scale(0.015625)"/>
                </pattern>
                <image id="image0_1_3873" width="64" height="64" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAEGUlEQVR42u2aaUhVQRiGb5qVS7S5p2m4kpWVmiVK2WL1o2yzfVWoSH9EKVQWlaKmoqLpJXFLTStKhQpUMMkwi5SEEKV+hFkgBrkEmor6xTdwQk295+qdOXOXBz5EPWfmfd9775m5MyOT6dDBhK9fWyErqwBOnroAnl5bYImpA+jPNgXZrEXkJ/6Of8f/43V4vdqb7uv7A5mZD8B7wzZiVNnC+/B+bEetjA8NDUFGRjZYWrlMy/j4wnawPWyXe/NNTS3g4emvEuPjC9vF9rk1X1DwGIyMramYFwrbx364Mx8bm0zV+Pgi/fFCXFwKU/NCkX6lpqjoqSTmhSL9S0VLyxcwNlkqaQDYP+pgbn54eBjWe2+V1LxQqAP1MA0AZ2s8mBeK6GHFwMAA2C5byVUAqAd1MQkgN/chV+aFIrpY4Ou3i8sAiC7atLX94NK8UEQfTfLyirgOgOijSXBIGNcBEH002egTIJk5Pf0lCq8h+mhiZu4kWrCNrRu4r/GbtmFcKcJJzrnzlyBgx36wsHRWeA/RRxODOeaixBsaWUF5eZWoV210OTl7wsXQcCgtfQFVVa/hzNlQmGdoKfp+oo8qIoXI5TlQXf1G1Ct2+EgwZGcXwrdv32FwcBCKi5/BjD5qNBHzaqxw2wAjIyPQ2dkFCxfZ/7eggW/nxMR70Nj4iVyHtLd3wK3bd2e8jEb00cTOfrVCETExSSCAq7tJSRmQkiKHmpq30N/fD6Opq/sAR46GwJy5Fip5UBJ9NAnce1yhiMLCJzAVGAKO12vXbVL5SEH00SQ+PlWhiMtXIic0jrO0q9fukD0AWkMl0Ud7EUTM8HU9Mpq8vWtr30N6ehZs9t+t9IgwnWKyOLJylQ+Xs0CiiwX4UOMxAKKLBd3dPWAy34Yr86gHdTFbFQqPuMlVAEQPS3796oQFC+24MI86UA/zleGEhDQuAiA6pADn7avdfSU1j/2jDsk2R+rrPzIZ3ydbH8D+Jd8ei45OlCQA0i8P4K7M9oB9TM1jf8x3gxSNCi6uXkzMYz+SPPUVgV99zS2cqZrH9rk+QNXQ0EhtlojtYvvcnxOqrKxW+ciA7VVUvFKf02KpqfdVGkByslz9zg0eDDqtEvN7951Qz0OTXV3dYL/cfUbmcW+Byye+WN69q/93JFbZmqW3mCykytSd6X51Dg2LUH/zSG9vHzg6eSh94qOn57dmBIDgNpcyAZSVvdQc8wJBh86IMo87RzJNpLW1jWyaTmV+toEZNDd/1swAkBs3Y7TjwTcZ+GAzNXOcdK7f0fFTswNA0tIyJwwgKipB880jeKDRwXHdGPNW1q6Aw6VMWygpeT4mgPz8R9pjXmBP4DFifsfOA9pnHsFDExgAngzRBaALQAvJyXmo3QEI5461NgAdHPAXndYJOQzqOzwAAAAASUVORK5CYII="/>
                </defs>
                </svg>

                  <div>
                    <p className="font-medium">STORE LOCATOR</p>
                    <p className="text-[14px] text-[#707072]">Find Nike retail stores near you</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;