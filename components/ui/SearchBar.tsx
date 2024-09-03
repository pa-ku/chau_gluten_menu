type SearchBar = {
  placeholder: string
  query: string
  onClick?: React.MouseEventHandler<HTMLButtonElement> // Cambiado a función
  onChange: React.ChangeEventHandler<HTMLInputElement>
  className: string
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
      <div className="flex h-11 w-full px-2 md:w-80">
        <input
          placeholder={placeholder}
          className="bg-primary-300 peer w-full rounded-l-xl border-[1px] border-transparent px-3 py-2 text-white shadow-sm outline-none duration-200 placeholder:text-slate-200 focus-within:border-slate-700"
          type="text"
          aria-label="search"
          value={query}
          role="searchbox"
          onChange={onChange}
          required
        />
        <button
          className="bg-primary-600 focus-visible:border-primary-600 w-12 rounded-r-xl border-[1px] border-transparent text-primary shadow-sm outline-none"
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
