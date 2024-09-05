'use client'

import InputText from '../../../components/ui/InputText'
import { createItem } from '@/libs/actions'
import { useRef } from 'react'
import React from 'react'
import { categorys } from '@/libs/categorys'

export default function CreateItem() {
  const formRef = useRef<HTMLFormElement>(null)

  async function handleAction(formData: any) {
    formRef.current?.reset()
    await createItem(formData)
  }

  return (
    <>
      <div className="flex w-full flex-col items-center justify-center gap-5">
        <form
          ref={formRef}
          action={handleAction}
          className="relative space-y-3 rounded-md bg-primary-700 px-5 py-4 text-primary-800 placeholder:text-primary-200 lg:w-96"
        >
          <h2 className="text-2xl text-white">Crear Item</h2>
          <InputText
            required
            name="name"
            className="rounded-lg bg-primary-500 placeholder:text-primary-100"
            placeholder="Titulo"
          />

          <InputText
            className="rounded-lg bg-primary-500 placeholder:text-primary-100"
            required
            name="price"
            placeholder="Precio"
          />
          <textarea
            className="w-full rounded-lg bg-primary-500 p-3 text-white placeholder:text-primary-300"
            name="description"
            placeholder="Descripción"
          ></textarea>
          <select
            name="category"
            id=""
            className="rounded-md bg-primary-600 px-2 py-3 text-white"
          >
            {categorys.map((cat) => (
              <option key={cat.name} value={cat.name}>
                {cat.name}
              </option>
            ))}
          </select>
          <div className="">
            <button
              type={'submit'}
              className="w-full rounded-lg bg-secundary-600 px-3 py-2 font-bold text-primary-700 hover:bg-primary-100"
            >
              + Crear
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
