const { Router } = require('express')

const route = Router()

route.use('/comments', require('./comments'))


module.exports = route