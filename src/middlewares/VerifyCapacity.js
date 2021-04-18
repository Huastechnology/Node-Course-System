const courseSchema = require('../model/course.model')

const verifyCapacity = (req, res, next) => {
  try{
    courseSchema.findOne({ _id: req.body.courseId }, (err, course) => {
      try{
        if(course.capacity === 10){
          throw new Error ('Sorry this course is filled')
        }else{
          next()
        }
      }catch(err){
        next(err);
      }
    })
  }catch(err){
    next(err)
  }
}

module.exports = verifyCapacity;