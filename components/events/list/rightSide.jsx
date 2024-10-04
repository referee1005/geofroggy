import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserProfileRequest } from '@/actions/user'
import Menu from '@/components/news/menu'
import Groups from '@/components/Groups'
import Communities from '@/components/Communities'
import Image from 'next/image'
import image from '../../../public/images/Home-whoweare.png'
import posticon from '../../../public/images/events/posticon.png'
import CustomButton from '@/components/reusable/CustomButton'
import Trending from '@/components/Trending'
import Recommends from '@/components/Recommended'

function RightSideBar () {
  const user = useSelector(state => state.user.user)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUserProfileRequest())
  }, [dispatch])

  return (
    <div className='flex flex-col gap-4'>
      <div className='rounded-lg bg-white p-4 flex flex-col'>
        <div className='flex flex-col gap-2 items-center'>
          <div className='relative'>
            <Image
              src={image}
              alt='Light Logo'
              className='min-h-[96px] xl:h-32 w-full rounded-lg'
            />
            <div className='absolute bottom-0 translate-y-[50%] flex justify-center w-full'>
              <Image
                src={user.avatar && user.avatar.src}
                alt='Light Logo'
                className='h-[72px] w-[72px] rounded-full'
                width={72}
                height={72}
              />
            </div>
          </div>
          <div className='text-center mt-[36px]'>
            <div className='font-semibold text-lg'>{user.name}</div>
            <div>{user.email}</div>
          </div>
          <div className='flex justify-between w-full p-4 xl:p-8'>
            <div className='flex flex-col items-center'>
              <div className='xl:text-2xl font-semibold'>{user.posts}</div>
              <div className='text-xs xl:text-sm'>Posts</div>
            </div>
            <div className='flex flex-col items-center'>
              <div className='xl:text-2xl font-semibold'>{user.follwers}</div>
              <div className='text-xs xl:text-sm'>Followers</div>
            </div>
            <div className='flex flex-col items-center'>
              <div className='xl:text-2xl font-semibold'>{user.following}</div>
              <div className='text-xs xl:text-sm'>Following</div>
            </div>
          </div>
          <CustomButton
            title={'Create Post'}
            rounded='lg'
            blur={true}
            bgColor={'#84BF3F'}
            color={'white'}
            size={'xl'}
            px={8}
            width={'full'}
            height={12}
            icon={posticon}
            iconWidth={4}
            iconheight={4}
          />
        </div>
      </div>
      <div>
        <div className='flex flex-col p-4 2xl:p-8 gap-4 bg-white rounded-lg'>
          <Recommends />
        </div>
        <div className='flex flex-col p-4 2xl:p-8 gap-4 bg-white rounded-lg'>
          <Trending />
        </div>
      </div>
    </div>
  )
}

export default RightSideBar
