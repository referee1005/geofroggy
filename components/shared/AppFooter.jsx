import {
  FiGithub,
  FiTwitter,
  FiLinkedin,
  FiGlobe,
  FiYoutube
} from 'react-icons/fi'
import facebook from '../../public/images/facebook.svg'
import twitter from '../../public/images/twitter.svg'
import instagram from '../../public/images/instagram.svg'
import youtube from '../../public/images/youtube.svg'
import logoLight from '../../public/images/logo-light.svg'
import Image from 'next/image'

const socialLinks = [
  {
    id: 1,
    icon: facebook,
    url: 'https://www.stoman.me/'
  },
  {
    id: 2,
    icon: twitter,
    url: 'https://github.com/realstoman'
  },
  {
    id: 3,
    icon: instagram,
    url: 'https://twitter.com/realstoman'
  },
  {
    id: 4,
    icon: youtube,
    url: 'https://www.linkedin.com/in/realstoman'
  }
]

function AppFooter () {
  return (
    <div className='container-custom fontsize-custom bg-white text-gray-800 py-8 my-32 '>
      <div className='mx-auto gap-6 lg:flex'>
        {/* Logo and Description */}
        <div className='mb-8 lg:w-1/4 '>
          <Image
            src={logoLight}
            className='cursor-pointer mb-8'
            alt='Light Logo'
            width={240}
          />
          <div className='text-gray-600'>
            Donec rutrum congue leo eget malesuada. Mauris blandit aliquet elit,
            eget tincidunt nibh pulvinar a. Donec rutrum.
          </div>
        </div>
        <div className=' grid grid-cols-1  grid-cols-2  col-span-2 lg:col-span-1 lg:grid-cols-4 flex-1'>
          <div className='mb-8'>
            <div className='font-semibold mb-8'>Product</div>
            <ul className='space-y-2'>
              <li className='hover:text-gray-600 cursor-pointer'>Tours</li>
              <li className='hover:text-gray-600 cursor-pointer'>
                Destinations
              </li>
              <li className='hover:text-gray-600 cursor-pointer'>Food</li>
              <li className='hover:text-gray-600 cursor-pointer'>
                Accommodation
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div className='mb-8'>
            <div className='font-semibold mb-8'>Company</div>
            <ul className='space-y-2'>
              <li className='hover:text-gray-600 cursor-pointer'>Safety</li>
              <li className='hover:text-gray-600 cursor-pointer'>
                Tour Guides
              </li>
              <li className='hover:text-gray-600 cursor-pointer'>About Us</li>
              <li className='hover:text-gray-600 cursor-pointer'>Blog</li>
            </ul>
          </div>

          {/* Resources Section */}
          <div className='mb-8'>
            <div className='font-semibold mb-8'>Resources</div>
            <ul className='space-y-2'>
              <li className='hover:text-gray-600 cursor-pointer'>Community</li>
              <li className='hover:text-gray-600 cursor-pointer'>Offers</li>
              <li className='hover:text-gray-600 cursor-pointer'>Contact</li>
              <li className='hover:text-gray-600 cursor-pointer'>
                Terms of Service
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <div className='font-semibold mb-8'>Contact</div>
            <ul className='space-y-2'>
              <li className='hover:text-gray-600 cursor-pointer'>
                mail@geofroggy.com
              </li>
              <li className=' cursor-pointer flex'>
                {socialLinks.map(link => (
                  <a
                    href={link.url}
                    target='__blank'
                    key={link.id}
                    className='cursor-pointer mr-2 mb-2'
                  >
                    <Image src={link.icon} alt={`Icon ${link.id}`} />
                  </a>
                ))}
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Product Section */}
    </div>
  )
}

export default AppFooter
