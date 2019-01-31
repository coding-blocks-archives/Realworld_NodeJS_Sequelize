const express = require('express')

const app = express()

// For POST requests
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Routes
app.use('/api', require('./routes/api'))

app.listen(7788, () => {
  console.log('Server started on http://localhost:7788/')
})