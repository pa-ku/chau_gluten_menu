import { NextResponse } from 'next/server'
import dbConnect from '@/libs/dbConnect'
import Item from '../item.model'
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect()
    const itemFound = await Item.findById(params.id)

    if (!itemFound) {
      return NextResponse.json(
        { message: 'El item no existe' },
        { status: 404 }
      )
    }

    return NextResponse.json(itemFound)
  } catch (error: any) {
    return NextResponse.json(
      { message: 'no encontrado', error },
      { status: 500 }
    )
  }
}

//Eliminar un item
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect()
    const itemFound = await Item.findByIdAndDelete(params.id)

    if (!itemFound) {
      return NextResponse.json(
        { message: 'No se encontro el item especificado' },
        { status: 404 }
      )
    }

    return NextResponse.json(
      { message: `Item eliminado correctamente` },
      { status: 200 }
    )
  } catch (error: any) {
    return NextResponse.json(
      { message: 'Error al eliminar el item', error: error.message },
      { status: 500 }
    )
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect()

    const newItemData = await request.json()
    const itemFound = await Item.findByIdAndUpdate(params.id, newItemData, {
      new: true,
    })

    if (!itemFound) {
      return NextResponse.json(
        { message: 'No se encontro el item especificado' },
        { status: 404 }
      )
    }

    return NextResponse.json(
      { message: `Item modificado correctamente` },
      { status: 200 }
    )
  } catch (error: any) {
    return NextResponse.json(
      { message: 'Error al modificar el item', error: error.message },
      { status: 500 }
    )
  }
}
