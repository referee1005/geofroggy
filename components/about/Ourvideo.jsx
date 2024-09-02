import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Video from '../../public/images/our_video.png'

function OurVideo ({}) {
  return (
    <div className='container-custom lg:my-8 2xl:my-16'>
      <div className='relative flex min-h-48 sm:min-h-48 pb-4'>
        <div className='w-full'>
          <div className='relative bg-white shadow-md rounded-lg overflow-hidden'>
            {/* Main Image */}
            <Image
              src={Video}
              className='w-full object-cover min-h-48'
              layout='responsive'
            />
            <div className='absolute inset-0 flex justify-center items-center text-white bottom-1/2 text-2xl sm:text-4xl lg:text-5xl 2xl:text-7xl font-semibold'>
              Watch Our Video
            </div>
            <div className='absolute inset-0 flex flex-col justify-center items-center text-white'>
              <svg
                width='48'
                height='48'
                viewBox='0 0 48 48'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='backdrop-blur-md rounded-full cursor-pointer'
              >
                <g filter='url(#filter0_b_1833_1200)'>
                  <rect
                    width='48'
                    height='48'
                    rx='24'
                    fill='black'
                    fill-opacity='0.1'
                  />
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M18.0097 14.8397C18.4277 14.603 18.9407 14.6095 19.3526 14.8566L32.686 22.8566C33.0876 23.0976 33.3333 23.5316 33.3333 24C33.3333 24.4683 33.0876 24.9023 32.686 25.1433L19.3526 33.1433C18.9407 33.3904 18.4277 33.3969 18.0097 33.1602C17.5917 32.9236 17.3333 32.4803 17.3333 32L17.3333 16C17.3333 15.5196 17.5917 15.0764 18.0097 14.8397ZM20 18.3549L20 29.645L29.4084 24L20 18.3549Z'
                    fill='white'
                  />
                </g>
                <defs>
                  <filter
                    id='filter0_b_1833_1200'
                    x='-50'
                    y='-50'
                    width='148'
                    height='148'
                    filterUnits='userSpaceOnUse'
                    color-interpolation-filters='sRGB'
                  >
                    <feFlood flood-opacity='0' result='BackgroundImageFix' />
                    <feGaussianBlur in='BackgroundImageFix' stdDeviation='25' />
                    <feComposite
                      in2='SourceAlpha'
                      operator='in'
                      result='effect1_backgroundBlur_1833_1200'
                    />
                    <feBlend
                      mode='normal'
                      in='SourceGraphic'
                      in2='effect1_backgroundBlur_1833_1200'
                      result='shape'
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurVideo
