import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRecommendedRequest } from '@/actions/news'
import rightIcon from '../public/images/news/chevron-right-normal.png'
import Image from 'next/image'

function Recommends ({}) {
  const recommends = useSelector(state => state.news.recommends)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchRecommendedRequest())
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
      <div className='text-[#C4CCD5]'>RECOMMEDED</div>
      {recommends.map(item => (
        <div className='flex  justify-between items-center'>
          <div className='flex gap-4'>
            <div className='flex items-center min-w-[50px] min-h-[50px]'>
              <Image
                src={item.avatar}
                className='w-[50px] h-[50px] rounded-full'
                width={50}
                height={50}
              />
            </div>

            <div className='flex flex-col justify-between'>
              <div className='text-sm xl:text-base font-semibold cursor-pointer line-clamp-2 text-[#727272]'>
                {item.name}
              </div>
              <div className='text-xs text-[#ACACAC] line-clamp-1'>
                {item.follower + ' Followers'}
              </div>
            </div>
          </div>
          <div className='cursor-pointer text-sm xl:text-base'>
            {item.followed ? (
              <span className='text-[#8CC63E]'>Follow</span>
            ) : (
              <span className='text-[#ACACAC]'>Followed</span>
            )}
          </div>
        </div>
      ))}
    </>
  )
}

export default Recommends
