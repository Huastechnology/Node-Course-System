const { Router } = require('express')
const api = Router()
const { saveCourse, getCourses, getCourseById } = require('../controller/course.controller')
const { verifyAuth, verifyId } = require('../middlewares')

api.post('/course', verifyAuth, saveCourse)
api.get('/course/:matchCourse',verifyAuth,getCourses)
api.get('/course/id/:courseId',verifyAuth,verifyId,getCourseById)

module.exports = api