'use client';

import { useState } from 'react';
import Image from 'next/legacy/image';
import AddToCart from '../components/AddToCart';

const sizes = ['6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11', '11.5', '12'];

const product = {
  id: 45,
  name: "Nike Air Force 1 Mid '07",
  price: "₹ 10,795.00",
  description: "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its \"inside out\"-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.",
  image: "/product45.svg",
  category: "Men's Shoes",
  color: "White/Black",
};

export default function ProductDetail45() {
  const [selectedSize, setSelectedSize] = useState<string>('');

  return (
    <div className="w-full min-h-screen bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Product Image */}
          <div className="flex-1">
            <div className="relative aspect-square bg-[#f5f5f5]">
              <Image
                src={product.image}
                alt={product.name}
                layout="fill"
                objectFit="contain"
                priority
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="flex-1 space-y-6">
            <div>
              <h1 className="text-[24px] font-medium mb-2">{product.name}</h1>
              <p className="text-[16px] text-[#707072] mb-4">{product.category}</p>
              <p className="text-[16px] font-medium">{product.price}</p>
            </div>

            {/* Size Selection */}
            <div>
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
            <AddToCart product={product} selectedSize={selectedSize} />

            {/* Product Description */}
            <div className="pt-6 border-t border-gray-200">
              <p className="text-[16px] leading-relaxed">{product.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
