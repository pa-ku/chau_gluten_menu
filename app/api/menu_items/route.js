import { NextResponse } from 'next/server'

export function GET() {
  return NextResponse.json('Mostrar todos los productos')
}

export function POST() {
  return NextResponse.json('Creando productos')
}
