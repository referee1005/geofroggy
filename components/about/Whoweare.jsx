import React from 'react'
import Image from 'next/image'
import image from '../../public/images/Home-whoweare.png'
import JoinButton from '../reusable/JoinUs'

function Ofinterest ({ data }) {
  const formatNumber = number => {
    if (number < 1000) {
      return number + '+'
    } else if (number >= 1000 && number < 1000000) {
      return Math.floor(number / 1000) + 'K'
    } else if (number >= 1000000) {
      return Math.floor(number / 1000000) + 'M'
    }
  }
  return (
    <div className='relative flex flex-col min-h-96 lg:min-h-96'>
      <div className='bg-white flex'>
        <Image
          src={image}
          alt='Light Logo'
          className='min-h-96 lg:min-h-96 w-full'
        />
      </div>
      <div className='absolute container-custom grid grid-cols-1 lg:grid-cols-2 h-full'>
        {/* First Column - Text Content */}
        <div className='inset-0 flex flex-col justify-center text-center lg:text-left text-white w-full lg:w-full 2xl:w-4/5 mx-auto'>
          <div className='text-4xl lg:text-5xl 2xl:text-6xl font-semibold mb-2 lg:mb-4 2xl:mb-12'>
            {data.title}
          </div>
          <div className='text-xs lg:text-base mx-auto mb-2 lg:mb-4 lg:mb-6'>
            {data.description}
          </div>
          <div>
            <JoinButton bgColor={'#269938'} />
          </div>
        </div>

        {/* Second Column - Data Display */}
        <div className='inset-0 flex flex-col justify-center w-full text-white'>
          <div className='grid grid-rows-1 grid-cols-4 lg:grid-rows-2 lg:grid-cols-2 gap-4 h-full'>
            {/* First Row */}
            <div className='flex flex-col justify-center items-center  p-4 rounded-lg'>
              <div className='text-3xl sm:text-5xl lg:text-7xl 2xl:text-8xl'>
                {data.total_users}
              </div>
              <div className='text-xs lg:text-lg text-center'>Total Users</div>
            </div>
            <div className='flex flex-col justify-center items-center p-4 rounded-lg'>
              <div className='text-3xl sm:text-5xl lg:text-7xl 2xl:text-8xl'>
                {data.new_places}
              </div>
              <div className='text-xs lg:text-lg text-center'>New Places</div>
            </div>

            {/* Second Row */}
            <div className='flex flex-col justify-center items-center p-4 rounded-lg'>
              <div className='text-3xl sm:text-5xl lg:text-7xl 2xl:text-8xl'>
                {data.customer_reviews}
              </div>{' '}
              <div className='text-xs lg:text-lg text-center'>
                Customer Reviews
              </div>
            </div>
            <div className='flex flex-col justify-center items-center p-4 rounded-lg'>
              <div className='text-3xl sm:text-5xl lg:text-7xl 2xl:text-8xl'>
                {data.awards_won}
              </div>{' '}
              <div className='text-xs lg:text-lg text-center'>Awards Won</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ofinterest
