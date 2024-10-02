import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTrendsRequest } from '@/actions/news'
import rightIcon from '../public/images/news/chevron-right-normal.png'
import Image from 'next/image'

function Trending ({}) {
  const trends = useSelector(state => state.news.trends)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTrendsRequest())
  }, [dispatch])

  const diffTime = time => {
    const backendDate = new Date(time)
    const currentDate = new Date()
    const timeDiffMs = currentDate - backendDate
    const timeDiffHours = Math.floor(timeDiffMs / (1000 * 60 * 60))
    return timeDiffHours + ' hours ago'
  }

  return (
    <>
      <div>TRENDING NOW</div>
      {trends.map(item => (
        <div className='flex  justify-between items-center'>
          <div className='flex gap-4'>
            <div className='flex items-center min-w-[50px] min-h-[50px]'>
              <Image
                src={item.image && item.image.src}
                className='w-[50px] h-[50px] rounded-lg'
                width={50}
                height={50}
              />
            </div>

            <div className='flex flex-col justify-between'>
              <div className='text-sm font-semibold cursor-pointer line-clamp-2'>
                {item.title}
              </div>
              <div className='text-xs'>{diffTime(item.created_at)}</div>
            </div>
          </div>
          <Image
            src={rightIcon}
            className='w-[24px] h-[24px]'
            width={24}
            height={24}
          />
        </div>
      ))}
    </>
  )
}

export default Trending
