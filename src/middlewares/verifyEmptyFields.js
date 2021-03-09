const verifyEmptyFields = async(req, res, next) => {
  try {
    const { completeName, phone, email, password } = req.body
    if(!completeName || !phone || !email || !password) {
      res.status(400).send({
        message: "Failed some fields are empty!",
        status: 400
      })
      return
    }
    next()
  } catch(err) {
    next(err)
  }
}

module.exports = verifyEmptyFields