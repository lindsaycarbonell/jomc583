var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
res.render('rest');
});

app.listen(3000, function(){
  console.log("listening on 3000");
});
