'use client'

import CategoryTemplate from '@/components/CategoryTemplate'
import ItemTemplate from '@/components/ItemTemplate'
import { useMemo, useState } from 'react'
import { categorys } from '@/libs/categorys'
import Header from './Header'
import { ItemsGroupTypes, ItemTypes } from '@/libs/types'
import NavBarMobile from './NavBarMobile'

const MAX_ITEMS_SEARCH = 8

export default function RenderItems({ data }: { data: ItemsGroupTypes[] }) {
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

  const sortByCategory = useMemo(
    () =>
      (data: ItemsGroupTypes[], category: string): ItemsGroupTypes[] => {
        return data.slice().sort((a, b) => {
          if (a._id === category) return -1
          if (b._id === category) return 1
          return 0
        })
      },
    [],
  )

  const updatedData = useMemo(
    () => sortByCategory(data, categorySelected),
    [data, categorySelected, sortByCategory],
  )

  return (
    <div className="flex h-full w-full flex-col items-center justify-start">
      <Header query={query} setQuery={setQuery}></Header>
      <NavBarMobile query={query} setQuery={setQuery}></NavBarMobile>
      <div className="grid grid-cols-2 items-center justify-center gap-2 py-5 lg:grid-cols-5">
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
        {updatedData.map(({ _id: category, items }: ItemsGroupTypes) => (
          <div
            key={category}
            className={`${category === 'Principales' ? 'rounded-lg bg-secundary-500' : ''} `}
          >
            <h1 className="text-4xl text-primary-500">{category}</h1>
            <div className="grid lg:grid-cols-4">
              {items.map((item: ItemTypes) => (
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
  )
}
