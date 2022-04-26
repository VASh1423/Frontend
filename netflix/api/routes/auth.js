const router = require('express').Router()
const User = require('../models/User')
const CryptoJS = require("crypto-js");

// REGISTER
router.post('/register', async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString(),
  })
  try {
    const user = await newUser.save()
    return res.status(200).json(user)
  } catch (error) {
    return res.status(500).json(error)
  }
})

module.exports = router