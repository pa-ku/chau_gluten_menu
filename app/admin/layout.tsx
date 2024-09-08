import SideBar from './components/SideBar'
import NavBarAdminMobile from './components/NavBarAdminMobile'
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <div className="flex">
        <SideBar></SideBar>
        <section className="w-full bg-secundary-800 lg:ml-48 lg:px-0">
          <NavBarAdminMobile></NavBarAdminMobile>
          {children}
        </section>
      </div>
    </>
  )
}
