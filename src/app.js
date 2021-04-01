const express = require('express')
const app = express()
const bp = require ('body-parser')

const route = require('./routes/user.routes')
const student_route = require('./routes/student.routes')

app.use(bp.urlencoded({extended:false}))
app.use(bp.json())

app.use('/v2', route)
app.use('/v2', student_route)

module.exports = app