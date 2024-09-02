import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { fetchInterestsRequest } from '@/actions/home'

function Ofinterest ({}) {
  const [slidesToShow, setSlidesToShow] = useState(5)
  const [slidesToScroll, setSlidesToScroll] = useState(2)

  const data = useSelector(state => state.home.interests)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchInterestsRequest())

    const handleResize = () => {
      setSlidesToShow(window.innerWidth < 1024 ? 3 : 5)
      setSlidesToScroll(window.innerWidth < 648 ? 1 : 1)
    }

    handleResize() // Set the initial value
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [dispatch])

  const settings = {
    className: 'center',
    dots: false,
    infinite: true,
    // centerMode: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow,
    slidesToScroll: 1,
    swipeToSlide: true,
    cssEase: 'ease-in-out'
  }

  return (
    <div className='flex flex-col'>
      <div className='font-semibold text-3xl sm:text-5xl lg:text-7xl mt-12 sm:my-24 text-center'>
        Of Interest
      </div>
      <div className='bg-white sm:pb-24 overflow-hidden pt-16'>
        <Slider {...settings}>
          {data.map((item, index) => (
            <div key={index} className='px-0'>
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
