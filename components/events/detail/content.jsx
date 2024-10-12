import React from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import call from '../../../public/images/events/call.png'
import clock from '../../../public/images/events/clock.png'
import mail from '../../../public/images/events/mail.png'
import calendar from '../../../public/images/events/calendar.png'
import place from '../../../public/images/events/place.png'
import world from '../../../public/images/events/world.png'
import copy from '../../../public/images/events/copy.png'

function Content ({ data }) {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1, // Adjust slides based on screen width
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    vertical: false,
    verticalSwiping: false,
    arrows: false,
    swipe: true,
    beforeChange: function (currentSlide, nextSlide) {
      // changeIndex(nextSlide)
    },
    afterChange: function (currentSlide) {
      // changeIndex(currentSlide)
    }
  }

  return (
    <div className='flex flex-col gap-4'>
      <div className='w-full'>
        <Slider {...settings}>
          {data.images !== undefined
            ? data.images.map((item, index) => (
                <div key={index} className='rounded-lg relative'>
                  <Image
                    src={item}
                    className='w-full object-cover rounded-lg'
                    layout='responsive'
                    width={6}
                    height={6}
                    alt={item} // Adding alt text for accessibility
                  />
                  <div className='text-white absolute top-4 right-4 text-lg'>
                    <span className='text-3xl'>{index + 1}</span>/
                    {data.images.length}
                  </div>
                </div>
              ))
            : []}
        </Slider>
      </div>
      <div className='flex gap-4 text-sm 2xl:text-base'>
        <div className='flex flex-col items-center justify-center bg-white rounded-lg w-[30%]'>
          <div className='lg:text-lg text-2xl text-[#8CC63E]'>
            {'$' + data.price}
          </div>
          <div>Ticket Price</div>
        </div>
        <div className='flex flex-col  gap-2 flex-1'>
          <div className='grid grid-cols-2 gap-2'>
            <div className='flex pl-4 gap-2 py-4 items-center bg-white rounded-lg'>
              <div className='rounded-lg w-[20px] h-[20px]'>
                <Image
                  src={clock}
                  className='w-[20px] h-[20px] object-cover '
                  layout='responsive'
                  width={6}
                  height={4}
                  // alt={item} // Adding alt text for accessibility
                />
              </div>
              <div>{data.time}</div>
            </div>
            <div className='flex pl-4 gap-2 py-4 items-center  bg-white rounded-lg'>
              <div className='rounded-lg w-[20px] h-[20px]'>
                <Image
                  src={calendar}
                  className='w-[20px] h-[20px] object-cover '
                  layout='responsive'
                  width={6}
                  height={4}
                  // alt={item} // Adding alt text for accessibility
                />
              </div>
              <div>{data.day}</div>
            </div>
          </div>
          <div className='flex pl-4 gap-2 py-4 items-center  bg-white rounded-lg'>
            <div className='rounded-lg  h-[20px] max-h-[20px]'>
              <Image
                src={place}
                className='w-[20px] h-[20px] max-h-[20px] object-cover '
                layout='responsive'
                width={6}
                height={4}
                // alt={item} // Adding alt text for accessibility
              />
            </div>
            <div>{data.place}</div>
          </div>
        </div>
      </div>
      <div className='flex flex-col  gap-2 flex-1 text-sm 2xl:text-base'>
        <div className='grid grid-cols-2 gap-2'>
          <div className='flex px-4 py-4 items-center justify-between bg-white rounded-lg'>
            <div className='rounded-lg flex-1 flex items-center gap-2 w-[70%]'>
              <div className='flex items-center min-w-[20px] w-[20px] h-[20px]'>
                <Image
                  src={mail}
                  className='w-[20px] h-[20px] object-contain'
                  layout='responsive'
                  width={6}
                  height={4}
                  // alt={item} // Adding alt text for accessibility
                />
              </div>
              <div
                className='w-[80%] text-wrap'
                style={{ overflowWrap: 'break-word' }}
              >
                {data.email}
              </div>
            </div>
            <div className='w-[16px] h-[16px] cursor-pointer flex-shrink-0'>
              <Image
                src={copy}
                className='w-[16px] h-[16px] object-cover'
                layout='responsive'
                width={6}
                height={4}
                // alt={item} // Adding alt text for accessibility
              />
            </div>
          </div>
          <div className='flex px-4 py-4 items-center justify-between bg-white rounded-lg'>
            <div className='rounded-lg flex items-center  gap-2 '>
              <div className='flex items-center w-[20px] h-[20px]'>
                <Image
                  src={call}
                  className='w-[20px] h-[20px] object-cover'
                  layout='responsive'
                  width={6}
                  height={4}
                  // alt={item} // Adding alt text for accessibility
                />
              </div>
              <div>{data.phone}</div>
            </div>
            <div className='w-[16px] h-[16px] cursor-pointer'>
              <Image
                src={copy}
                className='w-[16px] h-[16px] object-cover'
                layout='responsive'
                width={6}
                height={4}
                // alt={item} // Adding alt text for accessibility
              />
            </div>
          </div>
        </div>
        <div className='flex px-4 py-4 items-center justify-between bg-white rounded-lg'>
          <div className='rounded-lg flex items-center  gap-2 '>
            <div className='flex items-center w-[20px] h-[20px]'>
              <Image
                src={world}
                className='w-[20px] h-[20px] object-cover'
                layout='responsive'
                width={6}
                height={4}
                // alt={item} // Adding alt text for accessibility
              />
            </div>
            <div>{data.url}</div>
          </div>
          <div className='w-[16px] h-[16px] cursor-pointer'>
            <Image
              src={copy}
              className='w-[16px] h-[16px] object-cover'
              layout='responsive'
              width={6}
              height={4}
              // alt={item} // Adding alt text for accessibility
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content
