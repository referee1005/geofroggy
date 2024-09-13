import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Background from '../../public/images/join/background.png'
import Background_Mobile from '../../public/images/join/background_mobile.png'
import froggy from '../../public/images/join/geofroggy.png'
import compass from '../../public/images/join/compass.png'
import moon from '../../public/images/join/moon.png'
import JoinForm from './Form'
function Info ({}) {
  return (
    <div className='relative text-white'>
      <div
        className='relative'
        style={{ minHeight: 800 }}
        // key={index}
      >
        <Image
          src={Background}
          className='h-screen sm:block hidden'
          style={{ minHeight: 800 }}
        />
        <Image
          src={Background_Mobile}
          className='h-screen sm:hidden block'
          style={{ minHeight: 800 }}
        />
        <div className='absolute top-0 h-full w-full flex flex-col lg:flex-row'>
          <div className='absolute w-full h-1/2 lg:relative bottom-0 lg:w-[45%] lg:h-full lg:top-0'>
            <JoinForm />
          </div>
          <div className='absolute top-0 h-1/2 w-full lg:h-full lg:relative lg:flex-1 flex flex-col justify-center items-center'>
            <div className='absolute lg:bottom-[10%] mx-8 lg:mx-4 xl:mx-8 2xl:mx-16'>
              <div className='text-3xl sm:text-5xl mb-4 pr-16 lg:mr-0 text-center lg:text-left'>
                Our Winder, Your World
              </div>
              <div className='mb-6'>
                A diverse community of groups coming together to express the
                geography and diversity of the world{' '}
              </div>
              <div className='flex sm:flex-row flex-col items-center justify-center'>
                <div className='flex w-[100%] ms:w-[70%] mb-4 sm:mb-0 sm:w-56 md:w-72 lg:w-[70%] 2xl:w-[35%] sm:mr-4 lg:mr-1 xl:mr-4 2xl:mr-8 justify-center items-center lg:p-1 xl:p-2 border-4 rounded-md'>
                  <div className='w-1/5 flex justify-center'>
                    <Image src={compass} className='' width={38} height={38} />
                  </div>
                  <div className='flex-1 lg:text-sm 2xl:text-base 3xl:text-lg lg:break-words lg:hyphens-auto  2xl:hyphens-none'>
                    100% remote and online community worldwide
                  </div>
                </div>
                <div className='flex w-[100%] ms:w-[70%] sm:w-56 md:w-72 lg:w-[70%]  2xl:w-[35%] sm:mr-4 md:mr-8 lg:mr-2 xl:mr-4 2xl:mr-12 justify-center items-center lg:p-1 xl:p-2 border-4 rounded-md'>
                  <div className='w-1/5 flex justify-center'>
                    <Image src={moon} className='' width={38} height={38} />
                  </div>
                  <div className='flex-1 lg:text-sm 2xl:text-base 3xl:text-lg lg:break-words lg:hyphens-auto  2xl:hyphens-none'>
                    Discover new places and possbilities from home
                  </div>
                </div>
                <div className='mt-2 lg:text-md sm:text-center xl:text-xl sm:w-28 lg:w-36 xl:w-48 2xl:w-32 lg:my-auto'>
                  Learn More About Us
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='absolute top-8 right-8'>
          <Image src={froggy} className='' />
        </div>
      </div>
    </div>
  )
}

export default Info
