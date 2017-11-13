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

let postUser = (res, req) => {
  User.create(req.body)
  .then(()=>{
    res.send({message: "data successful inserted"})
  }).catch(err=>{
    res.send(err)
  })
}


module.exports = {
  getUsers,
  getSpecificUser,
  postUser
};