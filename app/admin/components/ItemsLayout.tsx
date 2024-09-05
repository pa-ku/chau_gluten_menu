'use client'

import { useMemo, useState } from 'react'
import { AdminItem } from './AdminItem'
import SearchBar from '@/components/ui/SearchBar'
import CreateItem from './CreateItem'
import { MenuItemTypes } from '@/libs/types'

export default function ItemsLayout({ data }: { data: MenuItemTypes[] }) {
  const [query, setQuery] = useState('')

  const filteredData = useMemo(
    () =>
      data.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase()),
      ),
    [data, query],
  )

  return (
    <>
      <header className="flex w-full items-center justify-start bg-secundary-700 p-2">
        <SearchBar
          onClick={() => setQuery('')}
          query={query}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setQuery(e.target.value)
          }
          placeholder={'Filtrar para editar'}
        />
      </header>
      <div className="py-16">
        <CreateItem />
      </div>
      <section className="grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
        {data?.length > 0 ? (
          filteredData.map(
            ({
              _id,
              name,
              description,
              price,
              category,
              createdAt,
              updatedAt,
            }: MenuItemTypes) => (
              <AdminItem
                key={_id}
                name={name}
                description={description}
                price={price}
                id={_id}
                category={category}
                createdAt={createdAt}
                updatedAt={updatedAt}
              />
            ),
          )
        ) : (
          <p>No items found</p>
        )}
      </section>
    </>
  )
}
