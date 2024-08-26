import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CustomButton from '../reusable/CustomButton'

async function fetchPopularCountries () {
  const res = await fetch('/api/populars')
  const data = await res.json()
  return data
}

function Popular ({}) {
  const [populars, setPopulars] = React.useState([])
  React.useEffect(() => {
    fetchPopularCountries().then(setPopulars)
  }, [])
  return (
    <div className='container-custom flex flex-col'>
      <div className='2xl:px-48 text-center'>
        <div className='font-medium text-3xl sm:text-5xl lg:text-7xl my-12 sm:my-24 text-center'>
          Popular Countries
        </div>
        <div className=' grid grid-cols-1 sm:grid-cols-3 gap-8 relative flex min-h-80 sm:min-h-96'>
          {populars.map(item => (
            <div className='bg-white shadow-md rounded-lg overflow-hidden'>
              {/* Main Image */}
              <div className='relative'>
                <Image
                  src={item.image}
                  alt={item.name}
                  className='w-full h-32 object-cover min-h-32'
                  layout='responsive'
                />

                {/* Flag Image */}
                <div className='absolute bottom-0 left-1/4 transform -translate-x-1/2 translate-y-1/2 w-16 h-16'>
                  <Image
                    src={item.flag}
                    alt={`${item.country} flag`}
                    className='rounded-lg border-white'
                    width={64}
                    height={64}
                  />
                </div>
              </div>

              {/* Content */}
              <div className='text-left mt-8 px-6 pb-6'>
                <div className='text-lg font-semibold text-gray-800'>
                  {'Category'}
                </div>
                <h3 className='text-2xl sm:text-4xl font-medium text-gray-900 mt-1'>
                  {item.country}
                </h3>
                <p className='text-gray-600 mt-4 mb-8 sm:mt-8 sm:mb-12'>
                  {item.description}
                </p>
                <Link href={`/country/${item.slug}`} aria-label='Projects'>
                  SEE MORE
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className='mt-16 mb-32'>
          {' '}
          <CustomButton title={'Explore All'} bgColor={'#269938'} />
        </div>
      </div>
    </div>
  )
}

export default Popular
