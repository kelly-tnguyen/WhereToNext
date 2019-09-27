const LikedModel = require('../models/likedModel')

exports.list =  function list(request, response) {
    LikedModel.find((e,u)=>{
        return response.json(u);
    });
 }
 exports.show = function show(request, response) {
    LikedModel.findById(request.params.id, (err,u)=>{
        return response.json(u);
    });
 }
 exports.create =  function create(request, response) {
    let newLiked = new LikedModel(request.body);
    newLiked.save(()=>{
        console.log('hi')
        return response.json(newLiked);
    });
 }