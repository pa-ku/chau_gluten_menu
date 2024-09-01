import z from 'zod'

export const itemSchema = z.object({
  name: z.string({ required_error: 'El nombre es requerido' }),
  description: z.string().optional(),
  price: z.number({ required_error: 'El precio es requerido' }),
  image: z.string().optional(),
  category: z.string(),
})
