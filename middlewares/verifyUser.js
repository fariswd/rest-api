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
  if(req.verifiedUser.isAdmin){
    next()
  } else {
    res.status(401).send({msg: "not Authorized"})
  }
}

let authUser = (req, res, next) => {
  if(req.params.id == req.verifiedUser.id || req.verifiedUser.isAdmin == true){
    next();
  } else {
    res.status(401).send({msg: "not Authorized"})
  }
  
}

let isAdminChange = (req, res, next) => {
  if(req.body.isAdmin == 'false'){
    console.log('masuk sini');
    next()
  } else if (req.body.isAdmin && req.verifiedUser.isAdmin){
    next()
  } else {
    res.status(401).send({msg: "not Authorized change admin"})
  }
}

module.exports = {
  isLogin,
  isAdmin,
  authUser,
  isAdminChange
};