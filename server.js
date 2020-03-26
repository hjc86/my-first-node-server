var http = require("http");
var url =require("url");
const { parse } = require('querystring');

http.createServer(function(req, res) {

    let body = '';
    req.on('data', chunk => {
        body += chunk.toString(); // convert Buffer to string
    });
    req.on('end', () => {
        
        res.writeHead(200, {'Content-Type':'text/html'}); 
        
        bodyObject = parse(body);
        
        
        reversedBody =  bodyObject.string1.split('').reverse().join('');
      
        res.end("this is our text: " + reversedBody); 
    });
    
}).listen(8080);