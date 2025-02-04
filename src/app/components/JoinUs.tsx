'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface FormErrors {
  [key: string]: string;
}

const JoinUs = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    country: 'Pakistan',
    gender: '',
    emailUpdates: false
  });
  const [message, setMessage] = useState<React.ReactNode>('');
  const [errors, setErrors] = useState<FormErrors>({});
  const router = useRouter();

  useEffect(() => {
    if (message === <span className="text-green-500 mt-4 block">Join successfully</span>) {
      const timer = setTimeout(() => {
        router.push('/');
      }, 2000);

      return () => {
        clearTimeout(timer);
        setTimeout(() => {}, 2000);
      };
    }
  }, [message, router]);

  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    }

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First Name is required';
    } else if (!/^[a-zA-Z\s]*$/.test(formData.firstName)) {
      newErrors.firstName = 'First Name must contain only letters and spaces';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last Name is required';
    } else if (!/^[a-zA-Z\s]*$/.test(formData.lastName)) {
      newErrors.lastName = 'Last Name must contain only letters and spaces';
    }

    if (!formData.dateOfBirth.trim()) {
      newErrors.dateOfBirth = 'Date of Birth is required';
    }

    if (!formData.gender) {
      newErrors.gender = 'Gender is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setMessage(
        <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-md animate-fade-in" style={{ animationDuration: '1s' }}>
          Join successfully
        </div>
      );
    } else {
      setMessage('Invalid Form');
    }
  };

  return (
    <div className="w-full min-h-screen bg-white flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-[460px] mx-auto space-y-8">
        {/* Nike Logo */}
        <div className="flex justify-center mb-8">
          <a href="/">
            <svg width="59" height="22" viewBox="0 0 59 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M58.9262 0.772461L15.8854 19.0298C12.302 20.5502 9.28743 21.3087 6.85813 21.3087C4.12475 21.3087 2.13358 20.3442 0.910756 18.4184C-0.674992 15.9335 0.0181594 11.9381 2.73845 7.72033C4.35363 5.25506 6.40692 2.99251 8.40791 0.828045C7.93709 1.59313 3.78145 8.5083 8.32617 11.7648C9.22531 12.4187 10.5037 12.7391 12.0764 12.7391C13.3384 12.7391 14.7869 12.5332 16.3792 12.1179L58.9262 0.772461Z"
                fill="#111111"
              />
            </svg>
          </a>
        </div>

        {/* Title */}
        <div className="text-center space-y-4">
          <h1 className="text-[24px] font-medium">BECOME A NIKE MEMBER</h1>
          <p className="text-[14px] text-[#707072] max-w-[380px] mx-auto">
            Create your Nike Member profile and get first access to the very best of Nike products, inspiration and community.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email address"
              className={`w-full h-[40px] px-4 border ${errors.email ? 'border-red-500' : 'border-[#e5e5e5]'} rounded focus:outline-none focus:border-[#757575]`}
            />
            {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
          </div>
          
          <div>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Password"
              className={`w-full h-[40px] px-4 border ${errors.password ? 'border-red-500' : 'border-[#e5e5e5]'} rounded focus:outline-none focus:border-[#757575]`}
            />
            {errors.password && <p className="text-xs text-red-500 mt-1">{errors.password}</p>}
          </div>
          
          <div>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="First Name"
              className={`w-full h-[40px] px-4 border ${errors.firstName ? 'border-red-500' : 'border-[#e5e5e5]'} rounded focus:outline-none focus:border-[#757575]`}
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
              className={`w-full h-[40px] px-4 border ${errors.lastName ? 'border-red-500' : 'border-[#e5e5e5]'} rounded focus:outline-none focus:border-[#757575]`}
            />
            {errors.lastName && <p className="text-xs text-red-500 mt-1">{errors.lastName}</p>}
          </div>
          
          <div className="space-y-1">
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleInputChange}
              placeholder="Date of Birth"
              className={`w-full h-[40px] px-4 border ${errors.dateOfBirth ? 'border-red-500' : 'border-[#e5e5e5]'} rounded focus:outline-none focus:border-[#757575]`}
            />
            {errors.dateOfBirth && <p className="text-xs text-red-500 mt-1">{errors.dateOfBirth}</p>}
            <p className="text-[12px] text-[#707072]">Get a Nike Member Reward every year on your Birthday.</p>
          </div>

          <select 
            name="country"
            value={formData.country}
            onChange={(e) => setFormData(prev => ({ ...prev, country: e.target.value }))}
            className="w-full h-[40px] px-4 border border-[#e5e5e5] rounded focus:outline-none focus:border-[#757575] bg-white"
          >
            <option value="Pakistan">Pakistan</option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="India">India</option>
          </select>

          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => setFormData(prev => ({ ...prev, gender: 'male' }))}
              className={`flex-1 h-[40px] border rounded ${
                formData.gender === 'male' ? 'border-black' : 'border-[#e5e5e5]'
              } hover:border-[#757575]`}
            >
              Male
            </button>
            <button
              type="button"
              onClick={() => setFormData(prev => ({ ...prev, gender: 'female' }))}
              className={`flex-1 h-[40px] border rounded ${
                formData.gender === 'female' ? 'border-black' : 'border-[#e5e5e5]'
              } hover:border-[#757575]`}
            >
              Female
            </button>
            {errors.gender && <p className="text-xs text-red-500 mt-1">{errors.gender}</p>}
          </div>

          <label className="flex items-start gap-2 text-[12px] text-[#707072] cursor-pointer">
            <input
              type="checkbox"
              name="emailUpdates"
              checked={formData.emailUpdates}
              onChange={handleInputChange}
              className="mt-1 w-4 h-4 border-gray-300 rounded"
            />
            Sign up for emails to get updates from Nike on products, offers and your Member benefits
          </label>

          <div className="text-[12px] text-[#707072] text-center">
            By creating an account, you agree to Nike's{' '}
            <a href="/privacy-policy" className="underline hover:text-[#111]">Privacy Policy</a>
            {' '}and{' '}
            <a href="/terms" className="underline hover:text-[#111]">Terms of Use</a>.
          </div>

          <div className="mt-6 sm:mt-8 flex justify-center">
            <button
              type="submit"
              className="bg-[#111] text-white px-8 sm:px-48 py-3 rounded-[5px] inline-block hover:bg-gray-800 transition-colors duration-200 w-full sm:w-auto text-center"
            >
              JOIN US
            </button>
          </div>
        </form>

        {message && (
          <div className="text-center text-red-500 font-bold">
            {message}
          </div>
        )}

        <div className="text-center text-[12px] text-[#707072]">
          Already a Member?{' '}
          <a href="/signin" className="underline text-[#111] hover:opacity-80">
            Sign In
          </a>
          .
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
