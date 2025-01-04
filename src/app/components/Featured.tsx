'use client';

import Image from 'next/legacy/image';

const Featured = () => {
  return (
    <section className="w-full px-12 py-16">
      <div className="max-w-[1344px] mx-auto">
      <div className="container mx-auto text-center">
        <h2 className="text-[30px] font-midium mb-7 text-left">Featured</h2>
        <div className="relative">
          <Image
            src="/featured.svg" // Replace with your image path
            alt="Featured Image"
            layout="responsive"
            width={1344} // Adjust width as needed
            height={700} // Adjust height as needed
            className="object-cover"
          />
        </div>
        <h3 className="text-5xl font-bold mt-9 ">STEP INTO WHAT FEELS GOOD</h3>
        <p className="text-[12.9px] mt-4 mb-8">
          Cause everyone should know the feeling of running in that perfect pair.
        </p>
        <a href="/product-list"
         className="inline-block bg-black text-white py-2 px-6 rounded-full hover:bg-gray-800 transition">
        Find Your Shoe
        </a>
      </div>
      </div>
    </section>
  );
};

export default Featured;
