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
        let id = req.params.userId
        let course = await courseSchema.find({_id:id})
        res.status(200).send({item:course})
    } catch (e) {
        res.status(500).send({message: e.message})
    }
}

async function updateCourseInfo(req, res) {
    try {
        let course_id = req.params.userId
        let new_data = req.body

        let data_updated = await courseSchema.findOneAndUpdate({_id: course_id}, new_data)

        if(!data_updated) {
            throw new Error('Error updating course data')
        } else {
            res.status(200).send({
                msg: 'Course data updated successfully!',
                courseData: new_data
            })
        }

    } catch(err) {
        res.status(500).send({message: err.message})
    }


}

module.exports = {
    saveCourse,
    getCourses,
    getCourseById,
    updateCourseInfo
}