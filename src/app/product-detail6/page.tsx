'use client';

import Image from 'next/legacy/image';
import { useState } from 'react';
import AddToCart from '../components/AddToCart';

const sizes = ['XS', 'S', 'M', 'L', 'XL'];

const ProductDetail6 = () => {
  const [selectedSize, setSelectedSize] = useState('');

  const product = {
    id: 6,
    name: "Nike Standard Issue Women's Basketball Jersey",
    price: 2895.00,
    image: "/product6.svg",
    category: "Women's Basketball",
    color: "Black"
  };

  return (
    <div className="w-full min-h-screen bg-white">
      <div className="w-full max-w-[1440px] min-h-[1173px] mx-auto px-5 sm:px-8 md:px-10 lg:px-12 py-8">
        <div className="flex flex-col lg:flex-row items-start justify-between">
          {/* Product Image */}
          <div className="w-full sm:w-[480px] md:w-[580px] lg:w-[600px] xl:w-[600px]">
            <div className="relative aspect-square bg-[#f5f5f5] overflow-hidden">
              <Image
                src="/product6.svg"
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
              {product.name}
            </h1>
            
            <div className="text-[14px] sm:text-[15px] md:text-[16px] text-[#707072] mb-6 sm:mb-8">
              Turn style on its head with this crafted take on the
              <br />
              Women's Basketball Jersey. Its "inside out"-inspired
              <br />
              construction, including unique layering and
              <br />
              exposed foam accents, ups the ante on this
              <br />
              timeless Women's Basketball Jersey Brand silhouette.
              <br />
              Details like the deco stitching on the Swoosh add coveted
              <br />
              appeal, while the unexpected shading, rich
              <br />
              mixture of materials and aged midsole aesthetic
              <br />
              give this release an artisan finish.
            </div>

            <div className="w-[229px] h-[34px] text-[20px] sm:text-[22px] md:text-[24px] font-medium mb-6 sm:mb-8">
              ₹ {product.price.toFixed(2)}
            </div>

            {/* Size Selection */}
            <div className="mb-6">
              <h3 className="text-[16px] font-medium mb-2">Select Size</h3>
              <div className="flex gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    className={`w-12 h-12 rounded-full border ${
                      selectedSize === size 
                        ? 'border-black bg-black text-white' 
                        : 'border-gray-300 hover:border-gray-500'
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

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
};

export default ProductDetail6;
