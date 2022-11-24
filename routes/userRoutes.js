const express = require('express')
const router = express.Router()
const usersController = require('../controllers/usersControllers')

router.route('/')
    .get(usersController.getAllUsers) //completed
    .post(usersController.createNewUser) //completed
    .patch(usersController.updateUser) //todo 
    .delete(usersController.deleteUser) //todo


module.exports = router