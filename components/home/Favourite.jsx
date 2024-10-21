import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFavouritePlacesRequest } from '@/actions/home'
import { useRouter } from 'next/router'

function Favourite ({}) {
  const data = useSelector(state => state.home.favourite_places)
  const dispatch = useDispatch()
  const router = useRouter()
  useEffect(() => {
    dispatch(fetchFavouritePlacesRequest())
  }, [dispatch])

  return (
    <div
      className='container-custom flex flex-col'
      style={{ backgroundColor: '#EEEEEE' }}
    >
      <div className='text-center'>
        <div className='font-semibold text-3xl sm:text-5xl lg:text-7xl my-12 sm:my-24 text-center'>
          Favourite Places
        </div>
        <div className=' grid grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-8 relative flex min-h-64 sm:min-h-64 pb-24'>
          {data.map((item, index) => (
            <div
              className='relative bg-white shadow-md rounded-lg overflow-hidden cursor-pointer'
              key={index}
              onClick={() => router.push(item.place_url)}
            >
              {/* Main Image */}
              <Image
                src={item.image}
                alt={item.name}
                className='w-full h-32 object-cover min-h-32'
                layout='responsive'
                width={500}
                height={500}
              />
              <div className='absolute text-white font-semibold backdrop-blur-md bottom-0 bg-white/30 w-full h-1/5 flex justify-center items-center sm:text-2xl md:text-3xl lg:text-base xl:text-xl 2xl:text-2xl 3xl:text-3xl'>
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Favourite
