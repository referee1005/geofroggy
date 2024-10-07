import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCommunitiesRequest } from '@/actions/news'
import like from '../public/images/likes.svg'
import Image from 'next/image'

function Communities ({}) {
  const communities = useSelector(state => state.news.communities)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCommunitiesRequest())
  }, [dispatch])

  // const diffTime = time => {
  //   const backendDate = new Date(time)
  //   const currentDate = new Date()
  //   const timeDiffMs = currentDate - backendDate
  //   const timeDiffHours = Math.floor(timeDiffMs / (1000 * 60 * 60))
  //   return timeDiffHours + ' hours ago'
  // }

  return (
    <div className='flex flex-col gap-4 p-2'>
      <div className='flex justify-between'>
        <div className='text-[#C4CCD5]'>Communities</div>
        <div className={`text-[#8CC63E] cursor-pointer`}>See all</div>
      </div>

      {communities.map(item => (
        <div className='flex justify-between items-center pr-2'>
          <div className='flex gap-4'>
            <div className='flex items-center min-w-[32px] min-h-[32px]'>
              <Image
                src={item.image && item.image.src}
                className='w-[32px] h-[32px] rounded-full'
                width={32}
                height={32}
              />
            </div>

            <div className='flex flex-col justify-between'>
              <div className='text-sm font-semibold cursor-pointer line-clamp-2 text-[#727272]'>
                {item.title}
              </div>
              <div className='text-xs text-[#ACACAC]'>
                {item.member + ' members'}
              </div>
            </div>
          </div>
          <Image
            src={like}
            className='w-[16px] h-[16px]'
            width={16}
            height={16}
          />
        </div>
      ))}
    </div>
  )
}

export default Communities