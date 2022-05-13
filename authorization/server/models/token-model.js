const {Scheme, model} = require('mongoose')

const TokenScheme = new Scheme({
  user: {type: Scheme.Types.ObjectId, ref: 'user'},
  refreshToken: {type: String, required: true},
})

model.exports = model('Token', TokenScheme)