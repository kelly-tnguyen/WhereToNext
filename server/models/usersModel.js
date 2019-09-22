const mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
    body: String,
    });
 var User = mongoose.model('User', userSchema);
 
 module.exports = User