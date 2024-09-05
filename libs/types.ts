export type CategorysTypes = {
  name: string
  image: ImageData
}

export type ItemsGroupTypes = {
  slice(): unknown
  _id: string
  items: ItemTypes[]
}

export type ItemTypes = {
  name: string
  description: string
  price: number
}

export type MenuItemTypes = {
  _id: string
  name: string
  description: string
  price: number
  category: string
  createdAt: Date
  updatedAt: Date
}
