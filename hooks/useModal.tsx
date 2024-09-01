import { useRef, MutableRefObject } from 'react'

export default function useModal(): [
  MutableRefObject<HTMLDialogElement | null>,
  () => void,
  () => void,
] {
  const refModal = useRef<HTMLDialogElement | null>(null)

  function openModal() {
    if (refModal.current) {
      refModal.current.showModal()
    }
  }

  function closeModal() {
    if (refModal.current) {
      refModal.current.close()
    }
  }

  return [refModal, openModal, closeModal]
}
