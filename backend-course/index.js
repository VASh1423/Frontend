import express from "express"
import mongoose from 'mongoose'
import router from './router.js'
import fileUpload from "express-fileupload"

const PORT = 5000
const DB_URL = `mongodb+srv://admin:admin@cluster0.b8jep.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

const app = express()

app.use(express.json())
app.use(fileUpload())

app.use('/api', router)

async function startApp(){
  try {
    await mongoose.connect(DB_URL)
    app.listen(PORT, () => {
      console.log(`Server has been started on ${PORT}`)
    })
  } catch (error) {
    console.log(e)
  }
}

startApp()