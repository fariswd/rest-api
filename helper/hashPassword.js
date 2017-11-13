//bcrypt
const bcrypt = require('bcrypt');
const User   = require('../models').User

let hash = (req, res, next) =>{
  // console.log(req.body);
  const saltRounds = 10;
  const myPlaintextPassword = req.body.password;
  
  bcrypt.hash(myPlaintextPassword, saltRounds)
  .then(function(hash) {
    req.body.password = hash
    next()
  }).catch(err =>{
    res.send({err: err})
  })
  
}

let reverse = (req, res, next) =>{
  User.findOne({where: {username: req.body.username}})
  .then(user=>{
    bcrypt.compare(req.body.password, user.password, function(err, result) {
      if(result){
        req.user = user
        next()
      } else {
        res.send({msg: "username or password wrong"})
      }
    });
    
  })
}


module.exports = {
  hash,
  reverse
};