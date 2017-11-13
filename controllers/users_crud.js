//require models
const User = require('../models').User
const jwt  = require('jsonwebtoken');
require('dotenv').config()


let signin = (req, res) => {
    // console.log(req.body.user);
    let obj = {
      id: req.user.id,
      username: req.user.username,
      isAdmin: req.user.isAdmin
    }
    jwt.sign(obj, process.env.SECRET_KEY, function(err, token) {
      res.send({
        msg: "login successfuly",
        token: token
      })
    })
  
}

let getUsers = (req, res) => {
  User.findAll()
  .then(users=>{
    res.send(users)
  }).catch(err=>{
    res.send(err)
  })
}

let getSpecificUser = (req, res) => {
  User.findOne({where: {id:req.params.id}})
  .then(user=>{
    if(user){
      res.send(user)
    } else {
      res.send({error: "nothing to show"})
    }
  }).catch(err=>{
    res.send({err: err})
  })
}

let postUser = (req, res) => {
  //create record database
  User.create(req.body)
  .then(()=>{
    res.send({msg: "user successfuly created"})
  }).catch(err=>{
    res.send({err: err})
  })
}

let updateUser = (req, res) => {
  User.update(req.body, {where: {id: req.params.id}})
  .then(()=>{
    res.send({msg: "user successfuly updated"})
  }).catch(err=>{
    res.send({err: err})
  })
}

let deleteUser = (req, res) =>{
  // res.send(req.params.id)
  User.destroy({where: {id: req.params.id}})
  .then(()=>{
    res.send({msg: "user successfuly deleted"})
  }).catch(err=>{
    res.send({err: err})
  })
}

module.exports = {
  signin,
  getUsers,
  getSpecificUser,
  postUser,
  updateUser,
  deleteUser
};