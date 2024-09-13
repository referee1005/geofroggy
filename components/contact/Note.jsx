import React, { useState } from 'react'
import Input from '../reusable/Input'
import dynamic from 'next/dynamic'
import TextArea from '../reusable/TextArea'
import CustomButton from '../reusable/CustomButton'
import Modal from '../reusable/Modal'
import { useDispatch } from 'react-redux'
import { postNoteRequest } from '@/actions/contact'
const MapComponent = dynamic(() => import('../reusable/map'), {
  ssr: false
})
function NoteForm () {
  const [largeMap, setLargeMap] = useState(false)
  const dispatch = useDispatch()

  const openModal = () => setLargeMap(true)
  const closeModal = () => setLargeMap(false)

  return (
    <div className='w-full grid grid-cols-1 sm:grid-cols-2 '>
      <div className='px-4 lg:px-16 2xl:px-32 py-16'>
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
            click={() => dispatch(postNoteRequest())}
          />
        </div>
      </div>
      <div className='relative h-96 sm:h-full'>
        <MapComponent lat={45.4565} lang={-122.6387} mini={true} scale={true} />
        <div className='absolute top-[5%] z-10 right-[5%]'>
          <div
            className={`backdrop-blur-md bg-black/20
           px-4 py-2 rounded-full inline-block cursor-pointer text-white text-xs lg:text-base`}
            onClick={() => setLargeMap(true)}
          >
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              style={{ display: 'inline' }}
            >
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M2.46014 16.8191C2.23856 16.5893 2.1867 16.2444 2.33091 15.9597L3.03241 14.5743C4.69268 11.2955 8.05563 9.22882 11.7308 9.22882H12.0757C12.1009 8.68244 12.1334 8.13632 12.1731 7.59059L12.241 6.65995C12.2961 5.90313 13.14 5.48006 13.7795 5.88864C15.8771 7.229 17.7007 8.95609 19.153 10.9779L19.6091 11.6128C19.797 11.8743 19.797 12.2264 19.6091 12.4879L19.153 13.1229C17.7007 15.1446 15.8771 16.8717 13.7795 18.2121C13.14 18.6206 12.2961 18.1976 12.241 17.4408L12.1731 16.5101C12.1256 15.8584 12.0886 15.2061 12.0619 14.5535C9.91207 14.4914 7.76486 14.9254 5.7915 15.8361L3.31431 16.9794C3.02447 17.1132 2.68173 17.0489 2.46014 16.8191ZM4.67839 14.6978L5.16291 14.4742C7.57405 13.3614 10.2196 12.8916 12.8447 13.0932C13.227 13.1225 13.5256 13.4355 13.5369 13.8188C13.5624 14.6802 13.6065 15.5411 13.6692 16.4011L13.6746 16.4755C15.3181 15.3139 16.7583 13.8855 17.9348 12.2477L18.0766 12.0504L17.9348 11.853C16.7583 10.2152 15.3181 8.78685 13.6746 7.62518L13.6692 7.69964C13.6132 8.46725 13.5721 9.23567 13.5458 10.0045C13.532 10.4085 13.2005 10.7288 12.7962 10.7288L11.7308 10.7288C8.83352 10.7288 6.16555 12.2467 4.67839 14.6978Z'
                fill='white'
              />
            </svg>
            View Large Map
          </div>
        </div>
      </div>
      {largeMap && (
        <Modal isOpen={largeMap} onClose={closeModal}>
          <div className='w-full h-full'>
            {' '}
            <MapComponent
              lat={45.4565}
              lang={-122.6387}
              mini={true}
              scale={true}
            />
          </div>
        </Modal>
      )}
    </div>
  )
}

export default NoteForm
