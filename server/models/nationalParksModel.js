// const mongoose = require("mongoose");

// var nationalParksSchema = new mongoose.Schema({
//     parkName: String,
//     location: String,
//     images: String
//     });
//  var NationalParks = mongoose.model('NationalPark', nationalParksSchema);
 
//  module.exports = NationalParks

 const mongoose = require("mongoose");

var nationalParksSchema = new mongoose.Schema({
    body: String,
    });
 var NationalParks = mongoose.model('NationalParks', nationalParksSchema);
 
 module.exports = NationalParks