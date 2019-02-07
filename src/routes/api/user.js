const { Router } = require('express')
const { userAuthViaToken } = require('../../middlewares/auth')

const route = Router()

route.get('/', userAuthViaToken, (req, res) => {
  if (req.user) {
    res.send(req.user)
  }
})


module.exports = route