const userSchema = require('../model/user.model')
const encrypt = require('../utils/encrypt')
const matchPassword = require('../utils/matchPassword')

async function saveUser(req, res) {
  try{
    req.body.password = encrypt(req.body.password,10)
    let user = new userSchema()
    user.completeName = req.body.completeName
    user.phone = req.body.phone
    user.email = req.body.email
    user.password = req.body.password
    user.role = req.body.role

    await user.save((error, userAdded) => {
      if(error){
        res.status(500).send({msg: 'error'})
      }else{
        res.status(201).send({
          userAdded,
          "msg": 'The user was added succesfuly!',
          "code": 201
        })
      }
    })
  }catch(error){
    throw error
  }
}

async function logIn(req, res) {
  try {
    const params = req.body
    const matchPass = matchPassword(params.password)
  } catch(err) {

  }
}

module.exports = {
  saveUser,
  logIn
}