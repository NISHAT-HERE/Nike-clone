import Image from 'next/image';
import { Metadata } from 'next';

// This type matches the API response structure
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

// Generate static metadata
export const metadata: Metadata = {
  title: 'Products | Nike Clone',
  description: 'Browse our collection of products',
};

// This function runs at build time in production
export async function generateStaticParams() {
  const products = await fetch('https://fakestoreapi.com/products?limit=5')
    .then((res) => res.json());
  
  return products.map((product: Product) => ({
    id: product.id.toString(),
  }));
}

// This function runs on the server at request time
async function getProducts() {
  const res = await fetch('https://fakestoreapi.com/products', {
    // This option is required for SSR
    cache: 'no-store'
  });

  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }

  return res.json();
}

export default async function ProductsPage() {
  const products: Product[] = await getProducts();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative h-64 bg-white">
              <Image
                src={product.image}
                alt={product.title}
                fill
                style={{ objectFit: 'contain' }}
                className="p-4"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 line-clamp-2">
                {product.title}
              </h2>
              <p className="text-gray-600 mb-2 line-clamp-3">
                {product.description}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">
                  ${product.price.toFixed(2)}
                </span>
                <div className="flex items-center">
                  <span className="text-yellow-500 mr-1">★</span>
                  <span>{product.rating.rate}</span>
                  <span className="text-gray-500 ml-1">
                    ({product.rating.count})
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 