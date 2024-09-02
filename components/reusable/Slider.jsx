import React, { useState, useEffect, useRef, useCallback } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function CustomSlider ({ clickIcon, places, setMoveCount }) {
  const [dragging, setDragging] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [startX, setStartX] = useState(0)
  const [startY, setStartY] = useState(0)
  const [offsetX, setOffsetX] = useState(0)
  const [offsetY, setOffsetY] = useState(0)
  // const [isVertical, setIsVertical] = useState(true)
  const [screenWidth, setScreenWidth] = useState()
  const [classNames, setClassNames] = useState([])
  const [data, setData] = useState([])

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth)
      // setIsVertical(window.innerWidth >= 1024) // 1024px corresponds to 'lg' in Tailwind CSS
    }
    handleResize() // Initial check
    window.addEventListener('resize', handleResize) // Add event listener
    return () => window.removeEventListener('resize', handleResize) // Cleanup event listener
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setClassNames(prevClasses => {
        const newClasses = [...prevClasses]
        newClasses.push(newClasses.shift())
        return newClasses
      })
    }, 3000)

    // Cleanup on unmount
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const calculateStyles = () => {
      const classNames = places.map((item, index) => {
        if (index <= 6) return 'carousel_' + index
        else return 'carousel'
      })

      setClassNames(classNames)
    }
    calculateStyles()
    setData(places)
  }, [places])

  const moveNext = () => {
    if (isTransitioning) return // Prevent new transition during ongoing transition
    setIsTransitioning(true)

    setClassNames(prevClasses => {
      // Rotate the classes array to the left
      const newClasses = [...prevClasses]
      newClasses.push(newClasses.shift())
      return newClasses
    })
    setMoveCount(-1)
    setTimeout(() => setIsTransitioning(false), 1000)
  }

  const movePrev = () => {
    if (isTransitioning) return // Prevent new transition during ongoing transition
    setIsTransitioning(true)

    setClassNames(prevClasses => {
      const newClasses = [...prevClasses]
      newClasses.unshift(newClasses.pop())
      return newClasses
    })
    setMoveCount(1)
    setTimeout(() => setIsTransitioning(false), 1000)
  }

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
      if (!dragging || isTransitioning) return

      const clientX = isTouch ? e.touches[0].clientX : e.clientX
      const clientY = isTouch ? e.touches[0].clientY : e.clientY

      if (screenWidth >= 1024) {
        setOffsetY(clientY - startY)

        if (Math.abs(offsetY) > 30) {
          if (offsetY > 0) {
            moveNext()
            setDragging(false)
          } else {
            movePrev()
            setDragging(false)
          }
          setStartY(clientY)
        }
      } else {
        // Horizontal drag for screens < 1024px
        setOffsetX(clientX - startX)

        if (Math.abs(offsetX) > 30) {
          if (offsetX > 0) {
            moveNext()
            setDragging(false)
          } else {
            movePrev()
            setDragging(false)
          }
          setStartX(clientX)
        }
      }
    },
    [dragging, offsetX, offsetY, startX, startY, screenWidth, isTransitioning]
  )

  const handleDragEnd = useCallback(() => {
    setDragging(false)
    setOffsetX(0)
    setOffsetY(0)
  }, [])

  return (
    <div
      className={`absolute bottom-0 lg:right-0 w-full lg:h-full lg:w-48
         ${clickIcon ? 'hidden' : 'flex flex-col items-center'}`}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className='relative slider-container relative w-full lg:h-screen'>
        {data.map((item, index) => {
          return (
            <div key={index} className={classNames[index]}>
              <img
                src={item.image && item.image.src}
                className='w-full h-48 sm:h-64 lg:w-64 lg:h-full'
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CustomSlider
