const { Router } = require('express')
const api = Router()
const userController = require('../controller/user.controller')
const verifyEmptyFields = require('../middlewares/verifyEmptyFields')
const verifyDuplicatesEmails = require('../middlewares/verifyDuplicatesEmails')
const verifyRole = require('../middlewares/verifyRole')

api.post('/user', verifyRole, verifyEmptyFields, verifyDuplicatesEmails, userController.saveUser)
api.post('/logIn', userController.logIn)
api.get('/user', userController.getAllUsers)
api.get('/user/:matchUser',userController.getMatchUser)

module.exports = api;