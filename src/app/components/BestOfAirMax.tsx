'use client'

import { MdChevronLeft, MdChevronRight } from "react-icons/md"
import Image from "next/legacy/image"
import { useRef } from "react"

const products = [
  {
    id: 1,
    name: "Nike Air Max Pulse",
    category: "Women's Shoes",
    price: "₹ 13,995",
    image: "/Image1.png"
  },
  {
    id: 2,
    name: "Nike Air Max Pulse",
    category: "Men's Shoes",
    price: "₹ 13,995",
    image: "/Image2.png"
  },
  {
    id: 3,
    name: "Nike Air Max 97 SE",
    category: "Men's Shoes",
    price: "₹ 16,995",
    image: "/Image3.png"
  },
  {
    id: 4,
    name: "Nike Air Max 97",
    category: "Women's Shoes",
    price: "₹ 16,995",
    image: "/Image4.png"
  }
]

export default function BestOfAirMax() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400
      scrollContainerRef.current.scrollLeft += direction === 'left' ? -scrollAmount : scrollAmount
    }
  }

  return (
    <section className="w-full px-12 py-16">
      <div className="max-w-[1344px] mx-auto">
      <div className="flex justify-between items-center mb-[32px]">
        <h2 className="text-[24px] font-medium">Best of Air Max</h2>
        <div className="flex items-center">
          <a href="/shop" className="mr-[24px] text-[16px] hover:opacity-70">
            Shop
          </a>
          <div className="flex gap-[8px]">
            <button
              className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[#e5e5e5] hover:bg-[#ccc] transition-colors"
              onClick={() => scroll('left')}
              aria-label="Scroll left"
            >
              <MdChevronLeft className="w-6 h-6" />
            </button>
            <button
              className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[#e5e5e5] hover:bg-[#ccc] transition-colors"
              onClick={() => scroll('right')}
              aria-label="Scroll right"
            >
              <MdChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto gap-[24px] scroll-smooth hide-scrollbar"
      >
        {products.map((product) => (
          <a 
            href={`/products/${product.id}`} 
            key={product.id} 
            className="group flex-none w-[calc(33.333%-16px)] min-w-[300px]"
          >
            <div className="relative aspect-square bg-[#f5f5f5] mb-[16px] rounded-lg overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                layout="fill"
                objectFit="contain"
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="space-y-[4px]">
              <h3 className="text-[16px]">{product.name}</h3>
              <p className="text-[16px] text-[#707072]">{product.category}</p>
              <p className="text-[16px]">{product.price}</p>
            </div>
          </a>
        ))}
      </div>
      </div>
    </section>
  )
}
