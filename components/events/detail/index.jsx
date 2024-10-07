import React from 'react'
import facebook from '../../../public/images/news/Facebook.png'
import twitter from '../../../public/images/news/Twitter.png'
import whatsapp from '../../../public/images/news/WhatsApp.png'
import telegram from '../../../public/images/news/Telegram.png'
import attachments from '../../../public/images/news/attachments.png'

import Image from 'next/image'
import Trending from '@/components/Trending'

function NewsDetail ({ data }) {
  return (
    <div className='relative w-full my-8 2xl:my-16'>
      <div className='flex mb-4'>
        <div className='lg:w-[70%]'>
          <div className='text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl mb-4 2xl:mb-8'>
            {data.title}
          </div>
          <div className=''>
            <span className='text-[#8CC63E]'>Geography</span> |{' '}
            {data.created_at}
          </div>
        </div>
      </div>
      <div className='flex lg:flex-row flex-col gap-4'>
        <div className='lg:w-[70%]'>
          <div
            className='relative w-full mb-8'
            style={{ paddingBottom: '50%' }}
          >
            <Image
              src={data.image && data.image.src}
              className='rounded-xl'
              // className='w-full object-cover rounded-xl'
              layout='fill'
              objectFit='cover'
            />
          </div>
          <div>{data.description}</div>
        </div>
        <div className='flex-1 flex flex-col gap-4 2xl:gap-8'>
          <div className='flex flex-col p-4 2xl:p-8 gap-4 2xl:gap-8 bg-white rounded-lg'>
            <div>AUTHOR</div>
            <div className='flex gap-4'>
              <div className='flex items-center'>
                <Image
                  src={data.author_image && data.author_image.src}
                  className='w-[50px] h-[50px] rounded-lg'
                  width={50}
                  height={50}
                />
              </div>

              <div className='flex flex-col justify-between'>
                <div className='font-semibold 2xl:text-lg'>{data.author}</div>
                <div className='2xl:text-lg'>Reporter, Geofroggy</div>
              </div>
            </div>
          </div>
          <div className='flex flex-col p-4 2xl:p-8 gap-4 2xl:gap-8 bg-white rounded-lg'>
            <div>SHARE</div>
            <div className='flex gap-4'>
              <Image
                src={facebook}
                className='w-8 h-8 2xl:w-[50px] 2xl:h-[50px] rounded-lg'
                width={50}
                height={50}
              />
              <Image
                src={twitter}
                className='w-8 h-8 2xl:w-[50px] 2xl:h-[50px] rounded-lg'
                width={50}
                height={50}
              />{' '}
              <Image
                src={whatsapp}
                className='w-8 h-8 2xl:w-[50px] 2xl:h-[50px] rounded-lg'
                width={50}
                height={50}
              />{' '}
              <Image
                src={telegram}
                className='w-8 h-8 2xl:w-[50px] 2xl:h-[50px] rounded-lg'
                width={50}
                height={50}
              />
            </div>
            <button className='bg-custom-bg-primary py-2 px-4 w-fit rounded-lg cursor-pointer'>
              <Image
                src={attachments}
                className='w-[16px] h-[16px] rounded-lg inline mr-1'
                width={16}
                height={16}
              />
              Copy Link
            </button>
          </div>
          <div className='flex flex-col p-4 2xl:p-8 gap-4 2xl:gap-8 bg-white rounded-lg'>
            <Trending />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsDetail
