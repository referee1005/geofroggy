function CustomButton ({
  bgColor,
  color,
  title,
  click,
  blur,
  size = 'text-md',
  px = 'px-5',
  py = 'py-2',
  rounded = 'full',
  width
}) {
  return (
    <button
      className={`${size} font-general-medium ${py} hover:bg-indigo-600 text-white shadow-sm rounded-${rounded} ${px} duration-300 ${
        blur ? 'backdrop-blur-md' : ''
      } w-${width}`}
      style={{ backgroundColor: bgColor, color: color }}
      aria-label='Join Us Button'
      onClick={click}
    >
      {title}
    </button>
  )
}

export default CustomButton
