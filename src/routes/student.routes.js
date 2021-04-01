const { Router } = require('express')
const api = Router()
const { saveStudent } = require('../controller/student.controller')
const { verifyDuplicatesEmails } = require('../middlewares')

api.post('/student', verifyDuplicatesEmails, saveStudent)

module.exports = api