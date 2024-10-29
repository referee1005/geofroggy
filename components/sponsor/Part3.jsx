import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import PM from '../../public/images/donate/PM.png'
import Marketer from '../../public/images/donate/Marketer.png'
import CEO from '../../public/images/donate/CEO.png'
import Manager from '../../public/images/donate/Manager.png'

function Part2 ({ data }) {
  return (
    <div className='container-custom py-24 sm:min-h-custom2  lg:min-h-custom1'>
      <div className='flex flex-col items-center mb-16'>
        <div className='text-3xl lg:text-4xl xl:text-5xl 3xl:text-6xl text-center mb-4 font-medium'>
          Meet our team
        </div>
        <div className='w-full text-center text-base lg:text-xl 2xl:text-2xl xl:w-1/3'>
          We’d love to ave you! Join our network of Travellers and geography
          geeks
        </div>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
        {data.map(item => {
          return (
            <div className='flex justify-center'>
              <div>
                {' '}
                <Image
                  src={item.image}
                  className='rounded-4xl'
                  width={1000}
                  height={1000}
                />
                <div className='sm:text-lg lg:text-xl 2xl:text-2xl 3xl:text-3xl mt-4'>
                  {item.name}
                </div>
                <div className='text-sm lg:text-base 2xl:text-lg 3xl:text-xl'>
                  {item.designation}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Part2
