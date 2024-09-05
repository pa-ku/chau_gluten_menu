'use client'

import CategoryTemplate from '@/components/CategoryTemplate'
import ItemTemplate from '@/components/ItemTemplate'
import { useMemo, useState } from 'react'
import { categorys } from '@/libs/categorys'
import Header from './Header'

const MAX_ITEMS_SEARCH = 8

interface RenderItemsTypes {
  _id: string
  items: Item[]
}

interface Item {
  name: string
  description: string
  price: number
}

export default function RenderItems({ data }: { data: RenderItemsTypes[] }) {
  const [query, setQuery] = useState('')
  const [categorySelected, setCategorySelected] = useState('')

  const items = useMemo(
    () => data.flatMap((category) => category.items),
    [data],
  )
  const filteredData = useMemo(
    () =>
      items.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase()),
      ),
    [items, query],
  )

  const sortById = useMemo(
    () => (arr: RenderItemsTypes, id: string) => {
      return arr.slice().sort((a, b) => {
        if (a._id === id) return -1
        if (b._id === id) return 1
        return 0
      })
    },
    [],
  )

  const updatedData = useMemo(
    () => sortById(data, categorySelected),
    [data, categorySelected, sortById],
  )

  return (
    <>
      <div className="flex h-full w-full flex-col items-center justify-start">
        <Header query={query} setQuery={setQuery}></Header>
        <div className="grid grid-cols-2 items-center justify-center gap-2 py-5 lg:grid-cols-6">
          {categorys.map(({ name, image }) => (
            <CategoryTemplate
              key={name}
              categorySelected={categorySelected}
              onClick={() =>
                setCategorySelected(categorySelected === name ? '' : name)
              }
              image={image}
            >
              {name}
            </CategoryTemplate>
          ))}
        </div>

        <div className="grid grid-cols-4 rounded-xl bg-secundary-600 duration-500">
          {query !== '' &&
            filteredData
              .slice(0, MAX_ITEMS_SEARCH)
              .map((item) => (
                <ItemTemplate
                  key={item.name}
                  price={item.price}
                  name={item.name}
                  description={item.description}
                />
              ))}
        </div>

        <main className="space-y-10 py-10">
          {updatedData.map(({ _id: category, items }: RenderItemsTypes) => (
            <div
              key={category}
              className={`${category == 'Principales' ? 'rounded-lg bg-secundary-500' : ''} `}
            >
              <h1 className="text-4xl text-primary-500">{category}</h1>
              <div className="grid lg:grid-cols-4">
                {items.map((item: Item) => (
                  <ItemTemplate
                    key={item.name}
                    price={item.price}
                    name={item.name}
                    description={item.description}
                  />
                ))}
              </div>
            </div>
          ))}
        </main>
      </div>
    </>
  )
}
