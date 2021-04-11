const courseSchema = require('../model/course.model')

async function saveCourse(req, res) {
    try {
        let courseBody = req.body
        let course = new courseSchema(courseBody)

        await course.save((error, courseAdded) => {
            if(error) {
                res.status(500).send({msg: 'Internal server error has ocurred'})
            } else {
                res.status(201).send({
                    msg: 'Course created successfully!',
                    code: 201
                })
            }
        })    
    } catch(e) {
        res.status(500).send({message: e.message})
    }
}

async function getCourses(req,res){
    try {
        let matchCourse = req.params.matchCourse
        let courses = await courseSchema.find({courseName:{$regex:new RegExp(matchCourse,'i')}})
        res.status(200).send({matchCourse: courses})
    } catch (e) {
        res.status(500).send({message: e.message})
    }
}

async function getCourseById(req,res){
    try {
        let id = req.params.courseId
        let course = await courseSchema.find({_id:id})
        res.status(200).send({item:course})
    } catch (e) {
        res.status(500).send({message: e.message})
    }
}

module.exports = {
    saveCourse,
    getCourses,
    getCourseById
}