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

async function getStudents(req, res) {
    try {
        let matchStudent = req.params.matchStudent
        let student = await studentSchema.find({name:{$regex:new RegExp(matchStudent, 'i')}},{password:false})
        res.status(200).send({matchStudent: student})
    } catch (e) {
        res.status(500).send({message: e.message})
    }
}

async function getStudentsById(req, res) {
    try {
        let id = req.params.userId
        let student = await studentSchema.find({_id:id},{password:false})
        res.status(200).send({id: student})
    } catch (e) {
        res.status(500).send({message: e.message})
    }
}

module.exports = {
    saveStudent,
    getStudents,
    getStudentsById
}