import React, { useState, useEffect, useRef } from 'react'
import Slider from 'react-slick'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPlacesRequest } from '@/actions/home'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function Places () {
  const sliderRef = useRef(null)
  const [dragging, setDragging] = useState(false)
  const [startY, setStartY] = useState(0)
  const [offsetY, setOffsetY] = useState(0)
  const [places, setPlaces] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const data = useSelector(state => state.home.places)
  const dispatch = useDispatch()

  useEffect(() => {
    if (data.length > 0) {
      setPlaces(data)
    }
  }, [data])

  useEffect(() => {
    dispatch(fetchPlacesRequest())
  }, [dispatch])

  const settings = {
    className: 'center',
    arrows: false,
    dots: false,
    infinite: true,
    centerMode: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    cssEase: 'linear',
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    afterChange: index => {
      setCurrentIndex(index % places.length)
    }
  }

  const handleMouseDown = e => {
    setStartY(e.clientY)
    setDragging(true)
  }

  const handleMouseMove = e => {
    if (!dragging) return

    setOffsetY(e.clientY - startY)

    if (sliderRef.current && Math.abs(offsetY) > 30) {
      if (offsetY > 0) {
        sliderRef.current.slickPrev()
      } else {
        sliderRef.current.slickNext()
      }
      setStartY(e.clientY)
    }
  }

  const handleMouseUp = () => {
    setDragging(false)
    setOffsetY(0)
  }

  return (
    <div className='relative w-full h-screen flex items-center justify-center overflow-hidden'>
      {/* Main Image */}
      <div className='w-full h-full'>
        {places.length > 0 && (
          <img
            src={places[currentIndex].image.src}
            className='object-cover w-full h-full'
          />
        )}
      </div>

      {/* Custom Pagination */}
      <div
        className='absolute right-0 top-1/2 transform -translate-y-1/2 flex flex-col items-center h-full w-48'
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <div className='slider-container'>
          <Slider ref={sliderRef} {...settings}>
            {places.map((item, index) => {
              const indexDiff =
                (index - currentIndex + places.length) % places.length
              let className = ''

              if (indexDiff === 0) {
                className += '-translate-x-1 z-30'
              } else if (indexDiff === 1) {
                className += 'translate-x-1/4 -translate-y-1/4 z-20'
              } else if (indexDiff === 4) {
                className += 'translate-x-1/4 translate-y-1/4 z-20'
              } else if (indexDiff === 2) {
                className += 'translate-x-1/2 -translate-y-1/2 z-10'
              } else if (indexDiff === 3) {
                className += 'translate-x-1/2 translate-y-1/2 z-10'
              }
              className += 'border-gradient rounded-lg border-8'

              return (
                <div
                  className={className}
                  key={index}
                  onClick={() => {}} // Handle click if needed
                >
                  <img
                    src={item.image && item.image.src}
                    className='h-64 w-48'
                  />
                </div>
              )
            })}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Places
