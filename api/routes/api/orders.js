const express = require('express');
const router = express.Router();
// const modelsController = require('../../controllers/modelsController.js');
const orderController = require('../../controllers/ordersController.js');

router.route('/')
    .get(orderController.getAllOrders)
    .post(orderController.newPreOrder)


module.exports = router;