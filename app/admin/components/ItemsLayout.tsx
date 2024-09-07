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
      <header className="flex w-full items-center justify-center bg-secundary-900 p-2">
        <div className="relative flex justify-center">
          <SearchBar
            onClick={() => setQuery('')}
            query={query}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setQuery(e.target.value)
            }
            placeholder={'Filtrar para editar'}
          />
          {query !== '' && (
            <section className="absolute z-10 mt-12 flex w-96 flex-col items-center justify-center gap-2 rounded-lg bg-secundary-400 py-6">
              {filteredData.length > 0 ? (
                filteredData
                  .slice(0, 5)
                  .map(
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
                        _id={_id}
                        category={category}
                        createdAt={createdAt}
                        updatedAt={updatedAt}
                      />
                    ),
                  )
              ) : (
                <p>No se encotro resultado</p>
              )}
            </section>
          )}
        </div>
      </header>
      <div className="py-16">
        <CreateItem />
      </div>

      <section className="grid gap-5 pb-20 lg:grid-cols-2 xl:grid-cols-4">
        {data?.length > 0 ? (
          data.map(
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
                _id={_id}
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
