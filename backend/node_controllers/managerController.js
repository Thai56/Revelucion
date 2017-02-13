var app = require('./../server');

module.exports = {
  getAllManagers:getAllManagers
}

function getAllManagers(req,res){
  var db = app.get('db');
  db.getAllManagers(function(err,response){
    if(!err){
      res.status(200).send(response);
    } else {
      res.status(422).send(err);
    }
  })
}

function loginManager(req,res){
  
}
