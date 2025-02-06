import React, { useState, useEffect } from 'react'
import Input from '../reusable/AuthInput'
import CustomButton from '../reusable/CustomButton'


function JoinForm() {
  const [elementHeight, setElementHeight] = useState(12);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setElementHeight(12);
      else setElementHeight(10);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-full max-w-md">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-[32px] font-semibold text-gray-900 mb-2">
          Join Us
        </h1>
        <p className="text-gray-600">
          We'd love to have you! Join our network of Travellers and geography geeks
        </p>
      </div>

      {/* Form Fields */}
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <Input
            label="First Name"
            textColor="black"
            opacity={false}
            inputHeight={elementHeight}
          />
          <Input
            label="Last Name"
            textColor="black"
            opacity={false}
            inputHeight={elementHeight}
          />
        </div>

        <Input
          label="Email"
          textColor="black"
          opacity={false}
          inputHeight={elementHeight}
        />

        <Input
          label="Password"
          type="password"
          textColor="black"
          opacity={false}
          inputHeight={elementHeight}
        />

        {/* Sign Up Button */}
        <CustomButton
          title="Sign Up"
          rounded="full"
          blur={false}
          bgColor="#1B4E7C"
          color="white"
          size="lg"
          width="full"
          height={elementHeight}
        />

        {/* Login Link */}
        <div className="text-center text-sm">
          Already have an account?{' '}
          <a href="/login" className="text-[#1B4E7C] font-medium hover:underline">
            Log in
          </a>
        </div>

        {/* Divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 text-gray-500 bg-gradient-to-br from-[#F9F8FF] via-[#EAF4FF] to-[#F9F8FF]">
              Or continue with
            </span>
          </div>
        </div>

        {/* Social Login */}
        <div className="flex items-center justify-center space-x-3">
          {/* Google Button */}
          <button className="flex items-center px-2 py-2 border border-gray-200 hover:border-gray-300 transition-colors rounded-lg text-sm font-medium">
            <svg
              className="w-6 h-6 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" fill="currentColor" />
              <text
                x="50%"
                y="55%"
                textAnchor="middle"
                fill="white"
                fontSize="10px"
                fontWeight="bold"
                dy=".3em"
              >
                G
              </text>
            </svg>
            Google
          </button>


          {/* Facebook Button */}
          <button className="flex items-center px-2 py-2 border border-gray-200 hover:border-gray-300 transition-colors rounded-lg text-sm font-medium">
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"
              />
            </svg>
          </button>

          {/* X Button */}
          <button className="flex items-center justify-center px-2 py-2 border border-gray-200 hover:border-gray-300 transition-colors rounded-lg">
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" fill="currentColor" />
              <text
                x="50%"
                y="55%"
                textAnchor="middle"
                fill="white"
                fontSize="10px"
                fontWeight="bold"
                dy=".3em"
              >
                X
              </text>
            </svg>
          </button>
        </div>

      </div>
    </div>
  );
}

export default JoinForm
