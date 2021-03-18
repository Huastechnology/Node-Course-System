const verifyId = (req, res, next) => {
  try {
    const id = req.params.userId

    if(!id || id.length < 24) {
      throw new Error('ID inválido')
    }
    next()
  } catch(err) {
    // res.status(400).send({err: err.message})
    next(err.message)
  }
}

module.exports = verifyId