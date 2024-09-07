'use client'

import CircleButton from '@/components/ui/CircleButton'
import InputText from '@/components/ui/InputText'
import { categorys } from '@/libs/categorys'
import { ChangeEventHandler, MutableRefObject } from 'react'

type NewData = {
  name: string
  description: string
  price: number
  category: string
}

type ItemModalProps = {
  refModal: MutableRefObject<HTMLDialogElement | null>
  handleDelete: () => void
  confirmDelete: boolean
  handleChangeData: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >
  newData: NewData
  handleChange: () => void
  handleConfirm: () => void
  setConfirmDelete: (value: boolean) => void
  closeModal: () => void
}

export function ItemModal({
  refModal,
  handleDelete,
  confirmDelete,
  handleChangeData,
  newData,
  handleChange,
  handleConfirm,
  setConfirmDelete,
  closeModal,
}: ItemModalProps) {
  return (
    <>
      <dialog
        ref={refModal}
        className="m-auto h-max  lg:w-96 rounded-xl bg-primary-600 p-4"
      >
        <div className="space-y-3">
          <div className="flex items-center justify-between gap-5">
            <h2 className="text-2xl text-white">Modificar Item</h2>
            <div className="flex flex-row-reverse items-center gap-2">
              <button
                className="flex h-10 w-10 items-center justify-center rounded-lg text-2xl duration-200 hover:bg-primary-900"
                onClick={handleConfirm}
              >
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#fff"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 7l16 0" />
                  <path d="M10 11l0 6" />
                  <path d="M14 11l0 6" />
                  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                </svg>
              </button>

              {confirmDelete && (
                <>
                  <button
                    onClick={handleDelete}
                    className="h-8 w-8 cursor-pointer bg-red-500 text-lg text-white hover:bg-red-400"
                  >
                    ✓
                  </button>
                </>
              )}
            </div>
          </div>

          <InputText
            type="text"
            onChange={handleChangeData}
            value={newData.name}
            name="name"
            className="rounded-lg bg-primary-500 placeholder:text-primary-100"
            placeholder="Titulo"
          />

          <InputText
            type="number"
            onChange={handleChangeData}
            className="rounded-lg bg-primary-500 placeholder:text-primary-100"
            value={newData.price}
            name="price"
            placeholder="Precio"
          />
          <textarea
            className="min-h-32 w-full rounded-lg bg-primary-500 p-3 text-white placeholder:text-primary-100"
            onChange={handleChangeData}
            value={newData.description}
            name="description"
            placeholder="Descripción"
          ></textarea>

          <div className="space-y-1">
            <p className="text-white">Categoria</p>
            <select
              name="category"
              onChange={handleChangeData}
              id=""
              value={newData.category}
              className="cursor-pointer rounded-md bg-primary-900 px-2 py-2 text-white"
            >
              {categorys.map((cat) => (
                <option key={cat.name} value={cat.name}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4 p-3">
            <button
              onClick={handleChange}
              className="rounded-xl bg-primary-900 p-3 font-bold text-white duration-200 hover:brightness-110"
            >
              Modificar
            </button>
            <button
              className="rounded-xl bg-secundary-900 font-bold text-primary-900 duration-200 hover:brightness-110"
              onClick={() => {
                closeModal()
                setConfirmDelete(false)
              }}
            >
              Cancelar
            </button>
          </div>
        </div>
      </dialog>
    </>
  )
}
