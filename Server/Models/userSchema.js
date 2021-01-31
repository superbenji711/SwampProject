const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        firstname: {type: String, required: true},
        lastname: {type: String, required: true}
    },
    password: { type: String, required: true},
    email: { type: String, required: true},
    username: {type: String, required: true},
    Calendar:[{
        date: {type: Date},
        //more items
    }]
})

module.exports = User = mongoose.model("User", userSchema);