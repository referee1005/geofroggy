import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import image from '../../public/images/Home-whoweare.png'
import JoinButton from '../reusable/JoinUs'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSiteInfoRequest } from '@/actions/about'

function Ofinterest () {
  const [siteData, setData] = useState(null)
  const data = useSelector(state => state.about.data)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchSiteInfoRequest())
  }, [dispatch])

  // useEffect(() => {
  //   setData({
  //     total_users: data.tota
  //   })
  // }, [data])
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
            Who we are
          </div>
          <div className='text-xs lg:text-base mx-auto mb-2 lg:mb-4 lg:mb-6'>
            We will offer various city related tours (and surrounding areas)
            along with information on Transportation, Accommodations, Medellin
            Travel Blog, Food, Safety. We will offer various city related tours
            (and surrounding areas) along with information on Transportation,
            Accommodations, Medellin Travel Blog, Food, Safety. We will offer
            various city related tours (and surrounding areas) along with
            information on Transportation, Accommodations, Medellin Travel Blog,
            Food, Safety.
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
              <div className='text-3xl lg:text-5xl 2xl:text-8xl'>
                {formatNumber(data.total_users)}
              </div>
              <div className='text-xs lg:text-lg text-center'>Total Users</div>
            </div>
            <div className='flex flex-col justify-center items-center p-4 rounded-lg'>
              <div className='text-3xl lg:text-5xl 2xl:text-8xl'>
                {formatNumber(data.new_places)}
              </div>
              <div className='text-xs lg:text-lg text-center'>New Places</div>
            </div>

            {/* Second Row */}
            <div className='flex flex-col justify-center items-center p-4 rounded-lg'>
              <div className='text-3xl lg:text-5xl 2xl:text-8xl'>
                {formatNumber(data.customer_reviews)}
              </div>{' '}
              <div className='text-xs lg:text-lg text-center'>
                Customer Reviews
              </div>
            </div>
            <div className='flex flex-col justify-center items-center p-4 rounded-lg'>
              <div className='text-3xl lg:text-5xl 2xl:text-8xl'>
                {formatNumber(data.awards_won)}
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
