import React from 'react'

function Input ({
  label,
  placeholder,
  id,
  name,
  type,
  mb = 4,
  startIconSrc,
  endIconSrc,
  textColor = 'text-gray-700',
  opacity = false,
  inputHeight = 12,
  onChange,
  border = true
}) {
  return (
    <div className={`mb-${mb} w-full`}>
      {label && (
        <label
          htmlFor={id}
          className={`block text-sm md:text-md 2xl:text-lg font-medium ${textColor}`}
        >
          {label}
        </label>
      )}

      <div className='relative mt-1'>
        {startIconSrc && (
          <span className='absolute inset-y-0 left-0 flex items-center pl-2 text-gray-500'>
            <img src={startIconSrc.src} alt='Start Icon' className='w-5 h-5' />
          </span>
        )}
        <input
          type={type}
          id={id}
          name={name}
          className={`block w-full ${startIconSrc ? 'pl-8' : 'pl-3'} ${
            endIconSrc ? 'pr-8' : 'pr-3'
          } py-2 ${
            border ? 'border border-gray-300' : ''
          } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg ${
            opacity ? 'bg-gray-300 bg-opacity-50' : ''
          } h-${inputHeight}`}
          placeholder={placeholder}
          onChange={onChange}
        />
        {endIconSrc && (
          <span className='absolute inset-y-0 right-0 flex items-center pr-2 text-gray-500'>
            <img src={endIconSrc.src} alt='End Icon' className='w-5 h-5' />
          </span>
        )}
      </div>
    </div>
  )
}

export default Input
