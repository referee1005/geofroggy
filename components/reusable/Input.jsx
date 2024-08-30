import React from 'react'

function Input ({
  label,
  placeholder,
  id,
  name,
  type,
  mb = 4,
  startIconSrc,
  endIconSrc
}) {
  return (
    <div className={`mb-${mb}`}>
      <label htmlFor={id} className='block text-sm font-medium text-gray-700'>
        {label}
      </label>
      <div className='relative mt-1'>
        {startIconSrc && (
          <span className='absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500'>
            <img src={startIconSrc.src} alt='Start Icon' className='w-5 h-5' />
          </span>
        )}
        <input
          type={type}
          id={id}
          name={name}
          className={`block w-full pl-${startIconSrc ? '12' : '3'} pr-${
            endIconSrc ? '12' : '3'
          } py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
          placeholder={placeholder}
        />
        {endIconSrc && (
          <span className='absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500'>
            <img src={endIconSrc.src} alt='End Icon' className='w-5 h-5' />
          </span>
        )}
      </div>
    </div>
  )
}

export default Input
