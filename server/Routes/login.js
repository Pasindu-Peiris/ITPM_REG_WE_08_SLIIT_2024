const router = require('express').Router()
const user = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

router.route('/log').post(async (req, res, next) => {
  const { username, password } = req.body
  try {
    const validUser = await user.findOne({ username })
    if (!validUser)
      return res.status(400).json({ error: 'User does not exist' })
    const validPassword = bcrypt.compareSync(password, validUser.password)
    if (!validPassword)
      return res.status(400).json({ error: 'Password incorrect' })
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET)
    const { password:pass, ...rest } = validUser._doc;
    
    res.cookie('access_token', token, { httpOnly: true })
    res.status(200).json(validUser)
  } catch (error) {
    next(error)
  }
})

module.exports = router
