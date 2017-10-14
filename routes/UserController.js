const express = require('express')
const router = express.Router()
const { UserModel } = require('../db/schema')

router.get('/', async (req, res) => {
  console.log('route hit')
  try {
    const users = await UserModel.find({})
    res.json(users)
  } catch (err) {
    res.send(err)
  }
})

router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findById(id)
    res.json(user)
  } catch (err) {
    res.send(err)
  }
})

module.exports = router