'use client'

import { useEffect, useState } from 'react'
import { AdminItem } from './AdminItem'
import SearchBar from '@/components/ui/SearchBar'
import { ItemTypes } from '@/app/types'
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
      <SearchBar
        onClick={() => setQuery('')}
        query={query}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setQuery(e.target.value)
        }
        placeholder={'Filtrar para editar'}
      />
      <section className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
        {data?.length > 0 ? (
          filteredItems.map(
            ({
              _id,
              name,
              description,
              price,
              image,
              createdAt,
              category,
              updatedAt,
            }: ItemTypes) => (
              <AdminItem
                key={_id}
                name={name}
                description={description}
                price={price}
                id={_id}
                image={image}
                createdAt={createdAt}
                updatedAt={updatedAt}
                category={category}
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
