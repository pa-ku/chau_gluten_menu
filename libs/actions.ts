'use server'

import dbConnect from '@/libs/dbConnect'
import { itemSchema } from '../app/api/items/item.schema'
import Item, { itemType } from '../app/api/items/item.model'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import User from '@/app/api/auth/user.model'
import { ObjectId } from 'mongoose'
import { MenuItemTypes } from './types'

export async function getUsers() {
  try {
    await dbConnect()
    const data = await User.find()
    return data
  } catch (error) {
    return { error }
  }
}

export async function createItem(formData: FormData): Promise<void> {
  try {
    await dbConnect()
    const data = {
      name: formData.get('name') as string,
      description: formData.get('description') as string,
      price: parseInt(formData.get('price') as string),
      category: formData.get('category') as string,
    }
    const dataValidation = itemSchema.parse(data)
    const newItem = await new Item(dataValidation)
    const savedUser = await newItem.save()
    console.log('Item guardado correctamente')
  } catch (error) {
    console.log(error)
  } finally {
    revalidatePath('/admin')
    redirect('/admin')
  }
}

export async function editItem() {}

export async function getAdminItems(): Promise<MenuItemTypes[]> {
  try {
    await dbConnect()
    const data = await Item.find().lean()

    const formattedData: MenuItemTypes[] = data.map((item: any) => ({
      _id: item._id.toString(),
      name: item.name,
      description: item.description,
      price: item.price,
      category: item.category,
      createdAt: new Date(item.createdAt),
      updatedAt: new Date(item.updatedAt),
    }))
    return formattedData
  } catch (error) {
    console.error('Error fetching admin items:', error)
    throw error
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
        $sort: { _id: 1 },
      },
    ])
    return group
  } catch (err) {
    return { error: 'Hubo un problema al obtener el menu', err }
  }
}
