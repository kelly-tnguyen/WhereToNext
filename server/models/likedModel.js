const mongoose = require("mongoose");

var likeSchema = new mongoose.Schema({
    name: String,
    location: String
    });
 var Like = mongoose.model('like', likeSchema);
 
 module.exports = Like;