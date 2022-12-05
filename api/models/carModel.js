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
        }
    },
    { timestapms: true }
)

module.exports = mongoose.model('Car', carSchema);

