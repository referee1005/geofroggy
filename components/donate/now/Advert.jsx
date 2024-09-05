import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import AdvertImage from '../../../public/images/donate/image.png'

function Advert ({}) {
  return (
    <div className='relative flex min-h-96 lg:min-h-96 pb-4'>
      <div className='relative bg-white shadow-md overflow-hidden'>
        {/* Main Image */}
        <Image
          src={AdvertImage}
          className='w-full object-cover min-h-96 lg:min-h-96'
          layout='responsive'
        />
        <div className='container-custom absolute inset-0 grid grid-cols-1 lg:grid-cols-2 text-white '>
          <div className='lg:p-8 2xl:p-12 flex flex-col justify-center'>
            <div className='text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl font-semibold'>
              “Charity brings to life again those who are spiritually dead.”
            </div>
            <div className='text-md lg:mt-8 2xl:mt-16 text-right lg:text-left'>
              ~ Thomas Aquinas
            </div>
          </div>
          <div className='lg:px-12 2xl:px-24 3xl:px-32 flex flex-col justify-center text-sm lg:text-md 2xl:text-lg'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Advert
