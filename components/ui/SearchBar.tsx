type SearchBar = {
  placeholder: string
  query: string
  onClick?: React.MouseEventHandler<HTMLButtonElement> // Cambiado a función
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  className?: string
}
export default function SearchBar({
  placeholder,
  onChange,
  query,
  onClick,
  className,
}: SearchBar) {
  return (
    <>
      <div className="flex h-11 w-full px-2 md:w-96">
        <input
          placeholder={placeholder}
          className="placeholder:text-secundary-1000 peer w-full rounded-l-xl border-[1px] border-transparent bg-secundary-300 px-3 py-2 font-medium text-black shadow-sm outline-none duration-200 focus-within:border-secundary-500"
          type="text"
          aria-label="search"
          value={query}
          role="searchbox"
          onChange={onChange}
          required
        />
        <button
          className="w-12 rounded-r-xl border-[1px] border-transparent bg-primary-300 shadow-sm outline-none focus-visible:border-primary-600"
          aria-label="search"
          onClick={onClick}
        >
          <p
            className={`${className} ${query ? '-rotate-0 text-xl focus-visible:border-slate-700' : '-rotate-45 text-3xl focus-visible:border-slate-700'}pointer-events-none text-white`}
          >
            {query ? '✕' : '⚲'}
          </p>
        </button>
      </div>
    </>
  )
}
