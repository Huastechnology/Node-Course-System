const userSchema = require('../model/user.model')

const verifyDuplicatesEmails = async(req, res, next) => {
  try {
    let duplicatesEmail = await userSchema.find({email:req.body.email})
    if(duplicatesEmail.length > 0) {
      res.status(400).send({ message:"Failed! this email is already  in use", status:400 })
      return
    }
    next()
  } catch(error) {
    next(error)
  }
}

module.exports = verifyDuplicatesEmails