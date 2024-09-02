import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Favourite1 from '../../public/images/favourite1.png'
import Favourite2 from '../../public/images/favourite2.png'
import Favourite3 from '../../public/images/favourite3.png'
import Favourite4 from '../../public/images/favourite4.png'
import Favourite5 from '../../public/images/favourite5.png'
import Favourite6 from '../../public/images/favourite6.png'

const images = [
  Favourite1,
  Favourite2,
  Favourite3,
  Favourite4,
  Favourite5,
  Favourite6
]
function Favourite ({}) {
  return (
    <div
      className='container-custom flex flex-col'
      style={{ backgroundColor: '#EEEEEE' }}
    >
      <div className='text-center'>
        <div className='font-semibold text-3xl sm:text-5xl lg:text-7xl my-12 sm:my-24 text-center'>
          Favourite Places
        </div>
        <div className=' grid grid-cols-3 lg:grid-cols-6 gap-8 relative flex min-h-64 sm:min-h-64 pb-24'>
          {images.map((item, index) => (
            <div
              className='bg-white shadow-md rounded-lg overflow-hidden'
              key={index}
            >
              {/* Main Image */}
              <Image
                src={item}
                alt={item.name}
                className='w-full h-32 object-cover min-h-32'
                layout='responsive'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Favourite
