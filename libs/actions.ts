'use server'

import dbConnect from '@/libs/dbConnect'
import { itemSchema } from '../app/api/items/item.schema'
import Item from '../app/api/items/item.model'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import User from '@/app/api/auth/user.model'

export async function getUsers() {
  try {
    await dbConnect()
    const data = await User.find()
    return data
  } catch (error) {
    return { error }
  }
}

export async function createItem(formData: FormData) {
  try {
    await dbConnect()
    const data = {
      name: formData.get('name'),
      description: formData.get('description'),
      price: parseInt(formData.get('price')),
      category: formData.get('category'),
    }
    const dataValidation = itemSchema.parse(data)
    const newItem = await new Item(dataValidation)
    const savedUser = await newItem.save()
    console.log('Item guardado correctamente', savedUser)
  } catch (error) {
    console.log(error)
  } finally {
    revalidatePath('/admin')
    redirect('/admin')
  }
}

export async function editItem() {}

export async function getAdminItems() {
  try {
    await dbConnect()
    const data = await Item.find().lean()
    return data
  } catch (error) {
    return error
  }
}

export async function getItems() {
  try {
    await dbConnect()

    const group = await Item.aggregate([
      {
        $group: {
          _id: '$category', // Agrupa por categoría
          items: {
            $push: {
              // Empuja los ítems con los campos que querés
              name: '$name',
              description: '$description',
              price: '$price',
            },
          },
        },
      },
      {
        $sort: { _id: 1 }, // Ordena por la categoría (1 para ascendente, -1 para descendente)
      },
    ])

    return group
  } catch (err: any) {
    return err
  }
}
