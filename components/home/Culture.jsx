import Image from 'next/image'
import Culture_bg from '../../public/images/culture_bg.png'
import Culture1 from '../../public/images/culture_1.png'
import Culture2 from '../../public/images/culture_2.png'
import Culture3 from '../../public/images/culture_3.png'
import JoinButton from '../reusable/JoinUs'
import Subscribe from '../shared/Subscribe'
function Culture ({}) {
  return (
    <div className='relative  sm:min-h-120'>
      <div className='bg-white flex'>
        <Image
          src={Culture_bg}
          alt='Culture'
          className='min-h-custom lg:min-h-custom1 w-full'
        />
      </div>
      <div className=''>
        <div className='container-custom absolute inset-0 lg:flex my-12 lg:my-24 2xl:my-24 3xl:my-36'>
          <div className='w-full lg:w-1/2 lg:grid lg:grid-cols-3 flex justify-between'>
            <Image
              src={Culture1}
              alt='Culture'
              className='h-36 ms:h-48 sm:h-56 w-auto md:h-64 xl:h-72 2xl:h-80 3xl:h-96'
            />
            <Image
              src={Culture2}
              alt='Culture'
              className='h-36 ms:h-48 sm:h-56 w-auto  md:h-64 xl:h-72 2xl:h-80 3xl:h-96'
            />
            <Image
              src={Culture3}
              alt='Culture'
              className='h-36 ms:h-48 sm:h-56 w-auto  md:h-64 xl:h-72 2xl:h-80 3xl:h-96'
            />
          </div>
          <div className='flex flex-col items-center my-4 lg:block'>
            <div className='mb-4 text-center lg:text-left text-4xl lg:text-5xl 2xl:text-7xl text-white lg:w-1/2'>
              Geofroggy Culture
            </div>
            <div>
              <JoinButton bgColor={'#000000'} />
            </div>
          </div>
        </div>

        <div className='lg:absolute w-full lg:bottom-0'>
          <Subscribe blur={true} textColor={'#269938'} />
        </div>
      </div>
    </div>
  )
}

export default Culture
