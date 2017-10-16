/**
 * Micro file server
 */
'use strict'

//Dependencies
var express = require('express');
var path = require('path');

var webDir = path.join(__dirname, 'web');
var	port = 8080;
var	app = express();
var	webServer = app.listen(port);
//--------------------------------Routes----------------------------------//

console.log(webDir);
//static files
app.use(express.static(webDir));

console.log('Listening on port ' + port);