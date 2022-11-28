"use strict";
const Users = require('../models/usersModel.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();


const handleLogin = async (req, res, next) => {
    const { user, pwd } = req.body;
    if (!user || !pwd) return res.status(400).json({ 'message': 'Username and password are required.' });

    const foundUser = await Users.find({user : user});
    if (!foundUser) return res.sendStatus(402);//Unauthorized
    
    if(foundUser[0].role === "admin") return next();;

        // evaluate password 
        const match = await bcrypt.compare(pwd, foundUser[0].pwd);
        if (match) {
            // create JWTs
            const accessToken = jwt.sign(
                {"username":foundUser[0].user},
                process.env.ACCESS_TOKEN_SECRET,
                { expiresIn: '1m' }
            );
            const refreshToken = jwt.sign(
                {"username":foundUser[0].user},
                process.env.REFRESH_TOKEN_SECRET,
                { expiresIn: '1d' }
            );
            // Saving refreshToken with current user
            await Users.updateOne({ user: foundUser[0].user}, { refreshToken: refreshToken });
            res.cookie('jwt', refreshToken, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 });
            res.json({ accessToken });
        } else {
            res.sendStatus(401);
        } 
    
}

module.exports = { handleLogin };