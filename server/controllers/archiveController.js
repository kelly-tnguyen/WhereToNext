const ArchiveModel = require('../models/archiveModel')

exports.list =  function list(request, response) {
    ArchiveModel.find((e,u)=>{
        return response.json(u);
    });
 }
 exports.show = function show(request, response) {
    ArchiveModel.findById(request.params.id, (err,u)=>{
        return response.json(u);
    });
 }
 exports.create =  function create(request, response) {
    let newArchive = new ArchiveModel(request.body);
    newArchive.save(()=>{
        console.log('hi')
        return response.json(newArchive);
    });
 }