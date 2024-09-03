import Link from 'next/link'
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <div className="flex">
        <aside className="bg-primary-900 fixed hidden h-screen w-48 flex-col gap-5 p-3 text-lg text-white lg:flex">
          <Link
            href="/"
            className="hover:text-primary-100 flex items-center justify-start gap-2"
          >
            <svg
              width="25"
              height="25"
              viewBox="0 0 24 24"
              stroke-Width="2.0"
              stroke="#ffffff"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
              <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
              <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
            </svg>
            Home
          </Link>
          <Link
            href="/admin"
            className="hover:text-primary-100 flex items-center justify-start gap-2"
          >
            <svg
              width="25"
              height="25"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#ffffff"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 6c0 1.657 3.582 3 8 3s8 -1.343 8 -3s-3.582 -3 -8 -3s-8 1.343 -8 3" />
              <path d="M4 6v6c0 1.657 3.582 3 8 3c1.075 0 2.1 -.08 3.037 -.224" />
              <path d="M20 12v-6" />
              <path d="M4 12v6c0 1.657 3.582 3 8 3c.166 0 .331 -.002 .495 -.006" />
              <path d="M16 19h6" />
              <path d="M19 16v6" />
            </svg>
            Aministrar
          </Link>
          <button className="hover:text-primary-100 flex items-center justify-start gap-2">
            <svg
              width="25"
              height="25"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#ffffff"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
              <path d="M9 12h12l-3 -3" />
              <path d="M18 15l3 -3" />
            </svg>
            LogOut
          </button>
        </aside>
        <section className="bg-secundary-800 w-full lg:ml-48">
          {children}
        </section>
      </div>
    </>
  )
}
