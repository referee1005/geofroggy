import {
  FiGithub,
  FiTwitter,
  FiLinkedin,
  FiGlobe,
  FiYoutube
} from 'react-icons/fi'
import Image from 'next/image'

function Subscribe ({ bgColor, textColor, buttonColor, opacity = 1 }) {
  return (
    <div
      className='container-custom bg-opacity-container'
      style={{ backgroundColor: bgColor }}
    >
      <div className='mx-auto gap-6 flex flex-col sm:flex-row py-12 sm:py-32 bg-opacity-content'>
        <div className='mb-8 flex-1'>
          <div className='text-3xl sm:text-4xl 2xl:text-5xl text-white'>
            Subscribe GeoFroggy
          </div>
          <div
            className='text-xl sm:text-2xl 2xl:text-3xl'
            style={{ color: textColor }}
          >
            get latest news and updates
          </div>
          <div className={`sm:text-sm 2xl:text-base  mt-4 text-white`}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </div>
        </div>
        <div className='flex-1'>
          <div className='mb-8'>
            <div className='inline-block sm:block font-semibold mb-8 w-2/3 sm:w-3/4'>
              <input
                type='text'
                placeholder='Enter your Email'
                className='
                  w-full
                  pl-4
                  pr-4
                  py-2
                  border
                  border-gray-300
                  rounded-md
                  focus:outline-none
                  focus:ring-2
                  focus:ring-blue-500
                  focus:border-transparent
                  shadow-sm
                '
              />
            </div>
            <button
              // onClick={showHireMeModal}
              className='ml-4 sm:ml-0 text-sm sm:text-md  font-general-medium bg-custom-primary w-20 sm:w-32 h-10 2xl:w-36 2xl:h-11 hover:bg-indigo-600 text-white shadow-sm rounded-md px-1 sm:px-5 duration-300'
              aria-label='Join Us Button'
              style={{ backgroundColor: buttonColor }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subscribe
