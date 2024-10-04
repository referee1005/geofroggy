import React from 'react'
import LeftSideBar from './leftSide'
import Content from './content'
import RightSideBar from './rightSide'
function EventsList ({ data }) {
  return (
    <div className='flex gap-4 xl:gap-8 container-custom py-4'>
      <div className='w-[25%] '>
        <LeftSideBar />
      </div>
      <div className='flex-1'>
        <Content />
      </div>
      <div className='w-[25%] '>
        <RightSideBar />
      </div>
    </div>
  )
}

export default EventsList
