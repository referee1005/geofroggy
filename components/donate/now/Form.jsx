import React, { useState } from 'react'
import Input from '../../reusable/Input'
import TextArea from '../../reusable/TextArea'
import Image from 'next/image'
import CustomButton from '../../reusable/CustomButton'
import creditSVG from '../../../public/images/donate/credit-card.svg'
import Cardtype from '../../../public/images/donate/card_type.png'

function DonateForm ({ amount, payment }) {
  return (
    <div className='w-full grid grid-cols-1 sm:grid-cols-2 py-16'>
      <div className='px-4 lg:px-16 2xl:px-32'>
        <div className='mb-16 sm:text-sm lg:text-lg font-semibold'>
          You are donating as a guest or{' '}
          <span style={{ color: '#269938' }} className='cursor-pointer'>
            Log in
          </span>
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
      <div className='px-4 py-8 sm:py-0 lg:px-16  2xl:px-32 '>
        <div className='mb-16 sm:text-sm lg:text-lg  text-center font-semibold'>
          Pay With {payment}
        </div>
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
          <div className='flex justify-center mt-16'>
            <Image src={Cardtype} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DonateForm
