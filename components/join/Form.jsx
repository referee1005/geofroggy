import React, { useState, useEffect } from 'react'
import Input from '../reusable/Input'
import TextArea from '../reusable/TextArea'
import Image from 'next/image'
import CustomButton from '../reusable/CustomButton'
import creditSVG from '../../public/images/donate/credit-card.svg'
import calenderSVG from '../../public/images/donate/calendar.svg'
import Cardtype from '../../public/images/donate/card_type.png'

function JoinForm ({}) {
  const [elementHeight, setElementHeight] = useState(12)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setElementHeight(12)
      else setElementHeight(10)
    }
    handleResize() // Initial check
    window.addEventListener('resize', handleResize) // Add event listener
    return () => window.removeEventListener('resize', handleResize) // Cleanup event listener
  }, [])

  return (
    <div className='w-full h-full flex justify-center items-center lg:py-16 backdrop-blur-md text-white'>
      <div className='h-full px-4 lg:px-16 2xl:px-32 flex flex-col justify-center'>
        <div className='text-center  lg:text-left text-3xl mb-2 lg:mb-8 xl:text-4xl 2xl:text-5xl font-medium'>
          Join Us
        </div>
        <div className='mb-4 lg:mb-16 sm:text-sm lg:text-lg'>
          We’d love to ave you! Join our network of Travellers and geography
          geeks
        </div>
        <div>
          <div className='grid grid-cols-2 gap-2 lg:gap-8'>
            <Input
              label={'First Name'}
              textColor='white'
              opacity={true}
              inputHeight={elementHeight}
            />
            <Input
              label={'Last Name'}
              textColor='white'
              opacity={true}
              inputHeight={elementHeight}
            />
          </div>
          <div className=''>
            <Input
              label={'Email'}
              textColor='white'
              opacity={true}
              inputHeight={elementHeight}
            />
          </div>
          <div className=''>
            <Input
              label={'Password'}
              textColor='white'
              opacity={true}
              inputHeight={elementHeight}
            />
          </div>
          <CustomButton
            title={'Sign Up'}
            rounded='lg'
            blur={true}
            bgColor={'#84BF3F'}
            color={'white'}
            size={'xl'}
            px={8}
            width={'full'}
            height={elementHeight}
          />
          <div className='mt-4 text-center lg:text-sm 2xl:text-base 3xl:text-lg'>
            {'Already have an account? '}
            <span style={{ color: '#269938' }}>Log in</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JoinForm
