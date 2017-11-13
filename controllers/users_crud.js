//require models
const User = require('../models').User

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
    res.send({body: req.body})
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
  getUsers,
  getSpecificUser,
  postUser,
  updateUser,
  deleteUser
};