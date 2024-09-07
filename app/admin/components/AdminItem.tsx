'use client'

import useModal from '@/hooks/useModal'
import { useEffect, useState } from 'react'
import { ItemModal } from './ItemModal'
import { MenuItemTypes } from '@/libs/types'

export function AdminItem({
  name,
  description,
  price,
  _id: id,
  category,
  createdAt,
  updatedAt,
}: MenuItemTypes) {
  const [refModal, openModal, closeModal] = useModal()
  const [newData, setNewData] = useState({
    name: name,
    description: description,
    price: price,
    category: category,
  })
  const [confirmDelete, setConfirmDelete] = useState(false)

  const updated =
    updatedAt &&
    updatedAt.toLocaleString('es-AR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    })
  const created =
    createdAt &&
    createdAt.toLocaleString('es-AR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    })

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
        className="shadow:md group relative flex w-full justify-between rounded-md bg-secundary-600 p-3 text-start shadow-md duration-200 hover:text-white lg:w-80"
        key={id}
      >
        <div className="w-full">
          <p className="absolute bottom-0 right-1 text-sm text-gray-400">
            {created}
          </p>
          <p className="absolute bottom-4 right-1 text-sm text-gray-500">
            {updated !== created && updated}
          </p>

          <figcaption className="flex w-full flex-col pb-5">
            <div className="flex justify-between font-semibold text-primary-700 group-hover:text-primary-500">
              <h2>{name}</h2>
              <p>${price}</p>
            </div>
            <p className="text-primary-400">{description}</p>
            <p className="absolute bottom-0 left-0 w-max rounded-bl-md bg-primary-600 px-3 text-secundary group-hover:bg-primary-500">
              {category}
            </p>
          </figcaption>
        </div>
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
