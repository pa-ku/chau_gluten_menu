import { model, models, Schema } from 'mongoose'

type userTypes = {
  email: string
  password: string
  role: string
}

const userSchema = new Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, unique: true, required: true },
  role: { type: String },
})

export default models.User || model<userTypes>('User', userSchema)
