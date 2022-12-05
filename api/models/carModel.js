const mongoose = require('mongoose')

const carSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        details: {
            type: [Number],
        }
    },
    { timestapms: true }
)

module.exports = mongoose.model('Car', carSchema);