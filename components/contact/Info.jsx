import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import CallImage from '../../public/images/contact/call.png'
import MessageImage from '../../public/images/contact/message.png'
import VisitImage from '../../public/images/contact/visit.png'

const info = [
  {
    icon: CallImage,
    title: 'Call Us',
    description: 'Mon-Fri 8am to 5pm',
    detail: '+1 654 456 7899'
  },
  {
    icon: MessageImage,
    title: 'Send Message',
    description: 'Speak to our friendly Team',
    detail: 'contact@geofroggy.com'
  },
  {
    icon: VisitImage,
    title: 'Visit Us',
    description: 'Visit our Office HQ',
    detail: '2164 Shingleton Road. Kentwood, MI, USA'
  }
]
function Info ({}) {
  return (
    <div
      className='relative grid grid-rows-3 lg:grid-cols-3 lg:grid-rows-1 py-32 px-16 lg:px-32 2xl:px-48 3xl:px-64 '
      style={{ backgroundColor: '#F5F9FF' }}
    >
      {info.map((item, index) => {
        return (
          <div
            className='py-8 lg:py-0 px-4 lg:px-8 2xl:px-16 grid grid-cols-2 lg:grid-cols-1'
            key={index}
          >
            {/* <div></div> */}
            <Image src={item.icon} className='rounded-2xl lg:mb-8' />
            <div>
              <div className='text-xl font-semibold mb-4'>{item.title}</div>
              <div className='text-lg mb-6'>{item.description}</div>
              <div className='text-lg'>{item.detail}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Info