import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import image from '../../public/images/Home-whoweare.png'
import JoinButton from '../reusable/JoinUs'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSiteInfoRequest } from '@/actions/about'
import MediaViewButton from '../reusable/MediaVewButton'
import image1 from '../../public/images/media/image1.png'
import image2 from '../../public/images/media/image2.png'
import advert3 from '../../public/images/media/advert3.png'
function Details () {
  return (
    <div className='relative rounded-t-4xl bg-black '>
      {/*********************************top side of Detail ***************************************/}
      <div className='py-16 flex md:flex-row gap-4 flex-col container-custom '>
        <div>
          <div className='flex flex-col gap-4 lg:gap-8 h-full justify-center text-white w-full'>
            <div className='lg:text-lg 2xl:text-xl w-fit backdrop-blur-md rounded-full bg-white/30 py-2 px-4'>
              <div>Press Release</div>
            </div>
            <div className='text-2xl lg:text-4xl 2xl:text-6xl mx-auto w-full'>
              Ready for the Details
            </div>
            <div className='lg:text-lg 2xl:text-xl lg:w-4/5 flex text-[#CFD8E3]'>
              From the highest and lowest points on Earth are Mount Everest and
              the Mariana Trench🌟
            </div>
            <div>
              <MediaViewButton title={'View More'} borderColor={'#CFD8E3'} />
            </div>
          </div>
        </div>
        <div className='flex gap-4 '>
          <div className='flex-1 relative '>
            {' '}
            <div className='bg-white rounded-2xl flex h-64 min-h-64 lg:min-h-96 w-full lg:h-96 2xl:h-[600px]'>
              <Image
                src={image1}
                alt='Light Logo'
                className='h-64 min-h-64 lg:min-h-96 w-full lg:h-96 2xl:h-[600px] rounded-2xl'
              />
            </div>
            <div className='absolute inset-0 h-full'>
              <div className='flex flex-col gap-8 h-full justify-between text-white w-full p-4 2xl:p-8'>
                <div>
                  <div className='lg:text-2xl 2xl:text-4xl'>Press Release</div>
                  <div className='lg:text-2xl 2xl:text-4xl'>Title Here</div>
                </div>
                <div className='text-2xl lg:text-4xl 3xl:text-5xl flex justify-end'>
                  <MediaViewButton
                    title={'Read More'}
                    backgroundColor={'#FFFFFF'}
                    color1='black'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='flex-1 relative'>
            {' '}
            <div className='bg-white flex h-64 min-h-64 rounded-2xl lg:min-h-96 w-full lg:h-96 2xl:h-[600px]'>
              <Image
                src={image2}
                alt='Light Logo'
                className='h-64 min-h-64 lg:min-h-96 w-full lg:h-96 2xl:h-[600px] rounded-2xl'
              />
            </div>
            <div className='absolute inset-0 h-full'>
              <div className='flex flex-col gap-8 h-full justify-between  text-white w-full p-4 2xl:p-8'>
                <div>
                  <div className='lg:text-2xl 2xl:text-4xl'>Press Release</div>
                  <div className='lg:text-2xl 2xl:text-4xl'>Title Here</div>
                </div>

                <div className='text-2xl lg:text-4xl 3xl:text-5xl flex justify-end'>
                  <MediaViewButton
                    title={'Read More'}
                    backgroundColor={'#FFFFFF'}
                    color1='black'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*********************************bottom side of Detail ***************************************/}
      <div className='grid grid-cols-2 md:grid-cols-4 gap-2 lg:gap-4 rounded-t-4xl bg-white container-custom py-16'>
        <div className='flex-1 relative rounded-2xl bg-[#4F87C0] h-72 min-h-72 sm:h-80 sm:min-h-80 lg:min-h-96 w-full lg:h-96 2xl:h-[600px]'>
          {' '}
          <div className='flex flex-col gap-4 h-full text-white w-full p-4 2xl:py-16 2xl:px-8'>
            <div className='text-xl lg:text-2xl 2xl:text-4xl'>Title</div>
            <div className='text-sm lg:text-base 2xl:text-xl lg:w-4/5 flex text-[#CFD8E3]'>
              From the highest and lowest points on Earth are Mount Everest and
              the Mariana Trench🌟
            </div>
            <MediaViewButton
              title={'Read More'}
              // backgroundColor={'#FFFFFF'}
              color1='white'
            />
          </div>
        </div>
        {[0, 1, 2].map(item => (
          <div className='flex-1 relative'>
            {' '}
            <div className='bg-white flex sm:h-80 sm:min-h-80 rounded-2xl lg:min-h-96 w-full lg:h-96 2xl:h-[600px]'>
              <Image
                src={advert3}
                alt='Light Logo'
                className='h-72 min-h-72 sm:h-80 min-h-80 lg:min-h-96 w-full lg:h-96 2xl:h-[600px] rounded-2xl'
              />
            </div>
            <div className='absolute inset-0 h-full'>
              <div className='flex flex-col gap-8 h-full text-white items-center justify-end w-full p-4 2xl:p-8'>
                <div className='text-sm sm:text-base lg:text-lg 2xl:text-xl w-full text-center backdrop-blur-md rounded-full bg-white/30 py-2 px-4'>
                  <div>Title</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Details
