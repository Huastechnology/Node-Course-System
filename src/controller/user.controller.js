const userSchema = require('../model/user.model')
const encrypt = require('../utils/encrypt')
const {matchPassword} = require('../utils/matchPassword')
const generateToken = require('../utils/generateToken')

async function saveUser(req, res) {
  try{
    req.body.password = encrypt(req.body.password,10)
    let user = new userSchema()
    user.completeName = req.body.completeName
    user.phone = req.body.phone
    user.email = req.body.email
    user.password = req.body.password

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
    let message, status
    const params = req.body
    const user = await userSchema.findOne({email: params.email})
    if(!user) {
      status = 404
      message = 'User not found'
      res.status(status).send(message)
    } else {
      const matchPass = await matchPassword(params.password, user.password)
      if(!matchPass) {
        status = 401
        message = 'Error en las credenciales'
        res.status(status).send(message)
      } 
      
      const token = generateToken(params)
      message = {message:'access success',token:token}
      status = 200 
      res.status(status).send({message, rol: user.role, email: user.email, name: user.completeName, id: user._id})
    }

  } catch(err) {
    res.status(500).send({message: err.message})
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

async function deleteUser (req, res) {
  try {
    let accountDeleted = await userSchema.findOneAndDelete({_id:req.params.userId})  
    if(!accountDeleted){
      res.status(404).json({
        msg:'The account doesnt exist'
      })
    }else{
      res.status(200).send({
        msg:'Account deleted successfully',
        user:accountDeleted
      })
    }      
  }catch (error){
    console.log(error);
    res.status(500).send({msg: error.msg})
  } 
}

async function updateUserData(req, res) {
  let userId = req.params.userId
  let updateData = req.body
  
  try {
    let dataUpdated = await userSchema.findOneAndUpdate({ _id: userId}, updateData )

    if(!dataUpdated){
      res.status(404).send({msg:'user not found', user:dataUpdated})
    }else{
      res.status(200).send({
        msg:'User Data Updated Successfully',
        userData: dataUpdated
      })
    }

  } catch (e) {
    console.log(e)
    res.status(500).send({msg:e.msg})
  }
}

module.exports = {
  saveUser,
  getAllUsers,
  getMatchUser,
  logIn,
  deleteUser,
  updateUserData
}