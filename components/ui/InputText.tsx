type InputType = {
  placeholder: string
  className?: string
  name?: string
  required?: boolean
  value?: string | number
  onChange?: any
  type: 'text' | 'number'
}

export default function InputText({
  required,
  placeholder,
  name,
  className,
  value,
  onChange,
  type,
}: InputType) {
  return (
    <>
      <input
        onChange={onChange}
        value={value}
        type={type}
        placeholder={placeholder}
        name={name}
        className={`${className} w-full border-none px-4 py-3 text-lg outline-none`}
        required={required}
      />
    </>
  )
}
