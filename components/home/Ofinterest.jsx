import {
  FiGithub,
  FiTwitter,
  FiLinkedin,
  FiGlobe,
  FiYoutube
} from 'react-icons/fi'
import Image from 'next/image'
import interest1 from '../../public/images/interest1.png'
import interest2 from '../../public/images/interest1.png'
import interest3 from '../../public/images/interest1.png'
import interest4 from '../../public/images/interest1.png'
import interest5 from '../../public/images/interest1.png'

const interests = [
  {
    id: 1,
    country: 'China',
    url: interest1
  },
  {
    id: 2,
    country: 'Thailand',
    url: interest2
  },
  {
    id: 3,
    country: 'Russia',
    url: interest3
  },
  {
    id: 4,
    country: 'Egypt',
    url: interest4
  },
  {
    id: 4,
    country: 'Colombia',
    url: interest5
  }
]
function Ofinterest ({}) {
  return (
    <div className='flex flex-col'>
      <div className='font-medium text-3xl sm:text-5xl lg:text-7xl mt-12 sm:my-24 text-center'>
        Of Interest
      </div>
      <div className='bg-white flex sm:pb-24 overflow-hidden pt-16'>
        {interests.map((item, index) => {
          return (
            <Image
              src={item.url}
              className={`cursor-pointer mb-12 ${
                index % 2 ? 'rotate-19 z-0' : '-rotate-19 z-10'
              } ${
                index === 1 || index === 2
                  ? '-translate-x-1/2'
                  : index === 3 || index === 4
                  ? '-translate-x-2/3'
                  : '-translate-x-1/4'
              } w-1/4`}
              alt='Light Logo'
            />
          )
        })}
        {/* <Image
          src={interest1}
          className='cursor-pointer mb-12 -rotate-19 -translate-x-1/4 w-1/4 z-10'
          alt='Light Logo'
          // width={470}
        />
        <Image
          src={interest2}
          className='cursor-pointer mb-12 rotate-19 -translate-x-1/2 w-1/4 z-0'
          alt='Light Logo'
          // width={470}
        />
        <Image
          src={interest3}
          className='cursor-pointer mb-12 -rotate-19 -translate-x-1/2 w-1/4 z-10'
          alt='Light Logo'
          // width={470}
        />
        <Image
          src={interest4}
          className='cursor-pointer mb-12 rotate-19 -translate-x-2/3 w-1/4 z-0'
          alt='Light Logo'
          // width={470}
        />
        <Image
          src={interest5}
          className='cursor-pointer mb-12 -rotate-19 -translate-x-2/3 w-1/4 z-10'
          alt='Light Logo'
          // width={470}
        /> */}
      </div>
    </div>
  )
}

export default Ofinterest
