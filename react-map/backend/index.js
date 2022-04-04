const express = require('express')
const mongoose = require('mongoose')
const app = express()
const dotenv = require('dotenv')
const pinRoute = require('./routes/pins')
const userRoute = require('./routes/users')

dotenv.config()

app.use(express.json())

mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log('mongoDB')
}).catch(e => {
  console.log(e)
})

app.use('/api/pins', pinRoute)
app.use('/api/users', userRoute)

app.listen(8800, () => {
  console.log('server is running')
})