'use client';

import { useState, useEffect } from 'react';
import Image from 'next/legacy/image';
import { Product } from '@/app/data/products';
import { useSearchParams } from 'next/navigation';

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
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || '';
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(true);
  const [showSortMenu, setShowSortMenu] = useState(false);
  const [sortOption, setSortOption] = useState('featured');
  const [selectedFilters, setSelectedFilters] = useState({
    categories: new Set<string>(),
    gender: new Set<string>(),
    kids: new Set<string>(),
    price: new Set<string>()
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products');
        if (!response.ok) throw new Error('Failed to fetch products');
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (err) {
        setError('Error loading products');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    let result = [...products];

    if (initialCategory) {
      const category = initialCategory.toLowerCase();
      if (category === 'men') {
        result = result.filter(product => {
          const productCategory = product.category.toLowerCase();
          const productName = product.name.toLowerCase();
          return (productCategory.includes("men's") || productName.includes("men's")) && 
                 !productCategory.includes("women's") && 
                 !productName.includes("women's");
        });
      } else if (category === 'women') {
        result = result.filter(product => {
          const productCategory = product.category.toLowerCase();
          const productName = product.name.toLowerCase();
          return productCategory.includes("women's") || 
                 productName.includes("women's") ||
                 productCategory.includes("bra") || 
                 productCategory.includes("dress") ||
                 productCategory.includes("skirt");
        });
      } else if (category === 'kids') {
        result = result.filter(product => {
          const productCategory = product.category.toLowerCase();
          return (
            productCategory.includes('kids') || 
            productCategory.includes('boys') ||
            productCategory.includes('girls') ||
            productCategory.includes('older kids')
          );
        });
      } else if (category === 'sale') {
        result = result.filter(product => product.tag === 'Sale');
      } else if (category === 'snkrs') {
        result = result.filter(product => product.category.toLowerCase().includes('shoes'));
      }
    }

    if (selectedFilters.categories.size > 0) {
      result = result.filter(product => {
        return Array.from(selectedFilters.categories).some(category => 
          product.category.toLowerCase().includes(category.toLowerCase())
        );
      });
    }

    if (selectedFilters.gender.size > 0) {
      result = result.filter(product => {
        const productCategory = product.category.toLowerCase();
        const productName = product.name.toLowerCase();
        
        return Array.from(selectedFilters.gender).some(gender => {
          const genderFilter = gender.toLowerCase();
          
          if (genderFilter === 'men') {
            return (productCategory.includes("men's") || productName.includes("men's")) && 
                   !productCategory.includes("women's") && 
                   !productName.includes("women's");
          }
          if (genderFilter === 'women') {
            return productCategory.includes("women's") || 
                   productName.includes("women's") ||
                   productCategory.includes("bra") || 
                   productCategory.includes("dress") ||
                   productCategory.includes("skirt");
          }
          if (genderFilter === 'unisex') {
            return !productCategory.includes("men's") && 
                   !productCategory.includes("women's") &&
                   !productName.includes("men's") &&
                   !productName.includes("women's") &&
                   !productCategory.includes("bra") &&
                   !productCategory.includes("dress") &&
                   !productCategory.includes("skirt");
          }
          
          return false;
        });
      });
    }

    if (selectedFilters.kids.size > 0) {
      result = result.filter(product => {
        const productCategory = product.category.toLowerCase();
        return Array.from(selectedFilters.kids).some(kidFilter => {
          const kid = kidFilter.toLowerCase();
          return (
            productCategory.includes('kids') || 
            productCategory.includes(kid.toLowerCase()) ||
            productCategory.includes('older kids')
          );
        });
      });
    }

    if (selectedFilters.price.size > 0) {
      result = result.filter(product => {
        const price = parseInt(product.price.replace(/[^0-9]/g, ''));
        return Array.from(selectedFilters.price).some(range => {
          if (range === 'Under ₹ 2,500.00') {
            return price <= 2500;
          } else if (range === '₹ 2,501.00 - ₹') {
            return price > 2500;
          }
          return false;
        });
      });
    }

    result = sortProducts(result, sortOption);

    setFilteredProducts(result);
  }, [selectedFilters, products, sortOption, initialCategory]);

  const clearAllFilters = () => {
    setSelectedFilters({
      categories: new Set<string>(),
      gender: new Set<string>(),
      kids: new Set<string>(),
      price: new Set<string>()
    });
  };

  const handleFilterChange = (type: keyof typeof selectedFilters, value: string) => {
    setSelectedFilters(prev => {
      const newFilters = { ...prev };
      const filterSet = new Set(prev[type]);
      
      if (filterSet.has(value)) {
        filterSet.delete(value);
      } else {
        filterSet.add(value);
      }
      
      newFilters[type] = filterSet;
      return newFilters;
    });
  };

  const sortProducts = (products: Product[], option: string) => {
    let sortedProducts = [...products];
    
    switch (option) {
      case 'price-high-low':
        sortedProducts.sort((a, b) => {
          const priceA = parseInt(a.price.replace(/[^0-9]/g, ''));
          const priceB = parseInt(b.price.replace(/[^0-9]/g, ''));
          return priceB - priceA;
        });
        break;
      case 'price-low-high':
        sortedProducts.sort((a, b) => {
          const priceA = parseInt(a.price.replace(/[^0-9]/g, ''));
          const priceB = parseInt(b.price.replace(/[^0-9]/g, ''));
          return priceA - priceB;
        });
        break;
      case 'newest':
        sortedProducts.sort((a, b) => b.id - a.id);
        break;
      default: // 'featured'
        return sortedProducts;
    }
    
    return sortedProducts;
  };

  const handleSortChange = (option: string) => {
    setSortOption(option);
    setShowSortMenu(false);
  };

  return (
    <div className="w-full min-h-screen bg-white">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-0 mb-6 sm:mb-8">
          <div className="flex items-center gap-4">
            <h1 className="text-[20px] sm:text-[24px] font-medium">New ({filteredProducts.length})</h1>
            {(selectedFilters.categories.size > 0 || 
              selectedFilters.gender.size > 0 || 
              selectedFilters.kids.size > 0 || 
              selectedFilters.price.size > 0) && (
              <button
                onClick={clearAllFilters}
                className="text-[12px] sm:text-[14px] text-gray-500 hover:text-black"
              >
                Clear All
              </button>
            )}
          </div>
          <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-4 sm:gap-6">
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 text-[14px] sm:text-base"
            >
              {showFilters ? 'Hide' : 'Show'} Filters
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6">
                <path d="M21.5312 8.25H10.5312M5.28125 8.25H3.53125" stroke="#111111" strokeWidth="1.5"/>
                <path d="M8.03125 6C7.73578 6 7.44319 6.0582 7.17021 6.17127C6.89723 6.28434 6.64919 6.45008 6.44026 6.65901C6.23133 6.86794 6.06559 7.11598 5.95252 7.38896C5.83945 7.66194 5.78125 7.95453 5.78125 8.25C5.78125 8.54547 5.83945 8.83806 5.95252 9.11104C6.06559 9.38402 6.23133 9.63206 6.44026 9.84099C6.64919 10.0499 6.89723 10.2157 7.17021 10.3287C7.44319 10.4418 7.73578 10.5 8.03125 10.5C8.62799 10.5 9.20028 10.2629 9.62224 9.84099C10.0442 9.41903 10.2812 8.84674 10.2812 8.25C10.2812 7.65326 10.0442 7.08097 9.62224 6.65901C9.20028 6.23705 8.62799 6 8.03125 6Z" stroke="#111111" strokeWidth="1.5"/>
                <path d="M3.53125 15.75H14.2812M19.2812 15.75H21.5312" stroke="#111111" strokeWidth="1.5"/>
                <path d="M17.0312 13.5C16.4345 13.5 15.8622 13.7371 15.4403 14.159C15.0183 14.581 14.7812 15.1533 14.7812 15.75C14.7812 16.3467 15.0183 16.919 15.4403 17.341C15.8622 17.7629 16.4345 18 17.0312 18C17.628 18 18.2003 17.7629 18.6222 17.341C19.0442 16.919 19.2812 16.3467 19.2812 15.75C19.2812 15.1533 19.0442 14.581 18.6222 14.159C18.2003 13.7371 17.628 13.5 17.0312 13.5Z" stroke="#111111" strokeWidth="1.5"/>
              </svg>
            </button>
            <div className="relative">
              <button 
                onClick={() => setShowSortMenu(!showSortMenu)}
                className="flex items-center gap-2 text-[14px] sm:text-base"
              >
                Sort By: {sortOption.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                <svg 
                  width="14" 
                  height="14" 
                  fill="none" 
                  viewBox="0 0 24 24"
                  className={`transform transition-transform duration-200 ${showSortMenu ? 'rotate-180' : ''}`}
                >
                  <path stroke="#111" strokeWidth="1.5" d="M6 9l6 6 6-6"/>
                </svg>
              </button>
              
              {/* Sort Menu Dropdown */}
              {showSortMenu && (
                <div className="absolute right-0 mt-2 py-2 w-48 bg-white shadow-lg rounded-lg z-50">
                  {[
                    { value: 'featured', label: 'Featured' },
                    { value: 'newest', label: 'Newest' },
                    { value: 'price-high-low', label: 'Price: High-Low' },
                    { value: 'price-low-high', label: 'Price: Low-High' }
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleSortChange(option.value)}
                      className={`w-full text-left px-4 py-2 text-[14px] sm:text-base hover:bg-gray-100 ${
                        sortOption === option.value ? 'font-medium bg-gray-50' : ''
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
          {/* Filters Sidebar */}
          <div className={`${showFilters ? 'block' : 'hidden'} w-full sm:w-[240px] flex-shrink-0 transition-all duration-300 border-b sm:border-b-0 pb-6 sm:pb-0 mb-6 sm:mb-0`}>
            <div className="space-y-6">
              {/* Categories */}
              <div className="space-y-2">
                {categories.map((category: string) => (
                  <div key={category} className="flex items-center gap-3">
                    <input 
                      type="checkbox" 
                      className="w-4 h-4 sm:w-5 sm:h-5 border-gray-300 rounded"
                      checked={selectedFilters.categories.has(category)}
                      onChange={() => handleFilterChange('categories', category)}
                    />
                    <span className="text-[14px] sm:text-[16px]">{category}</span>
                  </div>
                ))}
              </div>

              {/* Gender */}
              <div className="pt-6 border-t border-gray-200">
                <h3 className="text-[14px] sm:text-[16px] font-medium mb-4">Gender</h3>
                <div className="space-y-2">
                  {['Men', 'Women', 'Unisex'].map((gender) => (
                    <div key={gender} className="flex items-center gap-3">
                      <input 
                        type="checkbox" 
                        className="w-4 h-4 sm:w-5 sm:h-5 border-gray-300 rounded"
                        checked={selectedFilters.gender.has(gender)}
                        onChange={() => handleFilterChange('gender', gender)}
                      />
                      <span className="text-[14px] sm:text-[16px]">{gender}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Kids */}
              <div className="pt-6 border-t border-gray-200">
                <h3 className="text-[14px] sm:text-[16px] font-medium mb-4">Kids</h3>
                <div className="space-y-2">
                  {['Boys', 'Girls'].map((kid) => (
                    <div key={kid} className="flex items-center gap-3">
                      <input 
                        type="checkbox" 
                        className="w-4 h-4 sm:w-5 sm:h-5 border-gray-300 rounded"
                        checked={selectedFilters.kids.has(kid)}
                        onChange={() => handleFilterChange('kids', kid)}
                      />
                      <span className="text-[14px] sm:text-[16px]">{kid}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Shop by Price */}
              <div className="pt-6 border-t border-gray-200">
                <h3 className="text-[14px] sm:text-[16px] font-medium mb-4">Shop by Price</h3>
                <div className="space-y-2">
                  {['Under ₹ 2,500.00', '₹ 2,501.00 - ₹'].map((range) => (
                    <div key={range} className="flex items-center gap-3">
                      <input 
                        type="checkbox" 
                        className="w-4 h-4 sm:w-5 sm:h-5 border-gray-300 rounded"
                        checked={selectedFilters.price.has(range)}
                        onChange={() => handleFilterChange('price', range)}
                      />
                      <span className="text-[14px] sm:text-[16px]">{range}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className={`flex-1 transition-all duration-300`}>
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <div className="w-8 h-8 border-2 border-[#e5e5e5] border-t-[#111] rounded-full animate-spin"></div>
              </div>
            ) : error ? (
              <div className="text-red-500 text-center py-8">{error}</div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="group cursor-pointer">
                    <a href={`/product-detail${product.id}`}>
                      <div className="relative aspect-square bg-[#f5f5f5] mb-2 sm:mb-3">
                        <Image
                          src={product.image}
                          alt={product.name}
                          layout="fill"
                          objectFit="cover"
                          className="transition-transform duration-300 group-hover:scale-105"
                        />
                        {product.tag && (
                          <span className="absolute top-2 sm:top-3 left-2 sm:left-3 text-[10px] sm:text-[12px] text-[#111]">
                            {product.tag}
                          </span>
                        )}
                      </div>
                    </a>
                    <div className="space-y-1">
                      <div className="flex justify-between items-start gap-2">
                        <h3 className="text-[12px] sm:text-[14px] md:text-[16px] font-medium flex-1 line-clamp-2">{product.name}</h3>
                        <span className="text-[12px] sm:text-[14px] whitespace-nowrap">{product.price}</span>
                      </div>
                      <p className="text-[12px] sm:text-[14px] text-[#707072]">{product.category}</p>
                      <p className="text-[12px] sm:text-[14px] text-[#707072]">{product.colors}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Related Categories */}
        <div className="mt-8 sm:mt-12 border-t border-[#e5e5e5] pt-8 sm:pt-12">
          <h2 className="text-[20px] sm:text-[24px] font-medium mb-4 sm:mb-6">Related Categories</h2>
          <div className="flex flex-wrap gap-2 sm:gap-x-3 sm:gap-y-4">
            {relatedCategories.map((category: string) => (
              <a
                key={category}
                href={`#${category.toLowerCase().replace(/\s+/g, '-')}`}
                className="px-3 sm:px-[18px] py-2 sm:py-[10px] rounded-full border border-[#e5e5e5] text-[12px] sm:text-[16px] hover:border-[#757575] transition-colors duration-200"
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