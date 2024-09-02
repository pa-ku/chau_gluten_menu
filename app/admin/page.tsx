import CreateItem from './components/CreateForm'
import { getAdminItems } from '@/libs/actions'
import RenderItems from './components/RenderItems'

export default async function Admin() {
  const rawData = await getAdminItems()
  console.log(rawData)

  const data = rawData.map((item) => ({
    ...item,
    _id: item._id.toString(),
  })) 
  return (
    <>
      <CreateItem />
      <div className="flex w-full flex-col items-center justify-center gap-5 p-2 py-16">
        <main className="flex flex-col flex-wrap items-center justify-center gap-4">
          {/* <RenderItems data={data} /> */}
        </main>
      </div>
    </>
  )
}
