const { Router } = require('express')
const api = Router()
const userController = require('../controller/user.controller')
const verifyEmptyFields = require('../middlewares/verifyEmptyFields')
const verifyDuplicatesEmails = require('../middlewares/verifyDuplicatesEmails')
const verifyRole = require('../middlewares/verifyRole')
const verifyId = require('../middlewares/verifyId')

api.post('/user', verifyRole, verifyEmptyFields, verifyDuplicatesEmails, userController.saveUser)
api.post('/logIn', userController.logIn)
api.get('/user', userController.getAllUsers)
api.get('/user/:matchUser',userController.getMatchUser)
api.delete('/user/:userId', userController.deleteUser)
api.put('/user/:userId?', verifyId, userController.updateUserData)

module.exports = api;