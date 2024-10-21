import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import advert1 from '../../public/images/media/advert1.png'
import advert2 from '../../public/images/media/advert2.png'
import advert3 from '../../public/images/media/advert3.png'
import advert4 from '../../public/images/media/advert4.png'

function Advert ({ title, data }) {
  const [currentIndex, setCurrentIndex] = useState(null)
  return (
    <div className='container-custom flex flex-col gap-4 py-8 bg-custom-bg-primary'>
      <div className='relative'>
        <div className='bg-white flex h-64 min-h-64 lg:min-h-96 w-full lg:h-96 2xl:h-[600px] rounded-2xl'>
          <Image
            src={advert1}
            alt='Light Logo'
            className='h-64 min-h-64 lg:min-h-96 w-full lg:h-96 2xl:h-[600px] rounded-2xl'
          />
        </div>
        <div className='absolute inset-0 h-full'>
          <div className='flex flex-col gap-2 sm:gap-4 lg:gap-8 h-full justify-center text-white w-4/5 sm:w-3/5 mx-4 sm:mx-8 lg:mx-16'>
            <div className='lg:text-lg w-fit backdrop-blur-md rounded-full bg-white/30 py-2 px-4 cursor-pointer'>
              <div>Media</div>
            </div>
            <div className='text-2xl lg:text-4xl 2xl:text-6xl mx-auto w-full'>
              Best of the Views around the world. Explore with{' '}
              <span className='text-custom-primary'>Geofroggy</span>
            </div>
            <div className='lg:text-lg 2xl:text-xl lg:w-4/5 flex text-[#CFD8E3]'>
              From the highest and lowest points on Earth are Mount Everest and
              the Mariana Trench🌟
            </div>
          </div>
        </div>
      </div>
      <div className='flex sm:flex-row flex-col gap-4'>
        <div className='flex-1 grid grid-cols-2 gap-4'>
          <div className='relative'>
            {' '}
            <div className='bg-white flex h-64 min-h-64 lg:min-h-96 w-full lg:h-96 2xl:h-[600px] rounded-2xl'>
              <Image
                src={advert2}
                alt='Light Logo'
                className='h-64 min-h-64 lg:min-h-96 w-full lg:h-96 2xl:h-[600px] rounded-2xl'
              />
            </div>
            <div className='absolute inset-0 h-full'>
              <div className='flex flex-col gap-8 h-full justify-between  text-white w-full p-4 lg:p-8'>
                <div className='text-sm lg:text-lg w-fit backdrop-blur-md rounded-full text-black bg-white py-2 px-4 cursor-pointer'>
                  <div>View Video</div>
                </div>
                <div className='text-2xl lg:text-4xl 3xl:text-5xl w-3/5 '>
                  Mount Everest
                </div>
              </div>
            </div>
          </div>
          <div className='relative'>
            {' '}
            <div className='bg-white flex h-64 min-h-64 lg:min-h-96 w-full lg:h-96 2xl:h-[600px] rounded-2xl'>
              <Image
                src={advert3}
                alt='Light Logo'
                className='h-64 min-h-64 lg:min-h-96 w-full lg:h-96 2xl:h-[600px] rounded-2xl'
              />
            </div>
            <div className='absolute inset-0 h-full'>
              <div className='flex flex-col gap-8 h-full justify-between  text-white w-full p-4 lg:p-8'>
                <div className='text-sm lg:text-lg w-fit backdrop-blur-md rounded-full text-black bg-white py-2 px-4 cursor-pointer'>
                  <div>View Video</div>
                </div>
                <div className='text-2xl lg:text-4xl 3xl:text-5xl w-3/5 '>
                  White Goose
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='sm:w-[40%]  relative'>
          {' '}
          <div className='bg-white flex h-64 min-h-64 lg:min-h-96 w-full lg:h-96 2xl:h-[600px] rounded-2xl'>
            <Image
              src={advert4}
              alt='Light Logo'
              className='h-64 min-h-64 lg:min-h-96 w-full lg:h-96 2xl:h-[600px] rounded-2xl'
            />
          </div>
          <div className='absolute inset-0 h-full'>
            <div className='flex flex-col gap-8 h-full justify-between  text-white w-full p-4 lg:p-8'>
              <div className='text-sm lg:text-lg w-fit backdrop-blur-md rounded-full text-black bg-white py-2 px-4 cursor-pointer'>
                <div>View Photos</div>
              </div>
              <div className='text-2xl lg:text-4xl 3xl:text-5xl w-4/5 '>
                Bird on beach
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Advert
