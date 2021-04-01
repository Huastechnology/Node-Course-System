const studentSchema = require('../model/student.model')

async function saveStudent(req, res) {
    try {
        let studentBody = req.body
        let student = new studentSchema(studentBody)
    
        await student.save((error, studentAdded) => {
            if(error) {
                res.status(500).send({msg: 'error'})
            } else {
                res.status(201).send({
                    msg: 'Student created successfully!',
                    code: 201
                })
            }
        })
    } catch(error) {
        throw error
    }
}

module.exports = {
    saveStudent
}