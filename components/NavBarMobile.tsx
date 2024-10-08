import Image from 'next/image'
import SearchBar from './ui/SearchBar'
import logo from '@/public/bar_logo.webp'
import Link from 'next/link'
type NavBarTypes = {
  query: string
  setQuery: (value: string) => void
}
export default function NavBarMobile({ query, setQuery }: NavBarTypes) {
  return (
    <header className="fixed bottom-0 z-10 flex w-full items-center justify-center bg-secundary-600 px-2 py-4 lg:hidden">
      <Link className="px-3" href={'/login'}>
        <Image src={logo} width={60} height={60} alt="Logo"></Image>
      </Link>

      <SearchBar
        onClick={() => setQuery('')}
        query={query}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setQuery(e.target.value)
        }
        placeholder="Plato, bebida, postre"
      ></SearchBar>

      <label className="relative flex cursor-pointer items-center justify-center font-bold">
        <input
          type="checkbox"
          className="peer appearance-none stroke-primary"
        />
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="var(--primary)"
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
        <p className="text-primary">Español</p>
        <div className="absolute top-10 z-10 hidden w-32 flex-col rounded-md bg-secundary-500 text-primary-500 shadow-xl peer-hover:flex">
          <button className="rounded-md p-2 hover:bg-primary hover:text-secundary">
            Español
          </button>
          <button className="rounded-md p-2 hover:bg-primary hover:text-secundary">
            Ingles
          </button>
        </div>
      </label>
    </header>
  )
}
