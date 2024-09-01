export async function getAllItems() {
  try {
    const res = await fetch('/api/items')
    if (!res.ok) {
      throw new Error('Error en la peticion')
    }
    const data = await res.json()

    return data
  } catch (error) {
    console.log(error)
  }
}
