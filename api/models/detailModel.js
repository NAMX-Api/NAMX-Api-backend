const mongoose = require('mongoose');

const detailSchema = mongoose.Schema(
    {
        detail: {
            type: String,
            required: true,
        },
        detailValue: {
            type: String,
            required: true,
        },
        car: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Car",
        }
    },
    { timestapms: true }
)

module.exports = mongoose.model('Detail', detailSchema);