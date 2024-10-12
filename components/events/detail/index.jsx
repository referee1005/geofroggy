import React, { useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import LeftSideBar from '../list/leftSide'
import Content from './content'
import RightSideBar from './rightSide'
function EventDetail ({ data }) {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <div className=''>
      <div className='block sm:hidden container-custom pt-4'>
        <FiMenu
          className='text-3xl cursor-pointer'
          onClick={() => setShowMenu(!showMenu)}
        />
        {showMenu && (
          <div className=' py-4'>
            <LeftSideBar />
          </div>
        )}
      </div>
      <div className='flex gap-3 xl:gap-8 container-custom py-4'>
        <div className='hidden sm:block sm:w-[40%] lg:w-[25%] '>
          <LeftSideBar />
        </div>
        <div className='w-full sm:w-[60%] lg:w-[75%] flex flex-col lg:flex-row gap-3 xl:gap-8'>
          <div className='w-full lg:w-2/3'>
            <Content data={data} />
          </div>
          <div className='w-full lg:w-1/3'>
            <RightSideBar data={data} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventDetail
