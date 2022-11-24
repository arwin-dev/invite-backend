const User = require('../models/User')
const Item = require('../models/Items')
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')
const { use } = require('../routes/root')

// @desc Get all users
// @route GET /users
// @acess Private
const getAllUsers = asyncHandler( async (req,res) => {
    const users = await User.find().select('-password').lean()
    if(!users?.length){
        return res.status(400).json({message: 'No users found'})
    }
    res.json(users)
})

// @desc Create new user
// @route POST /users
// @acess Private
const createNewUser = asyncHandler( async (req,res) => {
    const { username, password } = req.body

    //Confirm Data
    if(!username || !password){
        return res.status(400).json({message:'All fields are required'})

    }

    //Check for Duplicates
    const duplicate = await User.findOne({username}).lean().exec()
    if(duplicate){
        return res.status(409).json({message:'Duplicate Username'})
    }

    //Hash password

    const hashedPwd = await bcrypt.hash(password,10) // salt rounds

    const userObject = {username,"password": hashedPwd}

    //create and store new user
    const user = await User.create(userObject)
    if (user){
        res.status(201).json({message:`New user ${username} created`})
    } else{
        res.status(400).json({message:'Invalid iser data received'})
    }
})

// @desc Update a user
// @route PATCH /users
// @acess Private
const updateUser = asyncHandler( async (req,res) => {
    const {id,username} = req.body

})


// @desc Delete a user
// @route DELETE /users
// @acess Private
const deleteUser = asyncHandler( async (req,res) => {

})

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser
}