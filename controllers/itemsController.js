const User = require('../models/User')
const Item = require('../models/Items')
const asyncHandler = require('express-async-handler')

// @desc Get all times
// @route GET /items
// @acess Private
const getallItems = asyncHandler( async (req,res) => {
    const items = await Item.find().lean()
    if(!items?.length){
        return res.status(400).json({message: 'No items found'})
    }
    res.json(items)
})

// @desc Create new item
// @route POST /items
// @acess Private
const createNewItem = asyncHandler( async (req,res) => {
    const { item, type, price, stock, description } = req.body

    //Confirm Data
    if(!item || !type || !price || !stock){
        return res.status(400).json({message:'All fields are required'})
    }

    //Check for Duplicates
    const duplicate = await Item.findOne({item}).lean().exec()
    if(duplicate){
        return res.status(409).json({message:'Duplicate Item'})
    }

    //create and store new user
    const createItem = await Item.create({ item, type, price, stock, description })
    if (createItem){
        res.status(201).json({message:`New item ${item} created`})
    } else{
        res.status(400).json({message:'Invalid iser data received'})
    }
})

// @desc Update a user
// @route PATCH /users
// @acess Private
const updateItem = asyncHandler( async (req,res) => {
    //const {id,username} = req.body

})


// @desc Delete a user
// @route DELETE /users
// @acess Private
const deleteItem = asyncHandler( async (req,res) => {

})

module.exports = {
    getallItems,
    createNewItem,
    updateItem,
    deleteItem
}