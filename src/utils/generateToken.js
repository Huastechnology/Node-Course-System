require('dotenv').config()
const jwt = require('jsonwebtoken')
const { SECRET }= process.env

function generateToken(data) {
    return jwt.sign({
        exp: Math.floor(Date.now()/1000)+(60+60),
        data
    },SECRET)
}
module.exports = generateToken