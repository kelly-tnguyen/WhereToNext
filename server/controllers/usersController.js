let UserModel = require("../models/usersModel")

exports.list =  function list(request, response) {
   UserModel.find((e,u)=>{
       return response.json(u);
   });
}
exports.show = function show(request, response) {
   UserModel.findById(request.params.id, (err,u)=>{
       return response.json(u);
   });
}
exports.create =  function create(request, response) {
   let newUser = new UserModel(request.body);
   newUser.save(()=>{
       return response.json(newUser);
   });
}