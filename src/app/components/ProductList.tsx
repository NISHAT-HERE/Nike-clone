'use client';

import Image from 'next/legacy/image';

const categories = [
  'Shoes',
  'Sports Bras',
  'Tops & T-Shirts',
  'Hoodies & Sweatshirts',
  'Jackets',
  'Trousers & Tights',
  'Shorts',
  'Tracksuits',
  'Jumpsuits & Rompers',
  'Skirts & Dresses',
  'Socks',
  'Accessories & Equipment'
];

const products = [
  {
    id: 1,
    name: "Nike Air Force 1 Mid '07",
    category: "Men's Shoes",
    price: "₹ 10,795.00",
    colors: "1 Colour",
    image: "/product1.svg",
    tag: "Just In"
  },
  {
    id: 2,
    name: "Nike Court Vision Low Next Nature",
    category: "Men's Shoes",
    price: "₹ 4,995.00",
    colors: "1 Colour",
    image: "/product2.svg",
    tag: "Just In"
  },
  {
    id: 3,
    name: "Nike Air Force 1 PLT.AF.ORM",
    category: "Women's Shoes",
    price: "₹ 8,695.00",
    colors: "1 Colour",
    image: "/product3.svg",
    tag: "Just In",
  },
  {
    id: 4,
    name: "Nike Air Force 1 React",
    category: "Men's Shoes",
    price: "₹ 13,295.00",
    colors: "1 Colour",
    image: "/product4.svg",
    tag: "Just In"
  },
  {
    id: 5,
    name: "Air Jordan 1 Elevate Low",
    category: "Women's Shoes",
    price: "₹ 11,895.00",
    colors: "1 Colour",
    image: "/product5.svg",
    tag: "Promo Exclusion"
  },
  {
    id: 6,
    name: "Nike Standard Issue",
    category: "Women's Basketball Jersey",
    price: "₹ 2,895.00",
    colors: "1 Colour",
    image: "/product6.svg",
    tag: "Just In"
  },
  {
    id: 7,
    name: "Nike Dunk Low Retro SE",
    category: "Men's Shoes",
    price: "₹ 9,695.00",
    colors: "1 Colour",
    image: "/product7.svg",
    tag: "Promo Exclusion"
  },
  {
    id: 8,
    name: "Nike Dri-FIT UV Hyverse",
    category: "Men's Short-Sleeve Graphic Fitness Top",
    price: "₹ 2,495.00",
    colors: "1 Colour",
    image: "/product8.svg",
    tag: "Sustainable Materials"
  },
  {
    id: 9,
    name: "Nike Court Vision Low",
    category: "Men's Shoes",
    price: "₹ 5,695.00",
    colors: "1 Colour",
    image: "/product9.svg",
    tag: "Just In"
  },
  {
    id: 10,
    name: "Nike Dri-FIT Ready",
    category: "Men&#39;s Short-Sleeve Fitness Top",
    price: "₹ 2,495.00",
    colors: "3 Colour",
    image: "/product10.svg",
    tag: "Sustainable Materials"
  },
  {
    id: 11,
    name: "Serena Williams Design Crew",
    category: "Women&#39;s Full-zip Top",
    price: "₹ 3 395.00",
    colors: "1 Colour",
    image: "/product11.svg",
    tag: "Just In"
  },
  {
    id: 12,
    name: "Nike Air Force 1 LV8 3",
    category: "Older Kids&#39; S h o e",
    price: "₹  7 495.0 ",
    colors: "1 Colour",
    image: "/product12.svg",
    tag: "Just In"
  },
  {
    id: 13,
    name: "Nike Blazer Low Platform",
    category: "Women9;s Shoes",
    price: "₹ 8 195.00",
    colors: "1 Colour",
    image: "/product13.svg",
    tag: "Just In"
  },
  {
    id: 14,
    name: "Nike Air Force 1 &#39;07",
    category: "Women&#39;s Shoe",
    price: "₹ 2,495.00",
    colors: "2 Colour",
    image: "/product14.svg",
    tag: "Just In"
  },
  {
    id: 15,
    name: "Nike Pro Dri-FIT",
    category: "Men&#39;s Tight-Fit Sleeveless Top",
    price: "₹ 2,495.00",
    colors: "1 Colour",
    image: "/product15.svg",
    tag: "Just In"
  },
  {
    id: 16,
    name: "Nike Dunk Low Retro",
    category: "Men&#39;s Shoes",
    price: "₹ 8 695.00",
    colors: "1 Colour",
    image: "/product16.svg",
    tag: "Just In"
  },
  {
    id: 17,
    name: "Nike Air Max SC",
    category: "Women&#39;s Shoes",
    price: "₹ 2,495.00",
    colors: "2 Colour",
    image: "/product17.svg",
    tag: "Just In"
  },
  {
    id: 18,
    name: "Nike Dri-FIT UV Miler",
    category: "Men&#39;s Short-Sleeve Running Top",
    price: "₹ 1 695.00",
    colors: "1 Colour",
    image: "/product18.svg",
    tag: "Just In"
  },
  {
    id: 19,
    name: "Nike Air Max SYSTM",
    category: "Older Kids&#39: Shoes.",
    price: "₹ 2,495.00",
    colors: "1 Colour",
    image: "/product19.svg",
    tag: "Just In"
  },
  {
    id: 20,
    name: "Nike Court Legacy Lift",
    category: "Women&#39;s Shoes",
    price: "₹ 2,495.00",
    colors: "2 Colour",
    image: "/product20.svg",
    tag: "Just In"
  },
  {
    id: 21,
    name: "Air Jordan 1 Low",
    category: "Women&#39;s Shoes",
    price: "₹ 2,495.00",
    colors: "1 Colour",
    image: "/product21.svg",
    tag: "Just Ins"
  },
  {
    id: 22,
    name: "Air Jordan 1 Mid SE",
    category: "Men&#39;s Shoes",
    price: "₹ 2,495.00",
    colors: "1 Colour",
    image: "/product22.svg",
    tag: "Just In"
  },
  {
    id: 23,
    name: "Nike Air Max TW SE",
    category: "Men&#39:s S h o e s",
    price: "₹ 2,495.00",
    colors: "1 Colour",
    image: "/product23.svg",
    tag: "Sustainable Materials"
  },
  {
    id: 24,
    name: "Nike Air Force 1 Mid &#39;07",
    category: "Men&#39;s Shoes",
    price: "₹ 2,495.00",
    colors: "1 Colour",
    image: "/product24.svg",
    tag: "Nike Air Max 90 SE"
  },
  {
    id: 25,
    name: "Nike Dri-FIT AeroBill",
    category: "Men&#39;s Shoes",
    price: "₹ 2,495.00",
    colors: "1 Colour",
    image: "/product25.svg",
    tag: "Just In"
  },
  {
    id: 26,
    name: "Nike Air Force 1 Mid &#39;07",
    category: "Men&#39;s Shoes",
    price: "₹ 2,495.00",
    colors: "1 Colour",
    image: "/product26.svg",
    tag: "Nike Gripknit Phantom GX Elite Fusion FG"
  },
  {
    id: 27,
    name: "Nike Air Max SYSTM",
    category: "Men&#39;s Shoes",
    price: "₹ 2,495.00",
    colors: "7 Colour",
    image: "/product27.svg",
    tag: "Just In"
  },
  {
    id: 28,
    name: "Nike Shoes",
    category: "Men&#39;s Shoes",
    price: "₹ 2,495.00",
    colors: "1 Colour",
    image: "/product28.svg",
    tag: "Just In"
  },
  {
    id: 29,
    name: "Nike Shoes",
    category: "Men&#39;s Shoes",
    price: "₹ 2,495.00",
    colors: "1 Colour",
    image: "/product29.svg",
    tag: "Just In"
  },
  {
    id: 30,
    name: "Nike Shoes",
    category: "Men&#39;s Shoes",
    price: "₹ 2,495.00",
    colors: "1 Colour",
    image: "/product30.svg",
    tag: "Just In"
  },
  {
    id: 31,
    name: "Nike Shoes",
    category: "Men&#39;s Shoes",
    price: "₹ 2,495.00",
    colors: "1 Colour",
    image: "/product31.svg",
    tag: "Just In"
  },
  {
    id: 32,
    name: "Nike Shoes",
    category: "Men&#39;s Shoes",
    price: "₹ 2,495.00",
    colors: "1 Colour",
    image: "/product32.svg",
    tag: "Just In"
  },
  {
    id: 33,
    name: "Nike Shoes",
    category: "Men&#39;s Shoes",
    price: "₹ 2,495.00",
    colors: "1 Colour",
    image: "/product33.svg",
    tag: "Just In"
  },
  {
    id: 34,
    name: "Nike Shoes",
    category: "Men&#39;s Shoes",
    price: "₹ 2,495.00",
    colors: "1 Colour",
    image: "/product34.svg",
    tag: "Just In"
  },
  {
    id: 35,
    name: "Nike Shoes",
    category: "Men&#39;s Shoes",
    price: "₹ 2,495.00",
    colors: "1 Colour",
    image: "/product35.svg",
    tag: "Just In"
  },
  {
    id: 36,
    name: "Nike Shoes",
    category: "Men&#39;s Shoes",
    price: "₹ 2,495.00",
    colors: "1 Colour",
    image: "/product36.svg",
    tag: "Just In"
  },
  {
    id: 37,
    name: "Nike Shoes",
    category: "Men&#39;s Shoes",
    price: "₹ 2,495.00",
    colors: "1 Colour",
    image: "/product37.svg",
    tag: "Just In"
  },
  {
    id: 38,
    name: "Nike Shoes",
    category: "Men&#39;s Shoes",
    price: "₹ 2,495.00",
    colors: "1 Colour",
    image: "/product38.svg",
    tag: "Just In"
  },
  {
    id: 39,
    name: "Nike Shoes",
    category: "Men&#39;s Shoes",
    price: "₹ 2,495.00",
    colors: "1 Colour",
    image: "/product39.svg",
    tag: "Just In"
  },
  {
    id: 40,
    name: "Nike Shoes",
    category: "Men&#39;s Shoes",
    price: "₹ 2,495.00",
    colors: "1 Colour",
    image: "/product40.svg",
    tag: "Just In"
  },
  {
    id: 41,
    name: "Nike Shoes",
    category: "Men&#39;s Shoes",
    price: "₹ 2,495.00",
    colors: "1 Colour",
    image: "/product41.svg",
    tag: "Just In"
  },
  {
    id: 42,
    name: "Nike Shoes",
    category: "Men&#39;s Shoes",
    price: "₹ 2,495.00",
    colors: "1 Colour",
    image: "/product42.svg",
    tag: "Just In"
  },
  {
    id: 43,
    name: "Nike Shoes",
    category: "Men&#39;s Shoes",
    price: "₹ 2,495.00",
    colors: "9 Colour",
    image: "/product43.svg",
    tag: "Just In"
  },
  {
    id: 44,
    name: "Nike Shoes",
    category: "Men&#39;s Shoes",
    price: "₹ 2,495.00",
    colors: "11 Colour",
    image: "/product44.svg",
    tag: "Just In"
  },
  {
    id: 45,
    name: "Nike Shoes",
    category: "Men&#39;s Shoes",
    price: "₹ 2,495.00",
    colors: "13 Colour",
    image: "/product45.svg",
    tag: "Just In"
  }
];

