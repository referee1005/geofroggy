import React, { useRef, useEffect, useState } from 'react'
import Slider from 'react-slick'
import Image from 'next/image'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useRouter } from 'next/router'

function HorizontalNews ({ data, changeIndex }) {
  const sliderRef = useRef(null)
  const router = useRouter()
  const [windowWidth, setWindowWidth] = useState(null)

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: windowWidth < 480 ? 2 : 3, // Adjust slides based on screen width
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    vertical: false,
    verticalSwiping: false,
    arrows: false,
    swipe: true,
    beforeChange: function (currentSlide, nextSlide) {
      changeIndex(nextSlide)
    },
    afterChange: function (currentSlide) {
      // changeIndex(currentSlide)
    }
  }

  // Set initial window width on mount and update on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    handleResize() // Set the initial width
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // Reset slider when screen width changes (or component renders)
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(0) // Always reset to the first slide
    }
  }, [windowWidth, data]) // Reset when windowWidth or data changes

  return (
    <div className='slider-container'>
      <Slider {...settings} ref={sliderRef}>
        {data.map((item, index) => (
          <div key={index}>
            <div className='flex flex-col gap-4 px-1 lg:px-2'>
              <div
                className='flex-1 cursor-pointer min-h-[120px] h-[120px] sm:min-h-[150px] sm:h-[150px] lg:min-h-[200px] lg:h-[200px]'
                onClick={() => router.push(`/news/${item.id}`)}
              >
                <Image
                  src={item.image.src}
                  className='w-full object-cover rounded-lg min-h-[120px] max-h-[120px] h-[120px] sm:min-h-[150px] sm:max-h-[150px] sm:h-[150px] lg:min-h-[200px] lg:max-h-[200px] lg:h-[200px]'
                  layout='responsive'
                  width={6}
                  height={4}
                  alt={item.title} // Adding alt text for accessibility
                />
              </div>
              <div className='flex flex-col gap-2 justify-between'>
                <div
                  className='font-semibold hover:underline cursor-pointer line-clamp-2'
                  onClick={() => router.push(`/news/${item.id}`)}
                >
                  {item.title}
                </div>
                <div className='text-xs sm:text-base'>
                  <span className='text-[#8CC63E]'>Geography</span> | Geography
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default HorizontalNews
