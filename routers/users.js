const router  = require('express').Router()
const Users   = require('../controllers/users_crud')

// this => /users/....
router.get('/', Users.getUsers)

router.get('/:id', Users.getSpecificUser)

router.post('/', Users.postUser)

module.exports = router;