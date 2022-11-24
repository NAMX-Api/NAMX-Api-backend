"use strict";
const Users = require('../models/usersModel.js');
require('dotenv').config();


const adminLogin = async (req, res, next) => {
    res.json('Admin Panel');
}

module.exports = { adminLogin };