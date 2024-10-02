import React, { useRef } from 'react'
import Slider from 'react-slick'
import Image from 'next/image'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useRouter } from 'next/router'

function HorizontalNews ({ data }) {
  const sliderRef = useRef(null)
  const router = useRouter()

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4, // Default number of slides
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    vertical: false,
    verticalSwiping: false,
    arrows: false,
    swipe: true,
    beforeChange: function (currentSlide, nextSlide) {
      console.log('before change', currentSlide, nextSlide)
    },
    afterChange: function (currentSlide) {
      console.log('after change', currentSlide)
    },
    // Responsive settings
    responsive: [
      {
        breakpoint: 1024, // For screens less than 1024px wide
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768, // For screens less than 768px wide
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480, // For screens less than 480px wide
        settings: {
          slidesToShow: 1
        }
      }
    ]
  }

  return (
    <div className='slider-container'>
      <Slider {...settings} ref={sliderRef}>
        {data.map((item, index) => (
          <div key={index}>
            <div className='flex flex-col gap-4 px-2'>
              <div
                className='flex-1 cursor-pointer'
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
              <div className='flex flex-col gap-2 justify-between'>
                <div className='flex items-center gap-2 '>
                  <Image
                    src={item.author_image.src}
                    className='w-[30px] h-[30px] rounded-lg'
                    width={30}
                    height={30}
                  />
                  <div className='text-sm'>{item.author}</div>
                  <div>|</div>
                  <div className='text-sm'>7 hours ago</div>
                </div>
                <div
                  className='font-semibold hover:underline cursor-pointer'
                  onClick={() => router.push(`/news/${item.id}`)}
                >
                  {item.title}
                </div>
                <div className=''>
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
