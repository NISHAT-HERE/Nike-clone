'use client';

import Image from 'next/legacy/image';

const categories = [
  {
    id: 1,
    title: "Men's",
    image: "/theessential1.png",
  },
  {
    id: 2,
    title: "Women's",
    image: "/theessential2.png",
  },
  {
    id: 3,
    title: "Kids'",
    image: "/theessential3.png",
  },
];

const links = {
  icons: [
    { name: 'Air Force 1', href: '/product-list' },
    { name: 'Huarache', href: '/product-list' },
    { name: 'Air Max 90', href: '/product-list' },
    { name: 'Air Max 95', href: '/product-list' },
  ],
  shoes: [
    { name: 'All Shoes', href: '/product-list' },
    { name: 'Custom Shoes', href: '/product-list' },
    { name: 'Jordan Shoes', href: '/product-list' },
    { name: 'Running Shoes', href: '/product-list' },
  ],
  clothing: [
    { name: 'All Clothing', href: '/product-list' },
    { name: 'Modest Wear', href: '/product-list' },
    { name: 'Hoodies & Pullovers', href: '/product-list' },
    { name: 'Shirts & Tops', href: '/product-list' },
  ],
  kids: [
    { name: 'Infant & Toddler Shoes', href: '/product-list' },
    { name: "Kids' Shoes", href: '/product-list' },
    { name: "Kids' Jordan Shoes", href: '/product-list' },
    { name: "Kids' Basketball Shoes", href: '/product-list' },
  ],
};

const TheEssentials = () => {
  return (
    <section className="w-full px-12 py-16">
      <div className="max-w-[1344px] mx-auto">
        <h2 className="text-[24px] font-medium mb-8">The Essentials</h2>
        
        {/* Image Grid */}
        <div className="grid grid-cols-3 gap-6 mb-16">
          {categories.map((category) => (
            <div key={category.id} className="relative aspect-[440/540] group cursor-pointer">
              <Image
                src={category.image}
                alt={category.title}
                layout="fill"
                objectFit="cover"
                className=""
              />
              <div className="absolute bottom-6 left-6">
                <span className="bg-white px-4 py-2 rounded-full text-[16px]">
                  {category.title}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-4 gap-16">
          <div>
            <h3 className="font-medium mb-4">Icons</h3>
            <ul className="space-y-3">
              {links.icons.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-[16px] text-[#707072] hover:text-black">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Shoes</h3>
            <ul className="space-y-3">
              {links.shoes.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-[16px] text-[#707072] hover:text-black">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Clothing</h3>
            <ul className="space-y-3">
              {links.clothing.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-[16px] text-[#707072] hover:text-black">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Kids'</h3>
            <ul className="space-y-3">
              {links.kids.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-[16px] text-[#707072] hover:text-black">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheEssentials;
