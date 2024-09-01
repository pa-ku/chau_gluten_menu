'use client'

import Image from 'next/image'
import logo from '@/public/bar_logo.webp'
import SearchBar from '@/components/ui/SearchBar'
import CategoryTemplate from '@/components/CategoryTemplate'
import ItemTemplate from '@/components/ItemTemplate'
import { ItemTypes } from './types'
import { useEffect, useState } from 'react'
import { categorys } from '@/libs/categorys'

export default function HomeItemLayout({ data }) {
  const [query, setQuery] = useState('')
  const [categorySelected, setCategorySelected] = useState('')
  const [debouncedQuery, setDebouncedQuery] = useState(query)

  const moveCategoryToFront = (categories, categoryName) => {
    const index = categories.findIndex((cat) => cat.name === categoryName)
    if (index > -1) {
      const [category] = categories.splice(index, 1)
      categories.unshift(category)
    }
    return categories
  }

  const updatedCategorys = moveCategoryToFront([...categorys], categorySelected)

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
      item.name.toLowerCase().includes(debouncedQuery.toLowerCase()) &&
      item.category.toLowerCase().includes(categorySelected.toLowerCase()),
  )

  function handleCategory(cat) {
    setCategorySelected(categorySelected === cat ? '' : cat)
  }

  const result = Object.groupBy(data, ({ category }) => category)

  return (
    <>
      <header className="relative flex w-full justify-center bg-slate-500 py-4">
        <Image
          className="absolute left-10"
          src={logo}
          width={45}
          height={35}
          alt="Logo de la empresa"
        ></Image>

        <SearchBar
          onClick={() => setQuery('')}
          query={query}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setQuery(e.target.value)
          }
          placeholder="Plato, bebida, postre"
        ></SearchBar>

        <label className="relative flex cursor-pointer items-center justify-center font-bold">
          <input type="checkbox" className="peer appearance-none" />
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#ffffff"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 5h7" />
            <path d="M9 3v2c0 4.418 -2.239 8 -5 8" />
            <path d="M5 9c0 2.144 2.952 3.908 6.7 4" />
            <path d="M12 20l4 -9l4 9" />
            <path d="M19.1 18h-6.2" />
          </svg>
          <p className="text-white">Español</p>
          <div className="absolute top-10 z-10 hidden w-full flex-col rounded-md bg-gray-100 text-black shadow-xl peer-hover:flex">
            <button className="rounded-md p-2 hover:bg-green-200">
              Español
            </button>
            <button className="rounded-md p-2 hover:bg-green-200">
              Ingles
            </button>
          </div>
        </label>
      </header>

      <div className="flex h-full w-full flex-col items-center justify-start">
        <div className="grid grid-cols-2 items-center justify-center gap-2 py-5 lg:grid-cols-5">
          {categorys.map(({ name, image }) => (
            <>
              <CategoryTemplate
                key={name}
                categorySelected={categorySelected}
                onClick={() => handleCategory(name)}
                image={image}
              >
                {name}
              </CategoryTemplate>
            </>
          ))}
        </div>
        <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {query !== '' &&
            filteredItems
              .slice(0, 6)
              .map(({ name, description, price, image }: ItemTypes) => (
                <ItemTemplate
                  key={name}
                  image={image}
                  price={price}
                  name={name}
                  description={description}
                />
              ))}
        </div>

        <main className="py-10">
          <div className="space-y-20">
            {updatedCategorys.map(({ name, image }) => (
              <div key={name}>
                <h1 className="mb-5 px-1 text-3xl font-bold text-gray-600">
                  {name}
                </h1>

                <div className="grid gap-x-10 gap-y-1 lg:grid-cols-2 xl:grid-cols-3">
                  {result[name] &&
                    result[name].map(
                      ({ name, description, price, image }: ItemTypes) => (
                        <ItemTemplate
                          key={name}
                          image={image}
                          price={price}
                          name={name}
                          description={description}
                        />
                      ),
                    )}
                </div>
              </div>
            ))}
          </div>

          {/*   {sortCategory.length > 0 ? (
            sortCategory.map(
              ({ name, description, price, image }: ItemTypes) => (
                <>
                  <ItemTemplate
                    key={name}
                    image={image}
                    price={price}
                    name={name}
                    description={description}
                  />
                </>
              ),
            )
          ) : (
            <p className="w-full text-center text-2xl">
              No se encontraron resultados
            </p>
          )} */}
        </main>
      </div>
    </>
  )
}
