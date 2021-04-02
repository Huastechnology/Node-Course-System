const { Router } = require('express')
const api = Router()
const { saveStudent, getStudents, getStudentsById } = require('../controller/student.controller')
const { verifyDuplicatesEmails, verifyId, verifyAuth } = require('../middlewares')

api.post('/student', verifyAuth, verifyDuplicatesEmails, saveStudent)
api.get('/student/:matchStudent?', verifyAuth, getStudents)
api.get('/student/Id/:userId', verifyAuth, verifyId, getStudentsById)

module.exports = api