import React, { useState } from 'react'
import CustomButton from '../../reusable/CustomButton'
import DonateForm from './Form'
function Donate ({}) {
  const [amount, setAmount] = useState(25)
  const [payment, setPayment] = useState('Debit/Credit Card')
  return (
    <div className='container-custom flex flex-col items-center'>
      <div className='text-5xl font-semibold my-4 lg:my-8 2xl:my-16'>
        Donate Now
      </div>
      <div className='flex mb-4'>
        {[25, 50, 75, 100, 150].map(item => {
          return (
            <div className='mr-2 sm:mr-4' key={item}>
              <CustomButton
                click={() => setAmount(item)}
                title={'$' + item}
                blur={true}
                bgColor={item === amount ? '#84BF3F' : '#E8E8E8'}
                color={item === amount ? 'white' : 'black'}
                size={'text-sm ms:text-base sm:text-xl'}
                px={'px-4 ms:px-6 sm:px-8'}
                py={'py-1 sm:py-2'}
              />
            </div>
          )
        })}
      </div>
      <div className='flex'>
        {['Debit/Credit Card', 'Paypal', 'Stripe'].map(item => {
          return (
            <div className='mr-2 sm:mr-4' key={item}>
              <CustomButton
                click={() => setPayment(item)}
                title={item}
                blur={true}
                bgColor={item === payment ? '#195883' : '#E8E8E8'}
                color={item === payment ? 'white' : 'black'}
                size={'text-sm ms:text-base sm:text-xl'}
                px={'px-4 ms:px-6 sm:px-8'}
                py={'py-1 sm:py-2'}
              />
            </div>
          )
        })}
      </div>

      <DonateForm payment={payment} amount={amount} />
    </div>
  )
}

export default Donate
