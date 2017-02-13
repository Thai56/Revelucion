var app = require('./../server.js');

module.exports = {
  getAllArtists:getAllArtists
}
function getAllArtists(req,res,next){
  db.getAllArtists(function(err,response){
    if(!err){
      res.status(200).send(response);
    } else {
      res.status(422).send(err);
    }
  });
}
