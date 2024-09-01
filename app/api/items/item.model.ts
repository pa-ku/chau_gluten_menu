import { Schema, model, models } from 'mongoose'

export type itemType = {
  name: string
  description?: string
  price: number
  image: string
  category: string
}

const itemSchema = new Schema<itemType>(
  {
    name: {
      type: String,
      required: [true, 'El nombre es requerido'],
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    price: {
      type: Number,
      required: [true, 'El precio es requerido'],
    },
    image: {
      type: String,
    },
    category: {
      type: String,
      required: [true, 'Elige una categoria'],
    },
  },
  { timestamps: true },
)

export default models.Item || model<itemType>('Item', itemSchema)
