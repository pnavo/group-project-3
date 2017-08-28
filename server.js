var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var logger = require("morgan");
var Radius = require("./models/acs.js")
var path = require("path");


const PORT = process.env.PORT || 8080;
var app = express();

app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));

//var db = process.env.MONGODB_URI || "mongodb://localhost/med";
var db = "mongodb://localhost/med";

mongoose.connect(db, (error) => {

	if (error) {
		console.log(error);
	}
	else {
		console.log("mongoose connection succesful");
	}
});

app.get("/overall/male/open", (req, res) => {
	Radius.find({$and: [{sex: 0},{wndinf:1},{$or:[{othbleed: 1},{supinfec:1},{wndinfd:1},{dehis:1},{returnor:1},{readmission:1}]}]}, ((err, doc) => {
		if (err){
			console.log(err)
		} 
		else{
   			res.send(doc)
		}
	}))
})

app.get("/overall/female/open", (req, res) => {
	Radius.find({$and: [{sex: 1},{wndinf:1},{$or:[{othbleed: 1},{supinfec:1},{wndinfd:1},{dehis:1},{returnor:1},{readmission:1}]}]}, ((err, doc) => {
		if (err){
			console.log(err)
		} 
		else{
   			res.send(doc)
		}
	}))
})

app.get("/overall/male/closed", (req, res) => {
	Radius.find({$and: [{sex: 0},{wndinf:0},{$or:[{othbleed: 1},{supinfec:1},{wndinfd:1},{dehis:1},{returnor:1},{readmission:1}]}]}, ((err, doc) => {
		if (err){
			console.log(err)
		} 
		else{
   			res.send(doc)
		}
	}))
})

app.get("/overall/female/closed", (req, res) => {
	Radius.find({$and: [{sex: 1},{wndinf:0},{$or:[{othbleed: 1},{supinfec:1},{wndinfd:1},{dehis:1},{returnor:1},{readmission:1}]}]}, ((err, doc) => {
		if (err){
			console.log(err)
		} 
		else{
   			res.send(doc)
		}
	}))
})

app.get("/othbleed/male/open", (req, res) => {
	Radius.find({$and: [{sex: 0},{wndinf:1},{othbleed:1}]}, ((err,doc) => {
		if (err){
		
			console.log(err)
		} 
		else{
   			res.send(doc)
		}
	}))
})

app.get("/othbleed/female/open", (req, res) => {
	Radius.find({$and: [{sex: 1},{wndinf:1},{othbleed: 1}]}, ((err,doc) => {
		if (err){
			console.log(err)
		} 
		else{
   			res.send(doc)
		}
	}))
})

app.get("/othbleed/male/closed", (req, res) => {
	Radius.find({$and: [{sex: 0},{wndinf:0},{othbleed: 1}]}, ((err,doc) => {
		if (err){
			console.log(err)
		} 
		else{
   			res.send(doc)
		}
	}))
})

app.get("/othbleed/female/closed", (req, res) => {
	Radius.find({$and: [{sex: 1},{wndinf:0},{othbleed: 1}]}, ((err,doc) => {
		if (err){
			console.log(err)
		} 
		else{
   			res.send(doc)
		}
	}))
})

app.get("/supinfec/male/open", (req, res) => {
	Radius.find({$and: [{sex: 0},{wndinf:1},{supinfec:1}]}, ((err,doc) => {
		if (err){
			console.log(err)
		} 
		else{
   			res.send(doc)
		}
	}))
})

app.get("/supinfec/female/open", (req, res) => {
	Radius.find({$and: [{sex: 1},{wndinf:1},{supinfec:1}]}, ((err,doc) => {
		if (err){
			console.log(err)
		} 
		else{
   			res.send(doc)
		}
	}))
})

app.get("/supinfec/male/closed", (req, res) => {
	Radius.find({$and: [{sex: 0},{wndinf:0},{supinfec:1}]}, ((err,doc) => {
		if (err){
			console.log(err)
		} 
		else{
   			res.send(doc)
		}
	}))
})

app.get("/supinfec/female/closed", (req, res) => {
	Radius.find({$and: [{sex: 1},{wndinf:0},{supinfec:1}]}, ((err,doc) => {
		if (err){
			console.log(err)
		} 
		else{
   			res.send(doc)
		}
	}))
})

