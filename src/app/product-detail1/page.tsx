'use client';

import { useState } from 'react';
import Image from 'next/legacy/image';
import AddToCart from '../components/AddToCart';

const sizes = ['6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11', '11.5', '12'];

const product = {
  id: 1,
  name: "Nike Air Force 1 Mid '07",
  price: "₹ 10,795.00",
  description: "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its \"inside out\"-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
  image: "/product1.svg",
  category: "Men's Shoes",
  color: "White/Black",
};

export default function ProductDetail() {
  const [selectedSize, setSelectedSize] = useState<string>('');

  return (
    <div className="w-full min-h-screen bg-white">
      <div className="w-full max-w-[1440px] min-h-[1173px] mx-auto px-5 sm:px-8 md:px-10 lg:px-12 py-8">
        <div className="flex flex-col lg:flex-row items-start justify-between">
          {/* Product Image */}
          <div className="w-full sm:w-[480px] md:w-[580px] lg:w-[600px] xl:w-[600px]">
            <div className="relative aspect-square bg-[#f5f5f5] overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
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
              {product.name}
            </h1>
            
            <p className="text-[14px] sm:text-[15px] md:text-[16px] text-[#707072] mb-6 sm:mb-8">
              {product.description}
            </p>

            <div className="text-[20px] sm:text-[22px] md:text-[24px] font-medium mb-6 sm:mb-8">
              {product.price}
            </div>

            {/* Size Selection */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-[16px] font-medium">Select Size</h2>
                <button className="text-[16px] underline">Size Guide</button>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 border rounded-md text-center hover:border-black transition-colors ${
                      selectedSize === size ? 'border-black' : 'border-gray-300'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart */}
            <div className="flex items-center gap-4">
              <AddToCart 
                product={product}
                selectedSize={selectedSize}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}