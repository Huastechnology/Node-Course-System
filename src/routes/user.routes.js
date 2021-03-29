const { Router } = require('express')
const api = Router()
const userController = require('../controller/user.controller')
const middlewares = require('../middlewares')

api.post('/user',middlewares.verifyRole, middlewares.verifyEmptyFields, middlewares.verifyDuplicatesEmails, userController.saveUser)
api.post('/logIn', userController.logIn)
api.get('/user', middlewares.verifyAuth, userController.getAllUsers)
api.get('/user/:matchUser', middlewares.verifyAuth ,userController.getMatchUser)
api.delete('/user/:userId',middlewares.verifyRole ,userController.deleteUser)
api.put('/user/:userId?', middlewares.verifyAuth ,middlewares.verifyId, middlewares.verifyUserAccess, middlewares.verifyDuplicatesEmails ,userController.updateUserData)

module.exports = api;