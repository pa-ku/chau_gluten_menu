'use client'

import Image from 'next/image'
import useModal from '@/hooks/useModal'
import { useState } from 'react'
import { ItemModal } from './ItemModal'
import { ItemTypes } from '@/app/types'

export function AdminItem({
  name,
  description,
  price,
  id,
  image,
  category,
  createdAt,
  updatedAt,
}: ItemTypes) {
  const [refModal, openModal, closeModal] = useModal()
  const [newData, setNewData] = useState({
    name: name,
    description: description,
    price: price,
    category: category,
  })
  const [confirmDelete, setConfirmDelete] = useState(false)

  const timeCreated = new Date(createdAt).toLocaleString()
  const timeUpdated = new Date(updatedAt).toLocaleString()
  async function handleChange() {
    try {
      fetch(`/api/items/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newData),
      })
      closeModal()
      window.location.reload()
    } catch (error) {
      console.log(error)
    }
  }

  function handleDelete() {
    try {
      fetch(`/api/items/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      closeModal()
      window.location.reload()
    } catch (error) {
      console.log(error)
    }
  }

  function handleChangeData(event: React.ChangeEvent<HTMLInputElement>) {
    const name = event.target.name
    const value = event.target.value
    setNewData((prev) => ({ ...prev, [name]: value }))
  }

  function handleConfirm() {
    setConfirmDelete(!confirmDelete)
  }

  return (
    <>
      <button
        onClick={openModal}
        className="relative flex w-80 justify-between rounded-xl bg-white p-3 text-start shadow-sm duration-200 hover:shadow-xl"
        key={id}
      >
        <div className="w-full">
          <p className="absolute bottom-1 right-1 text-sm text-gray-400">
            {timeCreated}
          </p>
          <p className="absolute bottom-6 right-1 text-sm text-gray-500">
            {timeUpdated !== timeCreated && timeUpdated}
          </p>

          <figcaption className="flex w-full flex-col">
            <div className="flex justify-between font-semibold">
              <h2>{name}</h2>
              <p>${price}</p>
            </div>
            <p className="text-gray-500">{description}</p>
            <p className="w-max rounded-md bg-gray-200 px-2">{category}</p>
          </figcaption>
        </div>
        {image && (
          <Image
            width={100}
            height={100}
            className="rounded-xl"
            src={image}
            alt={`Imagen de ${name}`}
          />
        )}
      </button>
      <ItemModal
        confirmDelete={confirmDelete}
        handleConfirm={handleConfirm}
        handleDelete={handleDelete}
        refModal={refModal}
        handleChangeData={handleChangeData}
        newData={newData}
        closeModal={closeModal}
        setConfirmDelete={setConfirmDelete}
        handleChange={handleChange}
      />
    </>
  )
}
