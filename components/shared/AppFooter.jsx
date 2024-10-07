import facebook from '../../public/images/facebook.svg'
import twitter from '../../public/images/twitter.svg'
import instagram from '../../public/images/instagram.svg'
import youtube from '../../public/images/youtube.svg'
import logoLight from '../../public/images/logo-light.svg'
import Image from 'next/image'
import { useRouter } from 'next/router'

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
  const router = useRouter()
  return (
    <div style={{ backgroundColor: '#FAFAFA' }}>
      <div className='container-custom fontsize-custom text-gray-800 py-16 sm:py-32'>
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
              Donec rutrum congue leo eget malesuada. Mauris blandit aliquet
              elit, eget tincidunt nibh pulvinar a. Donec rutrum.
            </div>
          </div>
          <div className=' grid grid-cols-1  grid-cols-2  col-span-2 lg:col-span-1 lg:grid-cols-4 flex-1'>
            <div className='mb-8'>
              <div className='text-base lg:text-lg 2xl:text-2xl font-semibold mb-8'>
                Company
              </div>
              <ul className='space-y-2'>
                <li
                  className='hover:text-gray-600 cursor-pointer'
                  onClick={() => router.push('/news')}
                >
                  News
                </li>
                <li className='hover:text-gray-600 cursor-pointer'>
                  Media Page
                </li>
                <li className='hover:text-gray-600 cursor-pointer'>
                  Advertise with Geofroggy
                </li>
                <li
                  className='hover:text-gray-600 cursor-pointer'
                  onClick={() => router.push('/contact')}
                >
                  Contact Us
                </li>
              </ul>
            </div>

            {/* Legal Section */}
            <div className='mb-8'>
              <div className='text-base lg:text-lg 2xl:text-2xl font-semibold mb-8'>
                Legal
              </div>
              <ul className='space-y-2'>
                <li className='hover:text-gray-600 cursor-pointer'>
                  Community Guidelines
                </li>
                <li className='hover:text-gray-600 cursor-pointer'>
                  Terms of Use
                </li>
                <li
                  className='hover:text-gray-600 cursor-pointer'
                  onClick={() => router.push('/privacy-policy')}
                >
                  Privacy Policy
                </li>
                <li
                  className='hover:text-gray-600 cursor-pointer'
                  onClick={() => router.push('/faq')}
                >
                  FAQs
                </li>
              </ul>
            </div>

            {/* Resources Section */}
            <div className='mb-8'>
              <div className='text-base lg:text-lg 2xl:text-2xl font-semibold mb-8'>
                Get Involved
              </div>
              <ul className='space-y-2'>
                <li
                  className='hover:text-gray-600 cursor-pointer'
                  onClick={() => router.push('/job')}
                >
                  Careers
                </li>
                <li className='hover:text-gray-600 cursor-pointer'>
                  Ambassadors
                </li>
                <li
                  className='hover:text-gray-600 cursor-pointer'
                  onClick={() => router.push('/sponsor')}
                >
                  Sponsor Geofroggy
                </li>
                <li
                  className='hover:text-gray-600 cursor-pointer'
                  onClick={() => router.push('/donate')}
                >
                  Donate
                </li>
                <li className='hover:text-gray-600 cursor-pointer'>
                  Subscribe
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div>
              <div className='text-base lg:text-lg 2xl:text-2xl font-semibold mb-8'>
                Follow Us
              </div>
              <ul className='space-y-2'>
                {/* <li className='hover:text-gray-600 cursor-pointer'>
                  mail@geofroggy.com
                </li> */}
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
    </div>
  )
}

export default AppFooter
