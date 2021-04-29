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
        type: Schema.Types.ObjectId,
        ref: "courses",
        required: [true, 'Course id required!'],
        autopopulate: true
    }
})

Student.plugin(require("mongoose-autopopulate"))
module.exports = model('student', Student)