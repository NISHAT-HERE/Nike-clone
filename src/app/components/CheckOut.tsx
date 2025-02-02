'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useRouter } from 'next/navigation';

interface FormErrors {
  [key: string]: string;
}

const CheckOut = () => {
  const router = useRouter();
  const { cartItems, getCartTotal } = useCart();
  const subtotal = getCartTotal();
  const deliveryFee = 0; // Free delivery
  const total = subtotal + deliveryFee;

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    addressLine1: '',
    addressLine2: '',
    addressLine3: '',
    postalCode: '',
    locality: '',
    state: '',
    email: '',
    phone: '',
    pan: '',
    saveAddress: false,
    preferredAddress: false,
    acceptTerms: false,
    savePan: false
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = () => {
    const newErrors: FormErrors = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.addressLine1.trim()) newErrors.addressLine1 = 'Address is required';
    if (!formData.postalCode.trim()) newErrors.postalCode = 'Postal code is required';
    if (!formData.locality.trim()) newErrors.locality = 'Locality is required';
    if (!formData.state) newErrors.state = 'State is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number';
    }
    if (formData.pan && !/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(formData.pan)) {
      newErrors.pan = 'Invalid PAN format';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Handle successful form submission
      console.log('Form submitted:', formData);
      // You can add your payment processing logic here
      router.push('/order-confirmation');
    } else {
      // Scroll to the first error
      const firstError = document.querySelector('[data-error]');
      firstError?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-medium mb-4">Your cart is empty</h1>
          <button 
            onClick={() => router.push('/')}
            className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1440px] mx-auto px-5 py-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
          {/* Left Column - Form */}
          <div className="flex-1">
            <div className="mb-6">
              <h1 className="text-xl font-medium mb-2">How would you like to get your order?</h1>
              <p className="text-sm text-gray-600">
                Customs regulation for India require a copy of the recipient's KYC. The address on the KYC
                <br/>
                needs to match the shipping address. Our courier will contact you via SMS/email to obtain
                <br/>
                a copy of your KYC. The KYC will be stored securely and used solely for the purpose of
                <br/>
                clearing customs (including sharing it with customs officials) for all orders
                <br/>
                and returns. If your KYC does not match your shipping address,
                <br/>
                please click the link for more information.
                <span className="text-black underline ml-1 cursor-pointer">Learn More</span>
              </p>
            </div>

            {/* Delivery Option */}
            <button className="w-full border border-gray-300 rounded-lg p-4 mb-8 flex items-center gap-3 hover:border-gray-400">
              <div className="w-6 h-6 flex items-center justify-center">
              <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.4538 7.9198L19.8077 0.412109H3.19228L0.607666 7.73519V19.4275H22.4538V7.9198ZM3.8692 1.33519H19.1307L21.2846 7.42749H1.71536L3.8692 1.33519ZM21.4692 18.566H1.53074V8.35057H21.5307L21.4692 18.566Z" fill="#111111" stroke="#111111" strokeWidth="0.692308" strokeLinejoin="round"/>
         <path d="M15.1902 11.0578L15.0976 10.9587C14.8364 10.6794 14.3983 10.6647 14.119 10.9259C14.1158 10.929 14.1125 10.9321 14.1093 10.9352L10.15 14.7845L8.89079 13.5602C8.61665 13.2937 8.17835 13.2998 7.91182 13.574C7.90869 13.5772 7.90559 13.5804 7.90252 13.5837L7.80992 13.6828C7.55236 13.9582 7.56263 14.3891 7.83301 14.652L9.66745 16.4355C9.93615 16.6967 10.3639 16.6967 10.6326 16.4355L15.1671 12.027C15.4375 11.7641 15.4477 11.3332 15.1902 11.0578Z" fill="#111111"/>
        <path d="M11.9614 1.48926H11.0383V7.02772H11.9614V1.48926Z" fill="#D8D8D8" stroke="black" strokeWidth="0.923077"/>
           </svg>

              </div>
              <span className="text-base">Deliver It</span>
            </button>

            {/* Address Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <h2 className="text-lg font-medium">Enter your name and address:</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name"
                    className={`w-full h-12 px-4 border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:border-gray-500`}
                    data-error={errors.firstName ? 'true' : undefined}
                  />
                  {errors.firstName && <p className="text-xs text-red-500 mt-1">{errors.firstName}</p>}
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name"
                    className={`w-full h-12 px-4 border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:border-gray-500`}
                    data-error={errors.lastName ? 'true' : undefined}
                  />
                  {errors.lastName && <p className="text-xs text-red-500 mt-1">{errors.lastName}</p>}
                </div>
              </div>

              <div>
                <input
                  type="text"
                  name="addressLine1"
                  value={formData.addressLine1}
                  onChange={handleInputChange}
                  placeholder="Address Line 1"
                  className={`w-full h-12 px-4 border ${errors.addressLine1 ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:border-gray-500`}
                  data-error={errors.addressLine1 ? 'true' : undefined}
                />
                {errors.addressLine1 && <p className="text-xs text-red-500 mt-1">{errors.addressLine1}</p>}
                <p className="text-xs text-gray-500 mt-1">We do not ship to P.O. boxes</p>
              </div>

              <input
                type="text"
                name="addressLine2"
                value={formData.addressLine2}
                onChange={handleInputChange}
                placeholder="Address Line 2"
                className="w-full h-12 px-4 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
              />

              <input
                type="text"
                name="addressLine3"
                value={formData.addressLine3}
                onChange={handleInputChange}
                placeholder="Address Line 3"
                className="w-full h-12 px-4 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
              />

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    placeholder="Postal Code"
                    className={`w-full h-12 px-4 border ${errors.postalCode ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:border-gray-500`}
                    data-error={errors.postalCode ? 'true' : undefined}
                  />
                  {errors.postalCode && <p className="text-xs text-red-500 mt-1">{errors.postalCode}</p>}
                </div>
                <div>
                  <input
                    type="text"
                    name="locality"
                    value={formData.locality}
                    onChange={handleInputChange}
                    placeholder="Locality"
                    className={`w-full h-12 px-4 border ${errors.locality ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:border-gray-500`}
                    data-error={errors.locality ? 'true' : undefined}
                  />
                  {errors.locality && <p className="text-xs text-red-500 mt-1">{errors.locality}</p>}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className={`w-full h-12 px-4 border ${errors.state ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:border-gray-500 bg-white`}
                    data-error={errors.state ? 'true' : undefined}
                  >
                    <option value="">State/Territory</option>
                    <option value="delhi">Delhi</option>
                  </select>
                  {errors.state && <p className="text-xs text-red-500 mt-1">{errors.state}</p>}
                </div>
                <div className="flex items-center gap-2 px-4">
                  <span className="w-6 h-6 flex items-center justify-center">🇮🇳</span>
                  <span>India</span>
                </div>
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="saveAddress"
                    checked={formData.saveAddress}
                    onChange={handleInputChange}
                    className="w-4 h-4"
                  />
                  <span className="text-sm">Save this address to my profile</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="preferredAddress"
                    checked={formData.preferredAddress}
                    onChange={handleInputChange}
                    className="w-4 h-4"
                  />
                  <span className="text-sm">Make this my preferred address</span>
                </label>
              </div>

              <div className="space-y-6">
                <h2 className="text-lg font-medium">What's your contact information?</h2>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    className={`w-full h-12 px-4 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:border-gray-500`}
                    data-error={errors.email ? 'true' : undefined}
                  />
                  {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                  <p className="text-xs text-gray-500 mt-1">A confirmation email will be sent after checkout</p>
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                    className={`w-full h-12 px-4 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:border-gray-500`}
                    data-error={errors.phone ? 'true' : undefined}
                  />
                  {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                  <p className="text-xs text-gray-500 mt-1">A carrier might contact you to confirm delivery</p>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-lg font-medium">What's your PAN?</h2>
                <div>
                  <input
                    type="text"
                    name="pan"
                    value={formData.pan}
                    onChange={handleInputChange}
                    placeholder="PAN"
                    className={`w-full h-12 px-4 border ${errors.pan ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:border-gray-500`}
                    data-error={errors.pan ? 'true' : undefined}
                  />
                  {errors.pan && <p className="text-xs text-red-500 mt-1">{errors.pan}</p>}
                  <p className="text-xs text-gray-500 mt-1">Enter your PAN to enable payment with UPI, Net Banking or local card methods</p>
                </div>
                
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="savePan"
                    checked={formData.savePan}
                    onChange={handleInputChange}
                    className="w-4 h-4"
                  />
                  <span className="text-sm">Save PAN details to Nike Profile</span>
                </label>
              </div>

              <div className="pt-4">
                <label className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    name="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={handleInputChange}
                    className="w-4 h-4 mt-1"
                  />
                  <span className="text-sm">
                    I have read and consent to eShopWorld processing my information in accordance with the 
                    <span className="underline mx-1 cursor-pointer">Privacy Statement</span> and 
                    <span className="underline mx-1 cursor-pointer">Cookie Policy</span>. eShopWorld is a trusted Nike partner.
                  </span>
                </label>
                {errors.acceptTerms && <p className="text-xs text-red-500 mt-1">{errors.acceptTerms}</p>}
              </div>

              <button 
                type="submit"
                className="w-full h-12 bg-black text-white rounded-full text-base font-medium hover:bg-gray-800 transition-colors"
              >
                Continue
              </button>
            </form>

            <div className="mt-8 space-y-2">
              <button className="w-full text-left text-lg font-medium py-2 hover:bg-gray-100 transition-colors">Delivery</button>
              <button className="w-full text-left text-lg font-medium py-2 hover:bg-gray-100 transition-colors">Shipping</button>
              <button className="w-full text-left text-lg font-medium py-2 hover:bg-gray-100 transition-colors">Billing</button>
              <button className="w-full text-left text-lg font-medium py-2 hover:bg-gray-100 transition-colors">Payment</button>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:w-[400px]">
            <div className="bg-white p-6 sticky top-4">
              <h2 className="text-xl font-medium mb-4">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹ {subtotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery/Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between font-medium pt-4 border-t">
                  <span>Total</span>
                  <span>₹ {total.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <p className="text-xs text-gray-500 mb-6">
                The total reflects the price of your order, including all duties and taxes
              </p>

              <div className="mb-6">
                <p className="text-sm mb-2">Arrives Mon, 27 Mar - Wed, 12 Apr</p>
                {cartItems.map((item, index) => {
                  // Create a unique key using multiple item properties and timestamp
                  const timestamp = new Date().getTime();
                  const uniqueKey = `${item.id}-${item.size}-${item.name}-${timestamp}-${index}`;
                  return (
                    <div key={uniqueKey} className="flex gap-4 py-4 border-t">
                      <div className="relative w-24 h-24 sm:w-28 sm:h-28 bg-gray-100">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={112}
                          height={112}
                          className="object-contain p-1"
                          priority
                        />
                      </div>
                      <div>
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-sm text-gray-600">{item.category}</p>
                        <p className="text-sm text-gray-600">Size {item.size}</p>
                        <p className="text-sm text-gray-600">
                          ₹ {typeof item.price === 'string' 
                            ? item.price.replace('₹ ', '') 
                            : item.price.toLocaleString('en-IN')}
                        </p>
                        <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
