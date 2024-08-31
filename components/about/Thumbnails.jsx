import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Thumbnail1 from '../../public/images/about1.png'
import Thumbnail2 from '../../public/images/about2.png'
import Thumbnail3 from '../../public/images/about3.png'
import Thumbnail4 from '../../public/images/about4.png'

const images = [
  {
    image: Thumbnail1,
    title: 'Country'
  },
  {
    image: Thumbnail2,
    title: 'Search'
  },
  {
    image: Thumbnail3,
    title: 'Situational'
  },
  {
    image: Thumbnail4,
    title: 'Travel'
  }
]
function Thumbnails ({}) {
  return (
    <div
      className='container-custom my-4 lg:my-8 2xl:my-16'
      // style={{ backgroundColor: '#EEEEEE' }}
    >
      <div className=' grid grid-cols-1 sm:grid-cols-2 ms:px-16 sm:px-0 lg:grid-cols-4 gap-2 2xl:gap-8 relative flex min-h-64 sm:min-h-64'>
        {images.map((item, index) => (
          <div
            className='relative bg-white shadow-md rounded-lg overflow-hidden'
            key={index}
          >
            {/* Main Image */}
            <Image
              src={item.image}
              alt={item.name}
              className='w-full h-32 object-cover min-h-32'
              layout='responsive'
            />
            <div className='absolute bottom-2 mx-2 rounded-lg bg-white p-4 pr-8 lg:p-2 2xl:p-4 2xl:pr-8'>
              <div className='text-4xl lg:text-2xl xl:text-3xl 2xl:text-4xl mb-4 lg:mb-2 2xl:mb-4'>
                {item.title}
              </div>
              <div className='text-base lg:text-xs xl:text-sm 2xl:text-base'>
                We will offer various city related tours and surrounding areas
                along with information. We will offer various city related
                tours.
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Thumbnails
