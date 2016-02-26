var http = require('http');

var myself = {
  name: "Lindsay",
  age: 20
};

http.createServer( function(request, response){

  response.writeHead(200);
  response.write("I am " + myself.name + myself.age + ".");
  response.end();

}).listen(8080, function(){
  console.log('listening on port 8080');
});
