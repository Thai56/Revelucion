var app = require('./../server.js');

module.exports = {
  getAllArtists:getAllArtists,
  getArtistById:getArtistById
}
function getAllArtists(req,res,next){
  var db = app.get('db');
  db.getAllArtists(function(err,response){
    if(!err){
      res.status(200).send(response);
    } else {
      res.status(422).send(err);
    }
  });
}

function getArtistById(req,res){
  var db = app.get('db');
  var id = req.params.id;
  db.getArtistById([id],function(err,response){
    if(!err){
      res.status(200).send(response)
    } else {
      res.status(422).send(err)
    }
  })
}
