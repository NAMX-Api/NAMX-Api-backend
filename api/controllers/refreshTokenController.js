"use strict";
const Users = require('../models/usersModel.js');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const handleRefreshToken = async (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(401);
    console.log(cookies.jwt);
    const refreshToken = cookies.jwt;

    const foundUser = await Users.find({refreshToken : refreshToken});
    if (!foundUser) return res.sendStatus(403); //Forbidden 
    // evaluate jwt 
    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (err,decoded) => {
            if(err || foundUser[0].user !== decoded.username) return res.sendStatus(403);
            const accessToken = jwt.sign(
                {'username' : decoded.username},
                process.env.REFRESH_TOKEN_SECRET,
                {expiresIn : '30s'}
            );
            res.json({accessToken})
        }
    );
        
}

module.exports = { handleRefreshToken };