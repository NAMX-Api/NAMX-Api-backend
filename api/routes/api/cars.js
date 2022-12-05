const express = require('express');
const router = express.Router();
const modelsController = require('../../controllers/modelsController');

router.route('/')
    .get(modelsController.getAllModels)
    .post(modelsController.createNewModel)
    .put(modelsController.updateModel)
    .delete(modelsController.deleteModel);

router.route('/:id')
    .get(modelsController.getEmployee);

module.exports = router;