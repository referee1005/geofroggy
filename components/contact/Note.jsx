import React, { useState } from 'react'
import Input from '../reusable/Input'
import TextArea from '../reusable/TextArea'
import Image from 'next/image'
import CustomButton from '../reusable/CustomButton'
import creditSVG from '../../public/images/donate/credit-card.svg'
import calenderSVG from '../../public/images/donate/calendar.svg'
import Cardtype from '../../public/images/donate/card_type.png'

function NoteForm ({ amount, payment }) {
  return (
    <div className='w-full grid grid-cols-1 sm:grid-cols-2 py-16'>
      <div className='px-4 lg:px-16 2xl:px-32'>
        <div className='mb-8 sm:text-3xl lg:text-5xl font-semibold'>
          Leave us a note
        </div>
        <div className='mb-12 sm:text-sm lg:text-lg'>
          We would love to hear from you!
        </div>
        <div>
          <div className='grid grid-cols-2 gap-2 lg:gap-8 2xl:gap-16'>
            <Input label={'First Name'} />
            <Input label={'Last Name'} />
          </div>
          <div className=''>
            <Input label={'Email'} />
          </div>
          <div className=''>
            <TextArea label={'Description'} />
          </div>
          <CustomButton
            title={'Send Message'}
            rounded='md'
            blur={true}
            bgColor={'#195883'}
            color={'white'}
            size={'xl'}
            px={8}
            width={'full'}
          />
        </div>
      </div>
      <div className='px-4 py-8 sm:py-0 lg:px-16  2xl:px-32 '></div>
    </div>
  )
}

export default NoteForm
