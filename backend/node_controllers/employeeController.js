var app = require('./../server.js');

module.exports = {
  getAllEmployees:getAllEmployees
}

function getAllEmployees(req,res){
  var db = app.get('db');
  db.getAllEmployees(function(err,response){
    if(!err){
      res.status(200).send(response)
    } else {
      res.status(422).send(err)
    }
  });
}
