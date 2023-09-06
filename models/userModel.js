const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "name is required"],
    },
    email:{
        type: String,
        required: [true, "email is required and must be a unique email"],
        unique: true
    },
    password:{
        type: String,
        required: [true, "password is required"],
    },
});


const userModel = mongoose.model('users', userSchema);
module.exports = userModel;