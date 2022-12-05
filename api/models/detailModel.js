const mongoose = require('mongoose');

const detailSchema = mongoose.Schema(
    {
        detailName: {
            type: String,
            required: true,
        },
        detailValue: {
            type: String,
            required: true,
        },
        idCar : {
            type : String,
            required: true
        }
    },
    { timestapms: true }
)

module.exports = mongoose.model('Detail', detailSchema);