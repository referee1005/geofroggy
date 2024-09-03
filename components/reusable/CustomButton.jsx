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
  height
}) {
  return (
    <button
      className={`${size} font-general-medium ${py} hover:bg-indigo-600 text-white shadow-sm rounded-${rounded} ${px} duration-300 ${
        blur ? 'backdrop-blur-md' : ''
      } w-${width} text-center h-${height}`}
      style={{ backgroundColor: bgColor, color: color }}
      aria-label='Join Us Button'
      onClick={click}
    >
      <div>{title}</div>
    </button>
  )
}

export default CustomButton
