const {Scheme, model} = require('mongoose')

const UserScheme = new Scheme({
  email: {type: String, unique: true, required: true},
  password: {type: String,required: true},
  isActivated: {type: Boolean, required: false},
  activationLink: {type: String},
})

model.exports = model('User', UserScheme)