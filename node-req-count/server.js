var url = require('url');
var http = require('http');
var path = require('path');

var globalCounter = {};

var server = http.createServer(function(request, response) {
  var endpoint = url.parse(request.url, true).pathname;
  var property = endpoint.replace(/^\//, '');
  

  console.log(request.url)

  if (request.method === 'POST') {
    // YOUR CODE HERE
  } else if (request.method === 'GET') {

   
   // response.end(JSON.stringify(globalCounter))
   // response.end("test")
    // YOUR CODE HERE
  } else {
    response.statusCode = 404;
    response.end();
  }
});

// console.log("dfdsf")
// Do not edit this line
module.exports = server;
