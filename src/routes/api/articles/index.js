const { Router } = require('express')

const route = Router()

route.use('/comments', require('./comments'))

// Get all articles
route.get('/', (req, res) => {
  res.send({
    "articles":[{
      "slug": "how-to-train-your-dragon",
      "title": "How to train your dragon",
      "description": "Ever wonder how?",
      "body": "It takes a Jacobian",
      "tagList": ["dragons", "training"],
      "createdAt": "2016-02-18T03:22:56.637Z",
      "updatedAt": "2016-02-18T03:48:35.824Z",
      "favorited": false,
      "favoritesCount": 0,
      "author": {
        "username": "jake",
        "bio": "I work at statefarm",
        "image": "https://i.stack.imgur.com/xHWG8.jpg",
        "following": false
      }
    }, {
      "slug": "how-to-train-your-dragon-2",
      "title": "How to train your dragon 2",
      "description": "So toothless",
      "body": "It a dragon",
      "tagList": ["dragons", "training"],
      "createdAt": "2016-02-18T03:22:56.637Z",
      "updatedAt": "2016-02-18T03:48:35.824Z",
      "favorited": false,
      "favoritesCount": 0,
      "author": {
        "username": "jake",
        "bio": "I work at statefarm",
        "image": "https://i.stack.imgur.com/xHWG8.jpg",
        "following": false
      }
    }],
    "articlesCount": 2
  })
})

// Get single article
route.get('/:slug', (req, res) => {
  res.send({
    "article": {
      "slug": req.params.slug,
      "title": "How to train your dragon",
      "description": "Ever wonder how?",
      "body": "It takes a Jacobian",
      "tagList": ["dragons", "training"],
      "createdAt": "2016-02-18T03:22:56.637Z",
      "updatedAt": "2016-02-18T03:48:35.824Z",
      "favorited": false,
      "favoritesCount": 0,
      "author": {
        "username": "jake",
        "bio": "I work at statefarm",
        "image": "https://i.stack.imgur.com/xHWG8.jpg",
        "following": false
      }
    }
  })
})

// Get comments on an article
route.get('/:slug/comments', (req, res) => {
  res.send({
    "comments": [{
      "id": 1,
      "createdAt": "2016-02-18T03:22:56.637Z",
      "updatedAt": "2016-02-18T03:22:56.637Z",
      "body": "It takes a Jacobian",
      "author": {
        "username": "jake",
        "bio": "I work at statefarm",
        "image": "https://i.stack.imgur.com/xHWG8.jpg",
        "following": false
      }
    }, {
      "id": 2,
      "createdAt": "2016-03-18T03:22:56.637Z",
      "updatedAt": "2016-03-18T03:22:56.637Z",
      "body": "It makes a Jacobian",
      "author": {
        "username": "mary",
        "bio": "I work at farmstate",
        "image": "https://i.stack.imgur.com/xHWG8.jpg",
        "following": false
      }
    }]
  })
})

module.exports = route