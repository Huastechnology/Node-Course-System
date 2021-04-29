const { Router } = require('express')
const api = Router()
const { saveStudent, getStudents, getStudentsById , updateStudentInfo, deleteStudent} = require('../controller/student.controller')
const { verifyId, verifyAuth } = require('../middlewares')

api.post('/student', verifyAuth, saveStudent)
api.get('/student/:matchStudent?', verifyAuth, getStudents)
api.get('/student/Id/:userId', verifyAuth, verifyId, getStudentsById)
api.put('/student/Id/:userId', verifyAuth, verifyId, updateStudentInfo )
api.delete('/student/:userId', verifyAuth, verifyId,deleteStudent)

module.exports = api