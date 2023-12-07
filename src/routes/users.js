const express = require('express');

const UserController = require('../controller/users')

const router = express.Router(); 

//CREATE - POST
router.post('/', UserController.createNewUser);

//READ - GET
router.get('/', UserController.getAllUsers);

//READ - GET
router.get('/:id', UserController.getUserById);

//UPDATE - PATCH
router.patch('/:id', UserController.updateUser);

//DELETE - DELETE
router.delete('/:id', UserController.deleteUser)


module.exports = router;