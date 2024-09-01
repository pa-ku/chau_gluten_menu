import { NextResponse } from 'next/server'
import dbConnect from '@/libs/dbConnect'
import Item from './item.model'
import { itemType } from './item.model'
import { itemSchema } from './item.schema'

export async function GET() {
  try {
    await dbConnect()
    const items: itemType[] = await Item.find()
    return NextResponse.json(items)
  } catch (err: any) {
    return NextResponse.json(
      {
        message: `No se pudieron obtener los elementos ${err.message}`,
      },
      { status: 404 },
    )
  }
}

// Crear un item
export async function POST(request: Request) {
  try {
    await dbConnect()
    const data = await request.json()
    const dataValidation = itemSchema.safeParse(data)

    if (!dataValidation.success) {
      return NextResponse.json(dataValidation.error)
    }

    const newItem = new Item(data)
    const savedItem = await newItem.save()

    return NextResponse.json(savedItem, { status: 201 })
  } catch (error: any) {
    return NextResponse.json(error.message, { status: 400 })
  }
}


//Crear muchos

