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

    // we write in the head of response what the conetent text is so the requester (client) knows what to expect
    
//    console.log("this is in server:", body)
    
    // res.writeHead(200, {'Content-Type':'text/html'}); 
    
    // // we need to end the respsonse ALWAYS
    // res.end("this is our text: " + body);

}).listen(8080);