const mongo = require('mongoose')
const Schema = mongo.Schema

const User = Schema({
  completeName: {
    type: String,
    required: [true, 'The fullname is required!']
  },
  phone: {
    type: String,
    required: [true, 'The phone number is required!']
  },
  email: {
    type: String,
    required: [true, 'The E-mail is required!']
  },
  password: {
    type: String,
    required: [true, 'The password is required!']
  },
  role: {
    type: String,
    default: 'teacher'
  }
}, {
  timestamps: true
})

module.exports = mongo.model('user', User);