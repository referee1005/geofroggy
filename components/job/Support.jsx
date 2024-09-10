import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import image from '../../public/images/Home-whoweare.png'
import JoinButton from '../reusable/JoinUs'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSiteInfoRequest } from '@/actions/about'

function Support () {
  const [siteData, setData] = useState(null)
  const data = useSelector(state => state.about.data)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchSiteInfoRequest())
  }, [dispatch])

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
    <div className='relative flex flex-col min-h-80 lg:min-h-80'>
      <div className='bg-white flex'>
        <Image
          src={image}
          alt='Light Logo'
          className='h-80 min-h-80 lg:min-h-96 w-full lg:h-96'
        />
      </div>
      <div className='absolute container-custom h-full w-full flex justify-center '>
        <div className='inset-0 flex flex-col justify-center text-center lg:text-center text-white w-full lg:w-full 2xl:w-4/5 mx-auto'>
          <div className='text-4xl lg:text-5xl 2xl:text-6xl font-semibold mb-2 lg:mb-4 2xl:mb-12'>
            Support and Documentation
          </div>
          <div className='text-xs lg:text-base mx-auto mb-2 lg:mb-4 lg:mb-6 w-full flex justify-center'>
            <div class='relative mt-2 rounded-md shadow-sm w-3/4 lg:w-1/2 '>
              <div class='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
                <span class='text-white sm:text-sm'>
                  <svg
                    width='33'
                    height='32'
                    viewBox='0 0 33 32'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      clip-rule='evenodd'
                      d='M23.6425 13.238C23.6425 7.76776 19.208 3.33325 13.7378 3.33325C8.26752 3.33325 3.83301 7.76776 3.83301 13.238C3.83301 18.7083 8.26752 23.1428 13.7378 23.1428C15.9916 23.1428 18.071 22.3888 19.7352 21.1211L26.8902 28.2761C27.4109 28.7968 28.2551 28.7968 28.7758 28.2761C29.2965 27.7554 29.2965 26.9111 28.7758 26.3904L21.6208 19.2355C22.8885 17.5713 23.6425 15.4918 23.6425 13.238ZM13.7378 5.99992C17.7353 5.99992 20.9759 9.24052 20.9759 13.238C20.9759 15.2371 20.1672 17.0448 18.8559 18.3561C17.5446 19.6674 15.7369 20.4761 13.7378 20.4761C9.74028 20.4761 6.49967 17.2355 6.49967 13.238C6.49967 9.24052 9.74028 5.99992 13.7378 5.99992Z'
                      fill='white'
                      // fill-opacity='0.5'
                    />
                  </svg>
                </span>
              </div>
              <input
                type='text'
                name='price'
                id='price'
                class='block w-full rounded-md border-0 py-3 pl-12 pr-10 bg-gray-400 bg-opacity-60 text-white ring-1 ring-inset ring-gray-300 placeholder:text-white focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6'
                placeholder='Search'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Support
