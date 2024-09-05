import React, { useState } from 'react'
import Input from '../reusable/Input'
import TextArea from '../reusable/TextArea'
import CustomButton from '../reusable/CustomButton'

function NoteForm ({ amount, payment }) {
  const mapSrc = `https://maps.googleapis.com/maps/api/staticmap?center=40.7128,-74.0060&zoom=13&size=600x300&maptype=roadmap&key=AIzaSyA-_T5OLFv-B1Pl-9IFmi1V0vDW7dirTNA`
  const handleViewLargeMap = () => {
    const mapUrl = `https://www.google.com/maps?q=40.7128,-74.0060`
    window.open(mapUrl, '_blank')
  }
  return (
    <div className='w-full grid grid-cols-1 sm:grid-cols-2 py-16'>
      <div className='px-4 lg:px-16 2xl:px-32'>
        <div className='mb-8 text-3xl sm:text-4xl lg:text-5xl font-semibold'>
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
      <div className='px-4 py-8 sm:py-0 lg:px-16  2xl:px-32 '>
        <img src={mapSrc} alt='Google Map' width={600} height={300} />
        <button
          onClick={handleViewLargeMap}
          className='mt-4 px-4 py-2 bg-blue-500 text-white rounded'
        >
          View Large Map
        </button>
      </div>
    </div>
  )
}

export default NoteForm
