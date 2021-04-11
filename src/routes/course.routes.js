const { Router } = require('express')
const api = Router()
const { saveCourse } = require('../controller/course.controller')
const { verifyAuth } = require('../middlewares')

api.post('/course', verifyAuth, saveCourse)

module.exports = api