"use strict";
const Users = require('../models/usersModel.js');

const handleLogout = async (req, res) => {
    // On client, also delete the accessToken

    const cookies = req.cookies;
    console.log(cookies)
    if (!cookies?.jwt) return res.json('No content');// No content
    const refreshToken = cookies.jwt;

    // Is refreshToken in db?
    const foundUser = await Users.find({refreshToken : refreshToken});
    if (!foundUser){
        res.clearCookie('jwt', {httpOnly: true , sameSite: 'None', secure : true})
        return res.sendStatus(204);
    }
    // Delete refreshToken in db
    await Users.updateOne({ user: foundUser[0].user}, { refreshToken: '' });
    res.clearCookie('jwt', {httpOnly:true , sameSite: 'None', secure : false});// secure : true - only servers on https
    res.sendStatus(204);
}

module.exports = { handleLogout };
