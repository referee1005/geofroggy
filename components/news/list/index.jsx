import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import VerticalNews from './verticalNews'
import HorizontalNews from './horizontalNews'
function NewsList ({ data }) {
  return (
    <div className='mb-16 bg-white '>
      <div className='bg-custom-bg-primary'>
        <div className='text-center py-8 border-b-2 border-[#C1C1C1] font-semibold'>
          Sign up for our Geofroggy Newsletter
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 px-8 lg:px-12 2xl:px-16 py-16 lg:gap-8 2xl:gap-16'>
          <div>
            <div className='flex flex-col gap-8'>
              <div className='flex gap-4'>
                <Image
                  src={data[0] && data[0].author_image.src}
                  className='w-[50px] h-[50px] rounded-lg'
                  width={50}
                  height={50}
                />
                <div className='flex flex-col justify-between'>
                  <div className='font-semibold text-lg'>
                    {data[0] && data[0].author}
                  </div>
                  <div className='text-lg'>Author</div>
                </div>
              </div>
              <div className='font-semibold text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl'>
                {data[0] && data[0].title}
              </div>
              <div className=''>
                <span className='text-[#8CC63E]'>Geography</span> | Geography
              </div>
              <div className='relative w-full' style={{ paddingBottom: '50%' }}>
                <Image
                  src={data[0] && data[0].image.src}
                  className='rounded-xl'
                  // className='w-full object-cover rounded-xl'
                  layout='fill'
                  objectFit='cover'
                />
              </div>
            </div>
          </div>
          <div className='lg:block hidden'>
            <VerticalNews data={data} />
          </div>
        </div>
      </div>
      <div className='px-8 lg:px-12 2xl:px-16 py-16 '>
        <div className='text-3xl sm:text-4xl lg:text-5xl font-semibold mb-8'>
          Latest Articles
        </div>
        <HorizontalNews data={data} />
      </div>
    </div>
  )
}

export default NewsList
