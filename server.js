'use strict';

const express = require('express');
const cors = require('cors')

const network = require('./ips.js')


// Constants
const PORT = 8082;
const HOST = '0.0.0.0';
const ips = network.getIps();


// App
const app = express();
app.use(cors());

// ENDPOINTS
app.get('/', async (req, res) => {
  
  var message = "";
  message += "*** BACKEND-INTERNAL:<br />"
  message += ips + "<br />"
  message += "<br />"
  
  res.send(message);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

