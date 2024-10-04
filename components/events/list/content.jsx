import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchEventsRequest } from '@/actions/news'
import like from '../../../public/images/likes.svg'
import send from '../../../public/images/send.svg'
import comment from '../../../public/images/comment.svg'
import Image from 'next/image'
import Input from '@/components/reusable/Input'

function Content () {
  const events = useSelector(state => state.news.events)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchEventsRequest())
  }, [dispatch])

  return (
    <div className='flex flex-col gap-4'>
      {events.map(item => (
        <div className='rounded-lg bg-white p-4 2xl:p-8 flex flex-col gap-4'>
          <div>
            <div className='flex gap-4'>
              <div className='flex items-center min-w-[50px] min-h-[50px]'>
                <Image
                  src={item.thumb}
                  className='w-[50px] h-[50px] rounded-full'
                  width={50}
                  height={50}
                />
              </div>

              <div className='flex flex-col justify-between'>
                <div className='font-semibold cursor-pointer line-clamp-2'>
                  United States of America
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
          </div>{' '}
          <div className='relative w-full pb-[70%] xl:pb-[50%]'>
            <Image
              src={item.image}
              className='w-full rounded-lg'
              layout='fill'
              objectFit='cover'
            />
            <div className={`absolute w-full bottom-0 h-[100px] rounded-b-lg`}>
              <div className='w-full h-full backdrop-blur-md bg-white/30 text-white rounded-b-lg flex flex-col justify-between p-4'>
                <div className='flex justify-between gap-8'>
                  <div className='text-lg xl:text-2xl line-clamp-1'>
                    {item.title}
                  </div>
                  <div className='text-lg xl:text-2xl text-[#8CC63E]'>
                    {'$' + item.price}
                  </div>
                </div>
                <div className='flex justify-between text-sm 2xl:text-base gap-4 items-center'>
                  <div className='flex xl:flex-row flex-col items-center 2xl:gap-2'>
                    <div className='flex items-center gap-2'>
                      <svg
                        width='10'
                        height='15'
                        viewBox='0 0 10 15'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fill-rule='evenodd'
                          clip-rule='evenodd'
                          d='M5.00001 2.16659C3.15906 2.16659 1.66668 3.65897 1.66668 5.49992C1.66668 7.40717 2.58021 9.27222 3.55168 10.704C4.03165 11.4114 4.51248 11.9937 4.87291 12.3985C4.91722 12.4483 4.95967 12.4953 5.00001 12.5395C5.04035 12.4953 5.0828 12.4483 5.12711 12.3985C5.48754 11.9937 5.96837 11.4114 6.44834 10.704C7.41982 9.27222 8.33334 7.40717 8.33334 5.49992C8.33334 3.65897 6.84096 2.16659 5.00001 2.16659ZM5.00001 13.4999C4.54143 13.9838 4.54128 13.9837 4.54112 13.9835L4.53964 13.9821L4.53641 13.979L4.52568 13.9687C4.51666 13.96 4.50395 13.9477 4.48779 13.9318C4.45548 13.9 4.40937 13.8541 4.35143 13.7949C4.23559 13.6764 4.0722 13.5043 3.87711 13.2852C3.48754 12.8476 2.96837 12.2191 2.44834 11.4527C1.41982 9.93675 0.333344 7.8018 0.333344 5.49992C0.333344 2.92259 2.42268 0.833252 5.00001 0.833252C7.57734 0.833252 9.66668 2.92259 9.66668 5.49992C9.66668 7.8018 8.58021 9.93675 7.55168 11.4527C7.03165 12.2191 6.51248 12.8476 6.12291 13.2852C5.92782 13.5043 5.76443 13.6764 5.64859 13.7949C5.59065 13.8541 5.54454 13.9 5.51223 13.9318C5.49607 13.9477 5.48336 13.96 5.47434 13.9687L5.46361 13.979L5.46038 13.9821L5.4593 13.9831C5.45914 13.9833 5.4586 13.9838 5.00001 13.4999ZM5.00001 13.4999L5.4586 13.9838C5.20144 14.2275 4.79827 14.2272 4.54112 13.9835L5.00001 13.4999ZM5.00001 4.83325C4.63182 4.83325 4.33334 5.13173 4.33334 5.49992C4.33334 5.86811 4.63182 6.16659 5.00001 6.16659C5.3682 6.16659 5.66668 5.86811 5.66668 5.49992C5.66668 5.13173 5.3682 4.83325 5.00001 4.83325ZM3.00001 5.49992C3.00001 4.39535 3.89544 3.49992 5.00001 3.49992C6.10458 3.49992 7.00001 4.39535 7.00001 5.49992C7.00001 6.60449 6.10458 7.49992 5.00001 7.49992C3.89544 7.49992 3.00001 6.60449 3.00001 5.49992Z'
                          fill='white'
                        />
                      </svg>
                      <div>{item.place + ''}</div>
                    </div>

                    <div>{item.day + ';' + item.time}</div>
                  </div>
                  <div className='w-fit h-fit bg-white rounded-lg text-black py-1 px-2 cursor-pointer '>
                    {'Learn More'}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex gap-6 font-semibold'>
            <div className='flex gap-2'>
              <Image
                src={like}
                className='w-[20px] h-[20px]'
                width={20}
                height={20}
              />
              <div>{item.likes + ' Likes'}</div>
            </div>
            <div className='flex gap-2'>
              <Image
                src={comment}
                className='w-[20px] h-[20px]'
                width={20}
                height={20}
              />
              <div className='text-[#83AD8F]'>
                {item.comments + ' Comments'}
              </div>
            </div>
            <div className='flex gap-2'>
              {' '}
              <Image
                src={send}
                className='w-[20px] h-[20px]'
                width={20}
                height={20}
              />
              <div className='text-[#83AD8F]'>{'Send'}</div>
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <Image
              src={item.author_image}
              className='w-[40px] h-[40px] rounded-full'
              width={40}
              height={40}
            />
            <Input
              placeholder={'Write a comment....'}
              mb={0}
              opacity={true}
              border={false}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Content
