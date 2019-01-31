const { Router } = require('express')

const route = Router()

route.get('/', (req, res) => {
  // TODO: Send current user
  res.send({
    "user": {
      "email": "jake@jake.jake",
      "token": "jwt.token.here",
      "username": "jake",
      "bio": "I work at statefarm",
      "image": null
    }
  })
})


module.exports = route