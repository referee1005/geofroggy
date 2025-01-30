import React, { useState, useEffect } from 'react'
import { Button } from '@mui/material'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { formatDate1 } from '@/helpers'
import { useDispatch } from 'react-redux'
import { fetchJobResultsRequest } from '@/actions/job'
import querystring from 'querystring'

function SearchResults({ initialQuery }) {
  const router = useRouter()
  const [query, setQuery] = useState(initialQuery)
  const dispatch = useDispatch()
  const data = useSelector(state => state.job.jobs)

  useEffect(() => {
    dispatch(
      fetchJobResultsRequest(
        querystring.stringify({
          ...query,
          'salary[max]': query.salary[1],
          'salary[min]': query.salary[0]
        })
      )
    )
  }, [query])

  useEffect(() => {
    setQuery(initialQuery)
  }, [initialQuery])

  const changeQuery = (e, type) => {
    setQuery({ ...query, [type]: e.target.value })
  }
  return (
    <div className='relative'>
      <div className='mb-8 text-sm sm:text-sm lg:text-base flex justify-between'>
        <div className=''>
          Showing {Object.keys(data).length - 1} out of {data['total_count']}{' '}
          Jobs
        </div>
        <div className='flex md:flex-row flex-col'>
          <div className='flex mr-4'>
            <div className='mr-2'>View</div>
            <div>
              <select
                className='bg-custom-bg-primary cursor-pointer'
                onChange={e => changeQuery(e, 'per_page')}
              >
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
              </select>
            </div>
          </div>
          <div className='flex mr-4'>
            <div className='mr-2'>Page</div>
            <div>
              <select
                className='bg-custom-bg-primary cursor-pointer'
                onChange={e => changeQuery(e, 'page_no')}
              >
                {Array.from(
                  {
                    length: Math.ceil(data['total_count'] / query['per_page'])
                  },
                  (_, i) => i + 1
                ).map(item => (
                  <option value={item}>{item}</option>
                ))}
                {/* <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option> */}
              </select>
            </div>
          </div>
          <div className='flex'>
            <div className='mr-2'>Sort by</div>
            <div>
              <select
                className='bg-custom-bg-primary cursor-pointer'
                onChange={e => changeQuery(e, 'sort')}
              >
                <option value={'A-Z'}>{'Name (A-Z)'}</option>
                <option value={'Z-A'}>{'Name (Z-A)'}</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className='grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4'>
        {Object.values(data)
          .filter((ele, index) => index !== Object.keys(data).length - 1)
          .map(item => (
            <div className='bg-white p-2 rounded-lg flex flex-col'>
              <div className='bg-[#D4F6ED] rounded-lg p-4 flex flex-col gap-6'>
                <div className='rounded-full bg-white w-fit px-4 py-2'>
                  {formatDate1(item.job_creation_date)}
                </div>
                <div>
                  <div className='text-xs'>{'Geofroggy'}</div>
                  <div className='text-2xl w-1/2'>{item.job_title}</div>
                </div>

                <div className=''>
                  {item.tags.map(ele => (
                    <div className='rounded-full border-2 border-black px-3 py-1 text-sm inline-flex mr-2 mb-2'>
                      {ele}
                    </div>
                  ))}
                </div>
              </div>
              <div className='flex-1 flex justify-between items-center p-2'>
                <div>
                  <div className='font-semibold'>
                    {'$' + item.job_salary + '/month'}
                  </div>
                  <div className='text-xs'>{item.job_location}</div>
                </div>
                <div>
                  <Button
                    variant='contained'
                    className='bg-black'
                    onClick={() => {
                      router.push({
                        pathname: '/ambassador/' + item.slug
                      })
                    }}
                  >
                    Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default SearchResults
