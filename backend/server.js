const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config.js');
const port = config.port;

//Initialize, Export, and Configure the app
const app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../public/'));
app.use(cors());


// SPIN UP THE DRIVES!!
app.listen(port, () => {
  console.log('Listening on port', port, (new Date()).toTimeString());
});
