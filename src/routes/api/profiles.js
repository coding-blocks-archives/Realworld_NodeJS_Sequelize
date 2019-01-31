const { Router } = require('express')

const route = Router()

// Get a profile
route.get('/:username', (req, res) => {
  res.send({
    "profile": {
      "username": req.params.username,
      "bio": "I work at statefarm",
      "image": "https://static.productionready.io/images/smiley-cyrus.jpg",
      "following": false
    }
  })
})

module.exports = route