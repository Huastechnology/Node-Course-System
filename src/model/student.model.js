const mongoose = require('mongoose')
const { Schema, model } = mongoose

const Student = Schema({
    name: {
        type: String,
        required: [true, 'Name is required!!']
    },
    tutorName: {
        type: String,
        required: [true, 'Name of tutor is required!!']
    },
    tutorPhone: {
        type: Number,
        required: [true, 'Number phone is required!!']
    },
    email: {
        type: String,
        lowercase: true,
        unique: true,
        default: null
    },
    course: {
        type: Schema.ObjectId,
        ref: 'courses',
        //required: true
    }
})

module.exports = model('student', Student)