const userSchema = require('../model/user.model')

async function saveUser(req, res) {
  let user = new userSchema()
  user.completeName = req.body.completeName
  user.phone = req.body.phone
  user.email = req.body.email
  user.password = req.body.password
  user.role = req.body.role

  try{
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

async function getAllUsers(req,res){
    try {
      const users = await userSchema.find()
      if(!users){
        res.status(200).send({message:'users not found'})
      }
      res.status(200).send({msg:users})
    } catch (e) {
      res.status(500).send({message: e.message})
    }
}

async function getMatchUser(req,res){
   try {
     let matchUser = req.params.matchUser
     let user = await userSchema.find({completeName:{$regex:new RegExp(matchUser, 'i')}},{password:false})
     res.status(200).send({matchuser: user})
   } catch (e) {
     res.status(500).send({message: e.message})
   }
}

module.exports = {
  saveUser,
  getAllUsers,
  getMatchUser
}