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
    } catch(error) {
        throw error
    }
}

module.exports = {
    saveCourse
}