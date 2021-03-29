const userSchema = require('../model/user.model')
const jwt = require('jsonwebtoken')

const veridyAccess = (req, res, next) => {
  try{
    let token = req.headers.authorization
    let decode = jwt.decode(token, process.env.SECRET)
    const id = req.params.userId

    userSchema.findOne({email: decode.data.email}, (err, user) => {
      try{
        if(user.role === 'admin') {
          next()
        }if(user._id == id){
          next()
        }else{
          res.status(403).send({msg:'You can´t edit another account if it´s not yours'})
        }
      }catch(error){
        res.status(401).send({error: error.message})
      }
    })
  }catch(error){
    res.status(401).send({ error: error.message })
  }
}

module.exports = veridyAccess