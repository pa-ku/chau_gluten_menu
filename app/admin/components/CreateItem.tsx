'use client'

import InputText from '../../../components/ui/InputText'
import { createItem } from '@/libs/actions'
import CircleButton from '../../../components/ui/CircleButton'
import { useRef, useState } from 'react'
import Image from 'next/image'
import imgTest from '@/public/imgtest.webp'
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
          className="bg-primary-700 relative rounded-md py-1 lg:w-80"
        >
          <InputText
            required
            name="name"
            className="font-bold placeholder:font-bold placeholder:text-gray-400"
            placeholder="Titulo"
          />
          <textarea
            className="bg-primary-500 placeholder:text-primary-300 w-full p-2 text-white"
            name="description"
         
            placeholder="Descripción"
          ></textarea>
          <InputText required name="price" placeholder="Precio" />
          <select
            name="category"
            id=""
            className="bg-primary-900 mx-3 mb-2 rounded-md px-2 py-1 text-white"
          >
            {categorys.map((cat) => (
              <option key={cat.name} value={cat.name}>
                {cat.name}
              </option>
            ))}
          </select>
          <div className="flex gap-3 px-3 py-2">
            <CircleButton title="Crear Item text-primary-700" type={'submit'}>
              +
            </CircleButton>
            {/*    <CircleButton type="button" className="relative">
              <label className="absolute h-full w-full cursor-pointer">
                <input type="file" className="hidden h-full w-full" />
              </label>
              <svg
                width="25"
                height="25"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="black"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M15 8h.01" />
                <path d="M12.5 21h-6.5a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v6.5" />
                <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l4 4" />
                <path d="M14 14l1 -1c.67 -.644 1.45 -.824 2.182 -.54" />
                <path d="M16 19h6" />
                <path d="M19 16v6" />
              </svg>
            </CircleButton> */}
          </div>
        </form>
      </div>
    </>
  )
}
