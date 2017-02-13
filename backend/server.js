var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var config = require('./config');
var port = config.port;
var session = require('express-session')
var massive = require('massive')

// INITALIZING APP AND RUNNING MIDDLEWARE AND EXPORTING APP
var app = module.exports = express();
app.use(bodyParser.json())
app.use(session({secret:config.secret,resave:false,saveUninitialized:true,cookie: {secure: false, httpOnly: false}}))

//CONTROLLERS  =  =  =  =  =  =  =  =  =
var artistController = require('./node_controllers/artistController');
var adminController = require('./node_controllers/adminController');
var managerController = require('./node_controllers/managerController');
var employeeController = require('./node_controllers/employeeController');

// connect to database  =  =  =  =  =  =  =  =  =
var conn = massive.connectSync({
  connectionString: config.connectString
});

app.set('db',conn);
var db = app.get('db')

// Authorization Middleware  =  =  =  =  =  =  =  =
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

// END POINTS  =  =  =  =  =  =  =  =  =  =  =


// Artists  =  =  =  =  =  =  =  =  =  =  =  =
app.get('/api/artists',artistController.getAllArtists)

// Admins  =  =  =  =  =  =  =  =  =  =  =  =
app.post('/api/admin', adminController.postMatchingAdmin)
app.post(`/api/admin/logout`, adminController.logoutAdmin)
app.get('/api/currentAdmin', checkAdmin , adminController.getCurrentAdmin) ;

// Managers  =  =  =  =  =  =  =  =  =  =  =  =
app.get('/api/managers', managerController.getAllManagers);

// Employees  =  =  =  =  =  =
app.get('/api/employees', employeeController.getAllEmployees)

//LISTENING ON PORT
app.listen(port,function(){
  console.log('listing on port', port, new Date().toString())
})
