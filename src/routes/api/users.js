const { Router } = require('express')
const { createUser }  = require('../../controllers/users')

const route = Router()

route.post('/', async (req, res) => {
  const createdUser = await createUser({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email
  })
  res.send(createdUser)
})


module.exports = route