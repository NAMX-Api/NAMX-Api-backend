const mongoose = require('mongoose');

const customerSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            lowercase: true,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        }
    },
    { timestapms: true }
)

module.exports = mongoose.model('Customer', customerSchema);