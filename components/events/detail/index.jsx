import React from 'react'
import LeftSideBar from '../list/leftSide'
import Content from './content'
import RightSideBar from './rightSide'
function EventDetail ({ data }) {
  return (
    <div className='flex gap-3 xl:gap-8 container-custom py-4'>
      <div className='w-[25%] '>
        <LeftSideBar />
      </div>
      <div className='w-[50%]'>
        <Content data={data} />
      </div>
      <div className='w-[25%]'>
        <RightSideBar data={data} />
      </div>
    </div>
  )
}

export default EventDetail
