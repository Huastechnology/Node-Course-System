const mongoose = require('mongoose')
const { Schema, model } = mongoose

const Course = Schema({
    courseName: {
        type: String,
        required: [true, 'Course name required!']
    },
    teacher: {
        type: String,
        required: [true, 'Teacher name required!']
    },
    students: {
        type: Array,
        default: null
    },
    description: {
        type: String,
        required: [true, 'Description required!']
    },
    capacity: {
        type: Number,
        default: 10
    },
    schedule: {
        type: Array,
        required: [true, 'Schedule required!']
    }
})

module.exports = model('courses', Course)