'use client';
import Image from 'next/legacy/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className="w-full">
      {/* App Banner */}
      <div className="bg-[#f5f5f5] text-center py-2 sm:py-3 space-y-0.5 sm:space-y-1 border-b">
        <p className="bg:F5F5F5 font-medium text-black text-sm sm:text-base">Hello Nike App</p>
        <p className="text-[10px] sm:text-xs text-black">
          Download the app to access everything Nike.{' '}
          <a href="/" className="underline font-medium hover:bg-blue text-black">
            Get Your Great
          </a>
        </p>
      </div>

      {/* Hero Content */}
      <div className="mx-auto px-4 sm:px-6 lg:px-9">
        <div className="relative bg-white">
          {/* Main Shoe Image Container */}
          <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[700px] xl:h-[700px]">
            <Image
              src="/hero.png"
              alt="Nike Air Max Pulse"
              layout="fill"
              objectFit="contain"
              priority
              className="object-center"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="max-w-[90%] sm:max-w-2xl lg:max-w-3xl mx-auto text-center py-8 sm:py-12 lg:py-16">
          <p className="text-xs sm:text-sm font-medium mb-2 sm:mb-4 text-black">First Look</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight font-medium tracking-tight mb-4 sm:mb-6 text-black">
            NIKE AIR MAX PULSE
          </h1>
          <p className="text-base sm:text-[10px] lg:text-[13.5px] leading-normal mb-6 sm:mb-8 text-black px-4">
            Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
            {/* Only show line break on larger screens */}
            <span className="hidden sm:inline">
              <br />
            </span>
            —designed to push you past your limits and help you go to the max.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4">
            <button className="w-full sm:w-auto bg-black text-white px-4 sm:px-6 py-2.5 rounded-full hover:bg-gray-800 text-sm font-medium">
              Notify Me
            </button>
            <Link href="/product-list">
              <button className="w-full sm:w-auto bg-black text-white px-4 sm:px-6 py-2.5 rounded-full hover:bg-gray-800 text-sm font-medium">
                Shop Air Max
              </button>
            </Link>
          </div>
          <div className="mt-6 sm:mt-8">
            <Link href="/" className="bg-[#111] text-white px-6 py-3 rounded-full inline-block hover:bg-gray-800 transition-colors duration-200">
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection; 