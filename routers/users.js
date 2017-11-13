const router  = require('express').Router()
const Users   = require('../controllers/users_crud')

//helper
const hashPassword = require('../helper/hashPassword')

//middleware
const verifyUser = require('../middlewares/verifyUser')

// routes => /api/....
router.post('/signup', hashPassword.hash, Users.postUser) 
router.post('/signin', hashPassword.reverse, Users.signin)

//admin only
router.get('/users/', verifyUser.isLogin, verifyUser.isAdmin, Users.getUsers)

//admin and auth user
router.get('/users/:id', verifyUser.isLogin, verifyUser.authUser, Users.getSpecificUser)

//admin only
router.post('/users', verifyUser.isLogin, verifyUser.isAdmin, hashPassword.hash, Users.postUser)

//admin only
router.delete('/users/:id', verifyUser.isLogin, verifyUser.isAdmin, Users.deleteUser)

//admin and auth user
router.put('/users/:id', verifyUser.isLogin, verifyUser.authUser, verifyUser.isAdminChange, hashPassword.hash, Users.updateUser)


module.exports = router;