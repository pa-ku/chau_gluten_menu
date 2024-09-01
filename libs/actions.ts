'use server'

import dbConnect from '@/libs/dbConnect'
import { itemSchema } from '../app/api/items/item.schema'
import Item from '../app/api/items/item.model'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function createItem(formData: FormData) {
  try {
    await dbConnect()
    console.log(formData.get('image'))
    const data = {
      name: formData.get('name'),
      description: formData.get('description'),
      price: parseInt(formData.get('price')),
      category: formData.get('category'),
      /*   image: formData.get('image'), */
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

export async function getItems() {
  try {
    await dbConnect()
    const items = await Item.find()
    return items
  } catch (err: any) {
    return err
  }
}

export async function createMany(data) {
  try {
    await dbConnect()
    const newData = await Item.insertMany(data)
    console.log('Data insertada', newData)
  } catch (error) {
    console.log(error)
  }
}
