const express = require('express')
const router = express.Router()
const itemController = require('../controllers/itemsController')

router.route('/')
    .get(itemController.getallItems) // completed
    .post(itemController.createNewItem) // completed
    .patch(itemController.updateItem) // todo
    .delete(itemController.deleteItem) //todo
module.exports = router