import React, { useState } from 'react'
import Input from '../reusable/Input'
import TextArea from '../reusable/TextArea'
import CustomButton from '../reusable/CustomButton'
import creditSVG from '../../public/images/donate/credit-card.svg'
import calenderSVG from '../../public/images/donate/calendar.svg'

function DonateForm ({ amount, payment }) {
  return (
    <div className='w-full grid grid-cols-1 sm:grid-cols-2 py-16'>
      <div className='px-4 lg:px-16 2xl:px-32'>
        <div className='mb-16 sm:text-sm lg:text-base'>
          You are donating as a guest or{' '}
          <span style={{ color: '#269938' }}>Log in</span>
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
        </div>
      </div>
      <div className='px-4 lg:px-16  2xl:px-32'>
        <div className='mb-16 sm:text-sm lg:text-base'>Pay With {payment}</div>
        <div>
          <div className=''>
            <Input label={'Card Number'} type='text' startIconSrc={creditSVG} />
          </div>
          <div className='grid grid-cols-2 gap-2 lg:gap-8 2xl:gap-16'>
            <Input
              label={'Expiary Date'}
              type='date'
              // endIconSrc={calenderSVG}
            />
            <Input label={'CVC'} />
          </div>
          <div className=''>
            <Input label={'Card Holder Name'} />
          </div>
          <CustomButton
            title={'Donate $' + amount}
            rounded='sm'
            blur={true}
            bgColor={'#84BF3F'}
            color={'white'}
            size={'xl'}
            px={8}
            width={'full'}
          />
        </div>
      </div>
    </div>
  )
}

export default DonateForm