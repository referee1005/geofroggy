import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Around1 from '../../public/images/donate/around1.png'
import Around2 from '../../public/images/donate/around2.png'
import Around3 from '../../public/images/donate/around3.png'
import Around4 from '../../public/images/donate/around4.png'
import CustomButton from '../reusable/CustomButton'

function Part2 ({ data }) {
  const router = useRouter()
  return (
    <div
      className='container-custom flex py-24 h-132 sm:min-h-custom2 lg:h-screen lg:min-h-custom1'
      style={{ backgroundColor: '#D9D9D9' }}
    >
      <div className='flex flex-col justify-between w-1/6 h-full'>
        <div className='mt-[50%]'>
          <Image
            src={Around1}
            className='rounded-xl lg:rounded-3xl 2xl:rounded-4xl blur-[1px] w-[80%] sm:w-[70%] lg:w-[60%]'
          />
        </div>
        <div className='flex justify-end'>
          <Image
            src={Around2}
            className='rounded-xl lg:rounded-3xl 2xl:rounded-4xl w-[80%] sm:w-[70%]  lg:w-[60%]'
          />
        </div>
      </div>
      <div className='flex flex-col items-center justify-between w-2/3 h-full'>
        <div className='text-large ms:text-xl sm:text-2xl lg:text-3xl xl:text-4xl 3xl:text-5xl text-center mb-8 w-[90%]'>
          {data !== undefined ? data.donation_excerpt : ''}
        </div>
        <div className='text-6xl ms:text-7xl sm:text-8xl lg:text-custom-10xl xl:text-custom-11xl 3xl:text-custom-12xl w-full text-center mb-8'>
          {data !== undefined ? data.donation_numbers : ''}
        </div>
        <div className='flex flex-col items-center'>
          {' '}
          <div className='text-sm ms:text-base lg:text-lg 2xl:text-xl mb-4'>
            People already donating
          </div>
          <CustomButton
            title={'Donate Now'}
            blur={true}
            bgColor={'#195883'}
            color={'white'}
            size={'text-sm ms:text-base lg:text-lg 2xl:text-xl'}
            px={'px-4 ms:px-6 2xl:px-8'}
            py={'py-2 2xl:py-4'}
            click={() => router.push('/donate/now')}
          />
        </div>
      </div>
      <div className='flex flex-col justify-between w-1/6 h-full'>
        <div className='mt-[50%] flex justify-end'>
          <Image
            src={Around4}
            className='rounded-xl lg:rounded-3xl 2xl:rounded-4xl blur-[2px] w-[80%] sm:w-[70%] lg:w-[60%]'
          />
        </div>
        <div className='flex justify-start'>
          <Image
            src={Around3}
            className='rounded-xl lg:rounded-3xl 2xl:rounded-4xl w-[80%] sm:w-[70%] lg:w-[60%]'
          />
        </div>
      </div>
    </div>
  )
}

export default Part2
