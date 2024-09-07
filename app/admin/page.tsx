import { getAdminItems } from '@/libs/actions'
import ItemsLayout from './components/ItemsLayout'
import { MenuItemTypes } from '@/libs/types'

export default async function Admin() {
  const itemData: MenuItemTypes[] = await getAdminItems()

  return (
    <>
      <div className="flex w-full flex-col items-center justify-center gap-5">
        <div className="flex w-full flex-col flex-wrap items-center justify-center gap-4 px-4">
          <ItemsLayout data={itemData} />
        </div>
      </div>
    </>
  )
}
