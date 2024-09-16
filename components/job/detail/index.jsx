import React, { useEffect, useState } from 'react'
import back from '../../../public/images/job/back.png'
import Image from 'next/image'
import { Button } from '@mui/material'
import RadioButtonUncheckedOutlinedIcon from '@mui/icons-material/RadioButtonUncheckedOutlined'
import { useRouter } from 'next/router'
import { formatDate } from '@/helpers'

function JobDetail ({ data }) {
  const router = useRouter()
  return (
    <div className='relative w-full my-8'>
      <div className='flex justify-between w-full container-custom'>
        <div className='flex items-center gap-4'>
          <div className=''>
            <Image
              src={back}
              alt={'back'}
              className='w-[46px] h-[46px] cursor-pointer min-w-[35px] min-h-[35px]'
              layout='responsive'
              onClick={() => {
                router.back()
              }}
            />
          </div>
          <div className='flex flex-col gap-2'>
            <div className='text-xs sm:text-sm lg:text-base text-custom-font-content'>
              Geofroggy
            </div>
            <div className='text-xl sm:text-2xl lg:text-3xl'>
              {data.job_title}
            </div>
            <div className='text-xs sm:text-sm lg:text-base text-custom-font-content'>
              {data.location} · {data.job_type}
            </div>
          </div>
        </div>
        <div className='flex flex-col sm:flex-row items-center justify-center sm:justify-end'>
          <Button
            variant='outlined'
            className='text-xs sm:text-base border-black text-custom-primary mb-2 sm:mr-4'
          >
            Contact
          </Button>
          <Button
            variant='contained'
            className='text-xs sm:text-base bg-custom-primary'
          >
            Apply Now!
          </Button>
        </div>
      </div>
      <div className='h-[2px] w-full bg-[#DDDDDD] my-8'></div>
      <div className='container-custom flex lg:flex-row flex-col gap-4 2xl:gap-8'>
        <div className='p-4 sm:p-8 lg:w-2/3 2xl:w-3/4 bg-white rounded-lg flex flex-col gap-12'>
          <Image
            src={data.job_image}
            alt={'back'}
            className='w-[46px] h-[46px] cursor-pointer rounded-lg  min-h-[150px]'
            layout='responsive'
          />
          <div>
            <div className='font-semibold mb-4'>Job Title</div>
            <div className='text-2xl text-custom-font-content'>
              {data.job_title}
            </div>
          </div>
          <div>
            <div className='font-semibold mb-4'>Job Description</div>
            <div className='text-custom-font-content'>
              {data.job_description}
            </div>
          </div>
          <div>
            <div className='font-semibold mb-4'>Responsibilities</div>
            {data.responsibilities !== undefined &&
              data.responsibilities.map(item => (
                <div className='mb-6 flex gap-2 text-custom-font-content'>
                  <div className=''>
                    <RadioButtonUncheckedOutlinedIcon sx={{ fontSize: 10 }} />
                  </div>
                  <div>{item}</div>
                </div>
              ))}
          </div>
        </div>
        <div className='p-4 sm:p-8 flex-1 bg-white rounded-lg flex flex-col gap-8 h-fit'>
          <div className='font-semibold'>Job Details</div>
          <div className='flex flex-col gap-6'>
            <div>
              <div className='text-custom-font-third-content text-sm'>
                Job Creation Date
              </div>
              <div className='font-semibold text-custom-font-secondary-content'>
                {formatDate(data.job_creation_date)}
              </div>
            </div>
            <div>
              <div className='text-custom-font-third-content text-sm'>
                Recruitment Period
              </div>
              <div className='font-semibold text-custom-font-secondary-content'>
                {formatDate(data.recruitment_start_period)} to{' '}
                {formatDate(data.recruitment_end_period)}
              </div>
            </div>
            <div>
              <div className='text-custom-font-third-content text-sm'>
                Recruitment Quota
              </div>
              <div className='font-semibold text-custom-font-secondary-content'>
                {data.recruitment_quota}
              </div>
            </div>
            <div>
              <div className='text-custom-font-third-content text-sm'>
                Job Type
              </div>
              <div className='font-semibold text-custom-font-secondary-content'>
                {data.job_type}
              </div>
            </div>
            <div>
              <div className='text-custom-font-third-content text-sm'>
                Experiences
              </div>
              <div className='font-semibold text-custom-font-secondary-content'>
                {data.experiences}
              </div>
            </div>
            <div>
              <div className='text-custom-font-third-content text-sm'>
                Location
              </div>
              <div className='font-semibold text-custom-font-secondary-content'>
                {data.location}
              </div>
            </div>
            <div>
              <div className='text-custom-font-third-content text-sm'>
                Salary
              </div>
              <div className='font-semibold text-custom-font-secondary-content'>
                {data.salary}
              </div>
            </div>
            <div>
              <div className='text-custom-font-third-content text-sm'>
                Hiring Manager
              </div>
              <div className='font-semibold text-custom-font-secondary-content'>
                {data.hiring_manager}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobDetail
