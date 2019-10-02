const mongoose = require("mongoose");

var archiveSchema = new mongoose.Schema({
    name: String,
    location: String,
    image: String
    });
 var Archive = mongoose.model('archive', archiveSchema);
 
 module.exports = Archive;