const { Router } = require('express')
const api = Router()
const { saveCourse, getCourses, getCourseById, updateCourseInfo } = require('../controller/course.controller')
const { verifyAuth, verifyId } = require('../middlewares')

api.post('/course', verifyAuth, saveCourse)
api.get('/course/:matchCourse?',verifyAuth,getCourses)
api.get('/course/Id/:userId',verifyAuth,verifyId,getCourseById)
api.put('/course/Id/:userId?', verifyAuth, verifyId, updateCourseInfo)

module.exports = api