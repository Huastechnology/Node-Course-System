const express = require('express')
const app = express()
const bp = require ('body-parser')

const apiSources= require('./routes')

app.use(bp.urlencoded({extended:false}))
app.use(bp.json())

app.use('/v2', apiSources)

module.exports = app