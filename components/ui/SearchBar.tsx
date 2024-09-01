type SearchBar = {
  placeholder: string
  query: string
  onClick?: React.MouseEventHandler<HTMLButtonElement> // Cambiado a función
  onChange: React.ChangeEventHandler<HTMLInputElement>
}
export default function SearchBar({
  placeholder,
  onChange,
  query,
  onClick,
}: SearchBar) {
  return (
    <>
      <div className="flex h-11 w-full px-2 md:w-80">
        <input
          placeholder={placeholder}
          className="peer w-full rounded-l-xl border-[1px] border-transparent px-3 py-2 shadow-sm outline-none duration-200 focus-within:border-primary"
          type="text"
          aria-label="search"
          value={query}
          role="searchbox"
          onChange={onChange}
          required
        />
        <button
          className="w-12 rounded-r-xl border-[1px] border-transparent bg-green-400 text-primary shadow-sm outline-none focus-visible:border-green-400"
          aria-label="search"
          onClick={onClick}
        >
          <p
            className={`${query ? '-rotate-0 text-xl ' : '-rotate-45 text-3xl '}pointer-events-none text-white`}
          >
            {query ? '✕' : '⚲'}
          </p>
        </button>
      </div>
    </>
  )
}
