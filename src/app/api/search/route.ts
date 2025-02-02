import { NextResponse } from 'next/server';

const products = [
  {
    id: 1,
    name: "Nike Air Force 1 '07",
    category: "Men's Shoes",
    price: 7495,
    image: "/product1.svg",
    description: "The radiance lives on in the Nike Air Force 1 '07, the basketball original that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine.",
  },
  {
    id: 2,
    name: "Nike Dunk Low Retro",
    category: "Men's Shoes",
    price: 8695,
    image: "/product2.svg",
    description: "Created for the hardwood but taken to the streets, this '80s b-ball icon returns with classic details and throwback hoops flair.",
  },
  {
    id: 3,
    name: "Nike Air Max 90",
    category: "Men's Shoes",
    price: 10795,
    image: "/product3.svg",
    description: "Lace up and feel the legacy in this champion running shoe that helped define the '90s.",
  },
  {
    id: 4,
    name: "Nike Air Max Plus",
    category: "Men's Shoes",
    price: 13995,
    image: "/product4.svg",
    description: "Let your attitude have the edge in your Nike Air Max Plus, a Tuned Air experience that offers premium stability and unbelievable cushioning.",
  },
  {
    id: 5,
    name: "Nike Air Max Pulse",
    category: "Men's Shoes",
    price: 13995,
    image: "/product5.svg",
    description: "The Air Max Pulse pulls inspiration from London's music culture, bringing an underground touch to the iconic Air Max line.",
  },
  {
    id: 6,
    name: "Nike Air Max 97",
    category: "Men's Shoes",
    price: 16995,
    image: "/product6.svg",
    description: "Push your style full speed ahead with the Nike Air Max 97. Its iconic design takes inspiration from water droplets and Japanese bullet trains.",
  },
  {
    id: 7,
    name: "Nike Air Max 270",
    category: "Men's Shoes",
    price: 13995,
    image: "/product7.svg",
    description: "Nike's first lifestyle Air Max brings you style, comfort and big attitude in the Nike Air Max 270.",
  },
  {
    id: 8,
    name: "Nike Air VaporMax 2023 Flyknit",
    category: "Men's Shoes",
    price: 19695,
    image: "/product8.svg",
    description: "Have you ever walked on Air? Step into the Air VaporMax 2023 Flyknit to find out.",
  },
  {
    id: 9,
    name: "Nike Zoom Vomero 5",
    category: "Men's Shoes",
    price: 13995,
    image: "/product9.svg",
    description: "Featuring the same cushioning as its predecessor, the Vomero 5 is back with a vengeance.",
  },
  {
    id: 10,
    name: "Nike Air Max Scorpion Flyknit",
    category: "Men's Shoes",
    price: 22995,
    image: "/product10.svg",
    description: "The Air Max Scorpion Flyknit is designed with point-loaded Air cushioning that's engineered to help you stay comfortable while keeping you looking fresh.",
  },
  {
    id: 11,
    name: "Nike Invincible 3",
    category: "Men's Shoes",
    price: 16995,
    image: "/product11.svg",
    description: "With maximum cushioning to support every mile, the Invincible 3 gives you our highest level of comfort underfoot.",
  },
  {
    id: 12,
    name: "Nike Pegasus 40",
    category: "Men's Shoes",
    price: 11895,
    image: "/product12.svg",
    description: "A springy ride for any run, the Peg's familiar, just-for-you feel returns to help you accomplish your goals.",
  },
  {
    id: 13,
    name: "Nike Ultrafly",
    category: "Men's Shoes",
    price: 16995,
    image: "/product13.svg",
    description: "The Nike Ultrafly is built to help you get the most out of your trail running experience.",
  },
  {
    id: 14,
    name: "Nike Alphafly 2",
    category: "Men's Shoes",
    price: 22995,
    image: "/product14.svg",
    description: "Once you take a few strides in the Nike Alphafly 2, you'll never look at your favorite pair of running shoes the same way again.",
  },
  {
    id: 15,
    name: "Nike Vaporfly 3",
    category: "Men's Shoes",
    price: 20695,
    image: "/product15.svg",
    description: "Continue the next evolution of speed with a racing shoe made to help you chase new goals and records.",
  },
  {
    id: 16,
    image: "/product16.svg",
  },
  {
    id: 17,
    image: "/product17.svg",
  },
  {
    id: 18,
    image: "/product18.svg",
  },
  {
    id: 19,
    image: "/product19.svg",
  },
  {
    id: 20,
    image: "/product20.svg",
  },
  {
    id: 21,
    image: "/product21.svg",
  },
  {
    id: 22,
    image: "/product22.svg",
  },
  {
    id: 23,
    image: "/product23.svg",
  },
  {
    id: 24,
    image: "/product24.svg",
  },
  {
    id: 25,
    image: "/product25.svg",
  },
  {
    id: 26,
    image: "/product26.svg",
  },
  {
    id: 27,
    image: "/product27.svg",
  },
  {
    id: 28,
    image: "/product28.svg",
  },
  {
    id: 29,
    image: "/product29.svg",
  },
  {
    id: 30,
    image: "/product30.svg",
  },
  {
    id: 31,
    image: "/product31.svg",
  },
  {
    id: 32,
    image: "/product32.svg",
  },
  {
    id: 33,
    image: "/product33.svg",
  },
  {
    id: 34,
    image: "/product34.svg",
  },
  {
    id: 35,
    image: "/product35.svg",
  },
  {
    id: 36,
    image: "/product36.svg",
  },
  {
    id: 37,
    image: "/product37.svg",
  },
  {
    id: 38,
    image: "/product38.svg",
  },
  {
    id: 39,
    image: "/product39.svg",
  },
  {
    id: 40,
    image: "/product40.svg",
  },
  {
    id: 41,
    image: "/product41.svg",
  },
  {
    id: 42,
    image: "/product42.svg",
  },
  {
    id: 43,
    image: "/product43.svg",
  },
  {
    id: 44,
    image: "/product44.svg",
  },
  {
    id: 45,
    image: "/product45.svg",
  },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q')?.toLowerCase() || '';

  if (!query) {
    return NextResponse.json([]);
  }

  const searchResults = products.filter(product => {
    const searchableText = `${product.name} ${product.category} ${product.description}`.toLowerCase();
    return searchableText.includes(query);
  });

  return NextResponse.json(searchResults);
} 