import Link from 'next/link'
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <div className="flex">
        <aside className="fixed hidden h-screen w-48 flex-col gap-5 bg-gray-600 p-3 text-xl text-white lg:flex">
          <Link href="/" className="hover:text-green-200">
            Home
          </Link>
          <Link href="/admin" className="hover:text-green-200">
            Editar/Crear
          </Link>
          {/*    <Link href="/admin/metrics" className="hover:text-green-200">
          Estadisticas
        </Link> */}
          <Link href="/admin/featured" className="hover:text-green-200">
            Destacados
          </Link>
        </aside>
        <section className="w-full py-10 lg:ml-48">{children}</section>
      </div>
    </>
  )
}
