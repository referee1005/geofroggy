import { useState } from 'react'

const Modal = ({ isOpen, onClose, children, width, height }) => {
  if (!isOpen) return null

  return (
    <div className='fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50'>
      <div className='bg-white p-2 sm:p-6 rounded-lg shadow-lg w-full flex flex-col w-[90vw] sm:w-[80vw] h-[90vh]'>
        <button
          onClick={onClose}
          className='absolute top-4 right-4 text-white hover:text-white scale-200'
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  )
}

export default Modal
