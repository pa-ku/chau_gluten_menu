'use client'

import { useEffect, useState } from 'react'
import { AdminItem } from './AdminItem'
import SearchBar from '@/components/ui/SearchBar'
import { ItemTypes } from '@/libs/types'
import CreateItem from './CreateItem'
export default function RenderItems({ data }: { data: ItemTypes[] }) {
  const [query, setQuery] = useState('')
  const [debouncedQuery, setDebouncedQuery] = useState(query)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query)
    }, 300)

    return () => {
      clearTimeout(handler)
    }
  }, [query])

  const filteredItems = data.filter(
    (item) =>
      item.name.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(debouncedQuery.toLowerCase()),
  )

  return (
    <>
      <header className="bg-secundary-700 flex w-full items-center justify-start p-2">
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
          filteredItems.map(
            ({
              _id,
              name,
              description,
              price,
              category,
              createdAt,
              updatedAt,
            }: ItemTypes) => (
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
