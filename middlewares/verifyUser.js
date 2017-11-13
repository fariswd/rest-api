const jwt  = require('jsonwebtoken');
require('dotenv').config()

let isLogin = (req, res, next) => {
  jwt.verify(req.headers.token, process.env.SECRET_KEY, function(err, decoded) {
    //if err
    if (err) res.status(401).send(err)
    else {
      req.verifiedUser = decoded
      next()
    }
    
  });
}

let isAdmin = (req, res, next) => {
  // console.log(req.verifiedUser);
  if(req.verifiedUser.isAdmin){
    next()
  } else {
    res.status(401).send({msg: "not Authorized"})
  }
}

let authUser = (req, res, next) =>{
  if(req.params.id == req.verifiedUser.id || req.verifiedUser.isAdmin == true){
    next();
  } else {
    res.status(401).send({msg: "not Authorized"})
  }
  
}

module.exports = {
  isLogin,
  isAdmin,
  authUser
};