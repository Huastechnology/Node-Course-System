const jwt = require('jsonwebtoken')
const userSchema = require('../model/user.model')

const verifyRole = (req, res, next) => {
  try {
    let token = req.headers.authorization
    if(!token) throw new Error("No token provided!")
    let payload = jwt.decode(token, process.env.SECRET)

    userSchema.findOne({email: payload.data.email}, (err, teacher) => {
      try {
        if(err) {
          throw new Error("Teacher not found!")
        } else if(teacher.role === 'admin') {
          next()
        } else {
          throw new Error("Access denied!")
        }
      } catch(error) {
        res.status(401).send({ error: error.message })
      }
    })
  } catch(error) {
    res.status(401).send({ error: error.message })
  }
}
module.exports = verifyRole