
const { Router } = require('express')
const api = Router()

const apiStudent = require('./student.routes')
const apiUser = require('./user.routes')
const apiCourse = require('./course.route')

api.use(apiStudent)
api.use(apiUser)
api.use(apiCourse)

module.exports = api