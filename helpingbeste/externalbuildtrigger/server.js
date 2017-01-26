var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var routes = require("./routes/routes.js")(app);

// enable this for https
var secureServer = require('http').createServer(app);
secureServer.listen (3000);
console.log("listening on port 3000");

