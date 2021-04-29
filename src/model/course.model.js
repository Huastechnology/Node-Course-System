const mongoose = require('mongoose')
const { Schema, model } = mongoose

const Course = Schema({
    courseName: {
        type: String,
        required: [true, 'Course name required!']
    },
    teacher: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: [true, 'Teacher id required!'],
        autopopulate: true
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

Course.plugin(require("mongoose-autopopulate"))
module.exports = model('courses', Course)