const carDB = require('../models/carModel')
const orderDB = require('../models/orderModel')
const nodemailer = require('nodemailer');
const detailsDB = require('../models/detailModel')
const usersDB = require('../models/usersModel.js')

const getAllOrders = async (req, res) => {
  const orders = await orderDB.find();

  orders
  ? res.status(200).json(orders)
  : res.status(404).json({ "message": "There are not cars yet" })
}

const newPreOrder = async (req, res) =>{
    const order = new orderDB({
        idCar: req.body.idCar,
        idUser: req.body.idUser
    });
    const savedOrder = await order.save();
    sendMailOrder(req.body.idCar,req.body.idUser);
    res.json("Pre-Order saved and Sms Sent Successfuly");
}

const sendMailOrder = async (idCar , idUser) =>{
    const car = await carDB.findById(idCar);
    const user = await usersDB.findById(idUser);
    let mailTransporter = nodemailer.createTransport({
        service: 'outlook',
        auth: {
            user: 'namx-reservation@outlook.com',
            pass: "Eag.9i#Y$P&,9-H"
        }
    });
     
    let mailDetails = {
        from: 'namx-reservation@outlook.com',
        to: user.email,
        subject: 'Pre-Order Namx',
        html: `
            <p>Hello Sir ${user.user}<br><br>
                Thank u for Pre-Order a car from Us,
                The car will be available soon .
            </p><br>
            <h4>Pre-Order Details :</h4>
            <ul>
                <li><strong>Model Name : </strong>${car.name}</li>
                <li><strong>Price :</strong> ${car.name}</li>
            </ul><br>
            <p>Cordially,</p><br><br>
            <p><strong>NAMX HUV</strong></p>
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


module.exports = {
    getAllOrders,
    newPreOrder
}