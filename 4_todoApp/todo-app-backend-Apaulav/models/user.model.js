const mongoose = require('mongoose')

const userSchema = new mongoose.Schema ({
    firstname: String,
    lastname: String,
    email:/**{ type: */ String/**, required:true, unique:true} */,
    password: String
}, {timestamps:true})

const userModel = mongoose.model('User', userSchema)

module.exports = userModel