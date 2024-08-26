import {
  FiGithub,
  FiTwitter,
  FiLinkedin,
  FiGlobe,
  FiYoutube
} from 'react-icons/fi'
import Image from 'next/image'
import image from '../../public/images/Home-whoweare.png'
import JoinButton from '../reusable/JoinUs'
function Ofinterest ({}) {
  return (
    <div className='relative flex flex-col min-h-80 sm:min-h-96'>
      <div className='bg-white flex'>
        <Image src={image} alt='Light Logo' className='min-h-80 sm:min-h-96' />
      </div>
      <div className='absolute inset-0 flex flex-col justify-center items-center text-center text-white'>
        <div className='text-4xl sm:text-5xl 2xl:text-6xl font-semibold mb-2 sm:mb-4 lg:mb-12'>
          Who we are
        </div>
        <div className='text-xs w-2/3 sm:text-base sm:w-1/2 mb-2 sm:mb-4 lg:mb-6'>
          We will offer various city related tours (and surrounding areas) along
          with information on Transportation, Accommodations, Medellin Travel
          Blog, Food, Safety. We will offer various city related tours (and
          surrounding areas) along with information on Transportation,
          Accommodations, Medellin Travel Blog, Food, Safety. We will offer
          various city related tours (and surrounding areas) along with
          information on Transportation, Accommodations, Medellin Travel Blog,
          Food, Safety
        </div>
        <div>
          <JoinButton bgColor={'#269938'} />
        </div>
      </div>
    </div>
  )
}

export default Ofinterest
