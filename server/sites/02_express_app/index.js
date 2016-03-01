// var http = require('http');
var express = require('express');
var app = express();

app.set('view engine', 'ejs');

//function to create a response when the user requests root
app.get('/', function(req, res){
  //automatically looks in views
  res.render('index');
});

// app.get('/adele', function(req, res){
//   res.send("HELLO.<br>IT'S ME.");
// });

app.listen(8080, function(){
  console.log("listening on 8080");
});
