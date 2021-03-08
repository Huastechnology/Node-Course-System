const userSchema = require('../model/user.model')

async function saveUser(req, res) {
  let user = new userSchema()
  user.completeName = req.body.completeName
  user.phone = req.body.phone
  user.email = req.body.email
  user.password = req.body.password

  try{
    await user.save((error, userAdded) => {
      if(error){
        res.status(500).send({msg: 'error'})
      }else{
        res.status(201).send({
          userAdded,
          msg: 'The user was added succesfuly!',
          code: 201
        })
      }
    })
  }catch(error){
    throw error
  }
}

module.exports = {
  saveUser
}