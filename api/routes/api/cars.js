const express = require('express');
const router = express.Router();
// const modelsController = require('../../controllers/modelsController.js');
const carsController = require('../../controllers/carsController.js');

router.route('/')
    .get(carsController.getAllCars)
    .post(carsController.createNewCar)
//     .put(modelsController.updateModel)
//     .delete(modelsController.deleteModel);

router.route('/:id')
    .get(carsController.getCar);


router.route('/newDetails/:id')
    .post(carsController.addNewDetails)

module.exports = router;