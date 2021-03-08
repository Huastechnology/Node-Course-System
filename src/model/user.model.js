const mongo = require('mongoose')
const Schema = mongo.Schema

const User = Schema({
  completeName: {
    type: String,
    require: true
  },
  phone: {
    type: Number,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  role: {
    type: String,
    require: true
  }
}, {
  timestamps: true
})

module.exports = mongo.model('user', User);