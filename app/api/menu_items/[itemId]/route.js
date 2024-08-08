import { NextResponse } from 'next/server'

export function GET() {
  return NextResponse.json('Mostrar un producto solo')
}

export function DELETE() {
  return NextResponse.json('Producto eliminado')
}

export function PUT() {
  return NextResponse.json('Producto actualizado')
}
