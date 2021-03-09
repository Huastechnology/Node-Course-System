const { Router } = require('express')
const AA = Router()
const userController = require('../controller/user.controller')
const verifyEmptyFields = require('../middlewares/verifyEmptyFields')
const verifyDuplicatesEmails = require('../middlewares/verifyDuplicatesEmails')

AA.post('/user', verifyEmptyFields, verifyDuplicatesEmails, userController.saveUser)

module.exports = AA;