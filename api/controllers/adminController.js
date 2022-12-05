"use strict";
const { eventNames } = require('../models/usersModel.js');
const Users = require('../models/usersModel.js');
const nodemailer = require('nodemailer');
require('dotenv').config();


const adminLogin = async (req, res, next) => {
    const Admin = await Users.findOne({admin : "admin"});
    const Token = generateToken();
    sendToken(Admin.email,Admin.user,Token);
    res.json('Check Email to get Link Access');
}

module.exports = { adminLogin };

function generateToken(){
    var result           = [];
    var characters       = '0123456789qwertyuiopasdfghjklzxcvbnm';
    var charactersLength = characters.length;
    for ( var i = 0; i < 30 ; i++ ) {
      result.push(characters.charAt(Math.floor(Math.random() * 
        charactersLength)));
   }
   return result.join('');
}

function sendToken(email,name,token){
    let mailTransporter = nodemailer.createTransport({
        service: 'outlook',
        auth: {
            user: 'namx-reservation@outlook.com',
            pass: process.env.PASS_SECRET
        }
    });
     
    let mailDetails = {
        from: 'namx-reservation@outlook.com',
        to: email,
        subject: 'Admin Token',
        html: `<h4>Hello sir ${name},</h4>
        <p>To access the administration page : <strong><a href="http://localhost:3001/access/${token}">Click Here</a></strong><p>
        <p style="color:red">Warning : You can use it just one time</p> .
        `
    };
     
    mailTransporter.sendMail(mailDetails, function(err, data) {
        if(err) {
            console.log('Error Occurs',err);
        } else {
            console.log('Email sent successfully');
        }
    });    
}