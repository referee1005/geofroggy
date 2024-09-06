import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import CallImage from '../../public/images/contact/call.png'
import MessageImage from '../../public/images/contact/message.png'
import VisitImage from '../../public/images/contact/visit.png'

function Info ({ data }) {
  const [info, setInfo] = useState([])
  useEffect(() => {
    setInfo([
      {
        icon: CallImage,
        title: 'Call Us',
        description: 'Mon-Fri 8am to 5pm',
        detail: data.phone_number
      },
      {
        icon: MessageImage,
        title: 'Send Message',
        description: 'Speak to our friendly Team',
        detail: data.email
      },
      {
        icon: VisitImage,
        title: 'Visit Us',
        description: 'Visit our Office HQ',
        detail: data.address
      }
    ])
  }, [data])

  return (
    <div
      className='relative grid grid-rows-3 lg:grid-cols-3 lg:grid-rows-1 py-16 sm:py-32 px-8 ms:px-16 lg:px-32 2xl:px-48 3xl:px-64 '
      style={{ backgroundColor: '#F5F9FF' }}
    >
      {info.map((item, index) => {
        return (
          <div
            className='py-4 sm:py-8 lg:py-0 px-4 lg:px-8 2xl:px-16 grid grid-cols-2 lg:grid-cols-1'
            key={index}
          >
            <Image src={item.icon} className='rounded-2xl lg:mb-8' />
            <div>
              <div className='text-xl font-semibold mb-4'>{item.title}</div>
              <div className='text-md lg:text-lg mb-6'>{item.description}</div>
              <div className='text-md lg:text-lg break-words'>
                {item.detail}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Info
