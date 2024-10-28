import React, { useEffect, useRef, useState } from 'react'
import Input from '../../reusable/Input'
import searchSVG from '../../../public/images/job/Search.svg'
import Menu from '@/components/news/menu'
import Groups from '@/components/Groups'
import Communities from '@/components/Communities'
function LeftSideBar ({ changeMenu }) {
  return (
    <div className='rounded-lg bg-white p-4 flex flex-col'>
      <div>
        <Input
          type='text'
          startIconSrc={searchSVG}
          placeholder={'Explore Geofroggy'}
          // onChange={e => setQuery({ ...query, query: e })}
        />
      </div>
      <div className='py-4 border-b-2'>
        <Menu changeMenu={changeMenu} />
      </div>
      <div className='my-2'>
        <Groups />
      </div>
      <div className='mb-2'>
        <Communities />
      </div>
    </div>
  )
}

export default LeftSideBar
