const mongoose = require('mongoose');

const detailSchema = mongoose.Schema(
    {
        libelle: {
            type: String,
            required: true,
        },
        value: {
            type: String,
            required: true,
        },
        car: {
            type: mongoose.Schema.Types.ObjectId,
            reqired: true,
            ref: "Car",
        }
    },
    { timestapms: true }
)

module.exports = mongoose.model('Detail', detailSchema);