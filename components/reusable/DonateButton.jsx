import { color } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
function DonateButton ({
  title,
  backgroundColor1 = '#134668',
  backgroundColor2 = '#0D2F46',
  color = 'white'
}) {
  return (
    <div
      className='flex rounded-full justify-between items-center lg:px-2 lg:py-2 2xl:px-4 2xl:py-4 mx-auto w-[95%]'
      style={{ backgroundColor: backgroundColor1, color: color }}
    >
      <div className='lg:text-sm xl:text-base 2xl:text-lg'>{title}</div>
      <div
        className='rounded-full lg:px-1 lg:py-1 xl:px-2 xl:py-2 2xl:px-4 2xl:py-4 '
        style={{ backgroundColor: backgroundColor2 }}
      >
        <FiArrowRight color='white' size={25} />
        {/* <Image src={Arrow} width={20} height={20} /> */}
      </div>
    </div>
  )
}

export default DonateButton
