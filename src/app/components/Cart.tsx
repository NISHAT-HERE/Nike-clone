'use client';

import Image from 'next/image';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();
  const freeDeliveryThreshold = 14000;
  const subtotal = getCartTotal();

  const handleQuantityChange = (itemId: number, newQuantity: number) => {
    if (newQuantity > 0 && newQuantity <= 10) {
      updateQuantity(itemId, newQuantity);
    }
  };

  return (
    <div className="w-full min-h-screen bg-white">
      <div className="w-full max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        {/* Free Delivery Banner */}
        <div className="bg-[#f5f5f5] p-3 sm:p-4 rounded mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
              <span className="font-medium text-sm sm:text-base">Free Delivery</span>
              <span className="text-[#707072] text-sm sm:text-base">Applies to orders of ₹ {freeDeliveryThreshold.toLocaleString('en-IN')} or more.</span>
            </div>
            <button className="text-black underline hover:no-underline text-sm sm:text-base">View details</button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
          {/* Cart Items */}
          <div className="flex-1">
            <h1 className="text-[20px] sm:text-[24px] font-medium mb-6 sm:mb-8">Bag</h1>

            <div className="space-y-6 sm:space-y-8">
              {cartItems.map((item) => {
                const uniqueKey = `cart-item-${item.id}-${item.size}-${item.color}`;
                return (
                  <div key={uniqueKey} className="flex flex-col sm:flex-row gap-4 sm:gap-6 border-b pb-6 sm:pb-8">
                    <div className="relative w-full sm:w-[150px] aspect-square sm:h-[150px] bg-[#f5f5f5] rounded">
                      <Image
                        src={item.image}
                        alt={item.name}
                        layout="fill"
                        objectFit="contain"
                        className="p-2"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-0">
                        <div>
                          <h3 className="font-medium text-base sm:text-lg">{item.name}</h3>
                          {item.category && <p className="text-[#707072] text-sm sm:text-base">{item.category}</p>}
                          {item.color && <p className="text-[#707072] text-sm sm:text-base">{item.color}</p>}
                          <div className="mt-2 flex flex-wrap gap-4 sm:gap-6 text-sm sm:text-base">
                            {item.size && <span>Size {item.size}</span>}
                            <div className="flex items-center gap-2">
                              <span>Quantity:</span>
                              <div className="flex items-center gap-2">
                                <button
                                  onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                  className="w-6 h-6 flex items-center justify-center border rounded hover:border-black"
                                >
                                  -
                                </button>
                                <span>{item.quantity}</span>
                                <button
                                  onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                  className="w-6 h-6 flex items-center justify-center border rounded hover:border-black"
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <p className="font-medium text-base sm:text-lg">
                            ₹ {typeof item.price === 'string' 
                              ? item.price.replace('₹ ', '') 
                              : item.price.toLocaleString('en-IN')}
                          </p>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-sm text-[#707072] hover:text-black underline"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {cartItems.length === 0 && (
              <p className="text-center text-[#707072] py-8">Your bag is empty.</p>
            )}

            {/* Summary for Mobile */}
            <div className="lg:hidden mt-8 pt-6 border-t">
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span>₹ {subtotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Estimated Delivery & Handling</span>
                  <span>{subtotal >= freeDeliveryThreshold ? 'Free' : '₹ 750'}</span>
                </div>
                <div className="pt-3 border-t border-[#e5e5e5] flex justify-between font-medium">
                  <span>Total</span>
                  <span>₹ {(subtotal + (subtotal >= freeDeliveryThreshold ? 0 : 750)).toLocaleString('en-IN')}</span>
                </div>
              </div>
              <a href="/checkout">
              <button className="w-full h-12 bg-black text-white rounded-full mt-6 hover:bg-[#1f1f1f] transition-colors duration-200">
                Checkout
              </button>
              </a>
            </div>
          </div>

          {/* Summary for Desktop */}
          <div className="hidden lg:block w-[400px]">
            <div className="bg-white p-6 border rounded-lg sticky top-4">
              <h2 className="text-[20px] font-medium mb-6">Summary</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹ {subtotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Delivery & Handling</span>
                  <span>{subtotal >= freeDeliveryThreshold ? 'Free' : '₹ 750'}</span>
                </div>
                <div className="pt-4 border-t border-[#e5e5e5] flex justify-between font-medium">
                  <span>Total</span>
                  <span>₹ {(subtotal + (subtotal >= freeDeliveryThreshold ? 0 : 750)).toLocaleString('en-IN')}</span>
                </div>
              </div>
              <a href="/checkout">
                <button className="w-full h-12 bg-black text-white rounded-full mt-8 hover:bg-[#1f1f1f] transition-colors duration-200">
                  Checkout
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

