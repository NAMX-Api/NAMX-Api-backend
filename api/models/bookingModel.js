const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema(
    {
        quantity: {
            type: Number,
            required: true,
        },
        customer: {
            type: mongoose.Schema.Types.ObjectId,
            reqired: true,
            ref: "Customer",
        },
        car: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Car",
        }
    },
    { timestapms: true }
)

module.exports = mongoose.model('Booking', bookingSchema);