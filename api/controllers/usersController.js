const usersDB = require('../models/usersModel.js')

const getAllUsers = async (req, res) => {
    const users = await usersDB.find();

    users
    ? res.status(200).json(users)
    : res.status(404).json({ "message": "There are not users yet" })
}

const getUser = async (req, res) => {
    const user = await usersDB.findById(req.params.id);
    
    user 
    ? ( res.status(200).json(user) ) 
    : res.status(404).json( { "message": `user ID ${req.params.id} not found` } )
}


module.exports = {
    getAllUsers,
    getUser
}