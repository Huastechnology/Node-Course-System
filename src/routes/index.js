
const { Router } = require('express')
const api = Router()

const apiStudent = require('./student.routes')
const apiUser = require('./user.routes')

api.use(apiStudent)
api.use(apiUser)

module.exports = api