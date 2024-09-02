import Image from 'next/image'
import SearchBar from './ui/SearchBar'
import logo from '@/public/bar_logo.webp'

export default function Header({ query, setQuery }) {
  return (
    <header className="relative flex w-full justify-center bg-slate-500 py-4">
      <Image
        className="absolute left-10"
        src={logo}
        width={45}
        height={35}
        alt="Logo de la empresa"
      ></Image>

      <SearchBar
        onClick={() => setQuery('')}
        query={query}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setQuery(e.target.value)
        }
        placeholder="Plato, bebida, postre"
      ></SearchBar>

      <label className="relative flex cursor-pointer items-center justify-center font-bold">
        <input type="checkbox" className="peer appearance-none" />
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#ffffff"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 5h7" />
          <path d="M9 3v2c0 4.418 -2.239 8 -5 8" />
          <path d="M5 9c0 2.144 2.952 3.908 6.7 4" />
          <path d="M12 20l4 -9l4 9" />
          <path d="M19.1 18h-6.2" />
        </svg>
        <p className="text-white">Español</p>
        <div className="absolute top-10 z-10 hidden w-full flex-col rounded-md bg-gray-100 text-black shadow-xl peer-hover:flex">
          <button className="rounded-md p-2 hover:bg-green-200">Español</button>
          <button className="rounded-md p-2 hover:bg-green-200">Ingles</button>
        </div>
      </label>
    </header>
  )
}
