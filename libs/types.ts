export type ItemTypes = {
  _id?: string
  id?: string
  name: string
  description: string
  price: number
  image?: string
  category: string
  createdAt?: Date | string
  updatedAt?: Date | string
}

export type CategorysTypes = {
  name: string
  image: ImageData
}
