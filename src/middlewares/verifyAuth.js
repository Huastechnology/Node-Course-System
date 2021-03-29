const verifyAuth = (req, res, next) => {
  try {
    let token = req.headers.authorization
    if(!token){
      throw new Error('The user has not been authenticated')
    }else{
      next()
    }
  }catch(error){
    res.status(401).send({error: error.message})
  }
}

module.exports = verifyAuth
