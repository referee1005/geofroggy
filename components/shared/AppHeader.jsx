import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FiSun, FiMoon, FiX, FiMenu } from 'react-icons/fi'
import HireMeModal from '../HireMeModal'
import logoLight from '../../public/images/logo-light.svg'
import logoDark from '../../public/images/logo-dark.svg'
import useThemeSwitcher from '../../hooks/useThemeSwitcher'

function AppHeader () {
  const [showMenu, setShowMenu] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [activeTheme, setTheme] = useThemeSwitcher()

  function toggleMenu () {
    if (!showMenu) {
      setShowMenu(true)
    } else {
      setShowMenu(false)
    }
  }

  function showHireMeModal () {
    if (!showModal) {
      document
        .getElementsByTagName('html')[0]
        .classList.add('overflow-y-hidden')
      setShowModal(true)
    } else {
      document
        .getElementsByTagName('html')[0]
        .classList.remove('overflow-y-hidden')
      setShowModal(false)
    }
  }

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      id='nav'
      className='container-custom fontsize-custom'
    >
      {/* Header */}
      <div className='z-10 w-full sm:w-full md:w-full lg:w-full xl:w-full block lg:flex sm:justify-between sm:items-center'>
        {/* Header menu links and small screen hamburger menu */}
        <div className='flex justify-between items-center px-4 sm:px-0 flex-shrink-0'>
          <div>
            <Link href='/'>
              {activeTheme === 'dark' ? (
                <Image
                  src={logoDark}
                  className='cursor-pointer'
                  alt='Dark Logo'
                  width={180}
                />
              ) : (
                <Image
                  src={logoLight}
                  className='cursor-pointer'
                  alt='Light Logo'
                  width={180}
                />
              )}
            </Link>
          </div>

          {/* Small screen hamburger menu */}
          <div className='lg:hidden'>
            <button
              onClick={toggleMenu}
              type='button'
              className='focus:outline-none'
              aria-label='Hamburger Menu'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                className='h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light'
              >
                {showMenu ? (
                  <FiX className='text-3xl' />
                ) : (
                  <FiMenu className='text-3xl' />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Header links small screen */}
        <div
          className={
            showMenu
              ? 'block m-0 sm:ml-4 sm:mt-3 xl:flex px-5 py-3 sm:p-0 justify-between items-center shadow-lg lg:shadow-none'
              : 'hidden'
          }
        >
          <div className='block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 sm:py-2'>
            <Link href='/projects' aria-label='Projects'>
              Home
            </Link>
          </div>
          <div className='block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark'>
            <Link href='/projects' aria-label='Projects'>
              Countries
            </Link>
          </div>
          <div className='block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark'>
            <Link href='/about' aria-label='About Me'>
              About
            </Link>
          </div>
          <div className='block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark'>
            <Link href='/projects' aria-label='Projects'>
              Donate
            </Link>
          </div>
          <div className='block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark'>
            <Link href='/contact' aria-label='Contact'>
              Blog&News
            </Link>
          </div>
          <div className='block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark'>
            <Link href='/contact' aria-label='Contact'>
              Contact
            </Link>
          </div>
          <div className='border-t-2 pt-3 sm:pt-0 sm:border-t-0 border-primary-light dark:border-secondary-dark'>
            <button
              onClick={showHireMeModal}
              className='font-general-medium sm:hidden block text-left text-md bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-sm px-4 py-2 mt-2 duration-300 w-24 text-center'
              aria-label='Join Us Button'
            >
              Join Us
            </button>
          </div>
        </div>

        {/* Header links large screen */}
        <div className='font-general-medium hidden mx-0 2xl:mx-48 xl:mx-24  lg:flex flex-1 sm:p-0 justify-between items-center shadow-lg sm:shadow-none'>
          <div
            className='block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 sm:py-2'
            aria-label='home'
          >
            <Link href='/' className=' fontsize-custom'>
              Home
            </Link>
          </div>
          <div
            className='block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 sm:py-2'
            aria-label='Countries'
          >
            <Link href='/countries' className=' fontsize-custom'>
              Countries
            </Link>
          </div>
          <div
            className='block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 sm:py-2'
            aria-label='About'
          >
            <Link href='/about' className=' fontsize-custom'>
              About
            </Link>
          </div>
          <div
            className='block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 sm:py-2'
            aria-label='Donate'
          >
            <Link href='/Donate' className=' fontsize-custom'>
              Donate
            </Link>
          </div>
          <div
            className='block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 sm:py-2'
            aria-label='Blog&News'
          >
            <Link href='/blog' className=' fontsize-custom'>
              Blog&News
            </Link>
          </div>
          <div
            className='block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 sm:py-2'
            aria-label='Contact'
          >
            <Link href='/contact' className=' fontsize-custom'>
              Contact
            </Link>
          </div>
        </div>

        {/* Header right section buttons */}
        <div className='hidden lg:flex justify-between items-center flex-col md:flex-row flex-shrink-0'>
          <div className='hidden md:flex'>
            <button
              onClick={showHireMeModal}
              className='text-md font-general-medium bg-custom-primary w-30 h-10 2xl:w-35 2xl:h-11 hover:bg-indigo-600 text-white shadow-sm rounded-full px-5 duration-300'
              aria-label='Join Us Button'
            >
              Join Us
            </button>
          </div>
        </div>
      </div>
      <div>
        {showModal ? (
          <HireMeModal onClose={showHireMeModal} onRequest={showHireMeModal} />
        ) : null}
        {showModal ? showHireMeModal : null}
      </div>
    </motion.nav>
  )
}

export default AppHeader
