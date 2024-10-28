import React, { useState } from 'react'
import LeftSideBar from './leftSide'
import Content from './content'
import RightSideBar from './rightSide'
import Settings from '../settings'
function EventsList ({ data }) {
  const [selectedItem, setItem] = useState('events')
  const changeMenu = value => {
    setItem(value)
  }
  return (
    <div className='flex gap-4 xl:gap-8 container-custom py-4'>
      <div className='w-[25%] lg:block hidden'>
        <LeftSideBar changeMenu={changeMenu} />
      </div>
      {selectedItem === 'events' && (
        <>
          <div className='flex-1'>
            <Content />
          </div>
          <div className='w-[25%] '>
            <RightSideBar />
          </div>
        </>
      )}
      {selectedItem === 'settings' && (
        <>
          <div className='flex-1'>
            <Settings />
          </div>
        </>
      )}
    </div>
  )
}

export default EventsList
