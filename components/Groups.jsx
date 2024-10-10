import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchGroupsRequest } from '@/actions/news'
import like from '../public/images/like_active.svg'
import Image from 'next/image'

function Groups ({}) {
  const groups = useSelector(state => state.news.groups)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchGroupsRequest())
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
        <div className='text-sm 2xl:text-base text-[#C4CCD5]'>GROUPS</div>
        <div className={`text-sm 2xl:text-base text-[#8CC63E] cursor-pointer`}>
          See all
        </div>
      </div>

      {groups.map(item => (
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

export default Groups
