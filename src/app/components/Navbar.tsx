'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { FiSearch, FiMenu, FiX } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && typeof window !== 'undefined') {
      const savedSearches = localStorage.getItem('recentSearches');
      if (savedSearches) {
        setRecentSearches(JSON.parse(savedSearches));
      }
    }
  }, [mounted]);

  const saveRecentSearch = (query: string) => {
    if (typeof window !== 'undefined') {
      const updatedSearches = [query, ...recentSearches.filter(s => s !== query)].slice(0, 5);
      setRecentSearches(updatedSearches);
      localStorage.setItem('recentSearches', JSON.stringify(updatedSearches));
    }
  };

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (query.length > 0) {
      setIsLoading(true);
      try {
        const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
        if (!response.ok) throw new Error('Search failed');
        const data = await response.json();
        setSearchResults(data);
        setShowResults(true);
      } catch (error) {
        console.error('Search error:', error);
        setSearchResults([]);
      } finally {
        setIsLoading(false);
      }
    } else {
      setShowResults(false);
      setSearchResults([]);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setShowResults(false);
      setSearchQuery('');
    }
  };

  // Close search results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as Element).closest('.search-container')) {
        setShowResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navigate = (path: string) => {
    router.push(path);
  };

  // Don't render anything until mounted
  if (!mounted) {
    return null;
  }

  return (
    <nav className="w-full justify-center bg-white text-[#111] relative ">
      {/* Top Bar */}
      <div className="bg-[#f5f5f5] px-4 md:px-8 py-2 flex justify-between items-center text-xs md:text-sm">
        <Link href="/" className="hover:text-gray-500">
          <svg width="25" height="25" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.05 1.14V1.08C11.05 0.8 11.14 0.55 11.32 0.33C11.5 0.11 11.73 0 12.01 0C12.29 0 12.54 0.0900001 12.76 0.27C12.98 0.45 13.1 0.69 13.12 0.99C13.14 1.29 13.05 1.54 12.85 1.74C12.65 1.94 12.41 2.04 12.13 2.04L11.95 2.1L12.01 2.19L11.95 2.52L11.83 3.48C11.87 3.52 11.89 3.56 11.89 3.6L11.77 4.2C11.73 4.28 11.69 4.34 11.65 4.38L11.59 4.62C11.51 4.94 11.44 5.2 11.38 5.4C11.32 5.6 11.27 5.76 11.23 5.88V6C11.19 6.2 11.16 6.36 11.14 6.48C11.12 6.6 11.05 6.8 10.93 7.08C10.85 7.24 10.85 7.5 10.93 7.86L10.99 7.92C10.99 8.04 11.04 8.18 11.14 8.34C11.24 8.5 11.29 8.64 11.29 8.76C11.33 9.56 11.27 10.24 11.11 10.8L11.23 11.16C11.71 11.4 11.85 11.66 11.65 11.94L11.95 12.06C12.43 12.3 12.77 12.51 12.97 12.69C13.17 12.87 13.37 13.06 13.57 13.26C13.73 13.3 13.85 13.36 13.93 13.44L14.11 13.5C14.95 14.06 15.79 14.74 16.63 15.54L16.87 15.72V15.78L16.81 15.9L16.99 16.02H17.05C17.17 16.1 17.25 16.14 17.29 16.14H17.35C17.39 16.14 17.43 16.12 17.47 16.08L17.59 16.02C17.67 15.94 17.75 15.88 17.83 15.84H18.07C18.11 15.84 18.11 15.86 18.07 15.9L17.83 16.02L17.53 16.38H17.95L18.37 16.44C18.49 16.4 18.59 16.36 18.67 16.32L18.97 16.14C19.09 16.1 19.21 16.14 19.33 16.26H19.39C19.43 16.3 19.41 16.36 19.33 16.44L18.61 17.1C18.41 17.26 18.23 17.36 18.07 17.4L17.29 17.94C17.25 17.98 17.21 17.98 17.17 17.94L16.99 17.7L16.87 17.46L16.72 17.25L16.54 17.01L16.39 16.83L16.27 16.68L16.03 16.5C15.95 16.5 15.87 16.48 15.79 16.44L15.01 15.84C14.89 15.84 14.75 15.78 14.59 15.66C13.99 15.14 13.59 14.82 13.39 14.7L13.03 14.46L12.31 14.34C12.07 14.3 11.75 14.18 11.35 13.98L10.87 13.74C10.55 13.58 10.33 13.5 10.21 13.5L9.96996 13.38C9.80996 13.34 9.68996 13.3 9.60996 13.26L9.48996 13.14C9.40996 13.14 9.32996 13.16 9.24996 13.2L8.04996 13.8L6.54996 14.46C6.14996 14.78 5.76996 15.04 5.40996 15.24L4.74996 15.54L3.72996 16.26C3.64996 16.34 3.56996 16.34 3.48996 16.26L3.36996 16.38C3.24996 16.42 3.16996 16.44 3.12996 16.44L2.88996 16.56V16.68H2.76996L2.64996 16.86C2.56996 17.02 2.48996 17.11 2.40996 17.13C2.32996 17.15 2.27996 17.18 2.25996 17.22C2.23996 17.26 2.21996 17.29 2.19996 17.31L2.07996 17.43L1.89996 17.55L1.62996 17.52L1.26996 17.58L1.02996 17.64C0.829961 17.68 0.669961 17.65 0.549961 17.55C0.429961 17.45 0.329961 17.3 0.249961 17.1C0.169961 16.98 0.209961 16.88 0.369961 16.8L0.429961 16.74C0.469961 16.7 0.529961 16.68 0.609961 16.68H0.969961L1.44996 16.5L1.68996 16.44C1.68996 16.36 1.70996 16.3 1.74996 16.26C1.78996 16.22 1.84996 16.2 1.92996 16.2V16.14C1.88996 16.06 1.86996 15.98 1.86996 15.9C1.82996 15.82 1.81996 15.76 1.83996 15.72C1.85996 15.68 1.87996 15.66 1.89996 15.66H1.92996L1.98996 15.84C2.02996 16.04 2.08996 16.1 2.16996 16.02L2.22996 15.9C2.26996 15.82 2.32996 15.78 2.40996 15.78L2.52996 15.9L2.64996 15.78L2.58996 15.72C2.58996 15.68 2.60996 15.66 2.64996 15.66L2.88996 15.42C3.08996 15.18 3.32996 14.96 3.60996 14.76C4.16996 14.32 4.76996 13.98 5.40996 13.74C5.60996 13.54 5.82996 13.44 6.06996 13.44C6.22996 13.16 6.46996 12.86 6.78996 12.54C7.06996 12.34 7.26996 12.2 7.38996 12.12C7.46996 11.96 7.56996 11.88 7.68996 11.88H7.74996L7.86996 11.76C7.94996 11.72 8.00996 11.68 8.04996 11.64V11.34C8.04996 11.14 8.06996 10.98 8.10996 10.86C8.14996 10.74 8.24996 10.68 8.40996 10.68L8.64996 10.44C8.56996 10.28 8.52996 10.1 8.52996 9.9H8.46996C8.38996 9.78 8.34996 9.66 8.34996 9.54C8.22996 9.34 8.14996 9.18 8.10996 9.06H7.92996C7.88996 9.18 7.78996 9.26 7.62996 9.3L7.56996 9.42C7.40996 9.7 7.26996 9.91 7.14996 10.05C7.02996 10.19 6.80996 10.36 6.48996 10.56C6.28996 10.76 6.14996 10.98 6.06996 11.22C6.02996 11.34 6.02996 11.46 6.06996 11.58L6.00996 11.7H6.06996C6.06996 11.78 6.08996 11.82 6.12996 11.82H6.18996C6.26996 11.86 6.30996 11.91 6.30996 11.97C6.30996 12.03 6.24996 12.05 6.12996 12.03C6.00996 12.01 5.91996 11.97 5.85996 11.91C5.79996 11.85 5.74996 11.82 5.70996 11.82L5.52996 12C5.44996 12.12 5.36996 12.17 5.28996 12.15C5.20996 12.13 5.18996 12.1 5.22996 12.06L5.28996 12C5.32996 11.92 5.32996 11.88 5.28996 11.88L4.80996 12C4.76996 12.04 4.71996 12.04 4.65996 12C4.59996 11.96 4.60996 11.92 4.68996 11.88L4.98996 11.76C4.98996 11.72 4.96996 11.7 4.92996 11.7C4.76996 11.78 4.60996 11.8 4.44996 11.76L4.14996 11.7L4.08996 11.64C4.08996 11.6 4.10996 11.58 4.14996 11.58C4.30996 11.62 4.50996 11.6 4.74996 11.52L5.16996 11.34L5.64996 10.8L5.70996 10.68C5.86996 10.36 6.03996 10.07 6.21996 9.81C6.39996 9.55 6.58996 9.34 6.78996 9.18L6.84996 8.94C6.92996 8.78 7.00996 8.64 7.08996 8.52C7.16996 8.4 7.26996 8.24 7.38996 8.04L7.56996 7.8C7.72996 7.56 7.90996 7.44 8.10996 7.44L8.28996 7.26C8.32996 7.22 8.34996 7.16 8.34996 7.08L8.46996 6.96L8.40996 6.9C8.16996 6.7 8.04996 6.52 8.04996 6.36C8.00996 6.08 8.09996 5.84 8.31996 5.64C8.53996 5.44 8.75996 5.35 8.97996 5.37C9.19996 5.39 9.36996 5.46 9.48996 5.58L9.60996 5.7C9.64996 5.7 9.66996 5.72 9.66996 5.76L9.90996 5.88V6.06C9.98996 6.14 10.03 6.2 10.03 6.24C10.11 6.12 10.23 5.98 10.39 5.82L10.69 4.86C10.69 4.7 10.73 4.54 10.81 4.38L10.93 4.2V4.08L11.11 3.36H11.23L11.41 2.64C11.45 2.52 11.45 2.38 11.41 2.22L11.17 1.62L11.05 1.14Z" fill="#111111"/>
          </svg>
        </Link>
        <div className="hidden md:flex gap-4">
          <Link href="/" className="hover:text-gray-500">Find a Store</Link>
          <span className="text-gray-400">|</span>
          <Link href="/contactus" className="hover:text-gray-500">Help</Link>
          <span className="text-gray-400">|</span>
          <Link href="/joinus" className="hover:text-gray-500">Join Us</Link>
          <span className="text-gray-400">|</span>
          <Link href="/signin" className="hover:text-gray-500">Sign In</Link>
        </div>
        {/* Mobile Sign In */}
        <div className="md:hidden">
          <Link href="/signin" className="hover:text-gray-500">Sign In</Link>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white px-4 md:px-8 py-2 flex justify-between items-center border-gray-200">
        {/* Logo */}
        <Link href="/">
        <svg width="59" height="22" viewBox="0 0 59 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M58.9262 0.772461L15.8854 19.0298C12.302 20.5502 9.28743 21.3087 6.85813 21.3087C4.12475 21.3087 2.13358 20.3442 0.910756 18.4184C-0.674992 15.9335 0.0181594 11.9381 2.73845 7.72033C4.35363 5.25506 6.40692 2.99251 8.40791 0.828045C7.93709 1.59313 3.78145 8.5083 8.32617 11.7648C9.22531 12.4187 10.5037 12.7391 12.0764 12.7391C13.3384 12.7391 14.7869 12.5332 16.3792 12.1179L58.9262 0.772461Z" fill="#111111"/>
        </svg>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex gap-7 xl:gap-8 font-medium">
          <Link href="/" className="hover:text-gray-500">New & Featured</Link>
          <Link href="/product-list?category=men" className="hover:text-gray-500">Men</Link>
          <Link href="/product-list?category=women" className="hover:text-gray-500">Women</Link>
          <Link href="/product-list?category=kids" className="hover:text-gray-500">Kids</Link>
          <Link href="/product-list?category=sale" className="hover:text-gray-500">Sale</Link>
          <Link href="/product-list?category=snkrs" className="hover:text-gray-500">SNKRS</Link>
        </div>

        {/* Right Section: Search, Favorites, Bag */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* Desktop Search */}
          <div className="hidden md:flex relative items-center search-container">
            <form onSubmit={handleSearchSubmit} className="relative">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                placeholder="Search"
                  value={searchQuery}
                  onChange={handleSearch}
                className="bg-[#f5f5f5] rounded-full py-2 pl-10 pr-4 w-40 focus:outline-none focus:w-60 transition-all duration-300 placeholder-gray-500"
                />
              {showResults && searchResults.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
                        {searchResults.map((result: any) => (
                          <div
                      key={result.id}
                      className="p-3 hover:bg-gray-50 cursor-pointer flex items-center gap-3"
                      onClick={() => {
                        router.push(`/product-detail${result.id}`);
                        setShowResults(false);
                        setSearchQuery('');
                      }}
                          >
                              {result.image && (
                        <div className="w-12 h-12 relative">
                                  <Image
                                    src={result.image}
                                    alt={result.name}
                            className="object-cover rounded"
                                    fill
                                  />
                                </div>
                              )}
                      <div>
                        <div className="font-medium">{result.name}</div>
                        <div className="text-sm text-gray-500">{result.category}</div>
                      </div>
                          </div>
                        ))}
                </div>
              )}
            </form>
          </div>
          {/* Mobile Search */}
          <button 
            className="md:hidden p-2 hover:bg-gray-100 rounded-full"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <FiSearch className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
          <Link href="/favourite">
          <svg width="24" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.794 3.75002C18.118 3.75002 19.362 4.26602 20.298 5.20102C21.2262 6.13093 21.7475 7.39113 21.7475 8.70502C21.7475 10.0189 21.2262 11.2791 20.298 12.209L12 20.508L3.70096 12.209C2.77307 11.2791 2.25195 10.0192 2.25195 8.70552C2.25195 7.39188 2.77307 6.13189 3.70096 5.20202C4.15999 4.74032 4.70604 4.37425 5.30751 4.12501C5.90897 3.87578 6.5539 3.74832 7.20496 3.75002C8.52896 3.75002 9.77296 4.26602 10.709 5.20102L11.469 5.96102L12 6.49202L12.53 5.96102L13.29 5.20102C13.7492 4.73963 14.2953 4.37384 14.8967 4.12478C15.4982 3.87573 16.143 3.74835 16.794 3.75002Z" stroke="#111111" strokeWidth="1.8"/>
          </svg>
          </Link>
          </button>

          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Link href="/cart">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_1_28)">
          <path d="M14.25 14.25V12C14.25 11.4033 14.4871 10.831 14.909 10.409C15.331 9.98705 15.9033 9.75 16.5 9.75H19.5C20.0967 9.75 20.669 9.98705 21.091 10.409C21.5129 10.831 21.75 11.4033 21.75 12C21.75 12.5967 21.5129 13.169 21.091 13.591C20.669 14.0129 20.0967 14.25 19.5 14.25H9.75V22.5C9.75 23.4946 10.1451 24.4484 10.8483 25.1517C11.5516 25.8549 12.5054 26.25 13.5 26.25H22.5C23.4946 26.25 24.4484 25.8549 25.1517 25.1517C25.8549 24.4484 26.25 23.4946 26.25 22.5V14.25H23.5" stroke="#111111" strokeWidth="1.8"/>
          </g>
          <defs>
          <clipPath id="clip0_1_28">
          <rect width="24" height="24" fill="white" transform="translate(6 6)"/>
          </clipPath>
          </defs>
          </svg>
          </Link>
          </button>
          
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 hover:bg-gray-100 rounded-full"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Search Bar */}
      {isSearchOpen && (
        <div className="md:hidden px-4 py-2 border-b border-gray-200 search-container">
          <form onSubmit={handleSearchSubmit} className="relative">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
              placeholder="Search"
                value={searchQuery}
                onChange={handleSearch}
              className="bg-[#f5f5f5] rounded-full py-2 pl-10 pr-4 w-full focus:outline-none placeholder-gray-500"
              />
            {showResults && searchResults.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
                      {searchResults.map((result: any) => (
                        <div
                    key={result.id}
                    className="p-3 hover:bg-gray-50 cursor-pointer flex items-center gap-3"
                    onClick={() => {
                      router.push(`/product-detail${result.id}`);
                      setShowResults(false);
                      setSearchQuery('');
                      setIsSearchOpen(false);
                    }}
                        >
                            {result.image && (
                      <div className="w-12 h-12 relative">
                                <Image
                                  src={result.image}
                                  alt={result.name}
                          className="object-cover rounded"
                                  fill
                                />
                              </div>
                            )}
                    <div>
                      <div className="font-medium">{result.name}</div>
                      <div className="text-sm text-gray-500">{result.category}</div>
                    </div>
                        </div>
                      ))}
              </div>
            )}
          </form>
        </div>
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-white z-50">
          {/* Mobile Menu Header */}
          <div className="flex justify-between items-center px-4 py-2 border-b border-gray-200">
            <div className="relative w-[40px] h-[20px]">
              <Link href="/">
              <svg width="59" height="22" viewBox="0 0 59 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M58.9262 0.772461L15.8854 19.0298C12.302 20.5502 9.28743 21.3087 6.85813 21.3087C4.12475 21.3087 2.13358 20.3442 0.910756 18.4184C-0.674992 15.9335 0.0181594 11.9381 2.73845 7.72033C4.35363 5.25506 6.40692 2.99251 8.40791 0.828045C7.93709 1.59313 3.78145 8.5083 8.32617 11.7648C9.22531 12.4187 10.5037 12.7391 12.0764 12.7391C13.3384 12.7391 14.7869 12.5332 16.3792 12.1179L58.9262 0.772461Z" fill="#111111"/>
              </svg>
              </Link>
            </div>
            <button 
              className="p-2 hover:bg-gray-100 rounded-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FiX className="w-6 h-6" />
            </button>
          </div>
          
          <div className="h-full overflow-y-auto">
            <div className="flex flex-col">
              <Link href="/" className="px-6 py-3 hover:bg-gray-100">New & Featured</Link>
              <Link href="/product-list?category=men" className="px-6 py-3 hover:bg-gray-100">Men</Link>
              <Link href="/product-list?category=women" className="px-6 py-3 hover:bg-gray-100">Women</Link>
              <Link href="/product-list?category=kids" className="px-6 py-3 hover:bg-gray-100">Kids</Link>
              <Link href="/product-list" className="px-6 py-3 hover:bg-gray-100">Sale</Link>
              <Link href="/product-list?category=snkrs" className="px-6 py-3 hover:bg-gray-100">SNKRS</Link>
            </div>
            <div className="border-t border-gray-200 px-6 py-4 space-y-3">
              <Link href="/" className="block hover:text-gray-500">Find a Store</Link>
              <Link href="/contactus" className="block hover:text-gray-500">Help</Link>
              <Link href="/joinus" className="block hover:text-gray-500">Join Us</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
