const { Router } = require('express')
const api = Router()
const userController = require('../controller/user.controller')
const verifyEmptyFields = require('../middlewares/verifyEmptyFields')
const verifyDuplicatesEmails = require('../middlewares/verifyDuplicatesEmails')

api.post('/user', verifyEmptyFields, verifyDuplicatesEmails, userController.saveUser)
api.post('/logIn', userController.logIn)
api.get('/user', userController.getAllUsers)
api.get('/user/:matchUser',userController.getMatchUser)

module.exports = api;