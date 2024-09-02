import Footer from '@/components/Footer'
import RenderItems from '@/components/RenderItems'
import { getItems } from '@/libs/actions'

export default async function Home() {
  const data = await getItems()

  return (
    <>
      <div className="flex flex-col items-start justify-between">
        <RenderItems data={data}></RenderItems>
        <Footer></Footer>
      </div>
    </>
  )
}
