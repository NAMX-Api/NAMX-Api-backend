const mongoose = require('mongoose');

const carSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        admin: {
            type: mongoose.Schema.Types.ObjectId,
            reqired: true,
            ref: "Admin",
        }
    },
    { timestapms: true }
)

module.exports = mongoose.model('Car', carSchema);