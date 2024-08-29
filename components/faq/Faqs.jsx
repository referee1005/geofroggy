import React, { useState, useEffect } from 'react'
function Faqs ({ title, data }) {
  const [currentIndex, setCurrentIndex] = useState(null)
  return (
    <div className='container-custom lg:my-8 2xl:my-16 flex'>
      <div className='text-5xl font-semibold w-1/4'>{title}</div>

      <div className='flex-1 ml-16'>
        {data &&
          data.map((item, index) => {
            return (
              <div
                className={`border-t-2 ${
                  index === data.length - 1 ? 'border-b-2' : ''
                } py-4 flex justify-between`}
              >
                <div className='flex flex-col'>
                  <div className='lg:text-lg 2xl:text-xl font-semibold'>
                    {item.question}
                  </div>
                  {index === currentIndex && (
                    <div className='lg:text-md 2xl:text-lg mt-4'>
                      {item.answer}
                    </div>
                  )}
                </div>

                {/* <FiArrowDown /> */}
                {index === currentIndex ? (
                  <div
                    className='cursor-pointer'
                    onClick={() => setCurrentIndex(null)}
                  >
                    <svg
                      width='48'
                      height='48'
                      viewBox='0 0 48 48'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M14.9393 30.0607C14.3536 29.4749 14.3536 28.5251 14.9393 27.9393L22.9393 19.9393C23.5251 19.3536 24.4749 19.3536 25.0607 19.9393L33.0607 27.9393C33.6464 28.5251 33.6464 29.4749 33.0607 30.0607C32.4749 30.6464 31.5251 30.6464 30.9393 30.0607L24 23.1213L17.0607 30.0607C16.4749 30.6464 15.5251 30.6464 14.9393 30.0607Z'
                        fill='#646464'
                      />
                    </svg>
                  </div>
                ) : (
                  <div
                    className='cursor-pointer'
                    onClick={() => setCurrentIndex(index)}
                  >
                    <svg
                      width='48'
                      height='48'
                      viewBox='0 0 48 48'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M33.0607 17.9393C33.6464 18.5251 33.6464 19.4749 33.0607 20.0607L25.0607 28.0607C24.4749 28.6464 23.5251 28.6464 22.9393 28.0607L14.9393 20.0607C14.3536 19.4749 14.3536 18.5251 14.9393 17.9393C15.5251 17.3536 16.4749 17.3536 17.0607 17.9393L24 24.8787L30.9393 17.9393C31.5251 17.3536 32.4749 17.3536 33.0607 17.9393Z'
                        fill='#646464'
                      />
                    </svg>
                  </div>
                )}
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Faqs
