/**
 * Micro file server
 */
'use strict'

//Dependencies
var express = require('express')

//TODO move to config
var projectDir = 'D:\\Work\\phaser-2-test\\'
var webDir = projectDir +  'web\\'
var	port = 93

var	app = express()
var	webServer = app.listen(port)

//--------------------------------Routes----------------------------------//

console.log(webDir)
//static files
app.use(express.static(webDir))

//console.log(__dirname)

console.log('Listening on port ' + port)