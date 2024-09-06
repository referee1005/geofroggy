import { color } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
function DonateButton ({
  title,
  backgroundColor1 = '#134668',
  backgroundColor2 = '#0D2F46',
  color = 'white',
  onClick,
  width = 'w-full'
}) {
  return (
    <div
      className={`flex rounded-full justify-between items-center px-2 py-3 sm:px-4 sm:py-4 md:px-1 md:py-1 lg:px-2 lg:py-2 2xl:px-4 2xl:py-4 mx-auto w-[95%]`}
      style={{ backgroundColor: backgroundColor1, color: color }}
    >
      <div className='text-sm ms:text-base sm:text-lg md:text-xs lg:text-sm xl:text-base 2xl:text-lg'>
        {title}
      </div>
      <div
        className='rounded-full px-1 py-1 ms:px-2 ms:py-2 md:px-0 md:py-0 lg:px-1 lg:py-1 xl:px-2 xl:py-2 2xl:px-4 2xl:py-4 cursor-pointer'
        style={{ backgroundColor: backgroundColor2 }}
        onClick={onClick}
      >
        <FiArrowRight color='white' size={25} />
        {/* <Image src={Arrow} width={20} height={20} /> */}
      </div>
    </div>
  )
}

export default DonateButton
