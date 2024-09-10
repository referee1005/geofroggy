import React from 'react'

const CheckBox = ({ label }) => {
  return (
    <div className='flex items-center cursor-pointer'>
      <input
        id='custom-checkbox'
        type='checkbox'
        className='h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500'
      />
      <label
        htmlFor='custom-checkbox'
        className='ml-2 block text-sm font-medium text-gray-700'
      >
        {label}
      </label>
    </div>
  )
}

export default CheckBox
