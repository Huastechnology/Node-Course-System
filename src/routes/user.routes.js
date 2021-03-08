const { Router } = require('express')
const api = Router()
const userController = require('../controller/user.controller')

api.post('/user', userController.saveUser)
api.get('/user', userController.getAllUsers)
api.get('/user/:matchUser',userController.getMatchUser)

module.exports = api;