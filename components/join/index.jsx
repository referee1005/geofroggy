import React from 'react';
import Image from 'next/image';
import { Globe, Home } from 'lucide-react';
import froggy from '../../public/images/froggy.png';
import joinImage from '../../public/images/join.jpg';
import JoinForm from './Form';

function Info() {
  return (
    <div className="w-full flex justify-center bg-gradient-to-br from-[#F9F8FF] via-[#EAF4FF] to-[#F9F8FF] pt-12">
      <div className='flex justify-between max-h-[1440px]'>
        {/* Left Section with Gradient Background */}
        <div className="relative w-full lg:w-[40%] flex flex-col justify-center items-start">

          {/* Top-left Logo */}
          <div className="mb-4">
            <Image src={froggy} alt="Froggy Icon" width={50} height={50} />
          </div>

          {/* JoinForm Component */}
          <JoinForm />
        </div>

        {/* Right Section with White Background */}
        <div className="relative hidden lg:flex w-[60%] px-16 pt-20 pb-12">
          {/* Decorative Dots Pattern */}
          <div
            className="absolute top-8 left-0 w-56 h-28 opacity-30"
            style={{
              backgroundImage: 'radial-gradient(circle, #D8B4FE 5px, transparent 5px)', // Larger dots
              backgroundSize: '24px 24px', // Increased spacing to match the design
            }}
          />
          <div className='flex bg-white flex-col justify-center px-12 py-6 z-10 rounded-2xl'>

            {/* Image Container */}
            <div className="w-full relative aspect-[2/1] max-w-3xl">
              <div className="absolute inset-0 bg-white rounded-[32px] shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
                <Image
                  src={joinImage}
                  alt="Join Us Visual"
                  fill
                  priority
                  className="rounded-[32px] object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>

            {/* Content Below Image */}
            <div className="text-center space-y-4 max-w-xl mt-8 px-6">
              <h2 className="text-[44px] font-bold text-gray-800">
                Our Winder, Your World
              </h2>
              <p className="text-gray-600 text-lg">
                A diverse community of groups coming together to express the geography and diversity of the world
              </p>

              {/* Feature Points */}
              <div className="flex flex-col space-y-4 mt-6">
                <div className="flex items-center justify-center space-x-3 bg-[#1B4E7C] text-white py-3 px-6 rounded-full">
                  <Globe className="w-5 h-5" />
                  <span>100% remote and online community worldwide</span>
                </div>
                <div className="flex items-center justify-center space-x-3 bg-[#1B4E7C] text-white py-3 px-6 rounded-full">
                  <Home className="w-5 h-5" />
                  <span>Discover new places and possibilities from home</span>
                </div>
              </div>
            </div>
          </div>

          <div
            className="absolute bottom-8 right-4 w-56 h-28 opacity-30"
            style={{
              backgroundImage: 'radial-gradient(circle, #D8B4FE 5px, transparent 5px)', // Larger dots
              backgroundSize: '24px 24px', // Increased spacing to match the design
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Info;