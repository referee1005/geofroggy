import React, { useState, useEffect, useRef, useCallback } from 'react'
import Slider from 'react-slick'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPlacesRequest } from '@/actions/home'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FiArrowUpRight } from 'react-icons/fi'
import arrow from '../../public/images/Arrow.png'
import Image from 'next/image'

const CarouselItem = React.memo(({ item, className }) => (
  <div className={className}>
    <img
      src={item.image && item.image.src}
      className='h-40 w-28 ms:h-48 ms:w-36 sm:w-48 sm:h-64 md:w-60 md:h-72 lg:h-64 lg:w-48 border-gradient border-8 rounded-lg'
    />
  </div>
))

function Places () {
  const sliderRef = useRef(null)
  const [dragging, setDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [startY, setStartY] = useState(0)
  const [offsetX, setOffsetX] = useState(0)
  const [offsetY, setOffsetY] = useState(0)
  const [places, setPlaces] = useState([])
  const [clickIcon, setClickIcon] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVertical, setIsVertical] = useState(true)
  const [screenWidth, setScreenWidth] = useState()

  const data = useSelector(state => state.home.places)
  const dispatch = useDispatch()

  useEffect(() => {
    if (data.length) setPlaces(data)
  }, [data])

  useEffect(() => {
    dispatch(fetchPlacesRequest())
  }, [dispatch])

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth)
      setIsVertical(window.innerWidth >= 1024) // 1024px corresponds to 'lg' in Tailwind CSS
    }
    handleResize() // Initial check
    window.addEventListener('resize', handleResize) // Add event listener
    return () => window.removeEventListener('resize', handleResize) // Cleanup event listener
  }, [])

  const settings = {
    className: 'center',
    arrows: false,
    dots: false,
    infinite: true,
    centerMode: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: isVertical ? 5 : 3,
    slidesToScroll: 1,
    cssEase: 'linear',
    vertical: isVertical,
    verticalSwiping: isVertical,
    swipeToSlide: true,
    beforeChange: (current, next) => {
      setCurrentIndex(next % places.length)
    }
    // rtl: true
    // variableWidth: true
  }
  const handleDragStart = useCallback((e, isTouch = false) => {
    setStartX(isTouch ? e.touches[0].clientX : e.clientX)
    setStartY(isTouch ? e.touches[0].clientY : e.clientY)
    setDragging(true)
  }, [])

  const handleDragMove = useCallback(
    (e, isTouch = false) => {
      if (!dragging) return

      const clientX = isTouch ? e.touches[0].clientX : e.clientX
      const clientY = isTouch ? e.touches[0].clientY : e.clientY

      if (screenWidth >= 1024) {
        // Vertical drag for screens >= 1024px
        setOffsetY(clientY - startY)

        if (Math.abs(offsetY) > 30) {
          if (offsetY > 0) {
            sliderRef.current.slickPrev()
          } else {
            sliderRef.current.slickNext()
          }
          setStartY(clientY)
        }
      } else {
        // Horizontal drag for screens < 1024px
        setOffsetX(clientX - startX)

        if (Math.abs(offsetX) > 30) {
          if (offsetX > 0) {
            sliderRef.current.slickPrev()
          } else {
            sliderRef.current.slickNext()
          }
          setStartX(clientX)
        }
      }
    },
    [dragging, offsetX, offsetY, startX, startY, screenWidth]
  )

  const handleDragEnd = useCallback(() => {
    setDragging(false)
    setOffsetX(0)
    setOffsetY(0)
  }, [])

  const handleMouseDown = e => handleDragStart(e, false)
  const handleMouseMove = e => handleDragMove(e, false)
  const handleMouseUp = () => handleDragEnd()

  const handleTouchStart = e => handleDragStart(e, true)
  const handleTouchMove = e => handleDragMove(e, true)
  const handleTouchEnd = () => handleDragEnd()

  if (!places.length) {
    return <div>Loading...</div> // Or return a fallback image/div
  }

  return (
    <div className='relative w-full lg:h-screen flex items-center justify-center overflow-hidden'>
      {/* Main Image */}
      <div className='w-full h-screen'>
        <img
          src={places[currentIndex]?.image?.src}
          className='object-cover w-full h-screen'
        />
      </div>

      {/* Custom Info */}
      <div className='w-full h-full absolute text-white'>
        <div className='absolute container-custom h-full top-8 lg:top-2/3'>
          <div className=' font-semibold text-4xl lg:text-6xl mb-4'>
            {places[currentIndex] && places[currentIndex].title}
          </div>
          <div
            className={`backdrop-blur-md ${
              clickIcon === 'place' ? 'bg-white text-blue-500' : 'bg-white/30'
            } px-4 py-2 rounded-full inline-block mr-8 cursor-pointer `}
            onClick={() => setClickIcon('place')}
          >
            <svg
              width='20'
              height='20'
              viewBox='0 0 20 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              style={{ display: 'inline' }}
            >
              <path
                d='M7.29167 8.33333C7.29167 6.83756 8.50423 5.625 10 5.625C11.4958 5.625 12.7083 6.83756 12.7083 8.33333C12.7083 9.8291 11.4958 11.0417 10 11.0417C8.50423 11.0417 7.29167 9.8291 7.29167 8.33333Z'
                fill={clickIcon === 'place' ? 'rgb(59 130 246)' : 'white'}
              />
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M3.14462 7.39782C3.43098 3.92371 6.33415 1.25 9.82005 1.25H10.18C13.6659 1.25 16.5691 3.92371 16.8554 7.39782C17.0096 9.26832 16.4318 11.1257 15.2438 12.5786L11.2496 17.4634C10.6037 18.2532 9.3963 18.2532 8.75049 17.4634L4.75627 12.5786C3.56822 11.1257 2.99044 9.26832 3.14462 7.39782ZM10 4.375C7.81387 4.375 6.04167 6.14721 6.04167 8.33333C6.04167 10.5195 7.81387 12.2917 10 12.2917C12.1861 12.2917 13.9583 10.5195 13.9583 8.33333C13.9583 6.14721 12.1861 4.375 10 4.375Z'
                fill={clickIcon === 'place' ? 'rgb(59 130 246)' : 'white'}
              />
            </svg>{' '}
            {places[currentIndex] && places[currentIndex].country_info.name}
          </div>
          <div
            className={`backdrop-blur-md ${
              clickIcon === 'author' ? 'bg-white text-blue-500' : 'bg-white/30'
            } px-4 py-2 rounded-full inline-block cursor-pointer font-semibold`}
            onClick={() => setClickIcon('author')}
          >
            @ {places[currentIndex] && places[currentIndex].author}
          </div>
        </div>
      </div>
      {/* Custom Pan */}
      <div
        className={`absolute lg:right-0 lg:h-full ${
          clickIcon
            ? 'w-full top-0 h-full lg:w-1/4 '
            : 'w-full bottom-0 h-24 lg:w-40'
        }`}
      >
        <div className='w-full h-full backdrop-blur-md bg-white/30 text-white'>
          {clickIcon && (
            <div className='p-8 flex flex-col justify-between h-full'>
              <div className='text-2xl'>
                <div
                  className='w-4 h-auto inline cursor-pointer'
                  onClick={() => setClickIcon(null)}
                >
                  <Image
                    src={arrow}
                    className='w-8 lg:w-12 inline'
                    alt={'arrow'}
                  />{' '}
                </div>

                {clickIcon === 'author'
                  ? `@ ${places[currentIndex] && places[currentIndex].author}`
                  : `${
                      places[currentIndex] &&
                      places[currentIndex].country_info &&
                      places[currentIndex].country_info.name +
                        ',' +
                        places[currentIndex].country_info.continent
                    }`}
              </div>
              <div className='flex flex-col items-center w-full justify-center'>
                {places[currentIndex] &&
                  (clickIcon === 'author' ? (
                    <Image
                      src={places[currentIndex].author_image}
                      alt='author'
                    />
                  ) : (
                    <Image
                      src={places[currentIndex].google_map_url}
                      alt='map'
                    />
                  ))}

                <div className='text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-center mb-4'>
                  {places[currentIndex] &&
                    (clickIcon === 'author'
                      ? places[currentIndex].author
                      : places[currentIndex].place_name)}
                </div>
                <div className='text-lg text-center'>
                  {places[currentIndex] && places[currentIndex].description}
                </div>
              </div>
              <div className='flex items-center'>
                <div className='text-lg inline'>
                  {clickIcon === 'author' ? 'Follow for more' : 'View on Maps'}
                </div>{' '}
                <FiArrowUpRight />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Custom Pagination */}
      {
        <div
          className={`absolute bottom-0 lg:right-0 w-full lg:top-1/2 lg:-translate-y-3/4 lg:h-full  lg:w-48 ${
            clickIcon ? 'hidden' : 'flex flex-col items-center'
          }`}
        >
          <div
            className='slider-container relative w-full '
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <Slider ref={sliderRef} {...settings}>
              {places.map((item, index) => {
                const indexDiff =
                  (index - currentIndex + places.length) % places.length
                let className =
                  'relative transform transition-transform duration-1000 ease-in-out  '

                if (indexDiff === 0) {
                  className += ' translate-x-0 translate-y-0 z-30'
                } else if (indexDiff === 1 || indexDiff === -1) {
                  className +=
                    ' -translate-x-1/4 translate-y-1/4 lg:translate-x-1/4 lg:-translate-y-1/4 z-20'
                } else if (
                  indexDiff === places.length - 1 ||
                  indexDiff === -places.length + 1
                ) {
                  className +=
                    ' translate-x-1/4 translate-y-1/4 lg:translate-x-1/4 lg:translate-y-1/4 z-20'
                } else if (indexDiff === 2 || indexDiff === -2) {
                  className +=
                    ' -translate-x-1/2 translate-y-1/2 lg:translate-x-1/2 lg:-translate-y-1/2 z-10'
                } else if (
                  indexDiff === places.length - 2 ||
                  indexDiff === -places.length + 2
                ) {
                  className +=
                    '  translate-x-1/2 translate-y-1/2 lg:translate-x-1/2 lg:translate-y-1/2 z-10'
                } else if (indexDiff === 3 || indexDiff === -3) {
                  className +=
                    ' -translate-x-3/4 translate-y-3/4 lg:translate-x-3/4 lg:-translate-y-3/4 z-1'
                } else if (
                  indexDiff === places.length - 3 ||
                  indexDiff === -places.length + 3
                ) {
                  className +=
                    ' translate-x-3/4 translate-y-3/4 lg:translate-x-3/4 lg:translate-y-3/4 z-1'
                } else {
                  className +=
                    ' -translate-x-full translate-y-3/4 lg:translate-x-3/4 lg:-translate-y-3/4 z-1'
                }
                return (
                  <CarouselItem key={index} item={item} className={className} />
                )
              })}
            </Slider>
          </div>
        </div>
      }
    </div>
  )
}

export default Places
