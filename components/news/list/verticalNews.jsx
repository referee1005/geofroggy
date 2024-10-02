import React, { useEffect, useRef, useState } from 'react'
import Slider from 'react-slick'
import Image from 'next/image'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useRouter } from 'next/router'

function VerticalNews ({ data }) {
  const sliderRef = useRef(null)
  const [startY, setStartY] = useState(null)
  const router = useRouter()

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    swipe: false,
    beforeChange: function (currentSlide, nextSlide) {
      console.log('before change', currentSlide, nextSlide)
    },
    afterChange: function (currentSlide) {
      console.log('after change', currentSlide)
    }
  }

  const handleMouseMove = e => {
    if (startY !== null) {
      const currentY = e.clientY
      const diffY = startY - currentY

      if (diffY > 30) {
        // If mouse moved up significantly, go to next slide
        sliderRef.current.slickNext()
        setStartY(currentY) // Reset the start position
      } else if (diffY < -30) {
        // If mouse moved down significantly, go to previous slide
        sliderRef.current.slickPrev()
        setStartY(currentY) // Reset the start position
      }
    }
  }

  // Mouse down event handler to track initial mouse position
  const handleMouseDown = e => {
    setStartY(e.clientY)
  }

  // Mouse up event handler to stop tracking
  const handleMouseUp = () => {
    setStartY(null)
  }

  useEffect(() => {
    // Add event listeners for mouse movements
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)

    return () => {
      // Cleanup event listeners on component unmount
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [startY])

  return (
    <div className='flex flex-col justify-center h-full '>
      <div className='slider-container'>
        <Slider {...settings} ref={sliderRef}>
          {data.map(item => (
            <div>
              <div className='flex gap-2 2xl:gap-4'>
                <div className='flex flex-col lg:py-2 xl:py-4 2xl:py-8 w-[50%] justify-between 3xl:text-lg'>
                  <div
                    className='font-semibold cursor-pointer hover:underline'
                    onClick={() => router.push(`/news/${item.id}`)}
                  >
                    {item.title}
                  </div>
                  <div className='lg:line-clamp-1 xl:line-clamp-2'>
                    {item.description}
                  </div>
                  <div className=''>
                    <span className='text-[#8CC63E]'>Geography</span> |
                    Geography
                  </div>
                </div>
                <div
                  className='flex-1 lg:my-1 2xl:my-2 flex items-center cursor-pointer'
                  onClick={() => router.push(`/news/${item.id}`)}
                >
                  <Image
                    src={item.image.src}
                    className='w-full object-cover rounded-lg'
                    layout='responsive'
                    width={6}
                    height={4}
                  />
                </div>
              </div>{' '}
            </div>
          ))}
        </Slider>
      </div>{' '}
    </div>
  )
}

export default VerticalNews