const relatedCategories = [
  'Best Selling Products',
  'Best Shoes',
  'New Basketball Shoes',
  'New Football Shoes',
  "New Men's Shoes",
  'New Running Shoes',
  "Best Men's Shoes",
  'New Jordan Shoes',
  "Best Women's Shoes",
  'Best Training & Gym'
];

const ProductList = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      <div className="max-w-[1920px] mx-auto px-5 sm:px-8 md:px-10 lg:px-12 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-[24px] font-medium">New (500)</h1>
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2">
              Hide Filters
              <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.5312 8.25H10.5312M5.28125 8.25H3.53125" stroke="#111111" strokeWidth="1.5"/>
              <path d="M8.03125 6C7.73578 6 7.44319 6.0582 7.17021 6.17127C6.89723 6.28434 6.64919 6.45008 6.44026 6.65901C6.23133 6.86794 6.06559 7.11598 5.95252 7.38896C5.83945 7.66194 5.78125 7.95453 5.78125 8.25C5.78125 8.54547 5.83945 8.83806 5.95252 9.11104C6.06559 9.38402 6.23133 9.63206 6.44026 9.84099C6.64919 10.0499 6.89723 10.2157 7.17021 10.3287C7.44319 10.4418 7.73578 10.5 8.03125 10.5C8.62799 10.5 9.20028 10.2629 9.62224 9.84099C10.0442 9.41903 10.2812 8.84674 10.2812 8.25C10.2812 7.65326 10.0442 7.08097 9.62224 6.65901C9.20028 6.23705 8.62799 6 8.03125 6Z" stroke="#111111" strokeWidth="1.5"/>
              <path d="M3.53125 15.75H14.2812M19.2812 15.75H21.5312" stroke="#111111" strokeWidth="1.5"/>
              <path d="M17.0312 13.5C16.4345 13.5 15.8622 13.7371 15.4403 14.159C15.0183 14.581 14.7812 15.1533 14.7812 15.75C14.7812 16.3467 15.0183 16.919 15.4403 17.341C15.8622 17.7629 16.4345 18 17.0312 18C17.628 18 18.2003 17.7629 18.6222 17.341C19.0442 16.919 19.2812 16.3467 19.2812 15.75C19.2812 15.1533 19.0442 14.581 18.6222 14.159C18.2003 13.7371 17.628 13.5 17.0312 13.5Z" stroke="#111111" strokeWidth="1.5"/>
              </svg>

            </button>
            <button className="flex items-center gap-2">
              Sort By
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                <path stroke="#111" strokeWidth="1.5" d="M6 9l6 6 6-6"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <div className="w-[240px] flex-shrink-0">
            <div className="space-y-6">
              {/* Categories */}
              <div className="space-y-2">
                {categories.map((category: string) => (
                  <div key={category} className="flex items-center gap-3">
                    <input type="checkbox" className="w-5 h-5 border-gray-300 rounded" />
                    <span className="text-[16px]">{category}</span>
                  </div>
                ))}
              </div>

              {/* Gender */}
              <div className="pt-6 border-t border-gray-200">
                <h3 className="text-[16px] font-medium mb-4">Gender</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <input type="checkbox" className="w-5 h-5 border-gray-300 rounded" />
                    <span className="text-[16px]">Men</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <input type="checkbox" className="w-5 h-5 border-gray-300 rounded" />
                    <span className="text-[16px]">Women</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <input type="checkbox" className="w-5 h-5 border-gray-300 rounded" />
                    <span className="text-[16px]">Unisex</span>
                  </div>
                </div>
              </div>

              {/* Kids */}
              <div className="pt-6 border-t border-gray-200">
                <h3 className="text-[16px] font-medium mb-4">Kids</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <input type="checkbox" className="w-5 h-5 border-gray-300 rounded" />
                    <span className="text-[16px]">Boys</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <input type="checkbox" className="w-5 h-5 border-gray-300 rounded" />
                    <span className="text-[16px]">Girls</span>
                  </div>
                </div>
              </div>

              {/* Shop by Price */}
              <div className="pt-6 border-t border-gray-200">
                <h3 className="text-[16px] font-medium mb-4">Shop by Price</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <input type="checkbox" className="w-5 h-5 border-gray-300 rounded" />
                    <span className="text-[16px]">Under ₹ 2,500.00</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <input type="checkbox" className="w-5 h-5 border-gray-300 rounded" />
                    <span className="text-[16px]">₹ 2,501.00 - ₹</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-8">
              {products.map((product) => (
                <div key={product.id} className="group cursor-pointer">
                  {product.id === 1 ? (
                    <a href={`/product-detail1`}>
                      <div className="relative aspect-square bg-[#f5f5f5] mb-3">
                        <Image
                          src={product.image}
                          alt={product.name}
                          layout="fill"
                          objectFit="cover"
                          className="transition-transform duration-300 group-hover:scale-105"
                        />
                        {product.tag && (
                          <span className="absolute top-3 left-3 text-[12px] text-[#111]">
                            {product.tag}
                          </span>
                        )}
                      </div>
                    </a>
                  ) : product.id === 2 ? (
                    <a href={`/product-detail2`}>
                      <div className="relative aspect-square bg-[#f5f5f5] mb-3">
                        <Image
                          src={product.image}
                          alt={product.name}
                          layout="fill"
                          objectFit="cover"
                          className="transition-transform duration-300 group-hover:scale-105"
                        />
                        {product.tag && (
                          <span className="absolute top-3 left-3 text-[12px] text-[#111]">
                            {product.tag}
                          </span>
                        )}
                      </div>
                    </a>
                  ) : product.id === 3 ? (
                    <a href={`/product-detail3`}>
                      <div className="relative aspect-square bg-[#f5f5f5] mb-3">
                        <Image
                          src={product.image}
                          alt={product.name}
                          layout="fill"
                          objectFit="cover"
                          className="transition-transform duration-300 group-hover:scale-105"
                        />
                        {product.tag && (
                          <span className="absolute top-3 left-3 text-[12px] text-[#111]">
                            {product.tag}
                          </span>
                        )}
                      </div>
                    </a>
                  ) : product.id === 4 ? (
                    <a href={`/product-detail4`}>
                      <div className="relative aspect-square bg-[#f5f5f5] mb-3">
                        <Image
                          src={product.image}
                        alt={product.name}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300 group-hover:scale-105"
                      />
                      {product.tag && (
                        <span className="absolute top-3 left-3 text-[12px] text-[#111]">
                          {product.tag}
                        </span>
                      )}
                    </div>
                  </a>
                ) : product.id === 5 ? (
                    <a href={`/product-detail5`}>
                      <div className="relative aspect-square bg-[#f5f5f5] mb-3">
                        <Image
                          src={product.image}
                          alt={product.name}
                          layout="fill"
                          objectFit="cover"
                          className="transition-transform duration-300 group-hover:scale-105"
                        />
                        {product.tag && (
                          <span className="absolute top-3 left-3 text-[12px] text-[#111]">
                            {product.tag}
                          </span>
                        )}
                      </div>
                    </a>
                  ) : product.id === 6 ? (
                    <a href={`/product-detail6`}>
                      <div className="relative aspect-square bg-[#f5f5f5] mb-3">
                        <Image
                          src={product.image}
                          alt={product.name}
                          layout="fill"
                          objectFit="cover"
                          className="transition-transform duration-300 group-hover:scale-105"
                        />
                        {product.tag && (
                          <span className="absolute top-3 left-3 text-[12px] text-[#111]">
                            {product.tag}
                          </span>
                        )}
                      </div>
                    </a>
                  ) : product.id === 7 ? (
                    <a href={`/product-detail7`}>
                      <div className="relative aspect-square bg-[#f5f5f5] mb-3">
                        <Image
                          src={product.image}
                          alt={product.name}
                          layout="fill"
                          objectFit="cover"
                          className="transition-transform duration-300 group-hover:scale-105"
                        />
                        {product.tag && (
                          <span className="absolute top-3 left-3 text-[12px] text-[#111]">
                            {product.tag}
                          </span>
                        )}
                      </div>
                    </a>
                  ) : product.id === 8 ? (
                    <a href={`/product-detail8`}>
                      <div className="relative aspect-square bg-[#f5f5f5] mb-3">
                        <Image
                          src={product.image}
                          alt={product.name}
                          layout="fill"
                          objectFit="cover"
                          className="transition-transform duration-300 group-hover:scale-105"
                        />
                        {product.tag && (
                          <span className="absolute top-3 left-3 text-[12px] text-[#111]">
                            {product.tag}
                          </span>
                        )}
                      </div>
                    </a>
                  ) : product.id === 9 ? (
                    <a href={`/product-detail9`}>
                      <div className="relative aspect-square bg-[#f5f5f5] mb-3">
                        <Image
                          src={product.image}
                          alt={product.name}
                          layout="fill"
                          objectFit="cover"
                          className="transition-transform duration-300 group-hover:scale-105"
                        />
                        {product.tag && (
                          <span className="absolute top-3 left-3 text-[12px] text-[#111]">
                            {product.tag}
                          </span>
                        )}
                      </div>
                    </a>
                  ) : (
                  
                    <div className="relative aspect-square bg-[#f5f5f5] mb-3">
                      <Image
                        src={product.image}
                        alt={product.name}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300 group-hover:scale-105"
                      />
                      {product.tag && (
                        <span className="absolute top-3 left-3 text-[12px] text-[#111]">
                          {product.tag}
                        </span>
                      )}
                    </div>
                  )}
                  <div className="space-y-1">
                    <div className="flex justify-between items-start">
                      <h3 className="text-[16px] font-medium flex-1 pr-2">{product.name}</h3>
                      <span className="text-[16px] whitespace-nowrap">{product.price}</span>
                    </div>
                    <p className="text-[16px] text-[#707072]">{product.category}</p>
                    <p className="text-[16px] text-[#707072]">{product.colors}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        

        {/* Loading Indicator */}
        <div className="flex justify-center mt-16 mb-20">
          <div className="w-8 h-8 border-2 border-[#e5e5e5] border-t-[#111] rounded-full animate-spin"></div>
        </div>

        {/* Related Categories */}
        <div className="mt-8 border-t border-[#e5e5e5] pt-12">
          <h2 className="text-[24px] font-medium mb-6">Related Categories</h2>
          <div className="flex flex-wrap gap-x-3 gap-y-4">
            {relatedCategories.map((category: string) => (
              <a
                key={category}
                href={`#${category.toLowerCase().replace(/\s+/g, '-')}`}
                className="px-[18px] py-[10px] rounded-full border border-[#e5e5e5] text-[16px] hover:border-[#757575] transition-colors duration-200"
              >
                {category}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList; 