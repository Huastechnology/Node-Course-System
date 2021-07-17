const express = require('express')
const app = express()
const cors = require('cors')
const apiSources= require('./routes')

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())

app.use('/v2', apiSources)

module.exports = app