const verifyAuth = (req, res, next) => {
  try {
    let token = req.headers.authorization
    if(!token){
      res.status(403).send({msg: 'The user has not been authenticated'})
    }else{
      next()
    }
  }catch(error){
    res.status(401).send({error: error.message})
  }
}

module.exports = verifyAuth
