const mongoose = require("mongoose");

var likeSchema = new mongoose.Schema({
    name: String,
    location: String,
    image: String
    });
 var Like = mongoose.model('like', likeSchema);
 
 module.exports = Like;