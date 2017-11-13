const router  = require('express').Router()
const Users   = require('../controllers/users_crud')

//helper
const hashPassword = require('../helper/hashPassword')

// this => /api/users/....
router.get('/', Users.getUsers)

router.get('/:id', Users.getSpecificUser)

router.post('/', hashPassword.hash, Users.postUser)

router.delete('/:id', Users.deleteUser)

router.put('/:id', hashPassword.hash, Users.updateUser)


module.exports = router;