import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import DonateClip1 from '../../public/images/donate/donate_clip1.png'
import DonateClip2 from '../../public/images/donate/donate_clip2.png'
import DonateClip3 from '../../public/images/donate/donate_clip3.png'
import Arrow from '../../public/images/donate/arrow.png'
import Icon1 from '../../public/images/donate/Icon1.png'
import Icon2 from '../../public/images/donate/Icon2.png'
import CustomButton from '../reusable/CustomButton'
import DonateButton from '../reusable/DonateButton'

function Part1 ({ data }) {
  const router = useRouter()

  return (
    <>
      {data !== undefined && (
        <div className='flex flex-col items-center py-24 container-custom'>
          <div className='flex flex-col items-center w-[90%] lg:w-4/5 2xl:w-2/3'>
            <div className='text-3xl ms:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 3xl:text-8xl font-semibold text-center mb-8'>
              {data.title}
            </div>
            <div className='text-base md:text-lg xl:text-xl 3xl:text-2xl lg:w-1/2 sm:w-2/3 w-full text-center mb-8'>
              {data.sub_title}
            </div>
            <CustomButton
              title={'Donate Now'}
              blur={true}
              bgColor={'#195883'}
              color={'white'}
              size={'text-sm ms:text-base lg:text-lg 2xl:text-xl'}
              px={'px-4 ms:px-6 2xl:px-8'}
              py={'py-2 2xl:py-4'}
              click={() => router.push('/donate')}
            />
          </div>

          {/*************************************  large screen  ****************************************/}
          <div className='hidden md:grid  md:grid-cols-5 gap-2 md:gap-1 lg:gap-2 xl:gap-4 2xl:gap-10'>
            <div>
              <div
                className='relative rounded-3xl 2xl:rounded-4xl md:h-64 lg:h-96 xl:h-108 2xl:h-120 3xl:h-132 flex flex-col justify-between py-2'
                style={{ backgroundColor: '#0D2F46' }}
              >
                <div className='w-3/4 h-full flex flex-col justify-center mx-auto'>
                  <div className='text-3xl sm:text-2xl ms:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 3xl:text-8xl text-white'>
                    2k+
                  </div>
                  <div
                    className='text-sm md:text-xs xl:text-base 3xl:text-lg'
                    style={{ color: '#5491BA' }}
                  >
                    {data.donation_excerpt}
                  </div>
                </div>
                <div className='absolute w-full bottom-2'>
                  <DonateButton
                    title='Donate Now'
                    onClick={() => router.push('/donate')}
                  />
                </div>
              </div>
              <div
                className='flex justify-center items-center mt-2 lg:mt-4 px-2 py-4 lg:px-2 lg:py-4 2xl:px-4 2xl:py-12 md:rounded-3xl lg:rounded-3xl 2xl:rounded-4xl'
                style={{ backgroundColor: '#0D2F46' }}
              >
                <div className='w-1/3 p-2 flex justify-center'>
                  <Image src={Icon1} className='' />
                </div>
                <div className='flex-1 text-sm lg:text-base 2xl:text-2xl 3xl:text-3xl lg:break-words lg:hyphens-auto text-white font-medium'>
                  Let Them be discovered
                </div>
              </div>
            </div>

            <div className='flex items-end'>
              <div className='relative md:h-64 lg:h-96 xl:h-108 2xl:h-120 3xl:h-132 flex flex-col justify-end'>
                <Image
                  src={DonateClip1}
                  className='rounded-3xl 2xl:rounded-4xl h-full'
                />
                <div className='absolute flex flex-col justify-between  h-full text-white px-1 py-4 lg:px-2 lg:py-6 2xl:px-8 2xl:py-12'>
                  <div>Explore</div>
                  <div className=''>
                    <div className='text-lg xl:text-xl 3xl:text-3xl lg:break-words lg:hyphens-auto  font-medium'>
                      Join 5M+
                    </div>
                    <div className='text-lg xl:text-xl 3xl:text-3xl lg:break-words lg:hyphens-auto  font-medium'>
                      People Donate
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex items-end'>
              <div
                className='rounded-3xl 2xl:rounded-4xl w-full h-48 lg:h-64 xl:h-72 2xl:h-80 3xl:h-96 flex flex-col justify-between py-2'
                style={{ backgroundColor: '#D9D9D9' }}
              >
                <div
                  className='md:w-full lg:w-3/4 h-3/4 flex flex-col justify-center items-center mx-auto'
                  style={{ color: '#195883' }}
                >
                  <div className='text-lg xl:text-xl 3xl:text-3xl lg:break-words lg:hyphens-auto  font-medium'>
                    Join 5M+
                  </div>
                  <div className='text-lg xl:text-xl 3xl:text-3xl lg:break-words lg:hyphens-auto  font-medium'>
                    People Donate
                  </div>
                </div>
                <DonateButton
                  title='Join Community'
                  backgroundColor1='#BAC1BF'
                  backgroundColor2='#222222'
                  onClick={() => router.push('/join')}
                />
              </div>
            </div>
            <div className='flex items-end'>
              {' '}
              <div className='relative md:h-64 lg:h-96 xl:h-108 2xl:h-120 3xl:h-132 flex flex-col justify-end'>
                <Image
                  src={DonateClip2}
                  className='rounded-3xl 2xl:rounded-4xl h-full'
                />
                <div className='absolute flex flex-col justify-between  h-full text-white px-1 py-4 lg:px-2 lg:py-6 2xl:px-8 2xl:py-12'>
                  <div className='text-black'>Discover</div>
                  <div className='text-white '>
                    <div className=' text-lg xl:text-xl 3xl:text-3xl lg:break-words lg:hyphens-auto  font-medium'>
                      Sponsor
                    </div>
                    <div className='text-lg xl:text-xl 3xl:text-3xl lg:break-words lg:hyphens-auto  font-medium'>
                      Information
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className='relative rounded-3xl 2xl:rounded-4xl md:h-64 lg:h-96 xl:h-108 2xl:h-120 3xl:h-132 flex flex-col justify-between '>
                <div className='h-full'>
                  <Image
                    src={DonateClip3}
                    className='rounded-3xl 2xl:rounded-4xl h-full'
                  />
                </div>
                <div className='absolute w-full bottom-2'>
                  <DonateButton
                    title='Explore More'
                    backgroundColor1='#A7CB5B'
                    backgroundColor2='#222222'
                    color='black'
                  />
                </div>
              </div>
              <div
                className='flex justify-center items-center mt-2 lg:mt-4 px-2 py-4 lg:px-2 lg:py-4 2xl:px-4 2xl:py-12 md:rounded-3xl lg:rounded-3xl 2xl:rounded-4xl'
                style={{ backgroundColor: '#0D2F46' }}
              >
                <div className='w-1/3 p-2 flex justify-center'>
                  <Image src={Icon2} className='' />
                </div>
                <div className='flex-1 text-sm lg:text-base 2xl:text-2xl 3xl:text-3xl lg:break-words lg:hyphens-auto text-white font-medium'>
                  Your Home for help!
                </div>
              </div>
            </div>
          </div>
          {/*************************************  small screen  ****************************************/}
          <div className='md:hidden grid grid-cols-2 gap-2 mt-8'>
            <div>
              <div
                className='relative rounded-3xl h-96 ms:h-120 sm:h-132 flex flex-col justify-between py-2'
                style={{ backgroundColor: '#0D2F46' }}
              >
                <div className='w-3/4 h-full flex flex-col justify-center mx-auto'>
                  <div className='text-5xl ms:text-7xl sm:text-8xl text-white'>
                    2k+
                  </div>
                  <div
                    className='text-sm sm:text-base'
                    style={{ color: '#5491BA' }}
                  >
                    {data.donation_excerpt}
                  </div>
                </div>
                <div className='absolute w-full bottom-2'>
                  <DonateButton
                    title='Donate Now'
                    onClick={() => router.push('/donate')}
                  />
                </div>
              </div>
              <div
                className='flex justify-center items-center mt-2 px-1 py-8 sm:px-4 sm:py-12 rounded-3xl 2xl:rounded-4xl'
                style={{ backgroundColor: '#0D2F46' }}
              >
                <div className='w-1/3 sm:w-1/4 p-1 sm:p-2 flex justify-center'>
                  <Image src={Icon1} className='' />
                </div>
                <div className='flex-1 text-base ms:text-xl sm:text-2xl lg:break-words lg:hyphens-auto text-white font-medium'>
                  Let Them be discovered
                </div>
              </div>
            </div>
            <div>
              <div className='relative rounded-3xl h-96 ms:h-120 sm:h-132 flex flex-col justify-between '>
                <div className='h-full'>
                  <Image
                    src={DonateClip3}
                    className='rounded-3xl 2xl:rounded-4xl h-full'
                  />
                </div>
                <div className='absolute w-full bottom-2'>
                  <DonateButton
                    title='Explore More'
                    backgroundColor1='#A7CB5B'
                    backgroundColor2='#222222'
                    color='black'
                  />
                </div>
              </div>
              <div
                className='flex justify-center items-center mt-2  px-1 py-8 sm:px-4 sm:py-12 rounded-3xl lg:rounded-3xl 2xl:rounded-4xl'
                style={{ backgroundColor: '#0D2F46' }}
              >
                <div className='w-1/3 sm:w-1/4 p-1 sm:p-2 flex justify-center'>
                  <Image src={Icon2} className='' />
                </div>
                <div className='flex-1 text-base ms:text-xl sm:text-2xl  lg:break-words lg:hyphens-auto text-white font-medium'>
                  Your Home for help!
                </div>
              </div>
            </div>
            <div className='flex items-end'>
              <div className='relative h-96 ms:h-120 sm:h-132 flex flex-col justify-end'>
                <Image src={DonateClip1} className='rounded-3xl h-full' />
                <div className='absolute flex flex-col justify-between  h-full text-white px-3 py-8 sm:px-4 sm:py-12'>
                  <div>Explore</div>
                  <div className=''>
                    <div className='text-xl ms:text-2xl sm:text-3xl lg:break-words lg:hyphens-auto  font-medium'>
                      Join 5M+
                    </div>
                    <div className='text-xl ms:text-2xl sm:text-3xl lg:break-words lg:hyphens-auto  font-medium'>
                      People Donate
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex items-end'>
              {' '}
              <div className='relative h-96 ms:h-120 sm:h-132 flex flex-col justify-end'>
                <Image src={DonateClip2} className='rounded-3xl h-full' />
                <div className='absolute flex flex-col justify-between  h-full text-white px-3 py-8 sm:px-4 sm:py-12'>
                  <div className='text-black'>Discover</div>
                  <div className='text-white '>
                    <div className='text-xl ms:text-2xl sm:text-3xl lg:break-words lg:hyphens-auto  font-medium'>
                      Sponsor
                    </div>
                    <div className='text-xl ms:text-2xl sm:text-3xl lg:break-words lg:hyphens-auto  font-medium'>
                      Information
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex items-center w-full md:hidden mt-2'>
            <div
              className='rounded-3xl 2xl:rounded-4xl w-full flex justify-between h-36 py-8 px-4 '
              style={{ backgroundColor: '#D9D9D9' }}
            >
              <div
                className='flex justify-center items-center flex-1'
                style={{ color: '#195883' }}
              >
                <div className='text-lg ms:text-2xl sm:text-3xl font-medium'>
                  Join 5M+ People Donate
                </div>
              </div>
              <div className='w-[60%] ms:w-[50%] flex items-center'>
                {' '}
                <DonateButton
                  title='Join Community'
                  backgroundColor1='#BAC1BF'
                  backgroundColor2='#222222'
                  onClick={() => router.push('/join')}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Part1
