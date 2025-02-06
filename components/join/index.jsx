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
        <div className="relative w-full lg:w-[40%] flex flex-col justify-center items-start lg:pl-8">

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
          <div className='flex bg-white flex-col justify-center px-12 py-10 z-10 rounded-2xl'>

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
                  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.4307 7.42188C15.7227 3.06152 14.0527 0 12.1094 0C10.166 0 8.49609 3.06152 7.78809 7.42188H16.4307ZM7.42188 12.1094C7.42188 13.1934 7.48047 14.2334 7.58301 15.2344H16.6309C16.7334 14.2334 16.792 13.1934 16.792 12.1094C16.792 11.0254 16.7334 9.98535 16.6309 8.98438H7.58301C7.48047 9.98535 7.42188 11.0254 7.42188 12.1094ZM23.2764 7.42188C21.8799 4.10645 19.0527 1.54297 15.5615 0.507812C16.7529 2.1582 17.5732 4.64355 18.0029 7.42188H23.2764ZM8.65234 0.507812C5.16602 1.54297 2.33398 4.10645 0.942383 7.42188H6.21582C6.64062 4.64355 7.46094 2.1582 8.65234 0.507812ZM23.7988 8.98438H18.1982C18.3008 10.0098 18.3594 11.0596 18.3594 12.1094C18.3594 13.1592 18.3008 14.209 18.1982 15.2344H23.7939C24.0625 14.2334 24.2139 13.1934 24.2139 12.1094C24.2139 11.0254 24.0625 9.98535 23.7988 8.98438ZM5.85938 12.1094C5.85938 11.0596 5.91797 10.0098 6.02051 8.98438H0.419922C0.15625 9.98535 0 11.0254 0 12.1094C0 13.1934 0.15625 14.2334 0.419922 15.2344H6.01562C5.91797 14.209 5.85938 13.1592 5.85938 12.1094ZM7.78809 16.7969C8.49609 21.1572 10.166 24.2188 12.1094 24.2188C14.0527 24.2188 15.7227 21.1572 16.4307 16.7969H7.78809ZM15.5664 23.7109C19.0527 22.6758 21.8848 20.1123 23.2812 16.7969H18.0078C17.5781 19.5752 16.7578 22.0605 15.5664 23.7109ZM0.942383 16.7969C2.33887 20.1123 5.16602 22.6758 8.65723 23.7109C7.46582 22.0605 6.64551 19.5752 6.21582 16.7969H0.942383Z" fill="white" />
                  </svg>
                  <span>100% remote and online community worldwide</span>
                </div>
                <div className="flex items-center justify-center space-x-3 bg-[#1B4E7C] text-white py-3 px-6 rounded-full">
                  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.4765 17.3395L19.368 15.1375V24.22H23.6047C23.9391 24.22 24.21 23.8813 24.21 23.4631V18.7307C24.21 18.4345 24.1405 18.1448 24.0101 17.8975C23.8797 17.6502 23.6942 17.4562 23.4765 17.3395ZM0 18.7307V23.4631C0 23.8813 0.270849 24.22 0.60525 24.22H4.842V15.1375L0.733487 17.3395C0.515789 17.4562 0.330258 17.6502 0.19988 17.8975C0.0695016 18.1448 5.00847e-06 18.4345 0 18.7307ZM17.5697 11.6691L15.7365 10.2934V4.85478C15.7365 4.45317 15.609 4.06858 15.3817 3.78428L12.5328 0.221742C12.2964 -0.0739139 11.9132 -0.0739139 11.6772 0.221742L8.82833 3.78428C8.60136 4.0681 8.4735 4.45317 8.4735 4.85478V10.2934L6.64035 11.6691C6.46107 11.8035 6.31269 11.9938 6.20967 12.2212C6.10665 12.4487 6.0525 12.7057 6.0525 12.9671V24.22H9.684V19.6787C9.684 18.0065 10.7682 16.6512 12.105 16.6512C13.4418 16.6512 14.526 18.0065 14.526 19.6787V24.22H18.1575V12.9671C18.1575 12.4354 17.9343 11.9425 17.5697 11.6691Z" fill="white" />
                  </svg>
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