import mongoose from 'mongoose'

export default function connectMongoDb() {
  try {
    mongoose.connect(process.env.NODE_ENV)
    console.log('conectado a mongo db')
  } catch (err) {
    console.log(err)
  }
}
