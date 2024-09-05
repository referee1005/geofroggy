import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Faq1 from '../../public/images/faq/faq1.png'
import Faq2 from '../../public/images/faq/faq2.png'
import Faq3 from '../../public/images/faq/faq3.png'
import Faq4 from '../../public/images/faq/faq4.png'
import Faq5 from '../../public/images/faq/faq5.png'
import Faq6 from '../../public/images/faq/faq6.png'
import Faq7 from '../../public/images/faq/faq7.png'
import Faq8 from '../../public/images/faq/faq8.png'

const images = [Faq1, Faq2, Faq3, Faq4, Faq5, Faq6, Faq7, Faq8]
function Advice ({ data }) {
  return (
    <div className='container-custom mb-16'>
      <div className='text-center lg:text-left text-3xl lg:text-4xl 2xl:text-5xl font-semibold my-4 lg:my-8 2xl:my-16'>
        Advice and answers
      </div>
      <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 2xl:gap-8 relative'>
        {data &&
          data.map((item, index) => (
            <div
              className='relative bg-white border-2 rounded-lg overflow-hidden p-4 flex flex-col items-center'
              key={index}
            >
              <div className='relative bg-white border-2 rounded-lg overflow-hidden w-16 p-4 mb-4'>
                {/* Main Image */}
                <Image
                  src={images[index]}
                  alt={item.name}
                  // className='object-cover '
                  layout='responsive'
                />
              </div>
              <div className='lg:text-lg 2xl:text-xl font-semibold text-center'>
                {item.question}
              </div>
              <div className='lg:text-md 2xl:text-lg text-center'>
                {item.answer}
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Advice
