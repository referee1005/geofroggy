function TextArea ({ label, placeholder, id, name, rows = 4, mb = 4 }) {
  return (
    <div class={`mb-${mb}`}>
      <label for={label} class='block text-sm font-medium text-gray-700'>
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        rows={rows}
        class='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm resize-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
        placeholder={placeholder}
      ></textarea>
    </div>
  )
}

export default TextArea