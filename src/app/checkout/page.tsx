'use client';
import Image from 'next/legacy/image';
import { useState } from 'react';

const CheckOut = () => {
  const [selectedState, setSelectedState] = useState('');
  const [saveAddress, setSaveAddress] = useState(false);
  const [preferredAddress, setPreferredAddress] = useState(false);
  const [savePAN, setSavePAN] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  return (
    <div className="w-full min-h-[1869.8px] bg-white">
      <div className="max-w-[1411px] mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col lg:flex-row gap-8">
        {/* Left Section - Form */}
        <div className="flex-1">
          <h1 className="text-2xl font-medium mb-6">How would you like to get your order?</h1>
          
          {/* KYC Notice */}
          <div className="mb-8 text-sm">
            <p>Customs regulation for India require a copy of the recipient's KYC. The address on the KYC needs to match the shipping address. Our courier will contact you via SMS/email to obtain a copy of your KYC. The KYC will be stored securely and used solely for the purpose of clearing customs (including sharing it with customs officials) for all orders and returns. If your KYC does not match your shipping address, please click the link for more information. <a href="#" className="underline">Learn More</a></p>
          </div>

          {/* Delivery Button */}
          <button className="w-full border border-gray-300 rounded-lg py-4 px-6 flex items-center gap-4 mb-8 hover:border-gray-400">
          <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.4538 7.9198L19.8077 0.412109H3.19228L0.607666 7.73519V19.4275H22.4538V7.9198ZM3.8692 1.33519H19.1307L21.2846 7.42749H1.71536L3.8692 1.33519ZM21.4692 18.566H1.53074V8.35057H21.5307L21.4692 18.566Z" fill="#111111" stroke="#111111" strokeWidth="0.692308" strokeLinejoin="round"/>
          <path d="M15.1902 11.0578L15.0976 10.9587C14.8364 10.6794 14.3983 10.6647 14.119 10.9259C14.1158 10.929 14.1125 10.9321 14.1093 10.9352L10.15 14.7845L8.89079 13.5602C8.61665 13.2937 8.17835 13.2998 7.91182 13.574C7.90869 13.5772 7.90559 13.5804 7.90252 13.5837L7.80992 13.6828C7.55236 13.9582 7.56263 14.3891 7.83301 14.652L9.66745 16.4355C9.93615 16.6967 10.3639 16.6967 10.6326 16.4355L15.1671 12.027C15.4375 11.7641 15.4477 11.3332 15.1902 11.0578Z" fill="#111111"/>
          <path d="M11.9614 1.48926H11.0383V7.02772H11.9614V1.48926Z" fill="#D8D8D8" stroke="black" strokeWidth="0.923077"/>
          </svg>

            Deliver It
          </button>

          {/* Address Form */}
          <div className="space-y-6">
            <h2 className="text-xl font-medium">Enter your name and address:</h2>
            
            <div className="space-y-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-gray-500"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-gray-500"
              />
              <input
                type="text"
                placeholder="Address Line 1"
                className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-gray-500"
              />
              <p className="text-xs text-gray-500">No P.O. Box or PO boxes</p>
              <input
                type="text"
                placeholder="Address Line 2"
                className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-gray-500"
              />
              <input
                type="text"
                placeholder="Address Line 3"
                className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-gray-500"
              />
              
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Postal Code"
                  className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-gray-500"
                />
                <input
                  type="text"
                  placeholder="Locality"
                  className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-gray-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <select 
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-gray-500"
                >
                  <option value="">State/Territory</option>
                  {/* Add states here */}
                </select>
                <div className="relative">
                  <input
                    type="text"
                    value="India"
                    disabled
                    className="w-full border border-gray-300 rounded p-3 bg-gray-50"
                  />
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full bg-green-500" />
                </div>
              </div>
            </div>

            {/* Checkboxes */}
            <div className="space-y-3">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={saveAddress}
                  onChange={(e) => setSaveAddress(e.target.checked)}
                  className="w-4 h-4"
                />
                <span>Save this address to my profile</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={preferredAddress}
                  onChange={(e) => setPreferredAddress(e.target.checked)}
                  className="w-4 h-4"
                />
                <span>Make this my preferred address</span>
              </label>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h2 className="text-xl font-medium">What's your contact information?</h2>
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-gray-500"
              />
              <p className="text-xs text-gray-500">A confirmation email will be sent after checkout</p>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-gray-500"
              />
              <p className="text-xs text-gray-500">A carrier might contact you to confirm delivery</p>
            </div>

            {/* PAN Section */}
            <div className="space-y-4">
              <h2 className="text-xl font-medium">What's your PAN?</h2>
              <input
                type="text"
                placeholder="PAN"
                className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:border-gray-500"
              />
              <p className="text-xs text-gray-500">Enter your PAN to enable payment with UPI, Net Banking or local card methods</p>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={savePAN}
                  onChange={(e) => setSavePAN(e.target.checked)}
                  className="w-4 h-4"
                />
                <span>Save PAN details to Nike Profile</span>
              </label>
            </div>

            {/* Terms and Continue Button */}
            <div className="space-y-4">
              <label className="flex items-start gap-2">
                <input
                  type="checkbox"
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                  className="w-4 h-4 mt-1"
                />
                <span className="text-sm">
                  I have read and consent to eShopWorld processing my information in accordance with the{' '}
                  <a href="#" className="underline">Privacy Statement</a> and{' '}
                  <a href="#" className="underline">Cookie Policy</a>. eShopWorld is a trusted Nike partner.
                </span>
              </label>
              <button className="w-full bg-black text-white rounded-full py-4 font-medium hover:bg-gray-800">
                Continue
              </button>
            </div>
          </div>
        </div>

        {/* Right Section - Order Summary */}
        <div className="lg:w-[400px] space-y-6">
          <h2 className="text-xl font-medium">Order Summary</h2>
          
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹20,890.00</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery/Shipping</span>
              <span className="text-green-500">Free</span>
            </div>
            <div className="flex justify-between font-medium">
              <span>Total</span>
              <span>₹20,890.00</span>
            </div>
            <p className="text-xs text-gray-500">(The total reflects the price of your order, including all duties and taxes)</p>
          </div>

          {/* Delivery Date */}
          <div>
            <p className="font-medium">Arrives Mon, 27 Mar - Wed, 12 Apr</p>
          </div>

          {/* Order Items */}
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="relative w-28 h-24">
                <Image
                  src="/gearup3.png"
                  alt="Nike Dri-FIT ADV TechKnit Ultra Men's Short-Sleeve Running Top"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div>
                <h3 className="font-medium">Nike Dri-FIT ADV TechKnit Ultra Men's Short-Sleeve Running Top</h3>
                <p className="text-sm text-gray-500">Qty 1</p>
                <p className="text-sm">₹3,895.00</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="relative w-24 h-24">
                <Image
                  src="/Image2.png"
                  alt="Nike Air Max 97 SE Men's Shoes"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div>
                <h3 className="font-medium">Nike Air Max 97 SE Men's Shoes</h3>
                <p className="text-sm text-gray-500">Qty 1</p>
                <p className="text-sm">₹16,995.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="border-t mt-12">
        <div className="max-w-[1411px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="space-y-4">
            <button className="w-full text-left py-2 flex justify-between items-center hover:text-gray-600">
              <span>Delivery</span>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                <path d="M19 9L12 16L5 9" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </button>
            <button className="w-full text-left py-2 flex justify-between items-center hover:text-gray-600">
              <span>Shipping</span>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                <path d="M19 9L12 16L5 9" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </button>
            <button className="w-full text-left py-2 flex justify-between items-center hover:text-gray-600">
              <span>Billing</span>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                <path d="M19 9L12 16L5 9" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </button>
            <button className="w-full text-left py-2 flex justify-between items-center hover:text-gray-600">
              <span>Payment</span>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                <path d="M19 9L12 16L5 9" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-700 border-t border-gray-200">
        <div className="max-w-[1411px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <a href="#" className="text-xs text-gray-400 hover:text-gray-100">India</a>
              <span className="text-gray-300">|</span>
              <a href="#" className="text-xs text-gray-400 hover:text-gray-100">© 2023 NIKE, Inc. All Rights Reserved</a>
              <span className="text-gray-300">|</span>
              <a href="#" className="text-xs text-gray-400 hover:text-gray-100">Terms of Use</a>
              <span className="text-gray-300">|</span>
              <a href="#" className="text-xs text-gray-400 hover:text-gray-100">Terms of Sale</a>
              <span className="text-gray-300">|</span>
              <a href="#" className="text-xs text-gray-400 hover:text-gray-100">Privacy Policy</a>
            </div>
            
            {/* Payment Methods */}
            <div className="flex items-center gap-2">
                <a href="#">
              <Image src="/visa.png" alt="Visa" width={32} height={20} />
              </a>
              <a href="#">
              <Image src="/visa-electron.png" alt="Visa Electron" width={32} height={20} />
              </a>
              <a href="#">
              <Image src="/mastercard.png" alt="Mastercard" width={32} height={20} />
              </a>
              <a href="#">
              <Image src="/maestro.png" alt="Maestro" width={32} height={20} />
              </a>
              <a href="#">
              <Image src="/american-express.png" alt="American Express" width={32} height={20} />
              </a>
              <a href="#">
              <Image src="/diners-club.png" alt="Diners Club" width={32} height={20} />
              </a>
              <a href="#">
              <Image src="/discover.png" alt="Discover" width={32} height={20} />
              </a>
              <a href="#">
              <Image src="/bank.png" alt="Bank" width={32} height={20} />
              </a>
              <a href="#">
              <Image src="/paytm.png" alt="Paytm" width={32} height={20} />
              </a>
              <a href="#">
              <Image src="/upi.png" alt="UPI" width={32} height={20} />
              </a>
              <a href="#">
              <Image src="/jcb.png" alt="JCB" width={32} height={20} />
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
