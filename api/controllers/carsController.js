const carDB = require('../models/carModel')
const detailsDB = require('../models/detailModel')

const getAllCars = async (req, res) => {
  const cars = await carDB.find();

  for(var i = 0 ; i < cars.length ; i++){
    var detailsModel = await getDetailsForCarModel(cars[i]._id);
    cars[i]["details"] = detailsModel;
  }

  cars
  ? res.status(200).json(cars)
  : res.status(404).json({ "message": "There are not cars yet" })
}

const getCar = async (req, res) => {
  const car = await carDB.findById(req.params.id);
  const details = await detailsDB.find({idCar : car._id});
  car["details"] = details;

  car
  ? (res.status(200).json(car))
  : res.status(404).json({ "message": `car ID ${req.params.id} not found` })
}

const createNewCar = async (req, res) =>{
  const car = new carDB({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description
});
const savedCar = await car.save();
var detailsLength = req.body.details.length;

  for(var i = 0 ; i < detailsLength; i++){
    var details = new detailsDB({
      detailName : req.body.details[i].detailName,
      detailValue : req.body.details[i].detailValue,
      idCar : savedCar._id
    });
    const detailSaved = await details.save();
  }
  res.json("Model car and details has been saved successfully");
}


const getDetailsForCarModel = async (id) =>{
  const details = await detailsDB.find({idCar : id});
  return details;
}

const addNewDetails = async (req, res)=>{
  const length = req.body.length;
  for(var i=0; i < length ; i++){
    const details = new detailsDB({
      detailName : req.body[i].detailName,
      detailValue : req.body[i].detailValue,
      idCar : req.params.id
  });
    var detailSaved = await details.save();
  }

  res.json("details has been saved successfully");
}

module.exports = {
 getAllCars,
 getCar,
 createNewCar,
 addNewDetails
}