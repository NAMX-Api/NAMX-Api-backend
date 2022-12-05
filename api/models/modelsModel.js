const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    modelName : {
        type : String,
        required: true
    }
})


module.exports = mongoose.model('Users',UserSchema)