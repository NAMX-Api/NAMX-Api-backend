const mongoose = require('mongoose');

const orderSchema = mongoose.Schema(
    {
        idCar: {
            type: String,
            required: true,
        },
        idUser: {
            type: String,
            required: true,
        }
    },
    { timestapms: true }
)

module.exports = mongoose.model('Order', orderSchema);