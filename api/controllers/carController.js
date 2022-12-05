const carDB = require('../models/carModel')
const detailsDB = require('../models/detailModel')

const getAllCars = async (req, res) => {
 const cars = await carDB.find();

 cars
  ? res.status(200).json(cars)
  : res.status(404).json({ "message": "There are not cars yet" })
}

const getCar = async (req, res) => {
 const car = await carDB.findById(req.params.id);

 car
  ? (res.status(200).json(car))
  : res.status(404).json({ "message": `car ID ${req.params.id} not found` })
}

module.exports = {
 getAllCars,
 getCar
}