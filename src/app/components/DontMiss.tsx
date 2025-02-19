'use client';

import Image from 'next/legacy/image';

const DontMiss = () => {
  return (
    <section className="w-full px-5 sm:px-8 md:px-12 py-8 sm:py-12 md:py-16">
      <div className="max-w-[1344px] mx-auto">
        <h2 className="text-[24px] font-medium mb-8">Don't Miss</h2>
        
        
          {/* Left Image */}
          <div className="relative aspect-[1344/700]">
            <Image
              src="/dontmiss.png"
              alt="Jordan Brand Spring 2023"
              layout="fill"
              objectFit="cover"
              priority
              className="object-center"
            />
          </div>
        </div>
        <div className="text-center mt-12">
          <h1 className="lg:text-[45px] mx-auto sm:text-[25px] md:text-[35px] font-bold mb-4 justify-center">FLIGHT ESSENTIALS</h1>
          <p className="text-[12.6px] sm:text[1px]mb-6">Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.</p>
          <br/>
        <a href="/product-list">
          <button className="bg-black text-white px-6 py-2 rounded-full hover:opacity-80">Shop</button>
          </a>
        </div>
      
    </section>
  );
};

export default DontMiss;
