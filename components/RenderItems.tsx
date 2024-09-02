'use client'

import CategoryTemplate from '@/components/CategoryTemplate'
import ItemTemplate from '@/components/ItemTemplate'
import { ItemTypes } from '@/libs/types'
import { useState } from 'react'
import { categorys } from '@/libs/categorys'
import Header from './Header'

const MAX_ITEMS_SEARCH = 8

export default function RenderItems({ data }: { data: ItemTypes }) {
  const [query, setQuery] = useState('')
  const [categorySelected, setCategorySelected] = useState('')

  const items = data.flatMap((item) => item.items)
  const filteredData = items.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase()),
  )

  const sortById = (arr, id) => {
    return arr.slice().sort((a, b) => {
      if (a._id === id) return -1
      if (b._id === id) return 1
      return 0
    })
  }

  const updatedData = sortById(data, categorySelected)

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
        {query !== '' && <h1 className="pt-5 text-4xl">Encontrados</h1>}
        <div className="grid grid-cols-4 rounded-xl duration-500">
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
          {updatedData.map(({ _id: category, items }) => (
            <div key={category}>
              <h1 className="text-4xl">{category}</h1>
              <div className="grid lg:grid-cols-4">
                {items.map((item) => (
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
