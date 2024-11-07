import React, { useState, useEffect } from 'react'
import uncheck from '../../../public/images/news/subscribe.png'
import check from '../../../public/images/news/subscribe_check.png'
import { fetchNewsLetterOptionsRequest } from '@/actions/news'
import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux'
import querystring from 'querystring'

function NewsSubscribe () {
  const [item, setItem] = useState([0, 1, 2, 3, 4])
  const [selectedItems, setSelectedItems] = useState([])
  const dispatch = useDispatch()
  const options = useSelector(state => state.news.newsletter_options)

  useEffect(() => {
    dispatch(fetchNewsLetterOptionsRequest())
  }, [dispatch])

  return (
    <div className='relative w-full flex flex-col items-center bg-custom-bg-primary'>
      <div className='text-3xl lg:text-5xl my-16 text-center'>
        Suscribe to Geofroggy <span className='text-[#8CC63E]'>Newsletter</span>
      </div>
      <div className='flex flex-col rounded-lg bg-white p-6 gap-4 w-[300px] sm:w-[400px] mb-16'>
        <div className='text-[#C4CCD5]'>SELECT WHAT YOU WANT</div>
        {options.map((i, index) => (
          <div
            className={`flex gap-2 text-black ${
              selectedItems.includes(index)
                ? 'border-[#8CC63E]'
                : 'border-[#C4CCD5]'
            } border-2 rounded-lg items-center p-2 cursor-pointer`}
            onClick={() => {
              !selectedItems.includes(index)
                ? setSelectedItems([...selectedItems, index])
                : setSelectedItems(selectedItems.filter(i => i !== index))
            }}
          >
            <div>
              <Image
                src={selectedItems.includes(index) ? check : uncheck}
                className='w-8 h-8 w-[16px] h-[16px] rounded-lg'
                width={500}
                height={500}
              />
            </div>
            <div className=''>{i.name}</div>
          </div>
        ))}

        <div className='rounded-4xl text-lg text-white bg-[#8CC63E] w-fit py-2 px-6 cursor-pointer'>
          Save
        </div>
      </div>
    </div>
  )
}

export default NewsSubscribe