app.get("/wndinfd/male/open", (req, res) => {
	Radius.find({$and: [{sex: 0},{wndinf:1},{wndinfd:1}]}, ((err,doc) => {
		if (err){
			console.log(err)
		} 
		else{
   			res.send(doc)
		}
	}))
})

app.get("/wndinfd/female/open", (req, res) => {
	Radius.find({$and: [{sex: 1},{wndinf:1},{wndinfd:1}]}, ((err,doc) => {
		if (err){
			console.log(err)
		} 
		else{
   			res.send(doc)
		}
	}))
})

app.get("/wndinfd/male/closed", (req, res) => {
	Radius.find({$and: [{sex: 0},{wndinf:0},{wndinfd:1}]}, ((err,doc) => {
		if (err){
			console.log(err)
		} 
		else{
   			res.send(doc)
		}
	}))
})

app.get("/wndinfd/female/closed", (req, res) => {
	Radius.find({$and: [{sex: 1},{wndinf:0},{wndinfd:1}]}, ((err,doc) => {
		if (err){
			console.log(err)
		} 
		else{
   			res.send(doc)
		}
	}))
})

app.get("/dehis/male/open", (req, res) => {
	Radius.find({$and: [{sex: 0},{wndinf:1},{dehis:1}]}, ((err,doc) => {
		if (err){
			console.log(err)
		} 
		else{
   			res.send(doc)
		}
	}))
})

app.get("/dehis/female/open", (req, res) => {
	Radius.find({$and: [{sex: 1},{wndinf:1},{dehis:1}]}, ((err,doc) => {
		if (err){
			console.log(err)
		} 
		else{
   			res.send(doc)
		}
	}))
})

app.get("/dehis/male/closed", (req, res) => {
	Radius.find({$and: [{sex: 0},{wndinf:0},{dehis:1}]}, ((err,doc) => {
		if (err){
			console.log(err)
		} 
		else{
   			res.send(doc)
		}
	}))
})

app.get("/dehis/female/closed", (req, res) => {
	Radius.find({$and: [{sex: 1},{wndinf:0},{dehis:1}]}, ((err,doc) => {
		if (err){
			console.log(err)
		} 
		else{
   			res.send(doc)
		}
	}))
})

app.get("/returnor/male/open", (req, res) => {
	Radius.find({$and: [{sex: 0},{wndinf:1},{returnor:1}]}, ((err,doc) => {
		if (err){
			console.log(err)
		} 
		else{
   			res.send(doc)
		}
	}))
})

app.get("/returnor/female/open", (req, res) => {
	Radius.find({$and: [{sex: 1},{wndinf:1},{returnor:1}]}, ((err,doc) => {
		if (err){
			console.log(err)
		} 
		else{
   			res.send(doc)
		}
	}))
})

app.get("/returnor/male/closed", (req, res) => {
	Radius.find({$and: [{sex: 0},{wndinf:0},{returnor:1}]}, ((err,doc) => {
		if (err){
			console.log(err)
		} 
		else{
   			res.send(doc)
		}
	}))
})

app.get("/returnor/female/closed", (req, res) => {
	Radius.find({$and: [{sex: 1},{wndinf:0},{returnor:1}]}, ((err,doc) => {
		if (err){
			console.log(err)
		} 
		else{
   			res.send(doc)
		}
	}))
})

app.get("/readmission/male/open", (req, res) => {
	Radius.find({$and: [{sex: 0},{wndinf:1},{readmission:1}]}, ((err,doc) => {
		if (err){
			console.log(err)
		} 
		else{
   			res.send(doc)
		}
	}))
})

app.get("/readmission/female/open", (req, res) => {
	Radius.find({$and: [{sex: 1},{wndinf:1},{readmission:1}]}, ((err,doc) => {
		if (err){
			console.log(err)
		} 
		else{
   			res.send(doc)
		}
	}))
})

app.get("/readmission/male/closed", (req, res) => {
	Radius.find({$and: [{sex: 0},{wndinf:0},{readmission:1}]}, ((err,doc) => {
		if (err){
			console.log(err)
		} 
		else{
   			res.send(doc)
		}
	}))
})

app.get("/readmission/female/closed", (req, res) => {
	Radius.find({$and: [{sex: 1},{wndinf:0},{readmission:1}]}, ((err,doc) => {
		if (err){
			console.log(err)
		} 
		else{
   			res.send(doc)
		}
	}))
})

app.listen(PORT, () => {
  console.log("App listening on PORT: " + PORT);
});