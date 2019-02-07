const jwt = require('jsonwebtoken')

const JWT_SECRET = '2h4vk24h5k2h34jvh3b4j13h4k13hvk2135'

async function createJwt(user) {
  const token = await jwt.sign(user, JWT_SECRET)
  return token
}

async function verifyJwt(token) {
  const user = jwt.verify(token, JWT_SECRET)
  return user
}

module.exports = {
  createJwt,
  verifyJwt
}