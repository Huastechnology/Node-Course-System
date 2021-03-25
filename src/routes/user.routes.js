const { Router } = require('express')
const api = Router()
const userController = require('../controller/user.controller')
const middlewares = require('../middlewares/index')

api.post('/user',middlewares.verifyRole, middlewares.verifyEmptyFields, middlewares.verifyDuplicatesEmails, userController.saveUser)
api.post('/logIn', userController.logIn)
api.get('/user', userController.getAllUsers)
api.get('/user/:matchUser',userController.getMatchUser)
api.delete('/user/:userId', userController.deleteUser)
api.put('/user/:userId?', middlewares.verifyId, userController.updateUserData)

module.exports = api;