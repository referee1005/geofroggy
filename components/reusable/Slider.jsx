import React, { useState, useEffect, useRef, useCallback } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const CarouselItem = React.memo(({ key, item, className }) => (
  <div className={className} key={key}>
    <img
      src={item.image && item.image.src}
      className='h-40 w-28 ms:h-48 ms:w-36 sm:w-48 sm:h-64 md:w-60 md:h-72 lg:h-64 lg:w-48 border-gradient border-8 rounded-lg'
    />
  </div>
))

function CustomSlider ({ clickIcon, places, currentIndex, setCurrentIndex }) {
  const sliderRef = useRef(null)
  //   const [currentIndex, setCurrentIndex] = useState(0)
  const [dragging, setDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [startY, setStartY] = useState(0)
  const [offsetX, setOffsetX] = useState(0)
  const [offsetY, setOffsetY] = useState(0)
  const [isVertical, setIsVertical] = useState(true)
  const [screenWidth, setScreenWidth] = useState()

  const settings = {
    className: 'center',
    arrows: false,
    dots: false,
    infinite: true,
    centerMode: true,
    speed: 100,
    slidesToShow: isVertical ? 5 : 3,
    slidesToScroll: 1,
    cssEase: 'linear',
    vertical: isVertical,
    verticalSwiping: isVertical,
    swipeToSlide: true,
    beforeChange: (current, next) => {
      setCurrentIndex(next % places.length)
    }
  }

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth)
      setIsVertical(window.innerWidth >= 1024) // 1024px corresponds to 'lg' in Tailwind CSS
    }
    handleResize() // Initial check
    window.addEventListener('resize', handleResize) // Add event listener
    return () => window.removeEventListener('resize', handleResize) // Cleanup event listener
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      sliderRef.current.slickPrev()
    }, 3000) // 3 minutes

    // Cleanup on unmount
    return () => clearInterval(interval)
  }, [])

  const handleMouseDown = e => handleDragStart(e, false)
  const handleMouseMove = e => handleDragMove(e, false)
  const handleMouseUp = () => handleDragEnd()

  const handleTouchStart = e => handleDragStart(e, true)
  const handleTouchMove = e => handleDragMove(e, true)
  const handleTouchEnd = () => handleDragEnd()

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

  return (
    <div
      className={`absolute bottom-0 lg:right-0 w-full lg:h-full lg:top-1/2 lg:-translate-y-3/4 lg:w-48 ${
        clickIcon ? 'hidden' : 'flex flex-col items-center'
      }`}
    >
      <div
        className='slider-container relative w-full'
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
              'relative transform transition-transform duration-1000 ease-in-out'

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
  )
}

export default CustomSlider
