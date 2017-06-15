var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require("path");
var db;
var logUpdater = function(req,res,next)
{
  if(req.url=='/')
    console.log(req.url);
  next();
}
var options = {
  index: "index.html"
};

app.use(logUpdater);



app.use(express.static(path.join(__dirname, "public"), options));
app.use(express.static(path.join(__dirname, "js")));
app.use(express.static(path.join(__dirname, "css")));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));





app.listen(3000,function(){
  console.log('Exprement')
})
