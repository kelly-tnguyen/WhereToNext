// const mongoose = require("mongoose");

// var nationalParksSchema = new mongoose.Schema({
//     parkName: String,
//     location: String,
//     images: String
//     });
//  var NationalParks = mongoose.model('NationalPark', nationalParksSchema);
 
//  module.exports = NationalParks

const mongoose = require("mongoose");

var parkSchema = new mongoose.Schema({
    body: String,
    });
 var Park = mongoose.model('park', parkSchema);
 
 module.exports = Park;