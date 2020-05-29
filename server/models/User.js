const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    googleId: { 
        type: String, 
        unique: true 
    },
  profileImage: String
})

module.exports = mongoose.model('User', userSchema);