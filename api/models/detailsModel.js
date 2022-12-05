const mongoose = require('mongoose');

const detailSchema = mongoose.Schema(
        {name: {
            type: String,
            required: true,
        },
        admin: {
            type: mongoose.Schema.Types.ObjectId,
            reqired: true,
            ref: "Admin",
        }}
)

module.exports = mongoose.model('Detail', detailSchema);