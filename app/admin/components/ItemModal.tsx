'use client'

import CircleButton from '@/components/ui/CircleButton'
import InputText from '@/components/ui/InputText'
import { categorys } from '@/libs/categorys'

type ItemModal = {}

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
}) {
  return (
    <>
      <dialog ref={refModal} className="m-auto w-96 rounded-xl p-4">
        <div className="absolute right-4 z-10 flex flex-row-reverse items-center gap-2">
          <CircleButton onClick={handleConfirm}>
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#333"
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
          </CircleButton>
          {confirmDelete && (
            <>
              <CircleButton
                onClick={handleDelete}
                className="h-8 w-8 cursor-pointer bg-gray-500 text-lg text-white hover:bg-blue-500"
              >
                ✓
              </CircleButton>
            </>
          )}
        </div>

        <InputText
          type="text"
          onChange={handleChangeData}
          value={newData.name}
          name="name"
          className="text-xl font-bold placeholder:font-bold placeholder:text-gray-400"
          placeholder="Titulo"
        />
        <InputText
          type="text"
          onChange={handleChangeData}
          value={newData.description}
          name="description"
          placeholder="Descripción"
        />
        <InputText
          type="number"
          onChange={handleChangeData}
          value={newData.price}
          name="price"
          placeholder="Precio"
        />
        <select
          name="category"
          onChange={handleChangeData}
          id=""
          className="mx-3 mb-2 rounded-md bg-gray-200 px-2 py-1"
        >
          {categorys.map((cat) => (
            <option key={cat.name} value={cat.name}>
              {cat.name}
            </option>
          ))}
        </select>
        <div className="grid grid-cols-2 gap-4 p-3">
          <button
            onClick={handleChange}
            className="rounded-xl bg-gray-700 p-3 font-bold text-white duration-200 hover:brightness-110"
          >
            Modificar
          </button>
          <button
            className="rounded-xl bg-red-400 font-bold text-white duration-200 hover:brightness-110"
            onClick={() => {
              closeModal()
              setConfirmDelete(false)
            }}
          >
            Cancelar
          </button>
        </div>
      </dialog>
    </>
  )
}
