import React, { useState, useEffect } from 'react'
import CustomButton from '../reusable/CustomButton'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDonateRequest } from '@/actions/donate'
import image1 from '../../public/images/media/image1.png'
import Image from 'next/image'

function Curate () {
  const [amount, setAmount] = useState('')
  const [payment, setPayment] = useState('Debit/Credit Card')
  const data = ['All', 'Mountains', 'Beaches', 'Rain']
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchDonateRequest())
  }, [dispatch])

  useEffect(() => {
    setAmount(data[0])
  }, [data])

  return (
    <div className='container-custom flex flex-col items-center py-8'>
      <div className='text-3xl lg:text-5xl font-semibold my-4 sm:w-2/3 lg:w-1/2 text-center lg:my-8 2xl:my-16'>
        Curated Photos and Videos For you to explore
      </div>

      <div className='flex mb-4'>
        {data.map(item => {
          return (
            <div className='mr-2 sm:mr-4' key={item}>
              <CustomButton
                title={item}
                bgColor={item === amount ? '#84BF3F' : '#E8E8E8'}
                color={item === amount ? 'white' : 'black'}
                size={'text-sm ms:text-base sm:text-xl'}
                px={'px-4 ms:px-6 sm:px-8'}
                py={'py-1 sm:py-2'}
              />
            </div>
          )
        })}
      </div>

      <div className='relative w-full flex flex-col gap-2 lg:gap-4'>
        <div className='grid grid-rows-2 sm:grid-cols-2 gap-2 lg:gap-4'>
          {/* Left Area */}
          <div className='flex gap-2 lg:gap-4 w-full'>
            <div className='bg-white relative rounded-2xl w-full aspect-square'>
              <Image
                src={image1}
                alt='Light Logo'
                className='rounded-2xl object-cover'
                layout='fill'
              />
            </div>
            <div className='bg-white relative rounded-2xl w-full aspect-square'>
              <Image
                src={image1}
                alt='Light Logo'
                className='rounded-2xl object-cover'
                layout='fill'
              />
            </div>
          </div>

          {/* Right Area */}
          <div className='bg-white relative rounded-2xl w-full'>
            <div className='h-full flex items-stretch'>
              <Image
                src={image1}
                alt='Light Logo'
                className='rounded-2xl object-cover'
                layout='fill'
              />
            </div>
          </div>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-2 lg:gap-4'>
          {[1, 2, 3, 4].map(item => (
            <div className='bg-white relative rounded-2xl w-full aspect-square'>
              <Image
                src={image1}
                alt='Light Logo'
                className='rounded-2xl object-cover'
                layout='fill'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Curate
