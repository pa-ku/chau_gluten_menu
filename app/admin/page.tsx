import CreateItem from './components/CreateForm'

import { getItems } from '@/libs/actions'
import RenderItems from './components/RenderItems'

export default async function Admin() {
  const data = await getItems()

  return (
    <>
      <CreateItem />
      <div className="flex w-full flex-col items-center justify-center gap-5 p-2 py-16">
        <main className="flex flex-col flex-wrap items-center justify-center gap-4">
          <RenderItems data={data} />
        </main>
      </div>
    </>
  )
}
