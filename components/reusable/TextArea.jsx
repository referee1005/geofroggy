function TextArea({
  label,
  placeholder,
  id,
  name,
  rows = 4,
  mb = 4,
  textColor = 'text-gray-700'
}) {
  return (
    <div className={`mb-${mb}`}>
      <label htmlFor={label} className={`block text-sm font-medium ${textColor}`}>
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        rows={rows}
        className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm resize-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
        placeholder={placeholder}
      ></textarea>
    </div>
  )
}

export default TextArea
