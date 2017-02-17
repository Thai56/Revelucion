var app = require('./../server.js');

module.exports = {
  getAllEmployees:getAllEmployees,
  getEmployeeById:getEmployeeById
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

function getEmployeeById(req,res){
  var id = req.params.id;
  var db = app.get('db');
  db.getEmployeeById([id],function(err,response){
    if(!err){
      res.status(200).send(response)
    }
    else {
      res.status(422).send(err)
    }
  })
}
