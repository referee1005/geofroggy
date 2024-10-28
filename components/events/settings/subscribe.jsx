import React, { useState } from 'react'
import Switch, { SwitchProps } from '@mui/material/Switch'
import { styled } from '@mui/material/styles'
import { FiMenu } from 'react-icons/fi'
import LeftSideBar from '../list/leftSide'

function Subscribe ({ data }) {
  const [frequency, setFrequency] = useState('Daily')
  // const [showMenu, setShowMenu] = useState('Subscribe')

  const CustomSwitch = styled(props => (
    <Switch
      focusVisibleClassName='.Mui-focusVisible'
      disableRipple
      {...props}
    />
  ))(({ theme }) => ({
    width: 36,
    height: 20,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(16px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor: '#65C466',
          opacity: 1,
          border: 0,
          ...theme.applyStyles('dark', {
            backgroundColor: '#2ECA45'
          })
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5
        }
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#33cf4d',
        border: '6px solid #fff'
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color: theme.palette.grey[100],
        ...theme.applyStyles('dark', {
          color: theme.palette.grey[600]
        })
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.7,
        ...theme.applyStyles('dark', {
          opacity: 0.3
        })
      }
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 16,
      height: 16
    },
    '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      backgroundColor: '#E9E9EA',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500
      }),
      ...theme.applyStyles('dark', {
        backgroundColor: '#39393D'
      })
    }
  }))
  const changeFrequncy = value => {
    if (frequency === value) setFrequency(null)
    else setFrequency(value)
  }
  return (
    <div className='flex flex-col lg:flex-1  gap-3 xl:gap-8'>
      <div className='text-2xl'>Subscribe</div>
      <div className='lg:text-lg  py-4 px-4 sm:py-4 sm:px-8 border-2 rounded-xl'>
        <div className='font-semibold mb-4'>
          Select what you want to hear from us
        </div>
        <div className='flex flex-col gap-4'>
          <div className='flex justify-between items-center'>
            <div className='text-[#ACACAC]'>Marketing</div>
            <div>
              <CustomSwitch sx={{ m: 1 }} defaultChecked />
            </div>
          </div>
          <div className='bg-[#F4F4F5] h-[2px]'></div>
          <div className='flex justify-between items-center'>
            <div className='text-[#ACACAC]'>Newsletters</div>
            <div>
              <CustomSwitch sx={{ m: 1 }} defaultChecked />
            </div>
          </div>
          <div className='bg-[#F4F4F5] h-[2px]'></div>
          <div className='flex justify-between items-center'>
            <div className='text-[#ACACAC]'>Top Stories</div>
            <div>
              <CustomSwitch sx={{ m: 1 }} defaultChecked />
            </div>
          </div>
          <div className='bg-[#F4F4F5] h-[2px]'></div>
          <div className='flex justify-between items-center'>
            <div className='text-[#ACACAC]'>Top Media</div>
            <div>
              <CustomSwitch sx={{ m: 1 }} defaultChecked />
            </div>
          </div>
        </div>
      </div>
      <div className='text-lg  py-2 px-4 sm:py-4 sm:px-8 border-2 rounded-xl'>
        <div className='font-semibold mb-4'>Frequency</div>
        <div className='flex flex-col gap-4'>
          <div className='flex justify-between items-center'>
            <div className='text-[#ACACAC]'>Daily</div>
            <div>
              <CustomSwitch
                sx={{ m: 1 }}
                onClick={() => changeFrequncy('daily')}
                checked={frequency === 'daily'}
              />
            </div>
          </div>
          <div className='bg-[#F4F4F5] h-[2px]'></div>
          <div className='flex justify-between items-center'>
            <div className='text-[#ACACAC]'>Weekly</div>
            <div>
              <CustomSwitch
                sx={{ m: 1 }}
                onClick={() => changeFrequncy('weekly')}
                checked={frequency === 'weekly'}
              />
            </div>
          </div>
          <div className='bg-[#F4F4F5] h-[2px]'></div>
          <div className='flex justify-between items-center'>
            <div className='text-[#ACACAC]'>Monthly</div>
            <div>
              <CustomSwitch
                sx={{ m: 1 }}
                onClick={() => changeFrequncy('monthly')}
                checked={frequency === 'monthly'}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subscribe
