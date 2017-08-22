var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var routes = require("./app/config/routes.js");
var logger = require("morgan");
var acs = require("./models/acs.js")
var path = require("path");
var axios = require("axios");



const PORT = process.env.PORT || 8080;
var app = express();

app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));

var db = process.env.MONGODB_URI || "mongodb://localhost/med";

mongoose.connect(db, (error) => {

	if (error) {
		console.log(error);
	}
	else {
		console.log("mongoose connection succesful");
	}
});