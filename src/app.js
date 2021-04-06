const express = require('express')
const app = express()
const bp = require ('body-parser')
const cors = require('cors')
const apiSources= require('./routes')

app.use(bp.urlencoded({extended:false}))
app.use(bp.json())
app.use(cors())

app.use('/v2', apiSources)

module.exports = app