import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import image from '../../public/images/Home-whoweare.png'

function Support () {
  return (
    <div className='relative flex flex-col min-h-80 lg:min-h-80'>
      <div className='bg-white flex'>
        <Image
          src={image}
          alt='Light Logo'
          className='h-80 min-h-80 lg:min-h-96 w-full lg:h-96'
        />
      </div>
      <div className='absolute container-custom h-full w-full flex justify-center '>
        <div className='inset-0 flex flex-col justify-center text-center lg:text-center text-white w-full lg:w-full 2xl:w-4/5 mx-auto'>
          <div className='text-5xl sm:text-6xl lg:text-7xl 2xl:text-8xl font-semibold mb-2 lg:mb-4 2xl:mb-8'>
            Privacy Policy
          </div>
          <div className='text-sm lg:text-base mx-auto w-full flex justify-center'>
            Last Updated April 10th, 2023
          </div>
        </div>
      </div>
    </div>
  )
}

export default Support
