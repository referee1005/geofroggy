import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import AdvertImage from '../../public/images/donate/image.png'

function Advert({ data }) {
  return (
    <>
      {data !== undefined && (
        <div className='relative flex min-h-96 lg:min-h-96 pb-4'>
          <div className='relative min-h-96 lg:min-h-96 lg:h-[500px] bg-white shadow-md overflow-hidden w-full'>
            {/* Main Image */}
            <Image
              src={data.image}
              className='w-full object-cover min-h-96 lg:min-h-96 lg:h-[500px]'
              layout='responsive'
              width={2000}
              height={1000}
            />
            <div className='container-custom absolute inset-0 grid grid-cols-1 lg:grid-cols-2 text-white '>
              <div className='lg:p-8 2xl:p-12 flex flex-col justify-center'>
                <div className='text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl font-semibold'>
                  {data.title}
                </div>
                <div className='text-md lg:mt-8 2xl:mt-16 text-right lg:text-left'>
                  ~ {data.author}
                </div>
              </div>
              <div className='lg:px-12 2xl:px-24 3xl:px-32 flex flex-col justify-center text-sm lg:text-md 2xl:text-lg'>
                {data.description}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Advert
