import Image from 'next/image'
function CustomButton ({
  bgColor,
  color,
  title,
  click,
  blur,
  size = 'text-base',
  px = 'px-5',
  py = 'py-2',
  rounded = 'full',
  width,
  height,
  icon = false,
  iconWidth,
  iconheight
}) {
  return (
    <button
      className={`${size} font-general-medium ${py} hover:bg-indigo-600 text-white shadow-sm rounded-${rounded} ${px} duration-300 ${
        blur ? 'backdrop-blur-md' : ''
      } w-${width} text-center h-${height} flex items-center justify-center `}
      style={{ backgroundColor: bgColor, color: color }}
      aria-label='Join Us Button'
      onClick={click}
    >
      {icon && (
        <Image
          src={icon}
          alt='Light Logo'
          className={`w-${iconWidth} h-${iconheight} inline mr-2`}
          width={72}
          height={72}
        />
      )}
      <div className='inline'>{title}</div>
    </button>
  )
}

export default CustomButton
