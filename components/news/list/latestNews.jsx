import React, { useRef } from 'react'
import Slider from 'react-slick'
import Image from 'next/image'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useRouter } from 'next/router'

function LatestNews ({ data }) {
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
        breakpoint: 1280, // For screens less than 1024px wide
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1024, // For screens less than 1024px wide
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768, // For screens less than 768px wide
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480, // For screens less than 480px wide
        settings: {
          slidesToShow: 2
        }
      }
    ]
  }

  return (
    <div className='slider-container'>
      <Slider {...settings} ref={sliderRef}>
        {data.map((item, index) => (
          <div key={index}>
            <div className='flex flex-col gap-4 px-1 lg:px-2'>
              <div
                className='flex-1 cursor-pointer min-h-[120px] h-[120px] sm:min-h-[150px] sm:h-[150px] lg:min-h-[200px] lg:h-[200px]'
                onClick={() => router.push(`/news/${item.slug}`)}
              >
                <Image
                  src={item.yoast_head_json.og_image[0]['url']}
                  className='w-full object-cover rounded-lg min-h-[120px] max-h-[120px] h-[120px] sm:min-h-[150px] sm:max-h-[150px] sm:h-[150px] lg:min-h-[200px] lg:max-h-[200px] lg:h-[200px]'
                  layout='responsive'
                  width={6}
                  height={4}
                />
              </div>
              <div className='flex flex-col gap-2 justify-between'>
                <div className='flex items-center gap-2 '>
                  <Image
                    src={
                      item.yoast_head_json.schema['@graph'][6]['image']['url']
                    }
                    className='w-[30px] h-[30px] rounded-lg'
                    width={30}
                    height={30}
                  />
                  <div className='flex md:flex-row flex-col items-center md:gap-2 '>
                    <div className='text-sm'>{item.yoast_head_json.author}</div>
                    <div className='md:block hidden'>|</div>
                    <div className='text-sm'>7 hours ago</div>
                  </div>
                </div>
                <div
                  className='font-semibold hover:underline cursor-pointer line-clamp-2'
                  onClick={() => router.push(`/news/${item.slug}`)}
                >
                  {item.yoast_head_json.og_title}
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

export default LatestNews
