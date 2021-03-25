const { Router } = require('express')
const api = Router()
const userController = require('../controller/user.controller')
const middlewares = require('../middlewares/index')

api.post('/user',middlewares.verifyRole, middlewares.verifyEmptyFields, middlewares.verifyDuplicatesEmails, userController.saveUser)
api.post('/logIn', userController.logIn)
api.get('/user', middlewares.verifyAuth, userController.getAllUsers)
api.get('/user/:matchUser', middlewares.verifyAuth ,userController.getMatchUser)
api.delete('/user/:userId', userController.deleteUser)
api.put('/user/:userId?', middlewares.verifyAuth ,middlewares.verifyId, userController.updateUserData)

module.exports = api;