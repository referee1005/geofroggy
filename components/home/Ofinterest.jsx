import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import Image from 'next/image'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

async function fetchInterests () {
  try {
    const res = await fetch('/api/interests')
    if (!res.ok) {
      throw new Error('Failed to fetch')
    }
    const data = await res.json()
    return data
  } catch (error) {
    console.error('Error fetching interests:', error)
    return []
  }
}

function Ofinterest ({}) {
  const [interests, setInterests] = useState([])
  const [slidesToShow, setSlidesToShow] = useState(5)
  const [slidesToScroll, setSlidesToScroll] = useState(2)

  useEffect(() => {
    fetchInterests().then(setInterests)

    const handleResize = () => {
      setSlidesToShow(window.innerWidth < 648 ? 3 : 5)
      setSlidesToScroll(window.innerWidth < 648 ? 1 : 3)
    }

    handleResize() // Set the initial value
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const settings = {
    className: 'center',
    dots: false,
    infinite: true,
    centerMode: false,
    speed: 1000,
    slidesToShow,
    slidesToScroll: slidesToScroll,
    cssEase: 'linear'
  }

  return (
    <div className='flex flex-col'>
      <div className='font-medium text-3xl sm:text-5xl lg:text-7xl mt-12 sm:my-24 text-center'>
        Of Interest
      </div>
      <div className='bg-white sm:pb-24 overflow-hidden pt-16'>
        <Slider {...settings}>
          {interests.map((item, index) => (
            <div key={item.id} className='px-0'>
              <div
                className={`flex-shrink-0 cursor-pointer mb-4 sm:mb-12 ${
                  index % 2 ? 'rotate-[19deg] z-0' : '-rotate-[19deg] z-10'
                }`}
              >
                <Image
                  src={item.url}
                  alt={item.country}
                  className='object-cover py-8 sm:py-16'
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Ofinterest
