import dbConnect from '@/libs/dbConnect'

export async function GET(request: Request) {
  await dbConnect()
  const body = await request.json()
}
