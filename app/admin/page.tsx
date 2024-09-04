import { getAdminItems } from '@/libs/actions'
import RenderItems from './components/RenderItems'

export default async function Admin() {
  const data = await getAdminItems()

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
