const { Router } = require('express')
const AA = Router()
const userController = require('../controller/user.controller')

AA.post('/user', userController.saveUser)

module.exports = AA;