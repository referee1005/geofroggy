function JoinButton ({ bgColor }) {
  return (
    // <div className='hidden lg:flex justify-between items-center flex-col md:flex-row flex-shrink-0'>
    //   <div className='hidden md:flex'>
    <button
      className='text-md font-general-medium w-30 h-10 2xl:w-35 2xl:h-11 hover:bg-indigo-600 text-white shadow-sm rounded-full px-5 duration-300'
      style={{ backgroundColor: bgColor }}
      aria-label='Join Us Button'
    >
      Join Us
    </button>
    //   </div>
    // </div>
  )
}

export default JoinButton
