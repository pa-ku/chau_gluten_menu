import CreateItem from './components/CreateItem'
import { getAdminItems, getUsers } from '@/libs/actions'
import RenderItems from './components/RenderItems'

export default async function Admin() {
  const users = await getUsers()
  console.log(users)

  const rawData = await getAdminItems()
  const data = rawData.map((item) => ({
    ...item,
    _id: item._id.toString(),
  }))

  return (
    <>
      <div className="flex w-full flex-col items-center justify-center gap-5">
        <div className="flex w-full flex-col flex-wrap items-center justify-center gap-4">
          <RenderItems data={data} />
        </div>
      </div>
    </>
  )
}
