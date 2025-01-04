'use client';

import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [keepSignedIn, setKeepSignedIn] = useState(false);

  return (
    <div className="w-full min-h-screen bg-white flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-[460px] mx-auto space-y-8">
        {/* Nike Logo */}
        <div className="flex justify-center mb-8">
        <a href="/">
        <svg width="59" height="22" viewBox="0 0 59 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M58.9262 0.772461L15.8854 19.0298C12.302 20.5502 9.28743 21.3087 6.85813 21.3087C4.12475 21.3087 2.13358 20.3442 0.910756 18.4184C-0.674992 15.9335 0.0181594 11.9381 2.73845 7.72033C4.35363 5.25506 6.40692 2.99251 8.40791 0.828045C7.93709 1.59313 3.78145 8.5083 8.32617 11.7648C9.22531 12.4187 10.5037 12.7391 12.0764 12.7391C13.3384 12.7391 14.7869 12.5332 16.3792 12.1179L58.9262 0.772461Z" fill="#111111"/>
        </svg>
        </a>
        </div>

        {/* Title */}
        <div className="text-center space-y-1">
          <h1 className="text-[24px] font-medium">YOUR ACCOUNT</h1>
          <h2 className="text-[24px] font-medium">FOR EVERYTHING</h2>
          <h3 className="text-[24px] font-medium">NIKE</h3>
        </div>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="w-full h-[40px] px-4 border border-[#e5e5e5] rounded focus:outline-none focus:border-[#757575]"
            />
          </div>
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full h-[40px] px-4 border border-[#e5e5e5] rounded focus:outline-none focus:border-[#757575]"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-[12px] text-[#707072] cursor-pointer">
              <input
                type="checkbox"
                checked={keepSignedIn}
                onChange={(e) => setKeepSignedIn(e.target.checked)}
                className="w-4 h-4 border-gray-300 rounded"
              />
              Keep me signed in
            </label>
            <a href="/forgot-password" className="text-[12px] text-[#707072] hover:text-[#111] hover:underline">
              Forgotten your password?
            </a>
          </div>

          <div className="text-[12px] text-[#707072] text-center">
            By logging in, you agree to Nike's{' '}
            <a href="/privacy-policy" className="underline hover:text-[#111]">
              Privacy Policy
            </a>
            {' '}and{' '}
            <a href="/terms" className="underline hover:text-[#111]">
              Terms of Use
            </a>
            .
          </div>

          <button
            type="submit"
            className="w-full h-[40px] bg-black text-white rounded hover:bg-[#1f1f1f] transition-colors duration-200"
          >
            SIGN IN
          </button>
        </form>

        <div className="text-center text-[12px] text-[#707072]">
          Not a Member?{' '}
          <a href="/joinus" className="underline text-[#111] hover:opacity-80">
            Join Us
          </a>
          .
        </div>
      </div>
    </div>
  );
};

export default Login;