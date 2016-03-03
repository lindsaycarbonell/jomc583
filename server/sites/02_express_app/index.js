// var http = require('http');
var express = require('express');
var app = express();

//object array for testing ejs
var data = {
    lindsay: {
      name: "Lindsay",
      age: 20,
      food: "rice"
    },
    andy: {
      name: "Andy",
      age: 21,
      food: "COOOOOKIES"
    }
};

app.set('view engine', 'ejs');

//function to create a response when the user requests root
app.get('/', function(req, res){
  //automatically looks in views
  res.render('list', data);
});

app.get('/lindsay', function(req, res){
  //automatically looks in views
  res.render('index', data.lindsay);
});

app.get('/andy', function(req, res){
  //automatically looks in views
  res.render('index', data.andy);
});

app.get('/adele', function(req, res){
  res.send("HELLO.<br>IT'S ME.");
});

app.listen(8080, function(){
  console.log("listening on 8080");
});
