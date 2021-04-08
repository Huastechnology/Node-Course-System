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

async function updateStudentInfo(req, res){
   let userId = req.params.userId
   let updateData = req.body
   try{
       let dataUpdated = await studentSchema.findOneAndUpdate({_id: userId}, updateData)
       if(!dataUpdated){
           res.status(404).send({msg:'student not found!',student: dataUpdated})
       }else{
           res.status(200).send({
               msg: 'student data updated successfully!',
               studentData: dataUpdated
           })
       }

   }catch(e){
       res.status(500).send({message: e.message})
   }
}

async function deleteStudent(req, res){
    try{
        let studentDeleted = await studentSchema.findOneAndDelete({_id: req.params.userId})
        if(!studentDeleted){
            res.status(404).send({
                message: 'Student not found'
            })
        }else {
            res.status(200).send({
                message: 'Student info deleted successfully'/* ,
                student: studentDeleted */
            })
        }
    }catch(error){
        console.log(error);
        res.status(500).send({message: error.message})
    }
}

module.exports = {
    saveStudent,
    getStudents,
    getStudentsById,
    updateStudentInfo,
    deleteStudent
}