const router = require('express').Router()
const User = require('../models/User')
const CryptoJS = require("crypto-js")
const jwt = require('jsonwebtoken')

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

// LOGIN
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({email: req.body.email})
    !user && res.status(401).json('Wrong password or username')

    const bytes  = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
    const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

    originalPassword !== req.body.password && res.status(401).json('Wrong password or username')

    const accessToken = jwt.sign({userId: user._id, isAdmin: user.isAdmin}, process.env.SECRET_KEY, {expiresIn: '5d'})

    const { password, ...info} = user._doc

    return res.status(200).json({...info, accessToken})
  } catch (error) {
    return res.status(500).json(error)
  }
})

module.exports = router