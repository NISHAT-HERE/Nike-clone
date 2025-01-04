'use client';

import Image from 'next/legacy/image';

const mensProducts = [
  {
    id: 1,
    name: "Nike Dri-FIT ADV TechKnit Ultra",
    price: "₹ 3,895",
    category: "Men's Short-Sleeve\nRunning Top",
    image: "/gearup1.png",
  },
  {
    id: 2,
    name: "Nike Dri-FIT Challenger",
    price: "₹ 2,495",
    category: "Men's 18cm (approx.) 2-\nin-1 Versatile Shorts",
    image: "/gearup2.png",
  },
];

const womensProducts = [
  {
    id: 1,
    name: "Nike Dri-FIT ADV Run Division",
    price: "₹ 5,295",
    category: "Women's Long-Sleeve\nRunning Top",
    image: "/gearup5.png",
  },
  {
    id: 2,
    name: "Nike Fast",
    price: "₹ 3,795",
    category: "Women's Mid-Rise 7/8 Running\nLeggings with Pockets",
    image: "/gearup6.png",
  },
];

const GearUp = () => {
  return (
    <section className="w-full px-12 py-16">
      <div className="max-w-[1344px] mx-auto">
        <h2 className="text-[24px] font-medium mb-8">Gear Up</h2>
        <div className="flex justify-between items-center mb-4">
            <span className="text-[16px] mr-4"></span>
            <div className="flex items-center">
            <span className="text-[16px] mr-4">Shop Men's</span>
            <div className="flex gap-2">
              <button className="w-[36px] h-[36px] bg-[#e5e5e5] rounded-full flex items-center justify-center hover:opacity-60 transition-opacity">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                  <path stroke="#111" strokeWidth="1.5" d="M15.5 18.5l-7-7 7-7" />
                </svg>
              </button>
              <button className="w-[36px] h-[36px] bg-[#e5e5e5] rounded-full flex items-center justify-center hover:opacity-60 transition-opacity">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                  <path stroke="#111" strokeWidth="1.5" d="M8.5 18.5l7-7-7-7" />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex items-center">
            <span className="text-[16px] mr-4">Shop Women's</span>
            <div className="flex gap-2">
              <button className="w-[36px] h-[36px] bg-[#e5e5e5] rounded-full flex items-center justify-center hover:opacity-60 transition-opacity">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                  <path stroke="#111" strokeWidth="1.5" d="M15.5 18.5l-7-7 7-7" />
                </svg>
              </button>
              <button className="w-[36px] h-[36px] bg-[#e5e5e5] rounded-full flex items-center justify-center hover:opacity-60 transition-opacity">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                  <path stroke="#111" strokeWidth="1.5" d="M8.5 18.5l7-7-7-7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-5">
          {mensProducts.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative aspect-square bg-[#f5f5f5] mb-3">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="space-y-1">
                <div className="flex justify-between items-start">
                  <h3 className="text-[14px] font-medium">{product.name}</h3>
                  <span className="text-[10px]">{product.price}</span>
                </div>
                <p className="text-[16px] text-[#707072] whitespace-pre-line">{product.category}</p>
              </div>
            </div>
          ))}
          {womensProducts.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative aspect-square bg-[#f5f5f5] mb-3">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="space-y-1">
                <div className="flex justify-between items-start">
                  <h3 className="text-[14px] font-medium">{product.name}</h3>
                  <span className="text-[10px]">{product.price}</span>
                </div>
                <p className="text-[16px] text-[#707072] whitespace-pre-line">{product.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GearUp;