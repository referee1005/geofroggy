import React, { useEffect, useRef, useState } from 'react'
import Slider from 'react-slick'
import Image from 'next/image'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useRouter } from 'next/router'

function VerticalNews ({ data, changeIndex }) {
  const sliderRef = useRef(null)
  const [startY, setStartY] = useState(null)
  const router = useRouter()

  const settings = {
    dots: false,
    infinite: true,
    initialSlide: 0,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    swipe: false,
    // centerMode: true,
    beforeChange: function (currentSlide, nextSlide) {
      changeIndex(nextSlide)
    },
    afterChange: function (currentSlide, index) {},
    responsive: [
      {
        breakpoint: 1280, // For screens less than 1024px wide
        settings: {
          slidesToShow: 3
        }
      }
    ]
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
            <div className='min-h-[200px] h-[200px] xl:min-h-[240px] xl:h-[240px] 2xl:min-h-[280px] 2xl:h-[280px]'>
              <div className='flex gap-2 2xl:gap-4 h-full'>
                <div className='flex flex-col py-8 w-[50%] justify-between 3xl:text-lg'>
                  <div
                    className='font-semibold cursor-pointer hover:underline'
                    onClick={() => router.push(`/news/${item.slug}`)}
                  >
                    {item.yoast_head_json.og_title}
                  </div>
                  <div className='lg:line-clamp-1 xl:line-clamp-2'>
                    {item.yoast_head_json.og_description}
                  </div>
                  <div className=''>
                    <span className='text-[#8CC63E]'>Geography</span> |
                    Geography
                  </div>
                </div>
                <div
                  className='flex-1 lg:my-1 2xl:my-2 flex items-center cursor-pointer'
                  onClick={() => router.push(`/news/${item.slug}`)}
                >
                  <Image
                    src={item.yoast_head_json.og_image[0]['url']}
                    className='w-full max-h-[180px] min-h-[180px] h-[180px] xl:max-h-[210px] xl:min-h-[210px] xl:h-[210px]  2xl:min-h-[250px] 2xl:max-h-[250px] 2xl:h-[250px] object-cover rounded-lg'
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
