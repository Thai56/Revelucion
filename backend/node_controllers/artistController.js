var artists = require('../data/artists')

module.exports = {
  getAllArtists:getAllArtists
}
function getAllArtists(req,res,next){
  res.status(200).send(artists)
}
