let NationalParksModel = require("../models/nationalParksModel")


// exports.list =  function list(request, response) {
//         return response.json('it worked');
//     };

// exports.list =  function list(request, response) {
// NationalParksModel.find().exec().then((NationalParks)=>{
//     return response.json(NationalParks);
// })  
// }


exports.list =  function list(request, response) {
   NationalParksModel.find((e,u)=>{
       return response.json(u);
   });
}
exports.show = function show(request, response) {
   NationalParksModel.findById(request.params.id, (err,u)=>{
       return response.json(u);
   });
}
exports.create =  function create(request, response) {
   let newNationalParks = new NationalParksModel(request.body);
   newNationalParks.save(()=>{
       return response.json(newNationalParks);
   });
}