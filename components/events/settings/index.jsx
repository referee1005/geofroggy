import React, { useState } from 'react'
import Switch, { SwitchProps } from '@mui/material/Switch'
import { styled } from '@mui/material/styles'
import { FiMenu } from 'react-icons/fi'
import LeftSideBar from '../list/leftSide'
import Subscribe from './subscribe'

function Settings ({ data }) {
  const menu = [
    'My Profie',
    'Privacy',
    'Notifications',
    'Security',
    'Account Settings',
    'Blocking',
    'Subscribe'
  ]
  const [showMenu, setShowMenu] = useState('Subscribe')
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
    <div className='bg-white rounded-lg flex'>
      <div className=' w-[40%] lg:w-fit 2xl:w-[25%] px-2 py-4 sm:py-8 sm:px-8  border-r-2 '>
        <div className='flex flex-col text-sm sm:text-base lg:text-lg xl:text-xl gap-2 sm:gap-4 lg:gap-8 '>
          {menu.map(item => (
            <div
              className={`px-2 py-1 sm:px-4 sm:py-2 ${
                showMenu === item
                  ? 'bg-[#8CC632] rounded-full w-fit text-white'
                  : ''
              } cursor-pointer`}
              onClick={() => setShowMenu(item)}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className='w-full w-[60%] 2xl:w-[75%]  py-4 px-2 sm:py-8 sm:px-8'>
        {showMenu === 'Subscribe' && <Subscribe />}
      </div>
    </div>
  )
}

export default Settings
