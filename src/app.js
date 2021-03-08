const express = require('express')
const app = express()
const bp = require ('body-parser')
const route = require('./routes/user.routes')

app.use(bp.urlencoded({extended:false}))
app.use(bp.json)

app.use('/v2', route)

module.exports = app