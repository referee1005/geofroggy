import React, { useState } from 'react'

import Image from 'next/image'
import like_active from '../../../public/images/like_active.svg'
import send from '../../../public/images/send.svg'
import comment from '../../../public/images/comment1.svg'
import like from '../../../public/images/like.svg'
import etc from '../../../public/images/etc.svg'
import Input from '@/components/reusable/Input'
function RightSideBar ({ data }) {
  const [visibleDescription, setVisibleDescription] = useState(false)

  const getTruncatedContent = (content = []) => {
    if (content.length > 100 && !visibleDescription) {
      return `${content.slice(0, 100)}...`
    }
    return content
  }

  const renderItem = (item, isChild = false) => {
    return (
      <div className='flex gap-2 2xl:gap-4'>
        <div className='flex min-w-[40px] min-h-[40px]'>
          <Image
            src={item.author_image}
            className='w-[40px] h-[40px] rounded-full'
            width={40}
            height={40}
          />
          {!isChild && (
            <div
              className='w-[2px] absolute top-[50px] left-[20px] bg-black bg-[#D9D9D9]'
              style={{ height: 'calc(100% - 10px)' }}
            ></div>
          )}
        </div>
        <div className='flex flex-col gap-2 w-full'>
          <div className='flex gap-4'>
            <div className=''>{item.author}</div>
            <div className='text-[#ACACAC]'>{item.created_at}</div>
          </div>
          <div className='line-clamp-2 text-sm'>{item.content}</div>
          {/* <div> */}
          <div className='flex gap-8 lg:gap-0 lg:justify-between 2xl:w-[80%] lg:text-xs 2xl:text-sm'>
            <div className='flex items-center gap-1 2xl:gap-2 cursor-pointer'>
              <Image
                src={like}
                className='w-[16px] h-[16px]'
                width={16}
                height={16}
              />
              <div className='text-[#83AD8F]'>{item.likes}</div>
            </div>
            <div className='flex items-center gap-1 2xl:gap-2 cursor-pointer'>
              <Image
                src={comment}
                className='w-[16px] h-[16px]'
                width={16}
                height={16}
              />
              <div className='text-[#83AD8F]'>Reply</div>
            </div>
            <div className='flex items-center gap-1 2xl:gap-2 cursor-pointer'>
              {' '}
              <Image
                src={etc}
                className='w-[16px] h-[16px]'
                width={16}
                height={16}
              />
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className='flex flex-col gap-8'>
      <div className='flex gap-4'>
        <div className='flex items-center min-w-[50px] min-h-[50px]'>
          <Image
            src={data.author_image}
            className='w-[50px] h-[50px] rounded-full'
            width={50}
            height={50}
          />
        </div>

        <div className='flex flex-col justify-between'>
          <div className='font-semibold cursor-pointer line-clamp-2'>
            {data.author}
          </div>
          <div className='flex text-xs gap-2'>
            <div className='flex items-center gap-1'>
              <svg
                width='8'
                height='10'
                viewBox='0 0 8 10'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M4 1C2.61929 1 1.5 2.11929 1.5 3.5C1.5 4.93044 2.18515 6.32923 2.91375 7.40309C3.27373 7.93365 3.63435 8.37034 3.90468 8.67394C3.93791 8.71126 3.96974 8.74653 4 8.77968C4.03026 8.74653 4.06209 8.71126 4.09532 8.67394C4.36565 8.37034 4.72627 7.93365 5.08625 7.40309C5.81485 6.32923 6.5 4.93044 6.5 3.5C6.5 2.11929 5.38071 1 4 1ZM4 9.5C3.65606 9.86291 3.65595 9.86281 3.65583 9.86269L3.65473 9.86164L3.6523 9.85933L3.64425 9.8516C3.63749 9.84507 3.62795 9.83582 3.61584 9.82391C3.59161 9.80009 3.55702 9.76565 3.51356 9.7212C3.42668 9.63233 3.30414 9.50325 3.15782 9.33893C2.86565 9.01079 2.47627 8.53939 2.08625 7.96455C1.31485 6.82762 0.5 5.22641 0.5 3.5C0.5 1.567 2.067 0 4 0C5.933 0 7.5 1.567 7.5 3.5C7.5 5.22641 6.68515 6.82762 5.91375 7.96455C5.52373 8.53939 5.13435 9.01079 4.84218 9.33893C4.69586 9.50325 4.57332 9.63233 4.48644 9.7212C4.44298 9.76565 4.40839 9.80009 4.38416 9.82391C4.37205 9.83582 4.36251 9.84507 4.35575 9.8516L4.3477 9.85933L4.34527 9.86164L4.34447 9.86241C4.34435 9.86252 4.34394 9.86291 4 9.5ZM4 9.5L4.34394 9.86291C4.15107 10.0457 3.8487 10.0455 3.65583 9.86269L4 9.5ZM4 3C3.72386 3 3.5 3.22386 3.5 3.5C3.5 3.77614 3.72386 4 4 4C4.27614 4 4.5 3.77614 4.5 3.5C4.5 3.22386 4.27614 3 4 3ZM2.5 3.5C2.5 2.67157 3.17157 2 4 2C4.82843 2 5.5 2.67157 5.5 3.5C5.5 4.32843 4.82843 5 4 5C3.17157 5 2.5 4.32843 2.5 3.5Z'
                  fill='#195883'
                />
              </svg>
              <div className='text-[#195883]'>New York </div>
            </div>
            <div>3 Hours ago</div>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-4'>
        <div className='font-semibold'>{data.title}</div>
        <div className='text-sm'>
          {getTruncatedContent(data.description)}
          <span
            className='cursor-pointer font-semibold'
            onClick={() => setVisibleDescription(!visibleDescription)}
          >
            {visibleDescription ? 'See Less' : 'See More'}
          </span>
        </div>
        <div className='flex gap-8 lg:gap-0 lg:justify-between lg:text-xs 2xl:text-sm'>
          <div className='flex gap-1 2xl:gap-2 items-center'>
            <Image
              src={like_active}
              className='w-[16px] h-[16px] 2xl:w-[20px] 2xl:h-[20px]'
              width={20}
              height={20}
            />
            <div>{data.likes + ' Likes'}</div>
          </div>
          <div className='flex gap-1 2xl:gap-2 items-center'>
            <Image
              src={comment}
              className='w-[16px] h-[16px] 2xl:w-[20px] 2xl:h-[20px]'
              width={20}
              height={20}
            />
            <div className='text-[#83AD8F]'>
              {data.comment_count + ' Comments'}
            </div>
          </div>
          <div className='flex gap-1 2xl:gap-2 items-center'>
            <Image
              src={send}
              className='w-[16px] h-[16px] 2xl:w-[20px] 2xl:h-[20px]'
              width={20}
              height={20}
            />
            <div className='text-[#83AD8F]'>{'Send'}</div>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-4'>
        <div className='flex items-center gap-2'>
          <Image
            src={data.author_image}
            className='w-[40px] h-[40px] rounded-full'
            width={40}
            height={40}
          />
          <Input
            placeholder={'Write a comment....'}
            mb={0}
            // opacity={true}
            border={false}
            inputHeight={12}
          />
        </div>
        <div>
          {data.comments !== undefined &&
            data.comments.map(item => {
              return (
                <div>
                  <div className='relative'>
                    {renderItem(item)}
                    <div className='flex flex-col gap-4 ml-8 2xl:ml-12 mt-8'>
                      {item.comments.map((ele, index) => {
                        if (index !== item.comments.length - 1)
                          return renderItem(ele, true)
                      })}
                    </div>
                  </div>
                  {item.comments && item.comments.length && (
                    <div className='ml-8 2xl:ml-12 mt-4'>
                      {renderItem(
                        item.comments[item.comments.length - 1],
                        true
                      )}
                    </div>
                  )}
                </div>
              )
            })}
        </div>
      </div>
    </div>
  )
}

export default RightSideBar
