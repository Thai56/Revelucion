// VARIABLES
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var config = require('./config');
var port = config.port;
var session = require('express-session')
// INITALIZING APP AND RUNNING MIDDLEWARE AND EXPORTING APP
var app = module.exports = express();
app.use(bodyParser.json())
app.use(session({secret:config.secret,resave:false,saveUninitialized:true,cookie: {secure: false, httpOnly: false}}))
//CONTROLLERS  =  =  =  =  =  =  =  =  =
var artistController = require('./node_controllers/artistController')
var adminController = require('./node_controllers/adminController')

// MIDDLEWARE  =  =  =  =  =  =  =  =
var checkAdmin = function(req,res,next){
  if(!!req.session.admin){
    console.log('THERE IS AN ADMIN')
    console.log(req.session.admin)
    next()
  }
  else{
    console.log('THERE IS NO LOGGED IN REQ.SESSION.ADMIN')
    res.status(401).send('THERE IS NO LOGGED IN ADMIN')
  }
}

// ARTISTS  =  =  =  =  =  =  =  =  =  =  =  =
app.get('/api/artists',artistController.getAllArtists)

// ADMINS  =  =  =  =  =  =  =  =  =  =  =  =
app.post('/api/admin', adminController.postMatchingAdmin)
app.get('/api/currentAdmin', checkAdmin ,function(req,res,next){
  res.status(200).send(req.session.admin)
} ) ;
app.post(`/api/admin/logout`, adminController.logoutAdmin)

//LISTENING ON PORT
app.listen(port,function(){
  console.log('listing on port', port, new Date().toString())
})
